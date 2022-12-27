<template>
	<div class="background">
		<navigation></navigation>
		<main-slider></main-slider>
	</div>
	<main-request></main-request>
	<main-works></main-works>
	<main-about></main-about>
</template>

<style scoped>
.background {
	background-image: url('../images/slider-img.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 10px;
	margin-bottom: 20px;
}
</style>

<script>
import Navigation from '../components/Navigation.vue';
import MainSlider from '../components/main/MainSlider.vue';
import MainRequest from '../components/main/MainRequest.vue';
import MainWorks from '../components/main/MainWorks.vue';
import MainAbout from '../components/main/MainAbout.vue';

export default {
  name: 'Home',
	components: {
		MainSlider,
		Navigation,
		MainRequest,
		MainWorks,
		MainAbout,
	}
}
</script>
