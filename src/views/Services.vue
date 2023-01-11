<template>
	<navigation  theme="dark"></navigation>
	<service-services></service-services>
	<the-footer></the-footer>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import ServiceServices from '../components/services/ServiceServices.vue';
import TheFooter from '../components/TheFooter.vue';
export default {
components: {
	Navigation,
	ServiceServices,
	TheFooter
}
}
</script>