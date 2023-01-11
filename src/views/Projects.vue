<template>
 <navigation theme="dark"></navigation>
 <project-projects></project-projects>
 <the-footer></the-footer>
</template>

<style scoped>

</style>

<script>
import Navigation from '../components/Navigation.vue';
import ProjectProjects from '../components/project/ProjectProjects.vue';
import TheFooter from '../components/TheFooter.vue';
export default {
	components: {
		Navigation,
		ProjectProjects,
		TheFooter,
	}
}
</script>
