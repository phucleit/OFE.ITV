<template>
    <div class="w-full">
      <el-page-header @back="$router.go(-1)" title="" class="mb-3 py-3 px-3 shadow-md bg-white w-full rounded-lg">
          <template #content class="w-full">
              <div class="flex w-full justify-between items-center">
                  <span class="flex-grow">
                      <span>
                          Cập nhật quyền
                      </span>
                  </span>
                  <el-button @click="save()" size="mini" type="primary">Lưu</el-button>
              </div>
          </template>
      </el-page-header>
      <div class="w-full grid grid-cols-2 gap-3">
          <span>
              <div class="bg-white rounded-lg p-3 shadow-md">
                  <el-form>
                      <el-form-item label="Tên quyền">
                          <el-input v-model="model.name"></el-input>
                      </el-form-item>
                      <el-form-item label="Người dùng">
                          <div class="w-full grid grid-cols-1 gap-3">
                              <el-select v-model="model.users" filterable multiple="" @remove-tag="removeUser" placeholder="Select">
                                  <el-option
                                  v-for="item in users"
                                  :key="item._id"
                                  :label="item.username"
                                  :value="item._id">
                                  </el-option>
                              </el-select>
                          </div>
                      </el-form-item>
                  </el-form>                    
              </div>
          </span>
          <span>
              <el-table :data="model.modules" stripe style="width: 100%">
                  <el-table-column label="Module" width="200">
                      <template slot-scope="scope">
                          {{scope.row.module}}
                      </template>
                  </el-table-column>
                  <el-table-column label="Quản lý" width="">
                      <template slot-scope="scope">
                          <el-checkbox v-model="scope.row.casl.manage"></el-checkbox>
                      </template>
                  </el-table-column>
                  <el-table-column label="Đọc" width="">
                      <template slot-scope="scope">
                          <el-checkbox v-model="scope.row.casl.read"></el-checkbox>
                      </template>
                  </el-table-column>
                  <el-table-column label="Thêm" width="">
                      <template slot-scope="scope">
                          <el-checkbox v-model="scope.row.casl.create"></el-checkbox>
                      </template>
                  </el-table-column>
                  <el-table-column label="Sửa" width="">
                      <template slot-scope="scope">
                          <el-checkbox v-model="scope.row.casl.update"></el-checkbox>
                      </template>
                  </el-table-column>
                  <el-table-column label="Xóa" width="">
                      <template slot-scope="scope">
                          <el-checkbox v-model="scope.row.casl.delete"></el-checkbox>
                      </template>
                  </el-table-column>
              </el-table>
          </span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      data(){
          return{
              check: false,
              model:{
                  
              }
          }
      },
      computed:{
          modules(){
              return JSON.parse(JSON.stringify(this.$store.state.userRole.modules))
          },
          users()
          {
              return JSON.parse(JSON.stringify(this.$store.state.user.model))
          }
      },
      methods: {
        save() {
            try {
                this.$store.dispatch('userRole/update', this.model)
                this.$message.success('Sửa thành công')
                this.$router.push('/users/sssroles')
            }
            catch{
                this.$message.error('Sửa thất bại')
            }
          },
          goBack() {
              this.$router.go(-1)
          },
          removeUser(e){
              try {
                  this.$store.dispatch('userRole/removeUser', {id: e, role: this.model._id})
                  this.$message.success('Xóa thành công')
              }
              catch{
                  this.$message.error('Xóa thất bại')
              }
          }
      },
    async mounted(){
        var vm = this;
        await this.$store.dispatch('userRole/init')
        await this.$store.dispatch('user/init')
        let res = await this.$store.dispatch('userRole/get', this.$route.params.id)
        this.model = res.data;
    }
  }
  </script>
  
  <style>
  .el-page-header__content {
      width: inherit;
  }
  </style>