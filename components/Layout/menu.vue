<template>
  <div>
    <aside class="w-64 h-screen" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 bg-white rounded dark:bg-gray-800 h-screen max-h-screen">
          <div class="grid grid-cols-1 gap-3 mb-4">
            <div class="rounded-lg p-2">
              <img src="http://scloud.vn/wp-content/uploads/2021/11/Asset-30@2x.png"/>
            </div>
          </div>
          <ul class="space-y-2">
            <li>
                <NuxtLink to="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <i class='bx bxs-dashboard text-xl text-gray-900 font-bold'></i>
                  <span class="ml-3">Dashboard</span>
                </NuxtLink>
            </li>
            <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example-service" data-collapse-toggle="dropdown-example-service">
                <i class='bx bx-list-ul text-xl text-gray-900 font-bold'></i>
                <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Dịch vụ</span>
                <i class='bx bxs-chevron-down text-xl text-gray-900 font-bold'></i>
              </button>
              <ul id="dropdown-example-service" class="hidden py-2 space-y-2">
                <li>
                  <NuxtLink to="/services/domain" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Tên miền</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/hosting" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Hosting</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/ssl" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">SSL</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/email" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Email doanh nghiệp</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/google" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Quảng cáo google</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/facebook" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Quảng cáo facebook</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/content" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Nội dung marketing</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/maintenance" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Bảo trì website</NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example-price" data-collapse-toggle="dropdown-example-price">
                <i class='bx bxs-dollar-circle text-xl text-gray-900 font-bold'></i>
                <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Bảng giá dịch vụ</span>
                <i class='bx bxs-chevron-down text-xl text-gray-900 font-bold'></i>
              </button>
              <ul id="dropdown-example-price" class="hidden py-2 space-y-2">
                <li>
                  <NuxtLink to="/plans/domain" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Tên miền</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/plans/hosting" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Hosting</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/plans/ssl" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">SSL</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/plans/email" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Email doanh nghiệp</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/plans/google" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Quảng cáo google</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/plans/facebook" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Quảng cáo facebook</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/plans/content" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Nội dung marketing</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/plans/maintenance" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Bảo trì website</NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example-customer" data-collapse-toggle="dropdown-example-customer">
                <i class='bx bxs-user-account text-xl text-gray-900 font-bold'></i>
                <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Khách hàng</span>
                <i class='bx bxs-chevron-down text-xl text-gray-900 font-bold'></i>
              </button>
              <ul id="dropdown-example-customer" class="hidden py-2 space-y-2">
                <li>
                  <NuxtLink to="/customer" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Danh sách</NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example-contract" data-collapse-toggle="dropdown-example-contract">
                <i class='bx bxs-book-content text-xl text-gray-900 font-bold'></i>
                <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Hợp đồng</span>
                <i class='bx bxs-chevron-down text-xl text-gray-900 font-bold'></i>
              </button>
              <ul id="dropdown-example-contract" class="hidden py-2 space-y-2">
                <li>
                  <NuxtLink to="/contracts" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Danh sách</NuxtLink>
                </li>
              </ul>
            </li>
            <li>
              <button type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-user" data-collapse-toggle="dropdown-user">
                <i class='bx bx-user text-xl text-gray-900 font-bold'></i>
                <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Người dùng</span>
                <i class='bx bxs-chevron-down text-xl text-gray-900 font-bold'></i>
              </button>
              <ul id="dropdown-user" class="hidden py-2 space-y-2">
                <li>
                  <NuxtLink to="/users" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Danh sách</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/users/roles" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Quyền</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>