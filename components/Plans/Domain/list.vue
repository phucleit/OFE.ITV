<template>
  <div v-if="$attrs.value" class="w-full form-card">
    <span class="w-full flex">
      <div class="flex-grow">
        <h3 class="text-2xl font-bold"><i class='bx bx-menu'></i> Bảng giá tên miền</h3>
      </div>
      <div class="flex items-center pl-2">
        <el-button size="small" type="success" @click="dialogFormAdd = true">Thêm mới</el-button>
      </div>
    </span>
    <el-table :data="$attrs.value.data" stripe style="width: 100%">
      <el-table-column label="Địa chỉ tên miền">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="Giá tên miền">
        <template slot-scope="scope">
          {{ scope.row.sell_price | currency(' đ', 0, { symbolOnLeft: false }) }}
        </template>
      </el-table-column>
      <el-table-column label="Thao tác" width="140">
        <template slot-scope="scope">
          <el-button @click="detail(scope.row)" size="mini">Sửa</el-button>
          <el-button @click="remove(scope.row._id)" size="mini" type="danger">Xóa</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :visible.sync="dialogFormAdd"
      title="Thêm tên miền mới"
      width="30%"
    >
      <el-form>
        <el-form-item label="Tên miền (*)">
          <el-input size="small" v-model="model.name" placeholder="Nhập tên miền..."></el-input>
        </el-form-item>
        <el-form-item label="Chi phí nhập (*)">
          <money v-model="model.price" class="el-input__inner"></money>
        </el-form-item>
        <el-form-item label="Chi phí bán (*)">
          <money v-model="model.sell_price" class="el-input__inner"></money>
        </el-form-item>
      </el-form>
      <template>
        <span class="dialog-footer">
          <el-button type="primary" size="small" @click="save()">Lưu</el-button>
        </span>
      </template>
    </el-dialog>

    <el-dialog
      :visible.sync="dialogFormUpdate"
      title="Cập nhật tên miền"
      width="30%"
    >
      <el-form>
        <el-form-item label="Tên miền (*)">
          <el-input disabled size="small" v-model="selectedItem.name" placeholder="Nhập tên miền..."></el-input>
        </el-form-item>
        <el-form-item label="Chi phí nhập (*)">
          <money v-model="selectedItem.price" class="el-input__inner"></money>
        </el-form-item>
        <el-form-item label="Chi phí bán (*)">
          <money v-model="selectedItem.sell_price" class="el-input__inner"></money>
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
  export default {
    data() {
      return {
        dialogFormAdd: false,
        dialogFormUpdate: false,
        model: {
          name: '',
          price: '',
          sell_price: ''
        },
        selectedItem: {}
      }
    },

    methods: {
      detail(item) {
        this.selectedItem = item;
        this.dialogFormUpdate = true;
      },

      async save() {
        try {
          await this.$store.dispatch('domainPlan/create', this.model);
          this.$message({
            message: 'Thêm tên miền thành công',
            type: 'success'
          });
          this.dialogFormAdd = false;
          await this.$store.dispatch('domainPlan/init');
        } catch (error) {
          this.$message({
            message: 'Thêm tên miền thất bại',
            type: 'error'
          });
        }
      },

      async update() {
        try {
          await this.$store.dispatch('domainPlan/update', { id: this.selectedItem._id, data: this.selectedItem });
          this.$message({
            message: 'Cập nhật tên miền thành công',
            type: 'success'
          });
          this.dialogFormUpdate = false;
          await this.$store.dispatch('domainPlan/init');
        } catch (error) {
          this.$message({
            message: 'Cập nhật tên miền thất bại',
            type: 'error'
          });
        }
      },
        
      async remove(id) {
        try {
          this.$confirm('Bạn có muốn xóa tên miền này không?', 'Xóa tên miền', {
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy bỏ',
            type: 'warning'
          }).then(async () => {
            await this.$store.dispatch('domainPlan/delete', id);
            this.$message({
                type: 'success',
                message: 'Xóa thành công'
            });
            await this.$store.dispatch('domainPlan/init');
          }).catch(() => {});
        } catch (error) {
          this.$message({
            message: 'Xóa thất bại',
            type: 'error'
          });
        }
      }
    },
  }
</script>

<style>
  .el-card {
    text-align: center;
  }

  .form-card .el-dialog__body {
    padding-top: 0;
  }

  .form-card .el-form-item {
    margin-bottom: 0px;
  }

  .form-card .el-dialog__body .el-button {
    margin-top: 20px;
  }

  .v-money {
    border-radius: 4px !important;
    height: 32px !important;
    line-height: 32px !important;
  }
</style>