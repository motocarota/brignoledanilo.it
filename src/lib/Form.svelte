<script>
	import { Button, Input, Label, Textarea } from "flowbite-svelte";
  
  const key = import.meta.env.VITE_CF_API_KEY;
</script>


<form class="flex flex-col space-y-6" action="https://api.web3forms.com/submit" method="POST">
  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Richiedi un preventivo gratuito</h3>

  
  <Label class="space-y-2">
    <span>Email</span>
    <Input type="email" name="email" placeholder="" required />
  </Label>
  
  <Label class="space-y-2">
    <span>Telefono</span>
    <Input type="tel" name="phone" placeholder="" required />
  </Label>

  <Label class="space-y-2">
    <span>Messaggio</span>
    <Textarea name="messagge" placeholder="" rows={4} required />
  </Label>
  
  <input type="hidden" name="access_key" value={key}>
  <Button type="submit" class="w-full1" color="light">Invia</Button>
</form>