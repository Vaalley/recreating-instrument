<script>
	import onScrollActivate from '../directives/on-scroll-activate';
</script>

<template>
	<div class="flex items-center justify-between -md:block">
		<a href="/" class="w-[48%]">
			<div class="fade-in" use:onScrollActivate>
				<img
					src="https://images.prismic.io/instrument-v5/f2206e32-32cf-42f8-875b-245741d153c7_Group+34583.png?auto=compress,format"
					alt="Eames Institute"
				/>
				<h3 class="font-barlow-condensed font-medium text-3xl mt-4">Eames Institute</h3>
				<p
					class="font-ibm-plex-mono text-sm font-medium tracking-widest w-5/5 mt-4 leading-6 -md:mb-24"
				>
					Ray and Charles Eames laid the foundation for modern design and created work that has
					transcended time. With an aspiration to bring the Eameses’ timeless methodologies to a
					modern audience, the Eames Institute enlisted Instrument to co-create a digital platform
					to unveil their vast collection to the world.
				</p>
			</div>
		</a>
		<a href="/" class="w-[48%]">
			<div class="fade-in" use:onScrollActivate>
				<img
					src="https://images.prismic.io/instrument-v5/71b85f31-4930-43a6-80f0-2bdad6da7420_Frame+5393.jpg?auto=compress,format"
					alt="Dropbox 'For All Things Worth Saving'"
				/>
				<h3 class="font-barlow-condensed font-medium text-3xl mt-4">
					Dropbox "For All Things Worth Saving"
				</h3>
				<p class="font-ibm-plex-mono text-sm font-medium tracking-widest w-5/5 mt-4 leading-6">
					To evolve and mature how Dropbox engages with their customers, we developed a multi-year
					brand platform as well as launched its first campaign titled 'For All Things Worth Saving'
					— an ecosystem of branded experiences aimed to remind people of the inherent value of
					their digital files.
				</p>
			</div>
		</a>
	</div>
</template>
