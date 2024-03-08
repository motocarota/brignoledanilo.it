<script>
	import Form from "./Form.svelte";

  const links = [
    { label: "Telefono", to: "tel:00393487646721", icon: 'phone', value: "348 / 7646721" },
    { label: "Email", to: "mailto:brignoledanilo@hotmail.com?subject=informazioni", icon: 'email', value: "brignoledanilo@hotmail.com" },
    { label: "Indirizzo", to: "https://maps.app.goo.gl/NbWNttwSF12vpTCA8", icon: 'map', value: "Chiavari (GE) 16043" },
  ]
</script>

<section id="contact" class="max-w-screen-lg my-10 mx-auto text-white p-10 rounded-lg" style="background-color: #ae3753">
  <h1 class="">Contatti</h1>

  <div class="flex text-center flex-wrap">
    {#each links as link}
      <a href={link.to} class="flex-auto p-5" target="_blank">
        <h3><i class="ti-{link.icon} pr-3" /> {link.label}: </h3>
        <p>{link.value}</p>
      </a>
    {/each}
  </div>
</section>

<section class="max-w-screen-lg my-10 mx-auto p-10 rounded-lg">
  <Form />
</section>
