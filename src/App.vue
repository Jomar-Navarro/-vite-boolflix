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
			hasSearched: false,
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
			this.hasSearched = true;
		},
	},

	mounted() {
		// this.startSearch();
		this.getPopularMovies();
	},
};
</script>

<template>
	<Header @startSearch="startSearch" />
	<div class="main-wrapper">
		<Popular id="popular" v-if="this.store.popularList.length > 0" />
		<Main v-if="hasSearched" :type="'movie'" :hasSearched="hasSearched" />
		<Main v-if="hasSearched" :type="'tv'" :hasSearched="hasSearched" />
	</div>
</template>

<style lang="scss">
html {
	background-color: #353535;
}
</style>
