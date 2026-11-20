<script>
import AboutMe from '@/components/about/AboutMe';
import AboutSkills from '@/components/about/AboutSkills';

export default {
	name: 'About',
	components: { AboutMe, AboutSkills },
};
</script>

<template>
	<div class="container mx-auto">
		<AboutMe />
		<AboutSkills />
	</div>
</template>
