<template>
  <div v-if="$attrs.value" class="w-full">
    <span class="w-full flex">
      <div class="flex-grow">
        <div class="grid grid-cols-12 gap-4">
          <el-button class="btn-filter" type="primary" size="small" @click="search()">Tất cả: {{ countAll }}</el-button>
          <el-button class="btn-filter" type="info" size="small" @click="getPersonalType()">Khách cá nhân: {{ countPersonalType }}</el-button>
          <el-button class="btn-filter" type="success" size="small" @click="getCompanyType()">Khách công ty: {{ countCompanyType }}</el-button>
          <el-button class="btn-filter" type="danger" size="small" @click="getFriendlyType()">Khách thân thiết: {{ countFriendlyType }}</el-button>
          <el-input
            size="small"
            class="col-span-5"
            v-model="searchStr"
            placeholder="Search"
            clearable
            @clear="searchStr=''"
          >
            <el-button size="small" class="col-span-1" slot="append" icon="el-icon-search" @click="search()"></el-button>
          </el-input>
        </div>
      </div>
      <div class="flex items-center pl-2">
        
      </div>
    </span>
    <el-table :data="$attrs.value.data" stripe style="width: 100%">
      <el-table-column type="expand">
        <template>
          <div class="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="flex-noshink">
              <div class="flex w-full flex-wrap p-3">
                <section class="w-full bg-white shadow-md rounded-lg p-3">
                  <span>Dịch vụ tên miền</span>
                  <CustomerDomainService v-model="domains" class="w-full"></CustomerDomainService>
                </section>
              </div>
              <div class="flex w-full flex-wrap p-3">
                <section class="w-full bg-white shadow-md rounded-lg p-3">
                  <span>Dịch vụ Hosting</span>
                  <CustomerAllService v-model="hostings" class="w-full"></CustomerAllService>
                </section>
              </div>
              <div class="flex w-full flex-wrap p-3">
                <section class="w-full bg-white shadow-md rounded-lg p-3">
                  <span>Dịch vụ SSL</span>
                  <CustomerAllService v-model="ssls" class="w-full"></CustomerAllService>
                </section>
              </div>
              <div class="flex w-full flex-wrap p-3">
                <section class="w-full bg-white shadow-md rounded-lg p-3">
                  <span>Dịch vụ Email</span>
                  <CustomerAllService v-model="emails" class="w-full"></CustomerAllService>
                </section>
              </div>
            </div>
            <div class="flex-noshink">
              <div class="flex w-full flex-wrap p-3">
                <section class="w-full bg-white shadow-md rounded-lg p-3">
                  <span>Dịch vụ Google</span>
                  <CustomerAllService v-model="googles" class="w-full"></CustomerAllService>
                </section>
              </div>
              <div class="flex w-full flex-wrap p-3">
                <section class="w-full bg-white shadow-md rounded-lg p-3">
                  <span>Dịch vụ Facebook</span>
                  <CustomerAllService v-model="facebooks" class="w-full"></CustomerAllService>
                </section>
              </div>
              <div class="flex w-full flex-wrap p-3">
                <section class="w-full bg-white shadow-md rounded-lg p-3">
                  <span>Dịch vụ Nội dung Marketing</span>
                  <CustomerAllService v-model="contents" class="w-full"></CustomerAllService>
                </section>
              </div>
              <div class="flex w-full flex-wrap p-3">
                <section class="w-full bg-white shadow-md rounded-lg p-3">
                  <span>Dịch vụ Bảo trì Website</span>
                  <CustomerAllService v-model="maintenances" class="w-full"></CustomerAllService>
                </section>
              </div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Khách hàng" width="300">
        <template slot-scope="scope">
          <div v-if="scope.row.gender === '1'">
            <span v-if="scope.row.fullname">Anh {{ scope.row.fullname }}</span>
          </div>
          <div v-else>
            <span v-if="scope.row.fullname">Chị {{ scope.row.fullname }}</span>
          </div>
          <div class="info"> 
            <span v-if="scope.row.phone">{{ scope.row.phone }}</span>
            <span v-if="scope.row.email">/ {{ scope.row.email }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Loại khách hàng" width="200">
        <template slot-scope="scope">
          <el-tag
            v-if="scope.row.customer_type == 'personal'"
            size="mini"
            type="primary"
            effect="dark"
          >
            Khách cá nhân
          </el-tag>
          <el-tag
            v-else-if="scope.row.customer_type == 'company'"
            size="mini"
            type="success"
            effect="dark"
          >
            Khách công ty
          </el-tag>
          <el-tag
            v-else
            size="mini"
            type="danger"
            effect="dark"
          >
            Khách thân thiết
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Địa chỉ">
        <template slot-scope="scope">
          {{ scope.row.address }}
        </template>
      </el-table-column>
      <el-table-column label="CCCD/CMND" width="230">
        <template slot-scope="scope">
          {{ scope.row.cmnd }}
        </template>
      </el-table-column>
      <el-table-column label="Hình CCCD/CMND" width="250">
        <template slot-scope="scope">
          <div class="grid grid-cols-3 gap-2">
            <img v-if="scope.row.image_front_cmnd" class="rounded-lg h-12" :src="scope.row.image_front_cmnd" />
            <img v-if="scope.row.image_backside_cmnd" class="rounded-lg h-12" :src="scope.row.image_backside_cmnd" />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Thao tác" width="180">
        <template slot-scope="scope">
          <el-button @click="$router.push(`/customer/${scope.row._id}`)" size="mini">Sửa</el-button>
          <el-button @click="remove(scope.row._id)" size="mini" type="danger">Xóa</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination 
      background 
      layout="prev, pager, next" 
      v-if="$attrs.value.total" 
      :page-size="$attrs.value.total.pageSize" 
      :total="$attrs.value.total.rows"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
        searchStr: this.$route.query.search,
        visible: false
      }
    },

    watch:{
      searchStr(){
        this.search()
      }
    },

    methods: {
      async reload() {
        await this.$store.dispatch('customer/init', {search: this.$route.query.search});
        await this.$store.commit('customer/initCountAll', (await this.$axios.get('/customers')).data);
        await this.$store.commit('customer/initCountPersonalType', (await this.$axios.get('/customers?typeCustomer=personal')).data);
        await this.$store.commit('customer/initCountCompanyType', (await this.$axios.get('/customers?typeCustomer=company')).data);
        await this.$store.commit('customer/initCountFriendlyType', (await this.$axios.get('/customers?typeCustomer=friendly')).data);
      },

      search() {
        this.$store.dispatch('customer/init', {search: this.searchStr});
      },

      handleCurrentChange(val) {
        this.$store.dispatch('customer/init', {page: val});
      },

      getPersonalType() {
        this.$store.dispatch('customer/getPersonalType');
      },

      getCompanyType() {
        this.$store.dispatch('customer/getCompanyType');
      },

      getFriendlyType() {
        this.$store.dispatch('customer/getFriendlyType');
      },

      getUseDomain(id) {
        return this.$store.dispatch('customer/getDomain', id);
      },

      async remove(id) {
        try {
          this.$confirm('Bạn có muốn xóa khách hàng này không?', 'Xóa khách hàng', {
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy bỏ',
            type: 'warning'
          }).then(async () => {
            await this.$store.dispatch('customer/delete', id);
            this.$message({
              type: 'success',
              message: 'Xóa thành công'
            });
            this.reload();
          }).catch(() => {});
        } catch (error) {
          this.$message({
            message: 'Xóa thất bại',
            type: 'error'
          });
        }
      }
    },

    computed: {
      countAll() {
        return this.$store.state.customer.countAll;
      },

      countPersonalType() {
        return this.$store.state.customer.countPersonalType;
      },

      countCompanyType() {
        return this.$store.state.customer.countCompanyType;
      },

      countFriendlyType() {
        return this.$store.state.customer.countFriendlyType;
      },

      domains() {
        return JSON.parse(JSON.stringify(this.$store.state.customer.domain));
      },

      hostings() {
        return JSON.parse(JSON.stringify(this.$store.state.customer.hosting));
      },

      ssls() {
        return JSON.parse(JSON.stringify(this.$store.state.customer.ssl));
      },

      emails() {
        return JSON.parse(JSON.stringify(this.$store.state.customer.email));
      },

      googles() {
        return JSON.parse(JSON.stringify(this.$store.state.customer.google));
      },

      facebooks() {
        return JSON.parse(JSON.stringify(this.$store.state.customer.facebook));
      },

      contents() {
        return JSON.parse(JSON.stringify(this.$store.state.customer.content));
      },

      maintenances() {
        return JSON.parse(JSON.stringify(this.$store.state.customer.maintenance));
      },
    },

    async mounted() {
      await this.$store.dispatch('customer/init', {search: this.$route.query.search});
      await this.$store.commit('customer/initCountAll', (await this.$axios.get('/customers')).data);
      await this.$store.commit('customer/initCountPersonalType', (await this.$axios.get('/customers?typeCustomer=personal')).data);
      await this.$store.commit('customer/initCountCompanyType', (await this.$axios.get('/customers?typeCustomer=company')).data);
      await this.$store.commit('customer/initCountFriendlyType', (await this.$axios.get('/customers?typeCustomer=friendly')).data);

      await this.$store.dispatch('customer/init', id);
    }
  }
</script>
  
<style>
  .el-pagination {
    float: right;
    margin-top: 20px;
  }
</style>