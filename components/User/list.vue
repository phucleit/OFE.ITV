<template>
  <div v-if="$attrs.value" class="w-full plans-list">
    <el-table :data="$attrs.value" stripe style="width: 100%">
      <el-table-column label="Tên tài khoản">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column label="Email">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column label="Thao tác" width="200">
        <template slot-scope="scope">
          <el-button @click="detail(scope.row._id)" size="mini">Sửa</el-button>
          <el-button @click="remove(scope.row._id)" size="mini" type="danger">Xóa</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :visible.sync="dialogFormUpdate"
      title="Cập nhật tài khoản"
      width="30%"
    >
      <el-form>
        <el-form-item label="Tên tài khoản (*)">
          <el-input placeholder="Nhập tên tài khoản..." v-if="selectedItem.username" v-model="selectedItem.username"></el-input>
        </el-form-item>
        <el-form-item label="Mật khẩu (*)">
          <el-input placeholder="Nhập mật khẩu..." v-if="selectedItem.password" v-model="selectedItem.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="Email (*)">
          <el-input placeholder="Nhập email..." v-if="selectedItem.email" v-model="selectedItem.email"></el-input>
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
        visible: false,
        dialogFormAdd: false,
        dialogFormUpdate: false,
        model: {
          username: "",
          password: "",
          email: "",
        },
        selectedItem: {}
      }
    },

    watch:{

    },

    methods: {
      async reload() {
        await this.$store.dispatch('user/init');
      },

      async detail(id) {
        var data = await this.$store.dispatch("user/getDetail", id);
        this.selectedItem = data;
        this.dialogFormUpdate = true;
      },

      async update() {
        try {
          if (this.selectedItem._id == '637adc902d6c02581e37c33f') {
            this.$alert('Đây là tài khoản admin bạn không thể cập nhật!', 'Cập nhập tài khoản', {
              confirmButtonText: 'Hủy bỏ',
            });
          } else {
            await this.$store.dispatch('user/update', { id: this.selectedItem._id, data: this.selectedItem });
            this.$message({
              message: 'Cập nhật tài khoản thành công',
              type: 'success'
            });
            this.dialogFormUpdate = false;
            this.reload();
          }
        } catch (error) {
          this.$message({
            message: 'Cập nhật tài khoản thất bại',
            type: 'error'
          });
        }
      },
        
      async remove(id) {
        try {
          if (id == '637adc902d6c02581e37c33f') {
            this.$alert('Đây là tài khoản admin bạn không thể xóa!', 'Xóa tài khoản', {
              confirmButtonText: 'Hủy bỏ',
            });
          } else {
            this.$confirm('Bạn có muốn xóa tài khoản này không?', 'Xóa tài khoản', {
              confirmButtonText: 'Đồng ý',
              cancelButtonText: 'Hủy bỏ',
              type: 'warning'
            }).then(async () => {
              await this.$store.dispatch('user/delete', id);
              this.$message({
                  type: 'success',
                  message: 'Xóa thành công'
              });
              this.reload();
            }).catch(() => {});
          }
        } catch (error) {
          this.$message({
            message: 'Xóa thất bại',
            type: 'error'
          });
        }
      }
    },

    computed: {

    },

    async mounted() {
      await this.$store.dispatch("user/init");
    }
  }
</script>

<style>
</style>