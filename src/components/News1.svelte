<script>
	export let buttonText;
	export let paragraph;
	export let imgLink;

	import onScrollActivate from '../directives/on-scroll-activate';
</script>

<template>
	<div class="flex mb-64 fade-in -md:block" use:onScrollActivate>
		<div class="w-7/12 -md:w-full">
			<img src={imgLink} alt="" />
		</div>
		<div class="w-5/12 -md:w-full flex items-center justify-center">
			<div class="w-3/5 -md:w-full">
				<p class="font-barlow-condensed font-medium text-3xl -md:text-xl tracking-wider mb-10">
					{paragraph}
				</p>
				<button
					class="font-ibm-plex-mono font-medium tracking-widest text-sm text-black bg-white hover:bg-slate-300 py-4 px-6 rounded-full transition-all"
					>{buttonText}</button
				>
			</div>
		</div>
	</div>
</template>
