<template>
	<div class="navigation" :class="type">
		<div class="container space-between style-nav">
			<div class="logo"></div>
			<nav id="nav">
				<router-link to="/" class="nav__route">Home</router-link> 
				<router-link to="/projects" class="nav__route">Projects</router-link> 
				<router-link to="/services" class="nav__route">Services</router-link> 
				<router-link to="/blog" class="nav__route">Blog</router-link> 
				<router-link to="/company" class="nav__route">Company</router-link> 
			</nav>
			<ul class="public-links gap-10">
				<li class="public-link link-30">
					<a href="#" class="nav__img img-1">
						<img src="../images/inst.svg" alt="">
					</a>
				</li>
				<li class="public-link link-30">
					<a href="#" class="nav__img img-2">
						<img src="../images/twitter.svg" alt="">
					</a>
				</li>
				<li class="public-link link-30">
					<a href="#" class="nav__img img-3">
						<img src="../images/ref.svg" alt="">
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>

#nav {
	max-width: 475px;
}

.dark a {
	color: #333333;
}

.dark {
	box-shadow: 0px 4px 4px 0px #00000040;
}

.dark a.active {
	background: #F88500;
	color: #fff;
}

.dark .logo {
	background-image: url('../images/logo-dark.svg');
}

.dark .public-link  {
	border: 1px solid #33333380;
}

.dark .nav__img {
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
}

.dark .img-1 {
	background-image: url('../images/inst-dark.svg');
}

.dark .img-2 {
	background-image: url('../images/twitter-dark.svg');
}

.dark .img-3 {
	background-image: url('../images/facebook-dark.svg');
}

.container.style-nav {
	padding: 22px 30px 28px;
	border-bottom: 1px solid #FFFFFF1A;
}

.nav__route {
	padding: 8px 15px;
}

.nav__route:not(:last-child) {
	margin-right: 20px;
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

.links a:not(:last-child) { 
	margin-right: 10px;
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
	data() {
		return {
			type: this.theme
		}
	},
	props: {
		theme: String,
	}
}
</script>