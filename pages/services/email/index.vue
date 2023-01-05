<template>
  <div class="w-full flex flex-wrap mt-4 services-list">
    <el-page-header @back="goBack" title="" class="py-3 px-3 shadow-md bg-white w-full rounded-lg mb-5">
      <template #content class="w-full">
        <div class="flex w-full justify-between items-center">
          <span class="flex-grow">
            <span>Danh sách dịch vụ Email</span>
          </span>
          <el-button @click="dialogFormAdd = true" size="mini" type="primary">Thêm mới</el-button>
        </div>
      </template>
    </el-page-header>
    <span class="shadow-md p-3 h-full w-full flex bg-white rounded-lg">
      <div v-if="emails" class="flex w-full flex-wrap p-3">
        <ServicesEmailList v-model="emails" class="w-full"></ServicesEmailList>
      </div>
    </span>

    <el-dialog
      :visible.sync="dialogFormAdd"
      title="Thêm dịch vụ mới"
      width="30%"
    >
      <el-form>
        <el-form-item label="Tên gói email (*)">
          <el-select v-model="model.plan" size="small" filterable placeholder="Chọn gói email">
            <el-option
              v-for="item in emailPlans"
              :key="item._id"
              :label="item.name"
              :value="item._id"
            >
              {{ item.name }} ({{ item.sell_price | currency(' đ', 0, { symbolOnLeft: false }) }} / tháng)
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Khách hàng (*)">
          <el-select size="small" v-model="model.customer" filterable placeholder="Chọn khách hàng">
            <el-option
              v-for="item in customers"
              :key="item._id"
              :label="item.fullname"
              :value="item._id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Ngày tạo (*)">
          <el-date-picker
            v-model="model.startedAt"
            type="date"
            placeholder="Chọn ngày tạo"
            size="small"
          />
        </el-form-item>
        <el-form-item label="Ngày hết hạn (*)">
          <el-date-picker
            v-model="model.expiredAt"
            type="date"
            placeholder="Chọn ngày hết hạn"
            size="small"
          />
        </el-form-item>
      </el-form>
      <template>
        <span class="dialog-footer">
          <el-button type="primary" size="small" @click="save()">Lưu</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
  
<script>
  export default {
    data() {
      return {
        dialogFormAdd: false,
        model: {
          plan: "",
          customer: "",
          startedAt: "",
          expiredAt: ""
        },
      }
    },

    methods: {
      goBack() {
        this.$router.go(-1)
      },

      async reload() {
        await this.$store.dispatch('email/init', {search: this.$route.query.search});
        await this.$store.commit('email/initCountAll', (await this.$axios.get('/emails')).data);
        await this.$store.commit('email/initCountPeriod', (await this.$axios.get('/emails?periodType=1')).data);
        await this.$store.commit('email/initCountExpired', (await this.$axios.get('/emails?expiredType=2')).data);
      },

      async save() {
        try {
          await this.$store.dispatch('email/create', this.model);
          this.$message({
            message: 'Thêm dịch vụ thành công',
            type: 'success'
          });
          this.dialogFormAdd = false;
          this.reload();
        } catch (error) {
          this.$message({
            message: 'Thêm dịch vụ thất bại',
            type: 'error'
          });
        }
      },
    },

    computed: {
      emails() {
        return JSON.parse(JSON.stringify(this.$store.state.email.model));
      },

      customers() {
        return this.$store.state.customer.model.data;
      },

      emailPlans() {
        return this.$store.state.emailPlan.model.data;
      },
    },  

    async mounted() {
      await this.$store.dispatch("email/init", {search: this.$route.query.search});
      await this.$store.dispatch("customer/init", {search: this.$route.query.search});
      await this.$store.dispatch("emailPlan/init");
      await this.$store.commit('email/initCountAll', (await this.$axios.get('/emails')).data);
      await this.$store.commit('email/initCountPeriod', (await this.$axios.get('/emails?periodType=1')).data);
      await this.$store.commit('email/initCountExpired', (await this.$axios.get('/emails?expiredType=2')).data);
    }
  }
</script>
  
<style>
  .el-page-header__content {
    width: inherit;
  }
</style>