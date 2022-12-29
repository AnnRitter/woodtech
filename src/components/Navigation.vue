<template>
	<div class="navigation">
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
					<a href="#">
						<img src="../images/inst.svg" alt="">
					</a>
				</li>
				<li class="public-link link-30">
					<a href="#">
						<img src="../images/twitter.svg" alt="">
					</a>
				</li>
				<li class="public-link link-30">
					<a href="#">
						<img src="../images/ref.svg" alt="">
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style>

#nav {
	max-width: 475px;
}

.container.style-nav {
	padding: 22px 30px 28px;
	border-bottom: 1px solid #FFFFFF1A;
}

.nav__route {
	padding: 8px 15px;
}

.router-nav:not(:last-child) {
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

}
</script>