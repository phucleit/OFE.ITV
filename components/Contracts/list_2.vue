<template>
  <div v-if="$attrs.value" class="w-full form-card">
    <span class="w-full flex mb-3">
      <div class="flex-grow">
        <div class="grid grid-cols-12 gap-4">
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
        <el-button size="small" type="success" @click="dialogFormAdd = true">Thêm mới</el-button>
      </div>
    </span>
    <el-table :data="$attrs.value.data" stripe style="width: 100%">
      <el-table-column label="MSHĐ" width="100">
        <template slot-scope="scope">
          {{ scope.row.code }}
        </template>
      </el-table-column>
      <el-table-column label="Khách hàng" width="280">
        <!-- <template slot-scope="scope">
          <p v-if="scope.row.customer">{{ scope.row.customer[0].fullname }} / {{ scope.row.customer[0].customer_type }}</p>
          <p v-if="scope.row.customer">{{ scope.row.customer[0].phone }} / {{ scope.row.customer[0].email }}</p>
        </template> -->
      </el-table-column>
      <el-table-column label="Chi phí thiết kế website" width="250">
        <template slot-scope="scope">
          {{ scope.row.price | currency(' đ', 0, { symbolOnLeft: false }) }}
        </template>
      </el-table-column>
      <!-- <el-table-column label="Tên miền" width="125">
        <template>
          []
        </template>
      </el-table-column>
      <el-table-column label="Hosting" width="125">
        <template slot-scope="scope">
          {{ scope.row.hosting }}
        </template>
      </el-table-column>
      <el-table-column label="SSL" width="125">
        <template slot-scope="scope">
          {{ scope.row.ssl }}
        </template>
      </el-table-column>
      <el-table-column label="Email" width="125">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column label="Google" width="125">
        <template slot-scope="scope">
          {{ scope.row.google }}
        </template>
      </el-table-column>
      <el-table-column label="Facebook" width="125">
        <template slot-scope="scope">
          {{ scope.row.facebook }}
        </template>
      </el-table-column>
      <el-table-column label="Nội dung" width="125">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>
      <el-table-column label="Bảo trì website" width="125">
        <template slot-scope="scope">
          {{ scope.row.maintenance }}
        </template>
      </el-table-column> -->
      <el-table-column label="Thao tác" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="$router.push(`/contracts/${scope.row._id}`)">Chi tiết</el-button>
          <el-button size="mini" type="danger">Xóa</el-button>
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
      :visible.sync="dialogFormAdd"
      title="Thêm hợp đồng mới"
      width="30%"
    >
      <el-form>
        <div class="grid grid-cols-2 gap-2 plans-list">
          <el-form-item label="Mã số hợp đồng (*)">
            <el-input size="small" placeholder="Nhập mã số hợp đồng..."></el-input>
          </el-form-item>
          <el-form-item label="Khách hàng">
            <el-select filterable size="small" placeholder="Chọn khách hàng...">
              <el-option
                v-for="item in customers"
                :key="item._id"
                :label="item.fullname"
                :value="item._id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Tên miền">
            <el-select filterable multiple v-model="test" size="small" placeholder="Chọn tên miền...">
              <el-option
                v-for="item in domains"
                :key="item._id"
                :label="item.name"
                :value="item._id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Hosting">
            <el-select filterable size="small" placeholder="Chọn hosting...">
              <el-option
                v-for="item in hostings"
                :key="item._id"
                :label="item.plan[0].name"
                :value="item._id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="SSL">
            <el-select filterable size="small" placeholder="Chọn ssl...">
              <el-option
                v-for="item in ssls"
                :key="item._id"
                :label="item.plan[0].name"
                :value="item._id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Email">
            <el-select filterable size="small" placeholder="Chọn email...">
              <el-option
                v-for="item in emails"
                :key="item._id"
                :label="item.plan[0].name"
                :value="item._id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Google">
            <el-select filterable size="small" placeholder="Chọn google...">
              <el-option
                v-for="item in googles"
                :key="item._id"
                :label="item.plan[0].name"
                :value="item._id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Facebook">
            <el-select filterable size="small" placeholder="Chọn facebook...">
              <el-option
                v-for="item in facebooks"
                :key="item._id"
                :label="item.plan[0].name"
                :value="item._id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Nội dung marketing">
            <el-select filterable size="small" placeholder="Chọn nội dung marketing...">
              <el-option
                v-for="item in contents"
                :key="item._id"
                :label="item.plan[0].name"
                :value="item._id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Bảo trì website">
            <el-select filterable size="small" placeholder="Chọn bảo trì website...">
              <el-option
                v-for="item in maintenances"
                :key="item._id"
                :label="item.plan[0].name"
                :value="item._id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Chi phí thiết kế website">
            <el-input size="small" placeholder="Nhập chi phí thiết kế website..."></el-input>
          </el-form-item>
          <el-form-item label="Ngày tạo (*)">
            <el-date-picker
              type="date"
              placeholder="Chọn ngày tạo"
              size="small"
            />
          </el-form-item>
        </div>
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
        searchStr: this.$route.query.search,
        dialogFormAdd: false,
        test: []
      }
    },

    watch:{
      searchStr(){
        this.search()
      }
    },

    methods: {
      search() {
        this.$store.dispatch('contract/init');
      },

      handleCurrentChange(val) {
        this.$store.dispatch('contract/init', {page: val});
      },

      async remove(id) {
        try {
          this.$confirm('Bạn có muốn xóa hợp đồng này không?', 'Xóa hợp đồng', {
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy bỏ',
            type: 'warning'
          }).then(async () => {
            await this.$store.dispatch('contract/delete', id);
            this.$message({
                type: 'success',
                message: 'Xóa thành công'
            });
            await this.$store.dispatch('contract/init');
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

      domains() {
        return this.$store.state.domain.model.data;
      },

      hostings() {
        return this.$store.state.hosting.model.data;
      },

      ssls() {
        return this.$store.state.ssl.model.data;
      },

      emails() {
        return this.$store.state.email.model.data;
      },

      googles() {
        return this.$store.state.google.model.data;
      },

      facebooks() {
        return this.$store.state.facebook.model.data;
      },

      contents() {
        return this.$store.state.content.model.data;
      },

      maintenances() {
        return this.$store.state.maintenance.model.data;
      },
    },

    async mounted() {
      await this.$store.dispatch("customer/init", {search: this.$route.query.search});
      await this.$store.dispatch("domain/init", {search: this.$route.query.search});
      await this.$store.dispatch("hosting/init", {search: this.$route.query.search});
      await this.$store.dispatch("ssl/init", {search: this.$route.query.search});
      await this.$store.dispatch("email/init", {search: this.$route.query.search});
      await this.$store.dispatch("google/init", {search: this.$route.query.search});
      await this.$store.dispatch("facebook/init", {search: this.$route.query.search});
      await this.$store.dispatch("content/init", {search: this.$route.query.search});
      await this.$store.dispatch("maintenance/init", {search: this.$route.query.search});
    }
  }
</script>
  
<style>
  .el-pagination {
    float: right;
    margin-top: 20px;
  }
</style>