<template>
    <div class="w-full flex flex-wrap plans-list">
      <el-page-header @back="goBack" title="" class="py-3 px-3 shadow-md bg-white w-full rounded-lg mb-5">
        <template #content class="w-full">
          <div class="flex w-full justify-between items-center">
            <span class="flex-grow">
              <span>Danh sách người dùng</span>
            </span>
            <el-button @click="dialogFormAdd = true" size="mini" type="primary">Thêm mới</el-button>
          </div>
        </template>
      </el-page-header>
      <span class="shadow-md p-3 h-full w-full flex bg-white rounded-lg">
        <div class="flex w-full flex-wrap p-3">
          <UserList v-model="model" class="w-full"></UserList>
        </div>
      </span>
  
      <el-dialog
        :visible.sync="dialogFormAdd"
        title="Thêm tài khoản mới"
        width="30%"
      >
        <el-form>
          <el-form-item label="Tên tài khoản (*)">
            <el-input placeholder="Nhập tên tài khoản..." v-model="model.username"></el-input>
          </el-form-item>
          <el-form-item label="Mật khẩu (*)">
            <el-input placeholder="Nhập mật khẩu..." v-model="model.password" show-password></el-input>
          </el-form-item>
          <el-form-item label="Email (*)">
            <el-input placeholder="Nhập email..." v-model="model.email"></el-input>
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
        }
      },
  
      computed: {
        model() {
          return JSON.parse(JSON.stringify(this.$store.state.user.model));
        }
      },  
  
      methods: {
        goBack() {
          this.$router.go(-1);
        },
  
        async save() {
          try {
            await this.$store.dispatch('user/create', this.model);
            this.$message({
              message: 'Thêm tài khoản thành công',
              type: 'success'
            });
            this.dialogFormAdd = false;
            this.reload();
          } catch (error) {
            this.$message({
              message: 'Thêm tải khoản thất bại',
              type: 'error'
            });
          }
        },
      },
  
      watch: {
        
      },
  
      async mounted() {
        await this.$store.dispatch("user/init");
      }
    }
  </script>
    
  <style>
    .el-page-header__content {
      width: inherit;
    }
  </style>