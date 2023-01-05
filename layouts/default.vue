<template>
  <div class="flex w-full min-h-screen bg-gray-200">
    <LayoutMenu></LayoutMenu>
    <div class="flex-noshink w-full max-h-screen overflow-auto">
      <LayoutNavbar></LayoutNavbar>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>

<style>
@media (min-width: 1536px)
{
  .container {
    max-width: 1536px !important;
  }
}
</style>