<template>
  <div class="w-full">
    <el-page-header @back="$router.go(-1)" title="" class="py-3 px-3 shadow-md bg-white w-full rounded-lg mb-5">
      <template #content class="w-full">
        <div class="flex w-full justify-between items-center">
          <span class="flex-grow">
            <span>Dashboard</span>
          </span>
        </div>
      </template>
    </el-page-header>
    <div class="w-full grid grid-cols-12 gap-3">
      <div class="col-span-9">
        <WidgetInfoCard>
          <template #title>
            Thống kê
          </template>
          <template>
            <div class="grid grid-cols-1 gap-3 w-full">
              <div class="grid grid-cols-4 gap-3 w-full">
                <DashboardCardStatic>
                  <template>
                    Tên miền
                  </template>
                  <template #icon>
                    <img src="/images/domain.png"/>
                  </template>
                  <template #1>
                    <span class="text-sm">
                      Đã đăng ký
                    </span>
                    <span class="text-sm" v-if="model.domains">
                      {{ model.domains.total }}
                    </span>
                  </template>
                  <template #2>
                    <span class="text-sm">
                      Sắp hết hạn
                    </span>
                    <span class="text-sm" v-if="model.domains">
                      {{ model.domains.near_expried }}
                    </span>
                  </template>
                  <template #3>
                    <span class="text-sm">
                      Đã hết hạn
                    </span>
                    <span class="text-sm" v-if="model.domains">
                      {{ model.domains.expried }}
                    </span>
                  </template>
                </DashboardCardStatic>
                <DashboardCardStatic>
                  <template>
                    Hosting
                  </template>
                  <template #icon>
                    <img src="/images/hosting.png"/>
                  </template>
                  <template #1>
                    <span class="text-sm">
                      Đã đăng ký
                    </span>
                    <span class="text-sm" v-if="model.hostings">
                      {{ model.hostings.total }}
                    </span>
                  </template>
                  <template #2>
                    <span class="text-sm">
                      Sắp hết hạn
                    </span>
                    <span class="text-sm" v-if="model.hostings">
                      {{ model.hostings.near_expried }}
                    </span>
                  </template>
                  <template #3>
                    <span class="text-sm">
                      Đã hết hạn
                    </span>
                    <span class="text-sm" v-if="model.hostings">
                      {{ model.hostings.expried }}
                    </span>
                  </template>
                </DashboardCardStatic>
                <DashboardCardStatic>
                  <template>
                    SSL
                  </template>
                  <template #icon>
                    <img src="/images/ssl.png"/>
                  </template>
                  <template #1>
                    <span class="text-sm">
                      Đã đăng ký
                    </span>
                    <span class="text-sm" v-if="model.ssls">
                      {{ model.ssls.total }}
                    </span>
                  </template>
                  <template #2>
                    <span class="text-sm">
                      Sắp hết hạn
                    </span>
                    <span class="text-sm" v-if="model.ssls">
                      {{ model.ssls.near_expried }}
                    </span>
                  </template>
                  <template #3>
                    <span class="text-sm">
                      Đã hết hạn
                    </span>
                    <span class="text-sm" v-if="model.ssls">
                      {{ model.ssls.expried }}
                    </span>
                  </template>
                </DashboardCardStatic>
                <DashboardCardStatic>
                  <template>
                    Email
                  </template>
                  <template #icon>
                    <img src="/images/email.png"/>
                  </template>
                  <template #1>
                    <span class="text-sm">
                      Đã đăng ký
                    </span>
                    <span class="text-sm" v-if="model.emails">
                      {{ model.emails.total }}
                    </span>
                  </template>
                  <template #2>
                    <span class="text-sm">
                      Sắp hết hạn
                    </span>
                    <span class="text-sm" v-if="model.emails">
                      {{ model.emails.near_expried }}
                    </span>
                  </template>
                  <template #3>
                    <span class="text-sm">
                      Đã hết hạn
                    </span>
                    <span class="text-sm" v-if="model.emails">
                      {{ model.emails.expried }}
                    </span>
                  </template>
                </DashboardCardStatic>
                <DashboardCardStatic>
                  <template>
                    Facebook
                  </template>
                  <template #icon>
                    <img src="/images/facebook.png"/>
                  </template>
                  <template #1>
                    <span class="text-sm">
                      Đã đăng ký
                    </span>
                    <span class="text-sm" v-if="model.facebook">
                      {{ model.facebooks.total }}
                    </span>
                  </template>
                  <template #2>
                    <span class="text-sm">
                      Sắp hết hạn
                    </span>
                    <span class="text-sm" v-if="model.facebook">
                      {{ model.facebook.near_expried }}
                    </span>
                  </template>
                  <template #3>
                    <span class="text-sm">
                      Đã hết hạn
                    </span>
                    <span class="text-sm" v-if="model.facebook">
                      {{ model.facebooks.expried }}
                    </span>
                  </template>
                </DashboardCardStatic>
                <DashboardCardStatic>
                  <template>
                    Google
                  </template>
                  <template #icon>
                    <img src="/images/google.png"/>
                  </template>
                  <template #1>
                    <span class="text-sm">
                      Đã đăng ký
                    </span>
                    <span class="text-sm" v-if="model.googles">
                      {{ model.googles.total }}
                    </span>
                  </template>
                  <template #2>
                    <span class="text-sm">
                      Sắp hết hạn
                    </span>
                    <span class="text-sm" v-if="model.googles">
                      {{ model.googles.near_expried }}
                    </span>
                  </template>
                  <template #3>
                    <span class="text-sm">
                      Đã hết hạn
                    </span>
                    <span class="text-sm" v-if="model.googles">
                      {{ model.googles.expried }}
                    </span>
                  </template>
                </DashboardCardStatic>
                <DashboardCardStatic>
                  <template>
                    Nội dung Marketing
                  </template>
                  <template #icon>
                    <img src="/images/marketing.png"/>
                  </template>
                  <template #1>
                    <span class="text-sm">
                      Đã đăng ký
                    </span>
                    <span class="text-sm" v-if="model.contents">
                      {{ model.contents.total }}
                    </span>
                  </template>
                  <template #2>
                    <span class="text-sm">
                      Sắp hết hạn
                    </span>
                    <span class="text-sm" v-if="model.contents">
                      {{ model.contents.near_expried }}
                    </span>
                  </template>
                  <template #3>
                    <span class="text-sm">
                      Đã hết hạn
                    </span>
                    <span class="text-sm" v-if="model.contents">
                      {{ model.contents.expried }}
                    </span>
                  </template>
                </DashboardCardStatic>
                <DashboardCardStatic>
                  <template>
                    Bảo trì website
                  </template>
                  <template #icon>
                    <img src="/images/maintenance.png"/>
                  </template>
                  <template #1>
                    <span class="text-sm">
                      Đã đăng ký
                    </span>
                    <span class="text-sm" v-if="model.maintenances">
                      {{ model.maintenances.total }}
                    </span>
                  </template>
                  <template #2>
                    <span class="text-sm">
                      Sắp hết hạn
                    </span>
                    <span class="text-sm" v-if="model.maintenances">
                      {{ model.maintenances.near_expried }}
                    </span>
                  </template>
                  <template #3>
                    <span class="text-sm">
                      Đã hết hạn
                    </span>
                    <span class="text-sm" v-if="model.maintenances">
                      {{ model.maintenances.expried }}
                    </span>
                  </template>
                </DashboardCardStatic>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-3 mt-3 w-full">
              <WidgetInfoCard>
                <template #title>
                  Danh sách người dùng
                </template>
                <template>

                </template>
              </WidgetInfoCard>
              <WidgetInfoCard>
                <template #title>
                  Danh sách hợp đồng mới
                </template>
                <template>
                  
                </template>
              </WidgetInfoCard>
            </div>
          </template>
        </WidgetInfoCard>
      </div>
      <div class="col-span-3 flex-noshink">
        <div class="grid grid-cols-1 gap-3">
          <DashboardCardProvider>
            <template #title>
              Nhà cung cấp (Tadu)
            </template>
            <template #onuse>1</template>
            <template #cash>2</template>
            <template #near-expried>3</template>
            <template #expried>4</template>
          </DashboardCardProvider>
          <DashboardCardProvider>
            <template #title>
              Nhà cung cấp (Mắt bão)
            </template>
            <template #onuse>1</template>
            <template #cash>2</template>
            <template #near-expried>3</template>
            <template #expried>4</template>
          </DashboardCardProvider>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
export default {
  data(){
    return {
      selectedBox: null,
    }
  },
  computed: {
    model(){
      return this.$store.state.static.model
    },
    customer(){
      return this.$store.state.customer.model
    },
    contract(){
      return this.$store.state.contract.model
    }
  },
  mounted(){
    this.$store.dispatch("static/init");
    this.$store.dispatch("customer/init",{search:'',page:1});
    this.$store.dispatch("contract/init");
  }
}
</script>

<style>
  .el-page-header__content {
    width: inherit;
  }
  .selected-item {
    @apply text-white;
    background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,175,250,1) 0%, rgba(0,212,255,1) 100%);
  }
</style>