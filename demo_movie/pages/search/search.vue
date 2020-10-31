<template>
	<view class="page">
		<view class="search-block">
			<view class="search-ico-wapper">
				<image src="../../static/icos/search.png" class="search-ico"></image>
			</view>

			<input placeholder="搜索预告" maxlength="10" class="search-text" confirm-type="search" @confirm="serachMe" />
		</view>
		<view class="movie-list page-block">
			<view v-for="item123 in reslutList" class="movie-wapper ">
				<image 
				:src="item123.picUrl" 
				:data-dataId="item123.id" 
				@click="showGoodsDetail"
				class="poster"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				reslutList: [],
				keyWords: '', //搜索关键字
				page: 1, //当前第几页
				totalPage: 1, //总页数
			}
		},
		methods: {
			getGoodsList() {
				var _this = this;
				uni.showLoading({
					mask: true,
					title: '请稍后'
				})
				uni.showNavigationBarLoading();
				uni.request({
					url: _this.serverUrl + '/goods/list',
					method: 'GET',
					success: (request) => {
						if (request.data.errno == 0) {
							var list1 = _this.reslutList;
							var results = request.data.data.list;
							var reslut_list = list1.concat(results);
							_this.reslutList = reslut_list;
							console.log(_this.reslutList)
						}
					},
					complete: () => {
						uni.hideLoading();
						uni.hideNavigationBarLoading();
						uni.stopPullDownRefresh();
					}
				})
			},
			serachMe(e) {
				var _this = this
				//获取搜索的内容
				var value = e.detail.value;
				_this.keyWords = value;
				_this.reslutList = [];
				_this.getGoodsList();
			},
			showGoodsDetail(e){
				var goodsId = e.currentTarget.dataset.dataId;
				uni.navigateTo({
					url:'../goods/goods?goodsId='+goodsId
				})
			}
		},
		onPullDownRefresh(){
			var _this = this
			_this.getGoodsList();
		},
		onReachBottom(){
			var _this = this
			this.getGoodsList();
		},
		onLoad() {
			var _this = this
			_this.getGoodsList();
		}
	}
</script>

<style>
	@import url("search.css");
</style>
