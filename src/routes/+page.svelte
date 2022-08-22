<script>
	import HeroHeader from '../components/HeroHeader.svelte';
	import Navbar from '../components/Navbar.svelte';
	import News1 from '../components/News1.svelte';
	import News2 from '../components/News2.svelte';
	import OurWork from '../components/OurWork.svelte';
	import VideoHero from '../components/VideoHero.svelte';
</script>

<template>
	<div>
		<Navbar />
		<VideoHero />
		<HeroHeader />
		<News1
			imgLink="https://images.prismic.io/instrument-v5/f43c62bc-9a19-4771-a13e-b8b0d93e6d6b_72andsunny-nyc_ISAKTINER-8376-edit.jpg?auto=compress,format"
			paragraph="It is with great excitement that we announce Kara Place as Instrument’s next CEO."
			buttonText="Read More →"
		/>
		<News2
			imgLink="https://images.prismic.io/instrument-v5/8b02f52b-5580-42a0-ac5c-15e16a8b88a0_Homepage.png?auto=compress,format"
			paragraph="In the summer of 2020, we reported our representation data and committed to doing so annually. One year later, we are pleased to share an update on our goals, our progress, and the work that still needs to be done."
			buttonText="Learn More →"
		/>
		<News1
			imgLink="https://images.prismic.io/instrument-v5/7c872db1-8972-4a3e-b53f-9aa7d179fd4f_what-we-do.jpg?auto=compress,format"
			paragraph="As a full-service partner to the world’s most ambitious companies, we create transformational change through best-in-class digital products and communications."
			buttonText="What we do →"
		/>
		<OurWork buttonText="Our work →" />
	</div>
</template>

<svelte:head>
	<title>Instrument</title>
</svelte:head>
