<template>
  <div class="w-full flex flex-wrap">
    <el-page-header @back="goBack" title="" class="py-3 px-3 shadow-md bg-white w-full rounded-lg mt-4">
      <template #content>
        <div class="flex w-full">
          <span class="flex-grow">
            <span>Tạo hợp đồng</span>
          </span>
          <el-button @click="save()" size="mini" type="primary">Lưu</el-button>
        </div>
      </template>
    </el-page-header>
    <div class="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
      <div class="flex-noshink">
        <section class="w-full bg-white shadow-md rounded-lg p-3">
          <el-form>
            <el-form-item label="Mã số hợp đồng (*)">
              <el-input size="small" v-model="model.code" placeholder="Nhập mã số hợp đồng..."></el-input>
            </el-form-item>
            <el-form-item label="Khách hàng (*)">
              <el-select size="small" v-model="model.customer" filterable placeholder="Chọn khách hàng...">
                <el-option
                  v-for="item in customers"
                  :key="item._id"
                  :label="item.fullname"
                  :value="item._id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Dịch vụ">
              <div class="w-full grid grid-cols-1 gap-3">
                <el-select size="small" v-model="selectService" placeholder="Chọn dịch vụ...">
                  <el-option
                    v-for="item in services"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item label="Ngày tạo hợp đồng (*)">
              <el-date-picker
                type="date"
                placeholder="Chọn ngày tạo"
                size="small"
              />
            </el-form-item>
          </el-form>                    
        </section>
      </div>
      <div class="flex-noshink">
        <section class="w-full bg-white shadow-md rounded-lg p-3">
          <div v-if="selectService == 'domain'">
            <el-form>
              <el-form-item label="Tên miền (*)" class="title">
                <div class="show-domain">
                  <div class="grid grid-cols-1 gap-2 form-domain" v-for="(item,index) in model.domainItems" :key="index">
                    <el-input size="small" v-model="item.name" placeholder="Nhập tên miền..."></el-input>
                    <el-select v-model="item.plan" size="small" filterable placeholder="Chọn tên miền...">
                      <el-option
                        v-for="plan in domainPlans"
                        :key="plan._id"
                        :label="plan.name"
                        :value="plan._id"
                      >
                        {{ plan.name }} ({{ plan.sell_price | currency(' đ', 0, { symbolOnLeft: false }) }} / năm)
                      </el-option>
                    </el-select>
                    <div>
                      <el-button type="primary" size="small" @click="addDomain">Thêm</el-button>
                    </div>
                    <div>
                      <el-button type="danger" size="small" @click="removeDomain(item)">Xóa</el-button>
                    </div>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="Ngày tạo (*)">
                <el-date-picker
                  v-model="model.startedAt"
                  type="date"
                  placeholder="Chọn ngày tạo..."
                  size="small"
                />
              </el-form-item>
              <el-form-item label="Ngày hết hạn (*)">
                <el-date-picker
                  v-model="model.expiredAt"
                  type="date"
                  placeholder="Chọn ngày hết hạn..."
                  size="small"
                />
              </el-form-item>
            </el-form>
          </div>
          <div v-if="selectService == 'hosting'">
            <el-form>
              <el-form-item label="Tên gói hosting (*)" class="title">
                <div class="flex gap-2" v-for="(item,index) in model.hostingItems" :key="index">
                  <el-select v-model="item.plan" size="small" filterable placeholder="Chọn gói hosting">
                    <el-option
                      v-for="plan in hostingPlans"
                      :key="plan._id"
                      :label="plan.name"
                      :value="plan._id"
                    >
                      {{ plan.name }} ({{ plan.sell_price | currency(' đ', 0, { symbolOnLeft: false }) }} / tháng)
                    </el-option>
                  </el-select>
                  <div>
                    <el-button type="primary" size="small" @click="addHosting">Thêm</el-button>
                  </div>
                  <div>
                    <el-button type="danger" size="small" @click="removeHosting(item)">Xóa</el-button>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="Ngày tạo (*)">
                <el-date-picker
                  v-model="model.startedAt"
                  type="date"
                  placeholder="Chọn ngày tạo"
                  size="small"
                />
              </el-form-item>
              <el-form-item label="Ngày hết hạn (*)">
                <el-date-picker
                  v-model="model.expiredAt"
                  type="date"
                  placeholder="Chọn ngày hết hạn"
                  size="small"
                />
              </el-form-item>
            </el-form>
          </div>
          <div v-if="selectService == 'ssl'">
            <el-form>
              <el-form-item label="Tên gói ssl (*)" class="title">
                <div class="flex gap-2" v-for="(item,index) in model.sslItems" :key="index">
                  <el-select v-model="item.plan" size="small" filterable placeholder="Chọn gói ssl">
                    <el-option
                      v-for="plan in sslPlans"
                      :key="plan._id"
                      :label="plan.name"
                      :value="plan._id"
                    >
                      {{ plan.name }} ({{ plan.sell_price | currency(' đ', 0, { symbolOnLeft: false }) }} / tháng)
                    </el-option>
                  </el-select>
                  <div>
                    <el-button type="primary" size="small" @click="addSSL">Thêm</el-button>
                  </div>
                  <div>
                    <el-button type="danger" size="small" @click="removeSSL(item)">Xóa</el-button>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="Ngày tạo (*)">
                <el-date-picker
                  v-model="model.startedAt"
                  type="date"
                  placeholder="Chọn ngày tạo"
                  size="small"
                />
              </el-form-item>
              <el-form-item label="Ngày hết hạn (*)">
                <el-date-picker
                  v-model="model.expiredAt"
                  type="date"
                  placeholder="Chọn ngày hết hạn"
                  size="small"
                />
              </el-form-item>
            </el-form>
          </div>
          <div v-if="selectService == 'email'">
            <el-form>
              <el-form-item label="Tên gói email (*)" class="title">
                <div class="flex gap-2" v-for="(item,index) in model.emailItems" :key="index">
                  <el-select v-model="item.plan" size="small" filterable placeholder="Chọn gói email">
                    <el-option
                      v-for="plan in emailPlans"
                      :key="plan._id"
                      :label="plan.name"
                      :value="plan._id"
                    >
                      {{ plan.name }} ({{ plan.sell_price | currency(' đ', 0, { symbolOnLeft: false }) }} / tháng)
                    </el-option>
                  </el-select>
                  <div>
                    <el-button type="primary" size="small" @click="addEmail">Thêm</el-button>
                  </div>
                  <div>
                    <el-button type="danger" size="small" @click="removeEmail(item)">Xóa</el-button>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="Ngày tạo (*)">
                <el-date-picker
                  v-model="model.startedAt"
                  type="date"
                  placeholder="Chọn ngày tạo"
                  size="small"
                />
              </el-form-item>
              <el-form-item label="Ngày hết hạn (*)">
                <el-date-picker
                  v-model="model.expiredAt"
                  type="date"
                  placeholder="Chọn ngày hết hạn"
                  size="small"
                />
              </el-form-item>
            </el-form>
          </div>
          <div v-if="selectService == 'google'">
            <el-form>
              <el-form-item label="Tên gói google (*)" class="title">
                <div class="flex gap-2" v-for="(item,index) in model.googleItems" :key="index">
                  <el-select v-model="item.plan" size="small" filterable placeholder="Chọn gói google">
                    <el-option
                      v-for="plan in googlePlans"
                      :key="plan._id"
                      :label="plan.name"
                      :value="plan._id"
                    >
                      {{ plan.name }} ({{ plan.price | currency(' đ', 0, { symbolOnLeft: false }) }} / tháng)
                    </el-option>
                  </el-select>
                  <div>
                    <el-button type="primary" size="small" @click="addGoogle">Thêm</el-button>
                  </div>
                  <div>
                    <el-button type="danger" size="small" @click="removeGoogle(item)">Xóa</el-button>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="Ngày tạo (*)">
                <el-date-picker
                  v-model="model.startedAt"
                  type="date"
                  placeholder="Chọn ngày tạo"
                  size="small"
                />
              </el-form-item>
              <el-form-item label="Ngày hết hạn (*)">
                <el-date-picker
                  v-model="model.expiredAt"
                  type="date"
                  placeholder="Chọn ngày hết hạn"
                  size="small"
                />
              </el-form-item>
            </el-form>
          </div>
          <div v-if="selectService == 'facebook'">
            <el-form>
              <el-form-item label="Tên gói facebook (*)" class="title">
                <div class="flex gap-2" v-for="(item,index) in model.facebookItems" :key="index">
                  <el-select v-model="item.plan" size="small" filterable placeholder="Chọn gói facebook">
                    <el-option
                      v-for="plan in facebookPlans"
                      :key="plan._id"
                      :label="plan.name"
                      :value="plan._id"
                    >
                      {{ plan.name }} ({{ plan.price | currency(' đ', 0, { symbolOnLeft: false }) }} / tháng)
                    </el-option>
                  </el-select>
                  <div>
                    <el-button type="primary" size="small" @click="addFacebook">Thêm</el-button>
                  </div>
                  <div>
                    <el-button type="danger" size="small" @click="removeFacebook(item)">Xóa</el-button>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="Ngày tạo (*)">
                <el-date-picker
                  v-model="model.startedAt"
                  type="date"
                  placeholder="Chọn ngày tạo"
                  size="small"
                />
              </el-form-item>
              <el-form-item label="Ngày hết hạn (*)">
                <el-date-picker
                  v-model="model.expiredAt"
                  type="date"
                  placeholder="Chọn ngày hết hạn"
                  size="small"
                />
              </el-form-item>
            </el-form>
          </div>
          <div v-if="selectService == 'content'">
            <el-form>
              <el-form-item label="Tên gói facebook (*)" class="title">
                <div class="flex gap-2" v-for="(item,index) in model.contentItems" :key="index">
                  <el-select v-model="item.plan" size="small" filterable placeholder="Chọn gói nội dung">
                    <el-option
                      v-for="plan in contentPlans"
                      :key="plan._id"
                      :label="plan.name"
                      :value="plan._id"
                    >
                      {{ plan.name }} ({{ plan.price | currency(' đ', 0, { symbolOnLeft: false }) }} / tháng)
                    </el-option>
                  </el-select>
                  <div>
                    <el-button type="primary" size="small" @click="addContent">Thêm</el-button>
                  </div>
                  <div>
                    <el-button type="danger" size="small" @click="removeContent(item)">Xóa</el-button>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="Ngày tạo (*)">
                <el-date-picker
                  v-model="model.startedAt"
                  type="date"
                  placeholder="Chọn ngày tạo"
                  size="small"
                />
              </el-form-item>
              <el-form-item label="Ngày hết hạn (*)">
                <el-date-picker
                  v-model="model.expiredAt"
                  type="date"
                  placeholder="Chọn ngày hết hạn"
                  size="small"
                />
              </el-form-item>
            </el-form>
          </div>
          <div v-if="selectService == 'maintenance'">
            <el-form>
              <el-form-item label="Tên gói bảo trì (*)" class="title">
                <div class="flex gap-2" v-for="(item,index) in model.maintenanceItems" :key="index">
                  <el-select v-model="item.plan" size="small" filterable placeholder="Chọn gói bảo trì website">
                    <el-option
                      v-for="plan in maintenancePlans"
                      :key="plan._id"
                      :label="plan.name"
                      :value="plan._id"
                    >
                      {{ plan.name }} ({{ plan.price | currency(' đ', 0, { symbolOnLeft: false }) }} / tháng)
                    </el-option>
                  </el-select>
                  <div>
                    <el-button type="primary" size="small" @click="addMaintenance">Thêm</el-button>
                  </div>
                  <div>
                    <el-button type="danger" size="small" @click="removeMaintenance(item)">Xóa</el-button>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="Ngày tạo (*)">
                <el-date-picker
                  v-model="model.startedAt"
                  type="date"
                  placeholder="Chọn ngày tạo"
                  size="small"
                />
              </el-form-item>
              <el-form-item label="Ngày hết hạn (*)">
                <el-date-picker
                  v-model="model.expiredAt"
                  type="date"
                  placeholder="Chọn ngày hết hạn"
                  size="small"
                />
              </el-form-item>
            </el-form>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        services: [
          {
            value: 'domain',
            label: 'Tên miền',
          },
          {
            value: 'hosting',
            label: 'Hosting',
          },
          {
            value: 'ssl',
            label: 'SSL',
          },
          {
            value: 'email',
            label: 'Email doanh nghiệp',
          },
          {
            value: 'google',
            label: 'Quảng cáo Google',
          },
          {
            value: 'facebook',
            label: 'Quảng cáo Facebook',
          },
          {
            value: 'content',
            label: 'Nội dung Marketing',
          },
          {
            value: 'maintenance',
            label: 'Bảo trì Website',
          },
        ],
        selectService: "",
        model: {
          code: "",
          domainItems: [
            { name: '', plan: '' }
          ],
          hostingItems: [
            { plan: '' }
          ],
          sslItems: [
            { plan: '' }
          ],
          emailItems: [
            { plan: '' }
          ],
          googleItems: [
            { plan: '' }
          ],
          facebookItems: [
            { plan: '' }
          ],
          contentItems: [
            { plan: '' }
          ],
          maintenanceItems: [
            { plan: '' }
          ]
        },
      }
    },

    methods: {
      goBack() {
        this.$router.go(-1);
      },

      addDomain() {
        this.model.domainItems.push({ name: '', plan: '' })
      },

      removeDomain(item) {
        if (this.model.domainItems.findIndex(p=>p  == item) == 0) {
          this.$message({
            message: 'Không thể xóa',
            type: 'error'
          });
        } else {
          this.model.domainItems.splice(this.model.domainItems.findIndex(p=>p == item),1)
        }
      },

      addHosting() {
        this.model.hostingItems.push({ plan: '' })
      },

      removeHosting(item) {
        if (this.model.hostingItems.findIndex(p=>p  == item) == 0) {
          this.$message({
            message: 'Không thể xóa',
            type: 'error'
          });
        } else {
          this.model.hostingItems.splice(this.model.hostingItems.findIndex(p=>p == item),1)
        }
      },

      addSSL() {
        this.model.sslItems.push({ plan: '' })
      },

      removeSSL(item) {
        if (this.model.sslItems.findIndex(p=>p  == item) == 0) {
          this.$message({
            message: 'Không thể xóa',
            type: 'error'
          });
        } else {
          this.model.sslItems.splice(this.model.sslItems.findIndex(p=>p == item),1)
        }
      },

      addEmail() {
        this.model.emailItems.push({ plan: '' })
      },

      removeEmail(item) {
        if (this.model.emailItems.findIndex(p=>p  == item) == 0) {
          this.$message({
            message: 'Không thể xóa',
            type: 'error'
          });
        } else {
          this.model.emailItems.splice(this.model.emailItems.findIndex(p=>p == item),1)
        }
      },

      addGoogle() {
        this.model.googleItems.push({ plan: '' })
      },

      removeGoogle(item) {
        if (this.model.googleItems.findIndex(p=>p  == item) == 0) {
          this.$message({
            message: 'Không thể xóa',
            type: 'error'
          });
        } else {
          this.model.googleItems.splice(this.model.googleItems.findIndex(p=>p == item),1)
        }
      },

      addFacebook() {
        this.model.facebookItems.push({ plan: '' })
      },

      removeFacebook(item) {
        if (this.model.facebookItems.findIndex(p=>p  == item) == 0) {
          this.$message({
            message: 'Không thể xóa',
            type: 'error'
          });
        } else {
          this.model.facebookItems.splice(this.model.facebookItems.findIndex(p=>p == item),1)
        }
      },

      addContent() {
        this.model.contentItems.push({ plan: '' })
      },

      removeContent(item) {
        if (this.model.contentItems.findIndex(p=>p  == item) == 0) {
          this.$message({
            message: 'Không thể xóa',
            type: 'error'
          });
        } else {
          this.model.contentItems.splice(this.model.contentItems.findIndex(p=>p == item),1)
        }
      },

      addMaintenance() {
        this.model.maintenanceItems.push({ plan: '' })
      },

      removeMaintenance(item) {
        if (this.model.maintenanceItems.findIndex(p=>p  == item) == 0) {
          this.$message({
            message: 'Không thể xóa',
            type: 'error'
          });
        } else {
          this.model.maintenanceItems.splice(this.model.maintenanceItems.findIndex(p=>p == item),1)
        }
      },
      
      async save() {
        try {
          // await this.$store.dispatch('contract/create', this.model);
          // this.$message({
          //   message: 'Thêm hợp đồng thành công',
          //   type: 'success'
          // });
          // this.$router.push({name: 'customer'})
        } catch (error) {
          this.$message({
            message: 'Thêm hợp đồng thất bại',
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

      hostingPlans() {
        return this.$store.state.hostingPlan.model.data;
      },

      sslPlans() {
        return this.$store.state.sslPlan.model.data;
      },

      emailPlans() {
        return this.$store.state.emailPlan.model.data;
      },

      googlePlans() {
        return this.$store.state.googlePlan.model.data;
      },

      facebookPlans() {
        return this.$store.state.facebookPlan.model.data;
      },

      contentPlans() {
        return this.$store.state.contentPlan.model.data;
      },

      maintenancePlans() {
        return this.$store.state.maintenancePlan.model.data;
      },
    },

    async mounted() {
      await this.$store.dispatch("customer/init", {search: this.$route.query.search});
      await this.$store.dispatch("domainPlan/init");
      await this.$store.dispatch("hostingPlan/init");
      await this.$store.dispatch("sslPlan/init");
      await this.$store.dispatch("emailPlan/init");
      await this.$store.dispatch("googlePlan/init");
      await this.$store.dispatch("facebookPlan/init");
      await this.$store.dispatch("contentPlan/init");
      await this.$store.dispatch("maintenancePlan/init");
    }
  }
</script>

<style>
  .el-page-header__content {
    width: inherit;
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

  .title .el-form-item__label {
    display: contents;
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

  .form-domain {
    display: inline-flex;
  }
</style>