<template>
	<div class="partner">
		<div class="container">
			<h3 class="partner__title hd-main-page">Our partners</h3>
			<ul class="partner__list">
				<li>
					<img src="../../images/milano.svg" alt="milano" class="partner__photo">
					<p class="partner__text"><span class="highlighted">Milano Parquet</span> S.R.L. We take care of wood and carefully monitor the entire production process.</p>
				</li>
				<li>
					<img src="../../images/mazzucato.svg" alt="mazzucato" class="partner__photo">
					<p class="partner__text"><span class="highlighted">Mazzucato Legnami</span> - italian timber manufacturer, the largest market leader in Europe.</p>
				</li>
				<li>
					<img src="../../images/fanfani.svg" alt="fanfani" class="partner__photo">
					<p class="partner__text"><span class="highlighted">Andrea Fanfani</span> creates unique Italian handmade furniture as an extension of your interior.</p>
				</li>
				<li>
					<img src="../../images/cappelini.svg" alt="cappelini" class="partner__photo">
					<p class="partner__text"><span class="highlighted">Angelo Cappelini</span> reproduces furniture of bygone eras: empire, baroque, rococo and many others.</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.partner {
	width: 100%;
	height: auto;
	background-image: url('../../images/bg.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding-top: 70px;
	padding-bottom: 70px;
}

.partner__title {
	margin-bottom: 45px;
}

.partner__list {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
}

.partner__text {
	font-size: 14px;
	line-height: 170%;
}

.highlighted {
	font-weight: 800;
	color:  #F88500;
}

.partner__photo {
	margin-bottom: 30px;
	transition: .5s;
}

.partner__photo:hover {
	transform: scale(1.1); 
}
</style>

<script>
export default {

}
</script>