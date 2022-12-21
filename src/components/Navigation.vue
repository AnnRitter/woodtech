<template>
	<div class="container space-between">
		<div class="logo"></div>
		<div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/">Projects</router-link> 
		<router-link to="/">Services</router-link> 
		<router-link to="/">Blog</router-link> 
		<router-link to="/">Company</router-link> 
  </div>
	<div class="links space-between">
		<a href="#" class="link-border">
			<div class="link-icon inst"></div>
		</a>
		<a href="#" class="link-border">
			<div class="link-icon twitter"></div>
		</a>
		<a href="#" class="link-border">
			<div class="link-icon ref"></div>
		</a>
	</div>
	</div>
	
</template>

<style>

#nav {
	max-width: 475px;
}

.space-between {
	display: flex;
	justify-content: space-between;
}

.logo {
	max-width: 110px;
	width: 100%;
	height: auto;
	background-image: url('../images/Logo.png');
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
}

.links {
	max-width: 110px;
}

.link-icon {
	width: 12px;
	height: 12px;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

.link-border {
	width: 30px;
	height: 30px;
	border: 1px solid rgba(255, 255, 255, 0.5);
	border-radius: 0px 5px;
	display: flex;
	align-items: center;
	justify-content: center;
}

.inst {
	background-image: url('../images/inst.svg');
}

.twitter {
	background-image: url('../images/twitter.svg');
}

.ref {
	background-image: url('../images/ref.svg');
}
</style>

<script>
export default {

}
</script>