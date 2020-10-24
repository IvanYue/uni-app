<template>
	<view class="page">
		<!-- 轮播图 start -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular=true class="carousel">
			<!-- <swiper-item>
				<image src="../../static/carousel/batmanvssuperman.png" class="carousel"></image>
			</swiper-item>
			<swiper-item>
				<image src="../../static/carousel/spiderman.png" class="carousel"></image>
			</swiper-item> -->

			<swiper-item v-for="carouse in carouselList">
				<image :src="carouse.url" class="carousel"></image>
			</swiper-item>
		</swiper>
		<!-- 轮播图 end  -->

		<!-- 热门商品 start-->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icos/hot.png" class="hot-ico"></image>
				<view class="hot-title">热门商品</view>
			</view>
		</view>
		<!-- <scroll-view scroll-x="true" class="page-block hot" >
			<view class="signle-poster" v-for="goods in hotGoodsList">
				
				<hotGoods :goods="goods" ></hotGoods>
				
				<!-- <view class="poster-wapper">
					<image :src="goods.picUrl" class="poster"></image>
					<view class="movie-name">
						{{goods.name}}
					</view>
					<view class="move-score-wapper">
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-yellow.png" class="star-ico"></image>
						<image src="../../static/icos/star-gray.png" class="star-ico"></image>
						<view class="movie-score">
							9.0
						</view>
					</view>
				</view> -->
		<!-- </view> -->

		<!-- </scroll-view> -->
		<!-- 热门商品 end -->

		<!-- 3.使用自定义标签 -->
		<hotGoodsView :hotGoodsList='hotGoodsList'></hotGoodsView>

		<!-- 热门视频 start-->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icos/interest.png" class="hot-ico"></image>
				<view class="hot-title">热门视频</view>
			</view>
		</view>

		<view class="hot-movies page-block">
			<video class="hot-movies-single" v-for="video in videoList" :src="video.playUrl" :poster="video.img"></video>
		</view>
		<!-- 商品列表 start-->
		<view class="page-block super-hot">
			<view class="hot-title-wapper">
				<image src="../../static/icos/guess-u-like.png" class="hot-ico"></image>
				<view class="hot-title">商品列表</view>
			</view>
		</view>
		<view class="page-block">
			<view v-for="(item,index) in goodsList" :key="index" class="guess-u-like">
				<GoodsItem :goodsitem = "item" ></GoodsItem>
			</view>
		</view>
	</view>
</template>

<script>
	// import common from '../../common/common.js'
	//1. 导入自定义组件
	import helloComp from "../../components/helloComp.vue";
	import hotGoods from "../../components/hotGoods.vue";
	import hotGoodsView from "../../components/hotGoodsView.vue"
	import GoodsItem from "../../components/GoodsItem.vue"
	
	export default {
		// 2，注册
		components: {
			helloComp,
			hotGoods,
			hotGoodsView,
			GoodsItem,
		},
		data() {
			return {
				carouselList: [],
				hotGoodsList: [],
				videoList: [{
						playUrl: "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=219449&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035",
						img: "http://img.kaiyanapp.com/f13b77cb05bb24de957fb7b22af0ef9c.jpeg?imageMogr2/quality/60/format/jpg"
					},
					{
						playUrl: "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=219448&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035",
						img: "http://img.kaiyanapp.com/c68c1136e82f9ef97d9594dc58f50e62.jpeg?imageMogr2/quality/60/format/jpg"
					},
					{
						playUrl: "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=219435&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035",
						img: "http://img.kaiyanapp.com/85bbcf28710c889c6a0c3569084ed6fb.jpeg?imageMogr2/quality/60/format/jpg"
					},
					{
						playUrl:"http://baobab.kaiyanapp.com/api/v1/playUrl?vid=219433&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035",
						img: "http://img.kaiyanapp.com/1e1483f344b01e7f6657d3937cedc795.jpeg?imageMogr2/quality/60/format/jpg"
					}
				],
				goodsList:[]
			}
		},
		onPullDownRefresh() {
			this.refresh();
		},
		onLoad() {
			// var me = this;
			// var serverUrl = common.serverUrl + '/home/index';

			// // 通过挂载到main.js 中的服务器地址，作为全局变量
			// var serverUrl = this.serverUrl + '/home/index';
			// // 首页数据
			// uni.request({
			// 	url: serverUrl,
			// 	method: "GET",
			// 	// success:function(){
			// 	// 	// 没有使用 箭头函数 使用 function 代码块 的话，需要在外面先定义 this。作用域问题会出现问题
			// 	// 	console.log(res.data)
			// 	// 	// 获取真实状态之前，务必判断状态是否为200
			// 	// 	if (res.data.errno == 0) {
			// 	// 		var carouselList = res.data.data.banner
			// 	// 		me.carouselList = carouselList;
			// 	// 		console.log(me.carouselList)
			// 	// 	}
			// 	// }
			// 	success: (res) => {
			// 		console.log(res.data)
			// 		// 获取真实状态之前，务必判断状态是否为200
			// 		if (res.data.errno == 0) {
			// 			console.log(this.carouselList)

			// 			this.carouselList = res.data.data.banner;
			// 			this.hotGoodsList = res.data.data.hotGoodsList
			// 			this.goodsList = res.data.data.newGoodsList
			// 		}
			// 	}
			// })
			this.refresh();
		},
		methods: {
			refresh(){
				// 通过挂载到main.js 中的服务器地址，作为全局变量
				var serverUrl = this.serverUrl + '/home/index';
				uni.showLoading({
					mask:true
				})
				uni.showNavigationBarLoading()
				// 首页数据
				uni.request({
					url: serverUrl,
					method: "GET",
					success: (res) => {
						console.log(res.data)
						// 获取真实状态之前，务必判断状态是否为200
						if (res.data.errno == 0) {
							console.log(this.carouselList)
				
							this.carouselList = res.data.data.banner;
							this.hotGoodsList = res.data.data.hotGoodsList
							this.goodsList = res.data.data.newGoodsList
						}
					},
					complete: () => {
						uni.hideNavigationBarLoading()
						uni.stopPullDownRefresh()
						uni.hideLoading()
					}
				})
				
			}
		},

	}
</script>

<style>
	@import url("index.css");
</style>
