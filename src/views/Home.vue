<template>
	<div class="main">
		<div class="background">
		<navigation theme="light"></navigation>
		<main-slider></main-slider>
	</div>
	<main-request></main-request>
	<main-works></main-works>
	<main-about></main-about>
	<main-partners></main-partners>
	<main-blog></main-blog>
	<the-footer></the-footer>
	</div>
	
</template>

<style scoped>
.main {
	background-color: #202328;
	color: #fff;
	padding-top: 20px;
}
.background {
	background-image: url('../images/slider-img.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 10px;
	margin: 0px 10px 20px;
}
</style>

<script>
import Navigation from '../components/Navigation.vue';
import MainSlider from '../components/main/MainSlider.vue';
import MainRequest from '../components/main/MainRequest.vue';
import MainWorks from '../components/main/MainWorks.vue';
import MainAbout from '../components/main/MainAbout.vue';
import MainPartners from '../components/main/MainPartners.vue';
import MainBlog from '../components/main/MainBlog.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
  name: 'Home',
	components: {
		MainSlider,
		Navigation,
		MainRequest,
		MainWorks,
		MainAbout,
		MainPartners,
		MainBlog,
		TheFooter,
	}
}
</script>
