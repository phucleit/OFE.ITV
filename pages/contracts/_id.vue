<template>
  <div class="w-full flex flex-wrap">
    <el-page-header @back="goBack" title="" class="py-3 px-3 shadow-md bg-white w-full rounded-lg mt-4">
      <template #content>
        <div class="flex w-full">
          <span class="flex-grow">
            <span>Chi tiết hợp đồng</span>
          </span>
        </div>
      </template>
    </el-page-header>
    <div class="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="flex-noshink">
        <section class="w-full bg-white shadow-md rounded-lg p-3">
          <h4>Mã số hợp đồng: <span>{{ model.code }}</span></h4>
          <h4>Họ tên khách hàng: <span v-if="model.customer">{{ model.customer.fullname }}</span></h4>
          <h4 v-if="model.domain">Tên miền: 
            <span v-for="item in model.domain" :key="item">
              <span class="mr-1">{{ item.name }}{{ item.plan.name }},</span>
            </span>
          </h4>
          <h4>Chi phí thiết kế website: <span>{{ model.price | currency(' đ', 0, { symbolOnLeft: false }) }}</span></h4>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        model: {},
      }
    },  

    methods: {
      goBack() {
        this.$router.go(-1);
      },
    },

    async mounted() {
      let res = await this.$store.dispatch('contract/getDetail', this.$route.params.id);
      this.model = res;
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