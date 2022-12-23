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