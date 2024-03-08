<script>
  import _chunk from 'lodash/chunk';
  import { Modal } from 'flowbite-svelte';  
	import Slider from "../lib/Slider.svelte";

  let currentSection = null;

  const sections = [
    { id: 'oscuranti-zanzariere-velux', img: 6 },
    { id: 'pergotende', img: 2 },
    { id: 'tapparelle', img: 10 },
    { id: 'tende-da-sole', img: 8 },
    { id: 'tende-laterali-crystal', img: 2 },
    { id: 'zanzariere-finestre', img: 4 },
    { id: 'zanzariere-plissettate', img: 9 },
    { id: 'zanzariere-portefinestre', img: 10 },
    { id: 'cancelli-di-sicurezza', img: 10 },
  ]

  function getImages({ id, img }) {
    return new Array(img).fill(0).map(
      (_, index) => {
        return {
          alt: id,
          src: `/img/${id}/${index + 1}.webp`,
          title: id
        }
      }
    )
  }

  function getGalleryImages(section) {
    if (!section) {
      currentSection = null
      return
    }
    
    currentSection = {
      ...section,
      label: section.title,
      images: section.images,
    }
  }

  const images = sections.map(
    ({ id, img }) => ({
      alt: id,
      src: `/img/${id}/1.webp`,
      title: id.replaceAll('-', ' '),
      images: getImages({ id, img })
    })
  )
</script>

<h2 class="text-center">Guarda la gallery</h2>
<h5 class="text-center">Clicca per visualizzare altre foto</h5>
<div id="services" class="max-w-screen-lg mx-auto my-5 flex flex-wrap justify-center">
  {#each images as i}
    <button on:click={() => getGalleryImages(i)} class="m-5 rounded h-56 overflow-hidden hover:border-b-4" style="border-color: #ae3753">
      {i.title}
      <img src={i.src} alt={i.id} width={300} />
    </button>
  {/each}
</div>

<Modal bind:open={currentSection} outsideclose size="xl" class="bg-slate-800">
  <Slider title={currentSection.title} images={currentSection.images} />
</Modal>