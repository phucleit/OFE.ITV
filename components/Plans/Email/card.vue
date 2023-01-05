<template>
  <div v-if="$attrs.value" class="w-full form-card">
    <span class="w-full flex mb-5">
      <div class="flex-grow">
        <h3 class="text-2xl font-bold"><i class='bx bx-menu'></i> Bảng giá Email doanh nghiệp</h3>
      </div>
      <div class="flex items-center pl-2">
        <el-button size="small" type="success" @click="dialogFormAdd = true">Thêm mới</el-button>
      </div>
    </span>
    <div class="w-full flex">
      <div class="flex-grow">
        <div class="grid grid-cols-4 gap-4">
          <el-card v-for="(item, index) in $attrs.value.data" :key="index" class="box-card">
            <template >
              <div class="card-header mb-3">
                <h3 class="text-2xl font-bold text-cyan-400">{{ item.name }}</h3>
              </div>
            </template>
            <div class="text item">
              <p>Dung lượng: <strong>{{ item.capacity }}</strong></p>
              <p class="text-2xl mt-4">Giá chỉ từ:</p>
              <p class="text-2xl my-2"><strong class="font-bold text-red-600">{{ item.sell_price | currency(' đ', 0, { symbolOnLeft: false }) }} / tháng</strong></p>
              <p class="text-zinc-100 text-sm">(Giá trên chưa bao gồm VAT)</p>
            </div>
            <div class="action-card mt-4">
              <el-button type="warning" @click="detail(item)">Sửa</el-button>
              <el-button type="danger" @click="remove(item._id)">Xóa</el-button>
            </div>
          </el-card>
        </div>
      </div>
    </div>

    <el-dialog
      :visible.sync="dialogFormAdd"
      title="Thêm dịch vụ mới"
      width="30%"
    >
      <el-form>
        <el-form-item label="Tên dịch vụ (*)">
          <el-input size="small" v-model="model.name" placeholder="Nhập tên dịch vụ..."></el-input>
        </el-form-item>
        <el-form-item label="Dung lượng (*)">
          <el-input size="small" v-model="model.capacity" placeholder="Nhập dung lượng..."></el-input>
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
      title="Cập nhật dịch vụ"
      width="30%"
    >
      <el-form>
        <el-form-item label="Tên dịch vụ (*)">
          <el-input size="small" v-model="selectedItem.name" placeholder="Nhập tên dịch vụ..."></el-input>
        </el-form-item>
        <el-form-item label="Dung lượng (*)">
          <el-input size="small" v-model="selectedItem.capacity" placeholder="Nhập dung lượng..."></el-input>
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
          capacity: '',
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
          await this.$store.dispatch('emailPlan/create', this.model);
          this.$message({
            message: 'Thêm dịch vụ thành công',
            type: 'success'
          });
          this.dialogFormAdd = false;
          await this.$store.dispatch('emailPlan/init');
        } catch (error) {
          this.$message({
            message: 'Thêm dịch vụ thất bại',
            type: 'error'
          });
        }
      },

      async update() {
        try {
          await this.$store.dispatch('emailPlan/update', { id: this.selectedItem._id, data: this.selectedItem });
          this.$message({
            message: 'Cập nhật dịch vụ thành công',
            type: 'success'
          });
          this.dialogFormUpdate = false;
          await this.$store.dispatch('emailPlan/init');
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
            await this.$store.dispatch('emailPlan/delete', id);
            this.$message({
                type: 'success',
                message: 'Xóa thành công'
            });
            await this.$store.dispatch('emailPlan/init');
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

</style>