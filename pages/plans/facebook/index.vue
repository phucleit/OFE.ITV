<template>
  <div class="w-full flex flex-wrap mt-4">
    <span class="shadow-md p-3 h-full w-full flex bg-white rounded-lg">
      <div v-if="model" class="flex w-full flex-wrap p-3">
        <PlansFacebookCard v-model="model" class="w-full"></PlansFacebookCard>
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
        return JSON.parse(JSON.stringify(this.$store.state.facebookPlan.model));
      }
    },

    async mounted() {
      await this.$store.dispatch("facebookPlan/init");
    }
  }
</script>
  
<style>

</style>