<script>
  export let title;
  export let images;

  let index = 0;

  function next() {
    console.log('n', {index})

    index = (index < images.length -1) ? index +1 : 0
  }
  function prev() {
    console.log('p', {index})
    index = index > 0 ? (index-1) : index
  }

</script>

<div class="flex justify-center">
  <button on:click={prev}> &lt; </button>
  <button on:click={next}> 
    <img class="mx-auto h-max" src={images[index].src} alt={images[index].alt}>
  </button>
  <button on:click={next}> &gt; </button>
</div>