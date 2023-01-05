<template>
  <div v-if="$attrs.value" class="w-full services-list">
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
    <el-table v-if="$attrs.value.data" :data="$attrs.value.data" stripe style="width: 100%">
      <el-table-column label="Tên miền" width="200">
        <template slot-scope="scope">
          <span v-if="scope.row.name && scope.row.plan">{{ scope.row.name }}{{ scope.row.plan[0].name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Thông tin khách hàng" width="350">
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
      <el-table-column label="Chi phí" width="180">
        <template slot-scope="scope">
          {{ scope.row.plan[0].sell_price | currency(' đ', 0, { symbolOnLeft: false }) }}
        </template>
      </el-table-column>
      <el-table-column label="Ngày tạo" width="200">
        <template slot-scope="scope">
          {{ scope.row.startedAt | moment("DD-MM-YYYY") }}
        </template>
      </el-table-column>
      <el-table-column label="Ngày hết hạn" width="220">
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
        <el-form-item label="Tên miền (*)">
          <div class="grid grid-cols-2 gap-2 show-domain">
            <el-input disabled size="small" :value="selectedItem.name"></el-input>
            <el-input disabled size="small" v-if="selectedItem.plan" :value="selectedItem.plan.name"></el-input>
          </div>
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
          name: "",
          plan: "",
          customer: "",
          startedAt: "",
          expiredAt: ""
        },
        selectedItem: {},
      }
    },

    watch:{
      searchStr(){
        this.search()
      }
    },

    methods: {
      async reload() {
        await this.$store.dispatch('domain/init', {search: this.$route.query.search});
        await this.$store.commit('domain/initCountAll', (await this.$axios.get('/domains')).data);
        await this.$store.commit('domain/initCountPeriod', (await this.$axios.get('/domains?periodType=1')).data);
        await this.$store.commit('domain/initCountExpired', (await this.$axios.get('/domains?expiredType=2')).data);
      },

      search() {
        this.$store.dispatch('domain/init', {search: this.searchStr});
      },

      handleCurrentChange(val) {
        this.$store.dispatch('domain/init', {page: val});
      },

      getPeriodType() {
        this.$store.dispatch('domain/getPeriodType');
      },

      getExpiredType() {
        this.$store.dispatch('domain/getExpiredType');
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
        var data = await this.$store.dispatch("domain/getDetail", id);
        this.selectedItem = data;
        this.dialogFormUpdate = true;
      },

      async save() {
        try {
          await this.$store.dispatch('domain/create', this.model);
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
          await this.$store.dispatch('domain/update', { id: this.selectedItem._id, data: this.selectedItem });
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
            await this.$store.dispatch('domain/delete', id);
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

      domainPlans() {
        return this.$store.state.domainPlan.model.data;
      },

      countAll() {
        return this.$store.state.domain.countAll;
      },

      countPeriod() {
        return this.$store.state.domain.countPeriod;
      },

      countExpired() {
        return this.$store.state.domain.countExpired;
      },
    },

    async mounted() {
      await this.$store.dispatch("customer/init", {search: this.$route.query.search});
      await this.$store.dispatch("domainPlan/init");
      await this.$store.commit('domain/initCountAll', (await this.$axios.get('/domains')).data);
      await this.$store.commit('domain/initCountPeriod', (await this.$axios.get('/domains?periodType=1')).data);
      await this.$store.commit('domain/initCountExpired', (await this.$axios.get('/domains?expiredType=2')).data);
    }
  }
</script>

<style>
  .services-list .show-domain {
    width: 100%;
  }

  .services-list .el-select {
    width: 100%;
  }

  .services-list .el-date-editor {
    width: 100% !important;
  }

  .services-list .el-dialog__body {
    padding-top: 0;
  }

  .services-list .el-form-item {
    margin-bottom: 2px;
  }

  .services-list .el-dialog__body .el-button {
    margin-top: 20px;
  }

  .btn-filter {
    margin-left: 0px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
</style>