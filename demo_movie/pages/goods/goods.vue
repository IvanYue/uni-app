<template>
	<view v-if="goodData.info.retailPrice>0">
		<!-- 视频播放 start-->
		<view class="player">
			<video :src="video.playUrl" :poster="video.img" class="movie" controls></video>
		</view>
		<!-- 视频播放end -->

		<!-- 商品基本信息 start---->
		<view class="movie-info">
			<image :src="goodData.info.picUrl" mode="aspectFill" class="cover"></video></image>
			<view class="movie-desc">
				<view class="title">
					{{goodData.info.name}}
				</view>
				<view class="basic-info">
					{{goodData.info.brief}}
				</view>
				<block v-if="goodData.info.retailPrice>0">
					<view class="basic-retailPrice">
						{{goodData.info.retailPrice}}/{{goodData.info.unit}}
						<view class="basic-sortOrder">
							已售{{goodData.info.sortOrder}}件
						</view>
					</view>
				</block>
				
				<view class="basic-time">
					上架时间：{{goodData.info.addTime}}
				</view>
				<view class="score-block">
					<view class="big-score">
						<view class="score-words">综合评分：</view>
						<view class="movie-score">
							{{4.6}}
						</view>
					</view>
					<view class="score-stars">
						<block v-if="goodData.info.retailPrice > 0">
						<trailerStars innerScore="5.1" showNum="0" :price="goodData.info.retailPrice"></trailerStars>
						</block>
						<view class="prise-counts">
							{{goodData.info.retailPrice}} 人点赞
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 商品基本信息 end -->
		
		<view v-for="item in goodData.info.gallery" >
			<image :src="item" mode="scaleToFill"></image>
		</view>
		<view v-for="item in goodData.issue" class="">
			<view class="question">
				{{item.question}}
			</view>
			<view class="answer">
				{{item.answer}}
			</view>
		</view>
	</view>
</template>

<script>
	// 1.引入
	import trailerStars from "../../components/trailerStars.vue"

	export default {
		data() {
			return {
				goodsId: '',
				video: {
					playUrl: "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=219449&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035",
					img: "http://img.kaiyanapp.com/f13b77cb05bb24de957fb7b22af0ef9c.jpeg?imageMogr2/quality/60/format/jpg"
				},
				goodData: {}
			}
		},
		components: {
			// 2.注册
			trailerStars,
		},
		methods: {

		},
		onLoad(params) {
			var _this = this;
			_this.goodsId = params.goodsId;
			console.log(_this.goodsId)
			uni.showLoading({
				title: '加载中...'
			})
			uni.showNavigationBarLoading()
			uni.request({
				url: this.serverUrl + '/goods/detail?id=' + _this.goodsId,
				methods: 'GET',
				success: (response) => {
					console.log(response.data)
					this.goodData = response.data.data
				},
				complete: (reponse) => {
					uni.hideLoading()
					uni.hideNavigationBarLoading()
				}
			})
		}
	}
</script>

<style>
	@import url("goods.css");
</style>
