<template>
  <div class="w-full flex flex-wrap mt-4">
    <el-page-header @back="goBack" title="" class="py-3 px-3 shadow-md bg-white w-full rounded-lg mb-5">
      <template #content class="w-full">
        <div class="flex w-full justify-between items-center">
          <span class="flex-grow">
            <span>Danh sách Khách hàng</span>
          </span>
          <el-button @click="$router.push(`/customer/add`)" size="mini" type="primary">Thêm mới</el-button>
        </div>
      </template>
    </el-page-header>
    <span class="shadow-md p-3 h-full w-full flex bg-white rounded-lg">
      <div v-if="model" class="flex w-full flex-wrap p-3">
        <CustomerList v-model="model" class="w-full"></CustomerList>
      </div>
    </span>
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
        search: "",
      }
    },

    computed: {
      model() {
        return JSON.parse(JSON.stringify(this.$store.state.customer.model));
      }
    },  

    methods: {
      async reload(page,pageSize){
        // var res = await this.$axios.get(`/customers?page=${page}&pageSize=${pageSize}`)
        var res = await this.$axios.get(`/customers`)
        this.customers = res.data;
        window.scrollTo({top: 0, behavior: 'smooth'});
      },

      goBack() {
        this.$router.go(-1)
      }
    },

    watch: {
      '$route' (to, from) {
        this.reload(to.query.page,20)
      }
    },

    async mounted() {
      await this.$store.dispatch("customer/init", {search: this.$route.query.search});
    }
  }
</script>
  
<style>
  .el-page-header__content {
    width: inherit;
  }
</style>