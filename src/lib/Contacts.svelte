<script>
  const links = [
    { label: "Telefono", to: "tel:00393487646721", icon: 'phone', value: "348 / 7646721" },
    { label: "Email", to: "mailto:brignoledanilo@hotmail.com?subject=informazioni", icon: 'email', value: "brignoledanilo@hotmail.com" },
    { label: "Indirizzo", to: "https://maps.app.goo.gl/NbWNttwSF12vpTCA8", icon: 'map', value: "Chiavari (GE) 16043" },
  ]
</script>

<section id="contact" class="max-w-screen-lg my-10 mx-auto">
  <h1 class="my-10">Contatti</h1>

  <div class="flex text-center flex-wrap">
    {#each links as link}
      <a href={link.to} class="flex-auto p-5" target="_blank">
        <h3><i class="ti-{link.icon} pr-3" /> {link.label}: </h3>
        <p>{link.value}</p>
      </a>
    {/each}
  </div>
</section>
