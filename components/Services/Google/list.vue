<template>
  <div v-if="$attrs.value" class="w-full plans-list">
    <span class="w-full flex mb-3">
      <div class="flex-grow">
        <div class="grid grid-cols-12 gap-4">
          <el-button class="btn-filter" type="primary" size="small" @click="search()">Đang sử dụng: {{ countAll }}</el-button>
          <el-button class="btn-filter" type="warning" size="small" @click="getPeriodType()">Sắp hết hạn: {{ countPeriod }}</el-button>
          <el-button class="btn-filter" type="danger" size="small" @click="getExpiredType()">Hết hạn: {{ countExpired }}</el-button>
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
      <el-table-column label="Tên gói" width="150">
        <template slot-scope="scope">
          {{ scope.row.plan[0].name }}
        </template>
      </el-table-column>
      <el-table-column label="Thông tin khách hàng" width="300">
        <template slot-scope="scope">
          <p>{{ scope.row.customer[0].fullname }} / {{ scope.row.customer[0].customer_type }}</p>
          <p>{{ scope.row.customer[0].phone }} / {{ scope.row.customer[0].email }}</p>
        </template>
      </el-table-column>
      <el-table-column label="Trạng thái" width="220">
        <template slot-scope="scope">
          <el-tag
            size="mini"
            effect="dark"
            :type="compareDate(scope.row.expiredAt).type"
          >
            {{ compareDate(scope.row.expiredAt).daysLeft }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Chi phí" width="200">
        <template slot-scope="scope">
          {{ scope.row.plan[0].price * 12 | currency(' đ', 0, { symbolOnLeft: false }) }} / năm
        </template>
      </el-table-column>
      <el-table-column label="Phí dịch vụ" width="150">
        <template slot-scope="scope">
          {{ scope.row.plan[0].service_charge | currency(' đ', 0, { symbolOnLeft: false }) }}
        </template>
      </el-table-column>
      <el-table-column label="Ngày tạo" width="180">
        <template slot-scope="scope">
          {{ scope.row.startedAt | moment("DD-MM-YYYY") }}
        </template>
      </el-table-column>
      <el-table-column label="Ngày hết hạn" width="180">
        <template slot-scope="scope">
          {{ scope.row.expiredAt | moment("DD-MM-YYYY") }}
        </template>
      </el-table-column>
      <el-table-column label="Thao tác" width="190">
        <template slot-scope="scope">
          <el-button @click="detail(scope.row._id)" size="mini">Sửa</el-button>
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

    <el-dialog
      :visible.sync="dialogFormUpdate"
      title="Cập nhật dịch vụ"
      width="30%"
    >
      <el-form>
        <el-form-item label="Tên gói google (*)">
          <el-input disabled size="small" v-if="selectedItem.plan" :value="selectedItem.plan.name"></el-input>
        </el-form-item>
        <el-form-item label="Khách hàng (*)">
          <el-input disabled size="small" v-if="selectedItem.customer" :value="selectedItem.customer.fullname"></el-input>
        </el-form-item>
        <el-form-item label="Ngày tạo (*)">
          <el-date-picker
            v-model="selectedItem.startedAt"
            type="date"
            placeholder="Chọn ngày tạo"
            size="small"
            disabled
          />
        </el-form-item>
        <el-form-item label="Ngày hết hạn (*)">
          <el-date-picker
            v-model="selectedItem.expiredAt"
            type="date"
            placeholder="Chọn ngày hết hạn"
            size="small"
          />
        </el-form-item>
      </el-form>
      <template>
        <span class="dialog-footer">
          <el-button type="primary" size="small" @click="update()">Lưu</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
  import moment from 'moment';
  
  export default {
    data() {
      return {
        searchStr: this.$route.query.search,
        visible: false,
        dialogFormAdd: false,
        dialogFormUpdate: false,
        model: {
          plan: "",
          customer: "",
          startedAt: "",
          expiredAt: ""
        },
        selectedItem: {}
      }
    },

    watch:{
      searchStr(){
        this.search()
      }
    },

    methods: {
      async reload() {
        await this.$store.dispatch('google/init', {search: this.$route.query.search});
        await this.$store.commit('google/initCountAll', (await this.$axios.get('/googles')).data);
        await this.$store.commit('google/initCountPeriod', (await this.$axios.get('/googles?periodType=1')).data);
        await this.$store.commit('google/initCountExpired', (await this.$axios.get('/googles?expiredType=2')).data);
      },

      search() {
        this.$store.dispatch('google/init', {search: this.searchStr});
      },

      handleCurrentChange(val) {
        this.$store.dispatch('google/init', {page: val});
      },

      getPeriodType() {
        this.$store.dispatch('google/getPeriodType');
      },

      getExpiredType() {
        this.$store.dispatch('google/getExpiredType');
      },

      compareDate(date) {
        var period_date = moment(date, "YYYY-MM-DD");
        var current_date = moment(new Date(), "YYYY-MM-DD");
        var count = moment.duration(period_date.diff(current_date)).asDays();

        if(Math.round(count, 0) > 30) {
          return { daysLeft: 'Đang sử dụng', type: 'primary' };
        } else if (Math.round(count, 0) < 0) {
          return { daysLeft: 'Hết hạn', type: 'danger' };
        } else {
          return { daysLeft: `Còn ${Math.round(count, 0)} ngày hết hạn`, type: 'warning' };
        }
      },

      async detail(id) {
        var data = await this.$store.dispatch("google/getDetail", id);
        this.selectedItem = data;
        this.dialogFormUpdate = true;
      },

      async save() {
        try {
          await this.$store.dispatch('google/create', this.model);
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

      async update() {
        try {
          await this.$store.dispatch('google/update', { id: this.selectedItem._id, data: this.selectedItem });
          this.$message({
            message: 'Cập nhật dịch vụ thành công',
            type: 'success'
          });
          this.dialogFormUpdate = false;
          this.reload();
        } catch (error) {
          this.$message({
            message: 'Cập nhật dịch vụ thất bại',
            type: 'error'
          });
        }
      },
        
      async remove(id) {
        try {
          this.$confirm('Bạn có muốn xóa dịch vụ này không?', 'Xóa dịch vụ', {
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy bỏ',
            type: 'warning'
          }).then(async () => {
            await this.$store.dispatch('google/delete', id);
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
      customers() {
        return this.$store.state.customer.model.data;
      },

      googlePlans() {
        return this.$store.state.googlePlan.model.data;
      },

      countAll() {
        return this.$store.state.google.countAll;
      },

      countPeriod() {
        return this.$store.state.google.countPeriod;
      },

      countExpired() {
        return this.$store.state.google.countExpired;
      }, 
    },

    async mounted() {
      await this.$store.dispatch("customer/init", {search: this.$route.query.search});
      await this.$store.dispatch("googlePlan/init");
      await this.$store.commit('google/initCountAll', (await this.$axios.get('/googles')).data);
      await this.$store.commit('google/initCountPeriod', (await this.$axios.get('/googles?periodType=1')).data);
      await this.$store.commit('google/initCountExpired', (await this.$axios.get('/googles?expiredType=2')).data);
    }
  }
</script>

<style>
  .plans-list .show-domain {
    width: 100%;
  }

  .plans-list .el-select {
    width: 100%;
  }

  .plans-list .el-date-editor {
    width: 100% !important;
  }

  .plans-list .el-dialog__body {
    padding-top: 0;
  }

  .plans-list .el-form-item {
    margin-bottom: 0px;
  }

  .plans-list .el-dialog__body .el-button {
    margin-top: 20px;
  }
</style>