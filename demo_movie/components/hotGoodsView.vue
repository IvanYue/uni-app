<template name="hotGoodsView">
	
		<scroll-view scroll-x="true" class="page-block hot" >
			<view class="signle-poster" v-for="(goods, gindex) in hotGoodsList">
				<hotGoods :goods="goods" ></hotGoods>
			</view>
		</scroll-view>
	
</template>

<script>
	import hotGoods from "./hotGoods.vue"
	export default {
		components:{
			hotGoods
		},
		props:{
			hotGoodsList:Array
		},
		name:"hotGoodsView"
	}
</script>

<style>
	.hot{
		width: 100%;
		// 文字不换行
		white-space: nowrap;
	}
	.signle-poster{
		display: inline-block;
		margin-left: 20upx;
	}
	
</style>
