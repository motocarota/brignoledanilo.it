<script>
  import '../app.css';
	import Header from '../lib/Header.svelte';
	import Footer from '../lib/Footer.svelte';
</script>

<Header />
<div style="min-height: calc(100vh - 191px);">
  <slot></slot>
</div>
<Footer />