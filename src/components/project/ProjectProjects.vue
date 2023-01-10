<template>
	<div class="projects">
		<div class="container flex-vertical">
			<h2 class="projects__headline  hd-pages">Our projects</h2>
			<p class="projects__content head-content">We present you the best works of our design studio. From stunning living rooms to the most unusual exclusive solutions.</p>
			<ul class="projects__list">
				<li class="projects__item flex-vertical">
					<img src="../../images/1.jpg" alt="1">
					<img src="../../images/2.jpg" alt="2">
				</li>
				<li class="projects__item flex-vertical">
					<img src="../../images/3.jpg" alt="3">
				</li>
				<li class="projects__item flex-vertical">
					<img src="../../images/4.jpg" alt="4">
					<img src="../../images/5.jpg" alt="5">
				</li>
				<li class="projects__item flex-vertical">
					<img src="../../images/6.jpg" alt="6">
				</li>
				<li class="projects__item flex-vertical">
					<img src="../../images/7.jpg" alt="7">
					<img src="../../images/8.jpg" alt="8">
				</li>
				<li class="projects__item flex-vertical">
					<img src="../../images/9.jpg" alt="9">
				</li>
				<li class="projects__item flex-vertical">
					<img src="../../images/10.jpg" alt="10">
					<img src="../../images/11.jpg" alt="11">
				</li>
				<li class="projects__item flex-vertical">
					<img src="../../images/12.jpg" alt="12">
				</li>
				<li class="projects__item flex-vertical">
					<img src="../../images/13.jpg" alt="13">
					<img src="../../images/14.jpg" alt="14">
				</li>
				<li class="projects__item flex-vertical">
					<img src="../../images/15.jpg" alt="15">
				</li>
				<li class="projects__item flex-vertical">
					<img src="../../images/16.jpg" alt="16">
					<img src="../../images/17.jpg" alt="17">
				</li>
				<li class="projects__item flex-vertical">
					<img src="../../images/18.jpg" alt="18">
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>

.projects {
	
	padding-top: 70px;
	margin-bottom: 65px;
}

.projects__headline {
	margin-bottom: 30px;
}

.projects__content {
	max-width: 550px;
	width: 100%;
	text-align: center;
	margin-bottom: 50px;
	color: #999999;
}

.projects__list {
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(3, 1fr);
}

.projects__item {
	gap: 20px;
}
</style>

<script>
export default {

}
</script>