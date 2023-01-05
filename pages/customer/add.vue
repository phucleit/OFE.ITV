<template>
  <div class="w-full flex flex-wrap">
    <el-page-header @back="goBack" title="" class="py-3 px-3 shadow-md bg-white w-full rounded-lg mt-4">
      <template #content>
        <div class="flex w-full">
          <span class="flex-grow">
            <span>
              Tạo khách hàng
            </span>
          </span>
          <el-button @click="save()" size="mini" type="primary">Lưu</el-button>
        </div>
      </template>
    </el-page-header>
    <div class="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="flex-noshink">
        <section class="w-full bg-white shadow-md rounded-lg p-3">
          <el-form>
            <section class="grid grid-cols-3 gap-2">
              <el-form-item label="Họ tên (*)">
                <el-input size="small" v-model="model.fullname" placeholder="Nhập họ tên..."></el-input>
              </el-form-item>
              <el-form-item label="Giới tính">
                <el-radio-group v-model="model.gender" class="ml-4">
                  <el-radio label="1" size="small">Nam</el-radio>
                  <el-radio label="2" size="small">Nữ</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="Mã số thuế">
                <el-input size="small" v-model="model.mst" placeholder="Nhập mã số thuế..."></el-input>
              </el-form-item>
            </section>
            <section class="grid grid-cols-2 gap-2">
              <el-form-item label="Số điện thoại (*)">
                <el-input size="small" v-model="model.phone" placeholder="Nhập số điện thoại..."></el-input>
              </el-form-item>
              <el-form-item label="Loại khách hàng">
                <el-select v-model="model.customer_type" class="m-2" placeholder="Chọn loại khách hàng" size="small">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </section>
            <section class="grid grid-cols-2 gap-2">
              <el-form-item label="Email">
                <el-input size="small" v-model="model.email" placeholder="Nhập địa chỉ email..."></el-input>
              </el-form-item>
              <el-form-item label="Ngày sinh">
                <el-date-picker
                  v-model="model.birthDay"
                  type="date"
                  placeholder="Chọn ngày"
                  size="small"
                />
              </el-form-item>
            </section>
            <section class="grid grid-cols-2 gap-2">
              <el-form-item label="Địa chỉ">
                <el-input size="small" v-model="model.address" placeholder="Nhập địa chỉ..."></el-input>
              </el-form-item>
              <el-form-item label="Căn cước / CMND (*)">
                <el-input size="small" v-model="model.cmnd" placeholder="Nhập căn cước / cmnd..."></el-input>
              </el-form-item>
            </section>
            <section class="gap-2">
              <el-form-item label="Ghi chú">
                <el-input size="small" v-model="model.note" type="textarea" :autosize="{ minRows: 4, maxRows: 8}" placeholder="Nhập ghi chú..."></el-input>
              </el-form-item>
            </section>
            <section class="grid grid-cols-2 gap-2">
              <el-form-item label="Hình CMND mặt trước">
                <el-upload
                  class="avatar-uploader"
                  action='http://localhost:5000/files/uploadImage'
                  :show-file-list="false"
                  :on-success="handleImageFrontCmndSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="model.image_front_cmnd" :src="model.image_front_cmnd" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="Hình CMND mặt sau">
                <el-upload
                  class="avatar-uploader"
                  action='http://localhost:5000/files/uploadImage'
                  :show-file-list="false"
                  :on-success="handleImageBacksideCmndSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="model.image_backside_cmnd" :src="model.image_backside_cmnd" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
            </section>
          </el-form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        model: {
          fullname: "",
          gender: "",
          phone: "",
          customer_type: "",
          email: "",
          birthDay: "",
          address: "",
          cmnd: "",
          image_front_cmnd: "",
          image_backside_cmnd: "",
          mst: "",
          note: ""
        },
        options: [
          {
            value: 'personal',
            label: 'Cá nhân',
          },
          {
            value: 'company',
            label: 'Công ty',
          },
          {
            value: 'friendly',
            label: 'Thân thiết',
          },
        ]
      }
    },  
    methods: {
      goBack() {
        this.$router.push('/customer');
      },

      handleImageFrontCmndSuccess(res, file) {
        this.model.image_front_cmnd = res.url;
      },

      handleImageBacksideCmndSuccess(res, file) {
        this.model.image_backside_cmnd = res.url;
      },

      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('Image must be JPG format!');
        }
        if (!isLt2M) {
          this.$message.error('Image size can not exceed 2MB!');
        }
        return isJPG && isLt2M;
      },
      
      async save() {
        try {
          await this.$store.dispatch('customer/create', this.model);
          this.$message({
            message: 'Thêm khách hàng thành công',
            type: 'success'
          });
          this.$router.push({name: 'customer'})
        } catch (error) {
          this.$message({
            message: 'Thêm khách hàng thất bại',
            type: 'error'
          });
        }
      }
    }
  }
</script>

<style>
  .el-page-header__content {
    width: 98%;
  }

  .el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 20px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }

  .el-form-item {
    margin-bottom: 5px;
  }

  .el-radio-group {
    width: 100%;
  }

  .el-select {
    width: 100%;
    margin: 0;
  }

  .el-date-editor {
    width: 100% !important;
  }

  .el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    width: 148px !important;
    height: 148px;
    cursor: pointer;
    line-height: 146px;
    vertical-align: top;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 148px;
    height: 148px;
    line-height: 148px;
    text-align: center;
  }

  .avatar {
    width: 100%;
    height: 100%;
    display: block;
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>