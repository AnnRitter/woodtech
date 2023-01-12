<template>
	<div class="blog dark">
		<div class="container">
			<h3 class="blog__title hd-main-page">Our blog</h3>
			<ul class="blog__list">
				<li class="blog__item">
					<img src="../../images/blog_1.jpg" alt="" class="blog__photo">
					<p class="blog__headline bold-subtitle">Built an amazing wooden staircase</p>
					<p class="blog__text common-text">One of the most unusual projects of our company is an old-style spiral wooden staircase. The work of our team took about four months.</p>
					<a href="#" class="dark link-more">Read more</a>
				</li>
				<li class="blog__item">
					<img src="../../images/blog_2.jpg" alt="" class="blog__photo">
					<p class="blog__headline bold-subtitle">Creating a wooden futuristic bedroom</p>
					<p class="blog__text common-text">The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.</p>
					<a href="#" class="dark link-more">Read more</a>
				</li>
				<li class="blog__item">
					<router-link to="/blog" class="blog__overlay dark">Go to all blog posts</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.blog {
	background: #fff;
	padding-top: 75px;
	padding-bottom: 70px;
}

.blog__title {
	margin-bottom: 45px;
}

.blog__list {
	display: flex;
	justify-content: space-between;
	gap: 20px;
}

.blog__item {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 360px;
	width: 100%;
	padding: 15px;
	border: 1px solid #EEEEEE;
	text-align: start;
	transition: .5s;
}

.blog__item:hover {
	transform: scale(1.05); 
}

.blog__photo {
	margin-bottom: 25px;
}

.blog__headline {
	max-width: 300px;
	width: 100%;
	padding-left: 12px;
	border-left: 3px solid #F88500;
	margin-bottom: 20px;
}

.blog__text {
	margin-bottom: 10px;
}

.blog__overlay {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	background-image: url('../../images/overlay.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	font-weight: 500;
	font-size: 18px;
	text-decoration-line: underline;
}
</style>

<script>
export default {

}
</script>