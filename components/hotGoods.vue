<template name="hotGoods">
	<view class="">
		<view class="poster-wapper">
			<image :src="goods.picUrl" class="poster"></image>
			<view class="movie-name">
				{{goods.name}}
			</view>
			<!-- <view class="move-score-wapper">
				<image src="../static/icos/star-yellow.png" class="star-ico"></image>
				<image src="../static/icos/star-yellow.png" class="star-ico"></image>
				<image src="../static/icos/star-yellow.png" class="star-ico"></image>
				<image src="../static/icos/star-yellow.png" class="star-ico"></image>
				<image src="../static/icos/star-gray.png" class="star-ico"></image>
				<view class="movie-score">
					9.0
				</view>
			</view> -->
			<trailerStars innerScore="5.1" showNum="1" :price="goods.retailPrice"></trailerStars>
		</view>
	</view>
</template>

<script>
	
	import trailerStars from "./trailerStars.vue"
	
	export default {
		name:"hotGoods",
		components:{
			trailerStars
		},
		data() {
			return {
			};
		},props:{
			goods:{
				String:Map
			}
		}
	}
</script>

<style>
	.poster-wapper{
		display: flex;
		flex-direction: column;
	}
	
	.poster{
		width: 200upx;
		height: 270upx;
	}
	.movie-name{
		width: 200upx;
		margin-top:10upx;
		font-size: 14px;
		font-weight: bold;
		/* 超出则省略 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.move-score-wapper{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
</style>
