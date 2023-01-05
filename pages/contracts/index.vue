<template>
  <div class="w-full flex flex-wrap mt-4">
    <el-page-header @back="goBack" title="" class="py-3 px-3 shadow-md bg-white w-full rounded-lg mb-5">
      <template #content class="w-full">
        <div class="flex w-full justify-between items-center">
          <span class="flex-grow"><span>Danh sách Hợp đồng</span></span>
          <el-button @click="$router.push(`/contracts/add`)" size="mini" type="primary">Thêm mới</el-button>
        </div>
      </template>
    </el-page-header>
    <span class="shadow-md p-3 h-full w-full flex bg-white rounded-lg">
      <div class="flex w-full flex-wrap p-3">
        <ContractsList v-model="model" class="w-full"></ContractsList>
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
        return JSON.parse(JSON.stringify(this.$store.state.contract.model));
      }
    },  

    methods: {
      goBack() {
        this.$router.go(-1);
      }
    },

    watch: {
      
    },

    async mounted() {
      await this.$store.dispatch("contract/init");
    }
  }
</script>
  
<style>
  .el-page-header__content {
    width: inherit;
  }
</style>