<script>
import feather from 'feather-icons';

// Renders a Feather icon through Vue, so it survives re-renders
// (feather.replace() swaps DOM nodes behind Vue's back).
export default {
	props: {
		name: { type: String, required: true },
		size: { type: [String, Number], default: 24 },
	},
	computed: {
		svg() {
			const icon = feather.icons[this.name];
			return icon
				? icon.toSvg({ width: this.size, height: this.size, 'aria-hidden': 'true' })
				: '';
		},
	},
};
</script>

<template>
	<span class="inline-flex shrink-0" v-html="svg"></span>
</template>
