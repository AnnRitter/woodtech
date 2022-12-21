<template>
  <navigation></navigation>
  <router-view/>
</template>

<style>
#app {
  font-family: Raleway, sans-serif;
	font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
	background-image: url('./images/slider-img.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

</style>


<script>
import Navigation from './components/Navigation.vue'
export default {
	components: {
		Navigation
	}
}
</script>