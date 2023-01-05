<template>
  <div class="grid grid-cols-4 gap-4">
    <div @mouseenter="isShow = true" @mouseleave="isShow = false" class="flex w-full bg-white rounded-lg p-3 shadow-md hover:border-green-500 border-white border relative">
      <section class="absolute right-0 top-0 transition transition-all duration-300 easy-in-out" v-show="isShow">
        
      </section>

      <span class="flex items-center justify-center flex-wrap">
        <div class="flex-noshink w-full grid grid-cols-1 gap-1 text-center">
          <span class="w-full flex justify-center">
            <i class='bx bx-globe text-4xl font-bold text-green-500'></i>
          </span>
          <span class="text-sm w-full font-semibold text-green-500">Tên miền</span>
        </div>
      </span>
      <span class="grid grid-cols-1 gap-3 ml-4">
        <span class="text-gray-500 text-sm">Đang sử dụng <el-tag type="primary" size="small" effect="dark">{{ countDomainAll }}</el-tag></span>
        <span class="text-gray-500 text-sm">Sắp hết hạn <el-tag type="warning" size="small" effect="dark">{{ countDomainPeriod }}</el-tag></span>
        <span class="text-gray-500 text-sm">Hết hạn <el-tag type="danger" size="small" effect="dark">{{ countDomainExpired }}</el-tag></span>
      </span>
    </div>

    <div @mouseenter="isShow = true" @mouseleave="isShow = false" class="flex w-full bg-white rounded-lg p-3 shadow-md hover:border-green-500 border-white border relative">
      <section class="absolute right-0 top-0 transition transition-all duration-300 easy-in-out" v-show="isShow">
        
      </section>

      <span class="flex items-center justify-center flex-wrap">
        <div class="flex-noshink w-full grid grid-cols-1 gap-1 text-center">
          <span class="w-full flex justify-center">
            <i class='bx bxs-server text-4xl font-bold text-green-500'></i>
          </span>
          <span class="text-sm w-full font-semibold text-green-500">Hosting</span>
        </div>
      </span>
      <span class="grid grid-cols-1 gap-3 ml-4">
        <span class="text-gray-500 text-sm">Đang sử dụng <el-tag type="primary" size="small" effect="dark">{{ countHostingAll }}</el-tag></span>
        <span class="text-gray-500 text-sm">Sắp hết hạn <el-tag type="warning" size="small" effect="dark">{{ countHostingPeriod }}</el-tag></span>
        <span class="text-gray-500 text-sm">Hết hạn <el-tag type="danger" size="small" effect="dark">{{ countHostingExpired }}</el-tag></span>
      </span>
    </div>

    <div @mouseenter="isShow = true" @mouseleave="isShow = false" class="flex w-full bg-white rounded-lg p-3 shadow-md hover:border-green-500 border-white border relative">
      <section class="absolute right-0 top-0 transition transition-all duration-300 easy-in-out" v-show="isShow">
        
      </section>

      <span class="flex items-center justify-center flex-wrap">
        <div class="flex-noshink w-full grid grid-cols-1 gap-1 text-center">
          <span class="w-full flex justify-center">
            <i class='bx bxs-check-shield text-4xl font-bold text-green-500'></i>
          </span>
          <span class="text-sm w-full font-semibold text-green-500">SSL</span>
        </div>
      </span>
      <span class="grid grid-cols-1 gap-3 ml-4">
        <span class="text-gray-500 text-sm">Đang sử dụng <el-tag type="primary" size="small" effect="dark">{{ countSslAll }}</el-tag></span>
        <span class="text-gray-500 text-sm">Sắp hết hạn <el-tag type="warning" size="small" effect="dark">{{ countSslPeriod }}</el-tag></span>
        <span class="text-gray-500 text-sm">Hết hạn <el-tag type="danger" size="small" effect="dark">{{ countSslExpired }}</el-tag></span>
      </span>
    </div>

    <div @mouseenter="isShow = true" @mouseleave="isShow = false" class="flex w-full bg-white rounded-lg p-3 shadow-md hover:border-green-500 border-white border relative">
      <section class="absolute right-0 top-0 transition transition-all duration-300 easy-in-out" v-show="isShow">
        
      </section>

      <span class="flex items-center justify-center flex-wrap">
        <div class="flex-noshink w-full grid grid-cols-1 gap-1 text-center">
          <span class="w-full flex justify-center">
            <i class='bx bxs-envelope text-4xl font-bold text-green-500'></i>
          </span>
          <span class="text-sm w-full font-semibold text-green-500">Email</span>
        </div>
      </span>
      <span class="grid grid-cols-1 gap-3 ml-4">
        <span class="text-gray-500 text-sm">Đang sử dụng <el-tag type="primary" size="small" effect="dark">{{ countEmailAll }}</el-tag></span>
        <span class="text-gray-500 text-sm">Sắp hết hạn <el-tag type="warning" size="small" effect="dark">{{ countEmailPeriod }}</el-tag></span>
        <span class="text-gray-500 text-sm">Hết hạn <el-tag type="danger" size="small" effect="dark">{{ countEmailExpired }}</el-tag></span>
      </span>
    </div>

    <div @mouseenter="isShow = true" @mouseleave="isShow = false" class="flex w-full bg-white rounded-lg p-3 shadow-md hover:border-green-500 border-white border relative">
      <section class="absolute right-0 top-0 transition transition-all duration-300 easy-in-out" v-show="isShow">
        
      </section>

      <span class="flex items-center justify-center flex-wrap">
        <div class="flex-noshink w-full grid grid-cols-1 gap-1 text-center">
          <span class="w-full flex justify-center">
            <i class='bx bxl-google-plus-circle text-4xl font-bold text-green-500'></i>
          </span>
          <span class="text-sm w-full font-semibold text-green-500">Google</span>
        </div>
      </span>
      <span class="grid grid-cols-1 gap-3 ml-4">
        <span class="text-gray-500 text-sm">Đang sử dụng <el-tag type="primary" size="small" effect="dark">{{ countGoogleAll }}</el-tag></span>
        <span class="text-gray-500 text-sm">Sắp hết hạn <el-tag type="warning" size="small" effect="dark">{{ countGooglePeriod }}</el-tag></span>
        <span class="text-gray-500 text-sm">Hết hạn <el-tag type="danger" size="small" effect="dark">{{ countGoogleExpired }}</el-tag></span>
      </span>
    </div>

    <div @mouseenter="isShow = true" @mouseleave="isShow = false" class="flex w-full bg-white rounded-lg p-3 shadow-md hover:border-green-500 border-white border relative">
      <section class="absolute right-0 top-0 transition transition-all duration-300 easy-in-out" v-show="isShow">
        
      </section>

      <span class="flex items-center justify-center flex-wrap">
        <div class="flex-noshink w-full grid grid-cols-1 gap-1 text-center">
          <span class="w-full flex justify-center">
            <i class='bx bxl-facebook-circle text-4xl font-bold text-green-500'></i>
          </span>
          <span class="text-sm w-full font-semibold text-green-500">Facebook</span>
        </div>
      </span>
      <span class="grid grid-cols-1 gap-3 ml-4">
        <span class="text-gray-500 text-sm">Đang sử dụng <el-tag type="primary" size="small" effect="dark">{{ countFacebookAll }}</el-tag></span>
        <span class="text-gray-500 text-sm">Sắp hết hạn <el-tag type="warning" size="small" effect="dark">{{ countFacebookPeriod }}</el-tag></span>
        <span class="text-gray-500 text-sm">Hết hạn <el-tag type="danger" size="small" effect="dark">{{ countFacebookExpired }}</el-tag></span>
      </span>
    </div>

    <div @mouseenter="isShow = true" @mouseleave="isShow = false" class="flex w-full bg-white rounded-lg p-3 shadow-md hover:border-green-500 border-white border relative">
      <section class="absolute right-0 top-0 transition transition-all duration-300 easy-in-out" v-show="isShow">
        
      </section>

      <span class="flex items-center justify-center flex-wrap">
        <div class="flex-noshink w-full grid grid-cols-1 gap-1 text-center">
          <span class="w-full flex justify-center">
            <i class='bx bx-list-ul text-4xl font-bold text-green-500'></i>
          </span>
          <span class="text-sm w-full font-semibold text-green-500">Nội dung</span>
        </div>
      </span>
      <span class="grid grid-cols-1 gap-3 ml-4">
        <span class="text-gray-500 text-sm">Đang sử dụng <el-tag type="primary" size="small" effect="dark">{{ countContentAll }}</el-tag></span>
        <span class="text-gray-500 text-sm">Sắp hết hạn <el-tag type="warning" size="small" effect="dark">{{ countContentPeriod }}</el-tag></span>
        <span class="text-gray-500 text-sm">Hết hạn <el-tag type="danger" size="small" effect="dark">{{ countContentExpired }}</el-tag></span>
      </span>
    </div>

    <div @mouseenter="isShow = true" @mouseleave="isShow = false" class="flex w-full bg-white rounded-lg p-3 shadow-md hover:border-green-500 border-white border relative">
      <section class="absolute right-0 top-0 transition transition-all duration-300 easy-in-out" v-show="isShow">
        
      </section>

      <span class="flex items-center justify-center flex-wrap">
        <div class="flex-noshink w-full grid grid-cols-1 gap-1 text-center">
          <span class="w-full flex justify-center">
            <i class='bx bxs-cog text-4xl font-bold text-green-500'></i>
          </span>
          <span class="text-sm w-full font-semibold text-green-500">Bảo trì</span>
        </div>
      </span>
      <span class="grid grid-cols-1 gap-3 ml-4">
        <span class="text-gray-500 text-sm">Đang sử dụng <el-tag type="primary" size="small" effect="dark">{{ countMaintenanceAll }}</el-tag></span>
        <span class="text-gray-500 text-sm">Sắp hết hạn <el-tag type="warning" size="small" effect="dark">{{ countMaintenancePeriod }}</el-tag></span>
        <span class="text-gray-500 text-sm">Hết hạn <el-tag type="danger" size="small" effect="dark">{{ countMaintenanceExpired }}</el-tag></span>
      </span>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },

  computed: {
    countDomainAll() {
      return this.$store.state.domain.countAll;
    },

    countDomainPeriod() {
      return this.$store.state.domain.countPeriod;
    },

    countDomainExpired() {
      return this.$store.state.domain.countExpired;
    },

    countHostingAll() {
      return this.$store.state.hosting.countAll;
    },

    countHostingPeriod() {
      return this.$store.state.hosting.countPeriod;
    },

    countHostingExpired() {
      return this.$store.state.hosting.countExpired;
    },

    countSslAll() {
      return this.$store.state.ssl.countAll;
    },

    countSslPeriod() {
      return this.$store.state.ssl.countPeriod;
    },

    countSslExpired() {
      return this.$store.state.ssl.countExpired;
    },

    countEmailAll() {
      return this.$store.state.email.countAll;
    },

    countEmailPeriod() {
      return this.$store.state.email.countPeriod;
    },

    countEmailExpired() {
      return this.$store.state.email.countExpired;
    },

    countGoogleAll() {
      return this.$store.state.google.countAll;
    },

    countGooglePeriod() {
      return this.$store.state.google.countPeriod;
    },

    countGoogleExpired() {
      return this.$store.state.google.countExpired;
    },

    countFacebookAll() {
      return this.$store.state.facebook.countAll;
    },

    countFacebookPeriod() {
      return this.$store.state.facebook.countPeriod;
    },

    countFacebookExpired() {
      return this.$store.state.facebook.countExpired;
    },

    countContentAll() {
      return this.$store.state.content.countAll;
    },

    countContentPeriod() {
      return this.$store.state.content.countPeriod;
    },

    countContentExpired() {
      return this.$store.state.content.countExpired;
    },

    countMaintenanceAll() {
      return this.$store.state.maintenance.countAll;
    },

    countMaintenancePeriod() {
      return this.$store.state.maintenance.countPeriod;
    },

    countMaintenanceExpired() {
      return this.$store.state.maintenance.countExpired;
    },
  },

  async mounted() {
    await this.$store.commit('domain/initCountAll', (await this.$axios.get('/domains')).data);
    await this.$store.commit('domain/initCountPeriod', (await this.$axios.get('/domains?periodType=1')).data);
    await this.$store.commit('domain/initCountExpired', (await this.$axios.get('/domains?expiredType=2')).data);

    await this.$store.commit('hosting/initCountAll', (await this.$axios.get('/hostings')).data);
    await this.$store.commit('hosting/initCountPeriod', (await this.$axios.get('/hostings?periodType=1')).data);
    await this.$store.commit('hosting/initCountExpired', (await this.$axios.get('/hostings?expiredType=2')).data);

    await this.$store.commit('ssl/initCountAll', (await this.$axios.get('/ssls')).data);
    await this.$store.commit('ssl/initCountPeriod', (await this.$axios.get('/ssls?periodType=1')).data);
    await this.$store.commit('ssl/initCountExpired', (await this.$axios.get('/ssls?expiredType=2')).data);

    await this.$store.commit('email/initCountAll', (await this.$axios.get('/emails')).data);
    await this.$store.commit('email/initCountPeriod', (await this.$axios.get('/emails?periodType=1')).data);
    await this.$store.commit('email/initCountExpired', (await this.$axios.get('/emails?expiredType=2')).data);

    await this.$store.commit('google/initCountAll', (await this.$axios.get('/googles')).data);
    await this.$store.commit('google/initCountPeriod', (await this.$axios.get('/googles?periodType=1')).data);
    await this.$store.commit('google/initCountExpired', (await this.$axios.get('/googles?expiredType=2')).data);

    await this.$store.commit('facebook/initCountAll', (await this.$axios.get('/facebooks')).data);
    await this.$store.commit('facebook/initCountPeriod', (await this.$axios.get('/facebooks?periodType=1')).data);
    await this.$store.commit('facebook/initCountExpired', (await this.$axios.get('/facebooks?expiredType=2')).data);

    await this.$store.commit('content/initCountAll', (await this.$axios.get('/contents')).data);
    await this.$store.commit('content/initCountPeriod', (await this.$axios.get('/contents?periodType=1')).data);
    await this.$store.commit('content/initCountExpired', (await this.$axios.get('/contents?expiredType=2')).data);

    await this.$store.commit('maintenance/initCountAll', (await this.$axios.get('/maintenances')).data);
    await this.$store.commit('maintenance/initCountPeriod', (await this.$axios.get('/maintenances?periodType=1')).data);
    await this.$store.commit('maintenance/initCountExpired', (await this.$axios.get('/maintenances?expiredType=2')).data);
  }
}
</script>

<style>

</style>