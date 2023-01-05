<template>
  <div>
    <el-table :data="$store.state.userRole.model" stripe style="width: 100%">
        <el-table-column label="Tên quyền" width="300">
          <template slot-scope="scope">
            {{scope.row.name}}
          </template>
        </el-table-column>
        <el-table-column label="Các dịch vụ">
          <template slot-scope="scope">
            {{scope.row.modules.map(p=>p.module)}}
          </template>
        </el-table-column>
        <el-table-column label="Các tài khoản thuộc quyền">
          <template slot-scope="scope">
            {{scope.row.modules.map(p=>p.module)}}
          </template>
        </el-table-column>
        <el-table-column label="Thao tác" width="180">
          <template slot-scope="scope">
            <NuxtLink :to="`/users/roles/${scope.row._id}`">
              <el-button size="mini">Sửa</el-button>
            </NuxtLink>
            <el-button size="mini" @click="remove(scope.row._id)" type="danger">Xóa</el-button>
          </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  methods: {
    async remove(id) {
      try {
        this.$confirm('Bạn có muốn xóa quyền này không?', 'Xóa quyền', {
          confirmButtonText: 'Đồng ý',
          cancelButtonText: 'Hủy bỏ',
          type: 'warning'
        }).then(async () => {
          await this.$store.dispatch('userRole/delete', id)
          this.$message({
              type: 'success',
              message: 'Xóa thành công'
          });
          await this.$store.dispatch('userRole/init');
        }).catch(() => {});
      } catch (error) {
        this.$message({
          message: 'Xóa thất bại',
          type: 'error'
        });
      }
    },
  }
}
</script>

<style>

</style>