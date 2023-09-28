<template lang="">
	<div class="category-item">
		<div class="category-img">
			<img :src="img" :alt="name">
		</div>
		<div class="category-name">
			<span>{{ name }}</span>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	name: {
		type: String,
		required: true
	},
	img: {
		type: String,
		required: false
	}
})
</script>
<style lang="scss" scoped>
	.category-item{
		background-color: $primary;
		padding: 6px 12px;
		box-shadow: 0px 2px 8px 0px #0000008C;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
		transition: all .3s ease-in-out;
		// max-width: 54px;
		width: 100%;
		flex-shrink: 0;

		&.is-active{
			background-color: $purple;
			
			span{
				color: white;
			}
		}
	}

	.category-name{
		span{
			font-weight: 700;
			font-size: 12px;
			line-height: 18px;
			color: $white-ghost;
			font-variant: all-small-caps;
		}
	}
</style>