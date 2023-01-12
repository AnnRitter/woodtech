<template>
	<div class="modal-backdrop" @click="$emit('close')"></div>
	<div class="modal">
		<form class="form">
		<h1 class="form__headline hd-main-page">Apply form</h1>
		<p class="common-text form__text">Insert you phone number and describe your request. We will call you back within 10 minutes.</p>
		<label for="tel" class="modal-label">Your number</label>
		<input type="tel" id="tel" class="modal-tel">
		<label for="request" class="modal-label">Describe your request</label>
		<input type="text" class="modal-text" id="request">
		<button class="form__button orange-button">Send the request</button>
	</form>
	</div>
	
</template>

<style scoped>
label, input {
	display: block;
}

.form__headline {
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 30px;
}

.form__text {
	text-align: center;
}
.modal-label {
	font-size: 16px;
  font-weight: 700;
	margin-bottom: 10px;
}

.modal-tel {
	max-width: 300px;
	width: 100%;
	height: 30px;
	background: rgba(196, 196, 196, 0.2);
  border-radius: 0px 5px;
	border: 1px solid rgba(196, 196, 196, 0.3);
	margin-bottom: 20px;
}

.modal-text {
	width: 100%;
	height: 100px;
	background: rgba(196, 196, 196, 0.2);
  border-radius: 0px 5px;
	border: 1px solid rgba(196, 196, 196, 0.3);
	margin-bottom: 20px;
}

.form__button {
	font-size: 16px;
  padding: 7px 16px;
}
</style>

<script>
export default {
emits: ['close']
	
}
</script>