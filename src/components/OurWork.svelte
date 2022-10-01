<script>
	export let buttonText;
</script>

<template>
	<div class="my-64 -md:my-32">
		<div
			class="flex items-center justify-center -md:justify-start font-barlow-condensed text-7xl -md:text-3xl text-center -md:text-left tracking-wider font-medium"
		>
			<h2>Explore a few of our most<br /> impactful projects</h2>
		</div>
		<div
			class="flex items-center justify-center -md:justify-start font-barlow-condensed text-7xl text-center tracking-wider font-medium mt-12"
		>
			<button
				class="w- font-ibm-plex-mono font-medium tracking-widest text-sm text-black bg-white hover:bg-slate-300 py-4 px-6 rounded-full transition-all"
				>{buttonText}</button
			>
		</div>
	</div>
</template>
