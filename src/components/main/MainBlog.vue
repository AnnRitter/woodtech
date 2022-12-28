<template>
	<div class="blog">
		<div class="container">
			<h3 class="blog__title">Our blog</h3>
			<ul class="blog__list">
				<li class="blog__item">
					<img src="../../images/blog_1.jpg" alt="" class="blog__photo">
					<p class="blog__headline">Built an amazing wooden staircase</p>
					<p class="blog__text">One of the most unusual projects of our company is an old-style spiral wooden staircase. The work of our team took about four months.</p>
					<a href="" class="blog__link">Read more</a>
				</li>
				<li class="blog__item">
					<img src="../../images/blog_2.jpg" alt="" class="blog__photo">
					<p class="blog__headline">Creating a wooden futuristic bedroom</p>
					<p class="blog__text">The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.</p>
					<a href="" class="blog__link">Read more</a>
				</li>
				<li class="blog__item">
					<router-link to="/blog" class="blog__overlay">Go to all blog posts</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<style>
.blog {
	background: #fff;
	color: #333333;
	padding-top: 75px;
	padding-bottom: 70px;
}

.blog__title {
	font-weight: 800;
	font-size: 29px;
}

.blog__list {
	display: flex;
	justify-content: space-between;
	gap: 20px;
}

.blog__item {
	max-width: 360px;
	width: 100%;
	padding: 15px;
	border: 1px solid #EEEEEE;
	text-align: start;
}

.blog__photo {
	margin-bottom: 25px;
}

.blog__headline {
	max-width: 300px;
	width: 100%;
	display: inline-block;
	font-weight: 800;
	font-size: 18px;
	padding-left: 12px;
	border-left: 3px solid #F88500;
	margin-bottom: 20px;
}

.blog__text {
	font-size: 14px;
	margin-bottom: 10px;
}

.blog__link {
	color: #333333;
	font-size: 15px;
	font-weight: 800;
	text-decoration-line: underline;
}

.blog__overlay {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-image: url('../../images/overlay.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	font-weight: 500;
	font-size: 18px;
	color: #333333;
	line-height: 140%;
	text-decoration-line: underline;
}
</style>

<script>
export default {

}
</script>