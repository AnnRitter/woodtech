<template>
	<div class="company">
		<div class="container flex-horizontal with-sidebar">
			<div class="sidebar">
				<h3 class="sidebar__headline">Information about us</h3>
				<ul class="sidebar__menu">
					<li>
						<a href="">About company</a>
					</li>
					<li>
						<a href="">Advantages</a>
					</li>
					<li>
						<a href="">Our partners</a>
					</li>
					<li>
						<a href="">Feedback</a>
					</li>
				</ul>
			</div>
			<div class="main">
				<h2 class="company__headline">About company «Woodtech»</h2>
				<p class="company__text margin-35">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</p>
				<img src="../../images/company-1.jpg" alt="" class="margin-35">
				<p class="company__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</p>
				<p class="company__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</p>
				<p class="company__text margin-35">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</p>
				<img src="../../images/company-2.jpg" alt="" class="margin-35">
				<p class="company__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</p>
				<p class="company__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</p>
				<p class="company__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped>	
.company {
	padding-top: 70px;
	margin-bottom: 75px;
}

.with-sidebar {
	gap: 55px;
}

.main {
	max-width: 800px;
	width: 100%;
}

.company__headline {
	font-size: 30px;
	font-weight: 800;
	line-height: 35px;
	margin-bottom: 30px;
}

.company__text {
	font-size: 16px;
	font-weight: 400;
	line-height: 170%;
	color: #000000;
	text-align: start;
}

.company__text:not(:last-child) {
	margin-bottom: 30px;
}

.margin-35, .company__text.margin-35 {
	margin-bottom: 35px;
}

.sidebar {
	max-width: 265px;
	width: 100%;
}

.sidebar__headline {
	font-size: 16px;
	font-weight: 800;
	line-height: 19px;
	margin-bottom: 15px;
}

.sidebar a {
	font-size: 14px;
	font-weight: 500;
	line-height: 16px;
	color: #333333;
	height: 37px;
	display: flex;
	justify-content: center;
	align-items: center;
	
}

</style>

<script>
export default { 

}
</script>