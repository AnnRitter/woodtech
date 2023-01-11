<template>
	<div class="blog">
		<div class="container flex-vertical">
			<h2 class="blog__main-headline hd-pages">Company blog</h2>
			<p class="blog__content head-content">List of Woodtech news and articles on architectural design, engineering and interior design.</p>
			<ul class="blog__list">
				<li class="blog__item">
					<img src="../../images/blog-1.jpg" alt="" class="blog__photo">
					<p class="blog__headline bold-subtitle">Creating a wooden futuristic bedroom</p>
					<p class="blog__text common-text">The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.</p>
					<a href="" class="dark link-more">Read more</a>
				</li>
				<li class="blog__item">
					<img src="../../images/blog-2.jpg" alt="" class="blog__photo">
					<p class="blog__headline bold-subtitle">Creating a wooden futuristic bedroom</p>
					<p class="blog__text common-text">The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.</p>
					<a href="" class="dark link-more">Read more</a>
				</li>
				<li class="blog__item">
					<img src="../../images/blog-3.jpg" alt="" class="blog__photo">
					<p class="blog__headline bold-subtitle">Creating a wooden futuristic bedroom</p>
					<p class="blog__text common-text">The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.</p>
					<a href="" class="dark link-more">Read more</a>
				</li>
				<li class="blog__item">
					<img src="../../images/blog-4.jpg" alt="" class="blog__photo">
					<p class="blog__headline bold-subtitle">Creating a wooden futuristic bedroom</p>
					<p class="blog__text common-text">The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.</p>
					<a href="" class="dark link-more">Read more</a>
				</li>
				<li class="blog__item">
					<img src="../../images/blog-5.jpg" alt="" class="blog__photo">
					<p class="blog__headline bold-subtitle">Creating a wooden futuristic bedroom</p>
					<p class="blog__text common-text">The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.</p>
					<a href="" class="dark link-more">Read more</a>
				</li>
				<li class="blog__item">
					<img src="../../images/blog-6.jpg" alt="" class="blog__photo">
					<p class="blog__headline bold-subtitle">Creating a wooden futuristic bedroom</p>
					<p class="blog__text common-text">The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.</p>
					<a href="" class="dark link-more">Read more</a>
				</li>
				<li class="blog__item">
					<img src="../../images/blog-7.jpg" alt="" class="blog__photo">
					<p class="blog__headline bold-subtitle">Creating a wooden futuristic bedroom</p>
					<p class="blog__text common-text">The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.</p>
					<a href="" class="dark link-more">Read more</a>
				</li>
				<li class="blog__item">
					<img src="../../images/blog-8.jpg" alt="" class="blog__photo">
					<p class="blog__headline bold-subtitle">Creating a wooden futuristic bedroom</p>
					<p class="blog__text common-text">The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.</p>
					<a href="" class="dark link-more">Read more</a>
				</li>
				<li class="blog__item">
					<img src="../../images/blog-9.jpg" alt="" class="blog__photo">
					<p class="blog__headline bold-subtitle">Creating a wooden futuristic bedroom</p>
					<p class="blog__text common-text">The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.</p>
					<a href="" class="dark link-more">Read more</a>
				</li>
				<li class="blog__item">
					<img src="../../images/blog-10.jpg" alt="" class="blog__photo">
					<p class="blog__headline bold-subtitle">Creating a wooden futuristic bedroom</p>
					<p class="blog__text common-text">The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.</p>
					<a href="" class="dark link-more">Read more</a>
				</li>
				<li class="blog__item">
					<img src="../../images/blog-11.jpg" alt="" class="blog__photo">
					<p class="blog__headline bold-subtitle">Creating a wooden futuristic bedroom</p>
					<p class="blog__text common-text">The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.</p>
					<a href="" class="dark link-more">Read more</a>
				</li>
				<li class="blog__item">
					<img src="../../images/blog-12.jpg" alt="" class="blog__photo">
					<p class="blog__headline bold-subtitle">Creating a wooden futuristic bedroom</p>
					<p class="blog__text common-text">The creation of a unique project - a wooden bedroom in a futuristic style took the Woodtech team two months.</p>
					<a href="" class="dark link-more">Read more</a>
				</li>
			
			</ul>
		</div>
	</div>
</template>

<style scoped>
.blog {
	padding-top: 70px;
	margin-bottom: 65px;
}

.blog__main-headline {
	margin-bottom: 30px;
}

.blog__content {
	max-width: 550px;
	width: 100%;
	text-align: center;
	margin-bottom: 50px;
	color: #999999;
}

.blog__list {
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(3, 1fr);
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

</style>

<script>
export default {

}
</script>