<template>
	<div class="works">
		<div class="container">
			<div class="works__titles">
				<p class="works__main-title common-text">We present you the best projects developed by our team of professionals with love and care for customers.
				 The portfolio will allow you to choose 
				the style, wood color, texture, design and arrangement of
				 elements that interest you.</p> 
				<div class="works__headlines">
					<p class="slash-headlines orange">\\Best works</p>
					<p class="hd-main-page">We create a warm atmosphere for your holiday</p>
				</div>
			</div>
			<ul class="works__projects">
				<li class="works__item">
					<img src="../../images/photo_1.jpg" alt="">
					<p class="works__city">London</p>
					<p class="works__description">Contemporary living room in wood tones</p>
				</li>
				<li class="works__item">
					<img src="../../images/photo_2.jpg" alt="">
					<p class="works__city">Paris</p>
					<p class="works__description">Panoramic chill-out area for reading and relaxing</p>
				</li>
				<li class="works__item">
					<img src="../../images/photo_3.jpg" alt="">
					<p class="works__city">Warsaw</p>
					<p class="works__description">Cozy loft in light wood tones and stunning views</p>
				</li>
			</ul>
			<router-link to="/projects" class="works__apply orange-button">Show more</router-link> 
		</div>
	</div>
</template>

<style scoped>
.works {
	padding-top: 63px;
	padding-bottom: 76px;
	position: relative;
	z-index: 2;
}

.works::after {
	content: '';
	display: block;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 380px;
	background: #fff;
	z-index: -1;
}

.works__titles {
	display: flex;
	justify-content: center;
	margin-bottom: 60px;
}

.works__main-title {
	max-width: 513px;
	width: 100%;
	text-align: right;
	text-transform: uppercase;
	line-height: 170%;
	padding-right: 45px;
	border-right: 1px solid #2D3038;
}

.works__headlines {
	padding-left: 45px;
	text-align: left;
	text-transform: uppercase;
}

.works__main-headline {
	margin-bottom: 10px;
}

.works__projects {
	display: flex;
	justify-content: center;
	text-align: start;
}

.works__item {
	transition: .5s;
}

.works__item:hover {
	transform: scale(1.05); 
}

.works__projects li:not(:last-child) {
	margin-right: 20px;
}

.works__projects li img {
	margin-bottom: 25px;
}

.works__city {
	margin-bottom: 10px;
	color: #989DA5;
	position: relative;
	padding-left: 29px;
}

.works__city::before {
	content: '';
	position: absolute;
	left: 0;
	width: 12px;
	height: 16px;
	background-image: url('../../images/point.svg');
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
}

.works__description {
	padding-bottom: 20px;
	margin-bottom: 45px;
	color: #333333;
	position: relative;
	padding-left: 23px;
	font-size: 20px;
	font-weight: 700;
	line-height: 125%;
	text-decoration: underline;
}

.works__description::before {
	content: '';
	position: absolute;
	left: 0;
	top: 10px;
	width: 5px;
	height: 35px;
	background-image: url('../../images/dots.svg');
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
}


.works__apply {
	font-weight: 800;
	font-size: 14px;
	line-height: 145%;
	padding: 12px 30px;
}
</style>

<script>
export default {

}
</script>