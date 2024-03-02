<script>
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
  const links = [
    { label: "Home", to: "" },
    { label: "Servizi", to: "#services" },
    { label: "Contatti", to: "#contact" },
  ]
</script>

<Navbar class="max-w-screen-lg mx-auto">
  <NavBrand href="/">
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Brignole Danilo</span>
  </NavBrand>
  <NavHamburger  />
  <NavUl >
    {#each links as link}
      <NavLi href="/{link.to}">{link.label}</NavLi>
    {/each}
  </NavUl>
</Navbar>