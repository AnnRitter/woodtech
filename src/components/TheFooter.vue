<template>
	<div class="footer">
		<div class="container">
			<ul class="footer__blocks">
				<li class="block-1">
					<img src="../images/Logo.png" alt="" class="footer__logo">
					<p class="footer__headline">Briefly about us</p>
					<p class="footer__content">We thoroughly study and then discuss with our customers the appearance of each product. 
						We rarely repeat ourselves, because we know that you value individuality and are not ready 
						to be content with ready-made solutions.</p>
				</li>
				<li class="block-2">
					<p class="footer__headline headline_margin">Menu</p>
					<ul class="footer__items">
						<li>Home</li>
						<li>Projects</li>
						<li>Services</li>
						<li>Blog</li>
						<li></li>
					</ul>
				</li>
				<li class="block-3">
					<p class="footer__headline headline_margin">Services</p>
					<ul class="footer__items">
						<li>Interior Design</li>
						<li>Design</li>
						<li>Wood supply</li>
						<li>Repair</li>
						<li>Concept</li>
					</ul>
				</li>
				<li class="block-4">
					<p class="footer__headline headline_margin">Social media</p>
					<p class="footer__content" style="margin-bottom: 35px">Follow us on social media so you don't miss out on new incredible projects designed for our clients around the world.</p>
					<ul class="public-links footer__links">
						<li class="public-link">
							<a href="#">
								<img src="../images/inst.svg" alt="">
							</a>
						</li>
						<li class="public-link">
							<a href="#">
								<img src="../images/twitter.svg" alt="">
							</a>
						</li>
						<li class="public-link">
							<a href="#">
								<img src="../images/ref.svg" alt="">
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<style>
.footer {
	background: #171A1A;
	padding-top: 70px;
	padding-bottom: 100px;
}

.footer__blocks {
	display: flex;
	justify-content: space-between;

}
.footer__logo {
	margin-bottom: 40px;
}

.footer__headline {
	font-weight: 900;
	font-size: 18px;
	line-height: 21px;
	text-transform: uppercase;
	padding-bottom: 20px;
}

.footer__content {
	font-size: 13px;
	line-height: 170%;
	text-transform: uppercase;
	color: #FFFFFFB2;

}

.block-1 {
	max-width: 345px;
	width: 100%;
}

.block-4 {
	max-width: 285px;
	width: 100%;
}

.headline_margin {
	margin-bottom: 20px;
	position: relative;
}

.headline_margin::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 25px;
	height: 5px;
	background: #F88500;
	border-radius: 0px 5px;
}

.footer__items li {
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	margin-bottom: 10px;
}

.footer__links {
	max-width: 150px;
	width: 100%;
}

</style>

<script>
export default {

}
</script>