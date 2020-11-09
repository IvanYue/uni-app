<template name="trailerStars">
	<view class="move-score-wapper">
		<!-- <image src="../static/icos/star-yellow.png" class="star-ico"></image>
		<image src="../static/icos/star-yellow.png" class="star-ico"></image>
		<image src="../static/icos/star-yellow.png" class="star-ico"></image>
		<image src="../static/icos/star-yellow.png" class="star-ico"></image>
		<image src="../static/icos/star-gray.png" class="star-ico"></image>
		<view class="movie-score">
			9.0
		</view> -->

		<image src="../static/icos/star-yellow.png" class="star-ico" v-for="yello in yelloScore">
		</image>
		<image v-for="yello in grayScore" src="../static/icos/star-gray.png" class="star-ico"></image>
		<view class="movie-score" v-if="showNum==1">
			{{parseFloat(price).toFixed(2)}}
		</view>

	</view>
</template>

<script>
	export default {
		name: "trailerStars",
		data() {
			return {
				yelloScore: 0,
				grayScore: 5,
			};
		},
		props: {
			innerScore: 0, //定义外部出入的分数
			showNum: 0, //是否需要显示具体分数 1：显示，0不显示,
			price:0.00
		},
		// 组件声明周期，组件创建完成后被调用
		created() {
			console.log(this.innerScore);
			var tempScore = 0;
			if (this.innerScore != null && this.innerScore != undefined && this.innerScore != "") {
				tempScore = this.innerScore;
			}
			var yelloScore = parseInt(tempScore / 2)
			var grayScore = 5 - yelloScore;

			this.yelloScore = yelloScore;
			this.grayScore = grayScore;
		}
	}
</script>

<style>
	.star-ico {
		width: 20upx;
		height: 20upx;
		margin-top: 6upx;
	}

	.movie-score {
		font-size: 12px;
		color: #808080;
		margin-left: 8upx;
	}
</style>
