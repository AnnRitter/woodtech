<template>
	<div class="services">
		<div class="container flex-vertical">
			<h2 class="services__headline hd-pages">Our services</h2>
			<p class="services__content head-content">Here we have collected all the key services of our company, divided into categories. If the service you need is not listed, please contact us.</p>
			<ul class="services__list">
				<li class="services__item">
					<div class="services__item-content">
						<p class="services__item-subtitle bold-subtitle">Interior Design</p>
						<p class="services__item-text common-text">We have been designing stunning interior designs for over 30 years and delighting our clients with unique work done in a variety of styles and taste.</p>
					</div>
					<img src="../../images/2-1.jpg" alt="photo 1">
				</li>
				<li class="services__item">
					<div class="services__item-content">
						<p class="services__item-subtitle bold-subtitle">Design</p>
						<p class="services__item-text common-text">One of our directions is the creation of conceptual installations made of wood for those who appreciate contemporary art and want to diversify their interior.</p>
					</div>
					<img src="../../images/2-2.jpg" alt="photo 2">
				</li>
				<li class="services__item">
					<div class="services__item-content">
						<p class="services__item-subtitle bold-subtitle">wood supply</p>
						<p class="services__item-text common-text">We supply exclusively high-quality wood species from reliable Italian and French suppliers. All wood corresponds to the European standard.</p>
					</div>
					<img src="../../images/2-3.jpg" alt="photo 3">
				</li>
				<li class="services__item">
					<div class="services__item-content">
						<p class="services__item-subtitle bold-subtitle">renovation</p>
						<p class="services__item-text common-text">We carry out repairs of furniture and wood products. Our state-of-the-art workshop has the right tools and materials for every task.</p>
					</div>
					<img src="../../images/2-4.jpg" alt="photo 4">
				</li>
				<li class="services__item">
					<div class="services__item-content">
						<p class="services__item-subtitle bold-subtitle">Concept</p>
						<p class="services__item-text common-text">One of our directions is the creation of c      onceptual installations made of wood for those who appreciate contemporary art and want to diversify their interior.</p>
					</div>
					<img src="../../images/2-5.jpg" alt="photo 5">
				</li>
				<li class="services__item">
					<div class="services__item-content">
						<p class="services__item-subtitle bold-subtitle">Call of experts</p>
						<p class="services__item-text common-text">Do you own antique, heavy or unusual furniture or wood products? We will come to you with all the necessary tools ourselves.</p>
					</div>
					<img src="../../images/2-6.jpg" alt="photo 6">
				</li>
			</ul>
			<button class="services__apply orange-button">Make a request</button>
		</div>
	</div>
</template>

<style scoped>
.services {
	padding-top: 70px;
	margin-bottom: 50px;
}

.services__headline {
	margin-bottom: 30px;
}

.services__content {
	max-width: 550px;
	width: 100%;
	text-align: center;
	margin-bottom: 50px;
	color: #999999;
}

.services__list {
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(2, 1fr);
	margin-bottom: 90px;
}

.services__item {
	display: flex;
	border: 1px solid #E4E6E8;
}

.services__item-content {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 35px 38px;
}

.services__item-subtitle {
	text-transform: uppercase;
	margin-bottom: 15px;
}

.services__item-text {
	text-align: start;
	color: #7E7E7E;
}

.services__apply {
	font-weight: 800;
	font-size: 14px;
	line-height: 145%;
	color: #fff;
	padding: 12px 30px;
}
</style>

<script>
export default {

}
</script>