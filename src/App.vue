<script>
import axios from "axios";
import { store } from "./data/store";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Popular from "./components/popular.vue";
export default {
	components: {
		Header,
		Main,
		Popular,
	},

	data() {
		return {
			store,
		};
	},

	methods: {
		getPopularMovies() {
			axios
				.get(this.store.apiPopular, {
					params: store.queryParams,
				})
				.then((results) => {
					this.store.popularList = results.data.results;
					console.log(this.store.popularList);
				});
		},

		getApi(type) {
			console.log(type);
			axios
				.get(this.store.apiUrl + type, {
					params: store.queryParams,
				})
				.then((res) => {
					console.log(res.data);
					this.store[type] = res.data.results;
				});
		},

		startSearch() {
			this.getApi("movie");
			this.getApi("tv");
			this.store.popularList = [];
		},
	},

	mounted() {
		this.startSearch();
		this.getPopularMovies();
	},
};
</script>

<template>
	<Header @startSearch="startSearch" />
	<div class="main-wrapper">
		<Popular v-if="this.store.popularList.length > 0" />
		<Main type="movie" />
		<Main type="tv" />
	</div>
</template>

<style lang="scss">
.main-wrapper {
	height: 100vh;
	height: 100%;
}
</style>
