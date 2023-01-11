<template>
	<navigation theme="dark"></navigation>
	<company-main></company-main>
	<the-footer></the-footer>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import CompanyMain from '../components/company/CompanyMain.vue';
import TheFooter from '../components/TheFooter.vue';
export default {
	components: {
		Navigation,
		CompanyMain,
		TheFooter,
	}
}
</script>