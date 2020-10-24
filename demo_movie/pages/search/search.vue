<template>
	<view class="page">
		<view class="search-block">
			<view class="search-ico-wapper">
				<image src="../../static/icos/search.png" class="search-ico"></image>
			</view>
			
			<input placeholder="搜索预告" maxlength="10" class="search-text"  focus/>
		</view>
		<view class="movie-list page-block">
			
		<view class="movie-wapper ">
			<image src="../../static/poster/civilwar.jpg" class="poster"></image>
		</view>	
		
		
		
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
			uni.showLoading({
				mask:true
			})
			uni.showNavigationBarLoading();
			uni.request({
				url:this.serverUrl + '/goods/list'
			})
		}
	}
</script>

<style>
 @import url("search.css");
</style>
