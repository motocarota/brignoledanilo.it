<script>
	import _chunk from 'lodash/chunk';
	import Slider from './Slider.svelte';

	let currentSection = null;

	const sections = [
		{ id: 'tende-da-sole', img: 9 },
		{ id: 'tapparelle', img: 10 },
		{ id: 'pergotende', img: 2 },
		{ id: 'tende-laterali-crystal', img: 5 },
		{ id: 'zanzariere-finestre', img: 2 },
		{ id: 'zanzariere-portefinestre', img: 10 },
		{ id: 'zanzariere-plissettate', img: 16 },
		{ id: 'cancelli-di-sicurezza', img: 10 },
		{ id: 'oscuranti-zanzariere-velux', img: 6 }
	];

	function getImages({ id, img }) {
		return new Array(img).fill(0).map((_, index) => {
			return {
				alt: id,
				src: `/img/${id}/${index + 1}.webp`,
				title: id
			};
		});
	}

	function getGalleryImages(section) {
		if (!section) {
			currentSection = null;
			return;
		}

		return {
			label: section.title,
			images: section.images
		};
	}

	const images = sections.map(({ id, img }) => ({
		alt: id,
		src: `/img/${id}/1.webp`,
		title: id.replaceAll('-', ' '),
		images: getImages({ id, img })
	}));

	const galleryImages = images.map((i) => getGalleryImages(i));
	console.log({ images, galleryImages });
</script>

<h2 class="text-center my-4">Guarda la gallery</h2>
<h5 class="text-center">Clicca per visualizzare altre foto</h5>
<div id="services" class="max-w-screen-lg mx-auto my-5 flex flex-wrap justify-center align-middle">
	{#each galleryImages as i}
		<Slider images={i.images} label={i.label} />
	{/each}
</div>
