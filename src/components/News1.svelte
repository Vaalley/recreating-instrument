<script>
	export let buttonText;
	export let paragraph;
	export let imgLink;

	import onScrollActivate from '../directives/on-scroll-activate';
</script>

<template>
	<div class="flex mb-64 fade-in" use:onScrollActivate>
		<div class="w-7/12">
			<img src={imgLink} alt="" />
		</div>
		<div class="w-5/12 flex items-center justify-center">
			<div class="w-3/5">
				<p class="font-barlow-condensed font-medium text-3xl tracking-wider mb-10">
					{paragraph}
				</p>
				<button
					class="w- font-ibm-plex-mono font-medium tracking-widest text-sm text-black bg-white hover:bg-slate-300 py-4 px-6 rounded-full transition-all"
					>{buttonText}</button
				>
			</div>
		</div>
	</div>
</template>
