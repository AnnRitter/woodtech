<template>
	<div class="about">
		<div class="container flex-horizontal about__main">
			<div class="about__photo">
				<img src="../../images/photo_title.jpg" alt="">
				<p class="about__year"><span>32</span>  years on the market</p>
			</div>
			<div>
				<p class="slash-headlines orange about__slash-title">\\briefly about us</p>
				<p class="hd-main-page dark about__headline">We design and create eco-friendly comfort</p>
				<p class="dark common-text about__desc">In our work, we use only the best materials on the market at affordable prices.
					 Our experts will select the most suitable wood species,
					  design specialists will develop a ready-made solution.</p>
				<ul class="about__list">
					<li>
						<p class="about__subtitle dark">Safe <br> materials</p>
						<p class="dark common-text about__subtitle-text">The safety of each of the materials used is confirmed by the relevant 
							certificate of the European standard. We use products only from brands
							 that have been proven over the years.</p>
						 <router-link to="/company" class="link-more dark">More</router-link> 
					</li>
					<li>
						<p class="about__subtitle dark">Quality <br> wood</p>
						<p class="dark common-text about__subtitle-text">In creating unique interiors, we use only high-quality, proven European 
							wood, which will serve you for many years, retaining its qualities and 
							impeccable appearance.</p>
							<router-link to="/company" class="link-more dark">More</router-link> 
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>
.about {
	background: #fff;
	padding-top: 90px;
	padding-bottom: 85px;
	text-align: start;
}

.about__main {
	gap: 80px;
}

.about__photo {
	position: relative;
}
.about__photo img {
	position: relative;
	z-index: 2;
}

.about__photo::before {
	content: '';
	display: block;
	position: absolute;
	top: -15px;
	left: -15px;
	max-width: 235px;
	width: 100%;
	height: 280px;
	background: #202328;
	opacity: 0.1;
	border-radius: 0px 5px;
}

.about__slash-title {
	margin-bottom: 20px;
}

.about__year {
	z-index: 3;
	position: absolute;
	display: block;
	bottom: 60px;
	right: -25px;
	padding: 18px 25px;
	background: rgba(32, 35, 40, 0.9);
	border-radius: 0px 5px;
	font-size: 21px;
}

.about__year span {
	font-size: 52px;
}

.about__headline {
	padding-bottom: 20px;
	margin-bottom: 30px;
	position: relative;
	text-transform: uppercase;
}

.about__desc {
	margin-bottom: 40px;
}

.about__headline::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 35px;
	height: 5px;
	background-image: url('../../images/dots_horizontal.svg');
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
}

.about__list {
	display: flex;
	justify-content: space-between;
	gap: 20px;
}

.about__subtitle {
	font-weight: 800;
	font-size: 19px;
	padding-left: 55px;
	padding-bottom: 13px;
	margin-bottom: 15px;
	position: relative;
	border-bottom: 1px solid #E7E7E8;
}

.about__subtitle::before {
	content: '';
	position: absolute;
	left: 0;
	bottom: 15px;
	width: 40px;
	height: 40px;
	background-image: url('../../images/wood-cut.svg');
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
}

.about__subtitle-text {
	padding-bottom: 15px;
}
</style>

<script>

</script>