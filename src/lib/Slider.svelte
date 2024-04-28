<script>
  import LeftIcon from 'flowbite-svelte-icons/AngleLeftOutline.svelte'
  import RightIcon from 'flowbite-svelte-icons/AngleRightOutline.svelte'

  export let images;
  export let label;

  let index = 0;

  function next() {
    console.log('N',{index})
    index = (index < images.length - 1) ? index + 1 : 0
  }

  function prev() {
    console.log('P',{index})
    index = index > 0 ? (index - 1) : index
  }
</script>

<div class="my-5">
  <div class="flex justify-center align-middle" style="max-height: 226px; overflow: hidden;">
    <button on:click={prev}> <LeftIcon /> </button>
    <a href={images[index]?.src ?? "#"} target="_blank"> 
      <img src={images[index]?.src ?? ""} alt={images[index]?.alt ?? ""} width="300">
    </a>
    <button on:click={next}> <RightIcon /> </button>
  </div>
  <p class="text-center text-slate-600">{label}</p>
</div>