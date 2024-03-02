<script>
  import { Carousel } from 'flowbite-svelte';

  export let title;
  export let images;
</script>

<div class="max-w-4xl mx-auto">
  <h2 class="capitalize mt-5">{title}</h2>
  <Carousel {images} let:Controls let:Indicators>
    <Controls />
  </Carousel>
</div>