<template>
	<div class="request">
		<div class="container space-between">
		<div class="right-part">
			<h2 class="request__h2">We are trusted</h2>
			<ul class="request__list">
				<li>860 clients worldwide</li>
				<li>36 best franchisees</li>
				<li>38 suppliers</li>
				<li>23 reliable partners</li>
				<li>108 furniture manufacturers</li>
				<li>256 eight-bit colors</li>
				<li>85 employees</li>
			</ul>
		</div>
		<div class="left-part">
			<p class="request__title">Call us or leave a request from the site.
				We will call you back within 10 minutes.</p>
			<p class="request__phone">+48 (525) 282 547</p>
			<button class="request__apply">Apply Now</button>
		</div>
	</div>
	</div>
	
</template>

<style>
.request {
	padding-top: 54px;
	padding-bottom: 54px;
	background: #171A1A;
}

.request__h2 {
	max-width: 221px;
	width: 100%;
	font-size: 18px;
	font-weight: 900;
	text-transform: uppercase;
	color: #6F7A8B;
	text-align: start;
	padding-bottom: 16px;
	border-bottom: 1px solid #2D3038;
	margin-bottom: 15px;
}

.request__list {
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	padding: 0;
}

.request__list li {
	font-weight: 400;
	font-size: 14px;
	text-align: start;
	color: #6F7A8B;
}

.request__title {
	max-width: 330px;
	width: 100%;
	font-weight: 400;
	font-size: 14px;
	text-transform: uppercase;
	text-align: end;
	line-height: 165%;
	color: #6F7A8B;
	margin-bottom: 10px;
}

.request__phone {
	font-weight: 400;
	font-size: 28px;
	color: #D9D9D9;
	margin-bottom: 15px;
}

.request__apply {
	padding: 12px 30px;
	background: #F88500;
	border-radius: 0px 5px;
	font-size: 20px;
	font-weight: 400;
	text-transform: uppercase;

}
</style>

<script>

export default {

}
</script>