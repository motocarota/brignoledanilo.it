<script>
  
	import Slider from "../lib/Slider.svelte";

  const sections = [
    { id: 'cancelli-di-sicurezza', img: 10 },
    { id: 'oscuranti-zanzariere-velux', img: 6 },
    { id: 'tapparelle', img: 10 },
    { id: 'tende-da-sole', img: 10 },
    { id: 'zanzariere-finestre', img: 5 },
    { id: 'zanzariere-plissettate', img: 9 },
    { id: 'zanzariere-portefinestre', img: 10 },
  ]

  function getImages(section) {
    return new Array(section.img).fill(0).map(
      (_, index) => {
        const label = section.id.split('-').join(' ')

        return {
          alt: label,
          src: `/img/${section.id}/${index + 1}.webp`,
          title: label
        }
      }
    )
  }

</script>

<div id="services" class="max-w-screen-lg mx-auto">
  {#each sections as section}
    <Slider title={section.id.split('-').join(' ')} images={getImages(section)}/>
  {/each}
</div>