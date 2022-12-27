<template>
	<div class="about">
		<div class="container flex-horizontal" style="gap: 80px">
			<div class="about__photo">
				<img src="../../images/photo_title.jpg" alt="">
				<p class="about__year"><span style="font-size: 52px">32</span>  years on the market</p>
			</div>
			<div class="about__content">
				<p class="slash-headlines orange" style="margin-bottom: 20px">\\briefly about us</p>
				<p class="headlines dark about__headline">We design and create eco-friendly comfort</p>
				<p class="about__text" style="margin-bottom: 40px">In our work, we use only the best materials on the market at affordable prices.
					 Our experts will select the most suitable wood species,
					  design specialists will develop a ready-made solution.</p>
				<ul class="about__list">
					<li>
						<p class="about__subtitle dark">Safe <br> materials</p>
						<p class="about__text about__subtitle-text">The safety of each of the materials used is confirmed by the relevant 
							certificate of the European standard. We use products only from brands
							 that have been proven over the years.</p>
						 <a href="" class="about__link dark">More</a>
					</li>
					<li>
						<p class="about__subtitle dark">Quality <br> wood</p>
						<p class="about__text about__subtitle-text">In creating unique interiors, we use only high-quality, proven European 
							wood, which will serve you for many years, retaining its qualities and 
							impeccable appearance.</p>
						<a href=""  class="about__link dark">More</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style>
.about {
	background: #fff;
	padding-top: 90px;
	padding-bottom: 85px;
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

.about__content {
	text-align: start;
}

.about__headline {
	padding-bottom: 20px;
	margin-bottom: 30px;
	position: relative;
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

.about__text {
	font-weight: 400;
	font-size: 14px;
	line-height: 170%;
	color: #333333;
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

.about__link {
	font-size: 15px;
	font-weight: 800;
	text-decoration-line: underline;
}
</style>

<script>

</script>