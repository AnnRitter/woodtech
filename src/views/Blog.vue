<template>
	<navigation theme="dark"></navigation>
	<blog-main></blog-main>
	<the-footer></the-footer>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import BlogMain from '../components/blog/BlogMain.vue';
import TheFooter from '../components/TheFooter.vue';
export default {
	components: {
		Navigation,
		BlogMain,
		TheFooter,
	}
}
</script>