<script>
import card from "../components/part/card.vue";
import { store } from "../data/store";
export default {
	props: {
		type: String,
		hasSearched: Boolean,
	},

	components: {
		card,
	},

	data() {
		return {
			store,
		};
	},

	computed: {
		title() {
			return this.type === "movie" ? "/img/film2.png" : "/img/tvseries.png";
		},
	},
};
</script>

<template>
	<main>
		<div class="container text-center my-5">
			<img v-if="hasSearched" :src="title" alt="title" />
			<div class="row row-cols-5 justify-content-center">
				<card
					class="zoom"
					v-for="item in store[type]"
					:key="item.id"
					:cardObj="item"
				/>
			</div>
		</div>
	</main>
</template>

<style lang="scss">
.zoom {
	transition: transform 0.2s;
	margin: 0 auto;
}
.zoom:hover {
	-ms-transform: scale(1.1);
	/* IE 9 */
	-webkit-transform: scale(1.1);
	/* Safari 3-8 */
	transform: scale(1.1);
}
</style>
