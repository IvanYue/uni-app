<template name='GoodsItem'>
	<view class="page-block guess-u-like">
		<image mode="aspectFit" :src="goodsitem.picUrl" class="good-img"></image>
		<view class="movie-desc">
			<view class="movie-title">
				{{goodsitem.name}}
			</view>
			<trailerStars innerScore="8.2" showNum="1" :price="goodsitem.counterPrice"></trailerStars>
			<view class="movie-info">
				{{goodsitem.brief}}
			</view>
			<view class="movie-info">
				现价:{{goodsitem.retailPrice}}
			</view>
			<view class=""></view>
		</view>

		<view class="movie-oper" @click="praiseMe">
			<image src="../static/icos/praise.png" class="praise-ico"></image>
			<view class="praise-me">点赞</view>
			<view :animation="animationData" class=" praise-me animation-opacity">+1</view>
		</view>
	</view>
</template>

<script>
	import trailerStars from "./trailerStars.vue"
	export default {
		name: "GoodsItem",
		data() {
			return {
				animationData: {}
			};
		},
		methods: {
			// 实现点赞动画
			praiseMe() {
				// step 构建成一组动画
				this.animation.translateY(-60).opacity(1).step({
					duration: 400
				});
				//导出动画数据到view组件，实现组件的动画效果
				this.animationData = this.animation.export();

				setTimeout(function() {
					this.animation.translateY(0).opacity(0).step({
						duration: 0
					});
					this.animationData = this.animation.export();
				}.bind(this), 500)
			}
		},
		created() {
			// 在组件创建的时候创建的是临时动画
			this.animation = uni.createAnimation();
		},
		beforeDestroy() {
			//组件卸载的时候清楚页面动画
			this.animationData = {}
		},
		props: {
			goodsitem: {}
		},
		components: {
			trailerStars
		}
	}
</script>

<style>
	.good-img {
		height: 240upx;
		width: 180upx;
		background-color: #F7F7F7;
		border-radius: 13upx;
	}

	.guess-u-like {
		display: flex;
		flex-direction: row;
		margin: 10upx;
	}

	.movie-desc {
		width: 340upx;
		display: flex;
		flex-direction: column;
		padding: 10upx;
	}

	.movie-title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.movie-info {
		font-size: 13;
		color: #808080;
	}

	.movie-oper {
		width: 140upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		border-left: dashed 2px;
		border-left-color: #C8C7CC;
	}

	.praise-ico {
		width: 40upx;
		height: 40upx;
	}

	.praise-me {
		font-size: 14;
		color: #f3ab2a;
	}

	.animation-opacity {
		font-weight: bold;
		opacity: 0;
	}
</style>
