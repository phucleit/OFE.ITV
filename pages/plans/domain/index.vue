<template>
  <div class="w-full flex flex-wrap mt-4">
    <span class="shadow-md p-3 h-full w-full flex bg-white rounded-lg">
      <div v-if="model" class="flex w-full flex-wrap p-3">
        <PlansDomainList v-model="model" class="w-full"></PlansDomainList>
      </div>
    </span>
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
        
      }
    },

    computed: {
      model() {
        return JSON.parse(JSON.stringify(this.$store.state.domainPlan.model));
      }
    },

    async mounted() {
      await this.$store.dispatch("domainPlan/init");
    }
  }
</script>
  
<style>

</style>