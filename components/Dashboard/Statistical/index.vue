<template>
  <div>
    <el-select class="mt-3" v-model="selectService" placeholder="Chọn dịch vụ">
      <el-option
        v-for="item in services"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div v-if="selectService == 'domain'">
      <apexchart type="bar" :options="domain.options" :series="domain.series"></apexchart>
    </div>
    <div v-else-if="selectService == 'hosting'">
      <apexchart type="bar" :options="hosting.options" :series="hosting.series"></apexchart>
    </div>
    <div v-else-if="selectService == 'ssl'">
      <apexchart type="bar" :options="ssl.options" :series="ssl.series"></apexchart>
    </div>
    <div v-else-if="selectService == 'email'">
      <apexchart type="bar" :options="email.options" :series="email.series"></apexchart>
    </div>
    <div v-else-if="selectService == 'google'">
      <apexchart type="bar" :options="google.options" :series="google.series"></apexchart>
    </div>
    <div v-else-if="selectService == 'facebook'">
      <apexchart type="bar" :options="facebook.options" :series="facebook.series"></apexchart>
    </div>
    <div v-else-if="selectService == 'content'">
      <apexchart type="bar" :options="content.options" :series="content.series"></apexchart>
    </div>
    <div v-else-if="selectService == 'maintenance'">
      <apexchart type="bar" :options="maintenance.options" :series="maintenance.series"></apexchart>
    </div>
    <h3 class="text-center">BIỂU ĐỒ DOANH SỐ TỪ THÁNG 1 ĐẾN THÁNG 12</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      domain: {
        options: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
          }
        },
        series: [
          {
            name: 'Giá bán',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 80, 35, 55, 100]
          },
          {
            name: 'Giá nhập',
            data: [20, 30, 35, 40, 39, 50, 60, 81, 70, 25, 45, 90]
          },
        ],
      },
      hosting: {
        options: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
          }
        },
        series: [
          {
            name: 'Giá bán',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 80, 35, 55, 100]
          },
          {
            name: 'Giá nhập',
            data: [20, 30, 35, 40, 39, 50, 60, 81, 70, 25, 45, 90]
          },
        ],
      },
      ssl: {
        options: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
          }
        },
        series: [
          {
            name: 'Giá bán',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 80, 35, 55, 100]
          },
          {
            name: 'Giá nhập',
            data: [20, 30, 35, 40, 39, 50, 60, 81, 70, 25, 45, 90]
          },
        ],
      },
      email: {
        options: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
          }
        },
        series: [
          {
            name: 'Giá bán',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 80, 35, 55, 100]
          },
          {
            name: 'Giá nhập',
            data: [20, 30, 35, 40, 39, 50, 60, 81, 70, 25, 45, 90]
          },
        ],
      },
      google: {
        options: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
          }
        },
        series: [
          {
            name: 'Giá bán',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 80, 35, 55, 100]
          },
          {
            name: 'Giá nhập',
            data: [20, 30, 35, 40, 39, 50, 60, 81, 70, 25, 45, 90]
          },
        ],
      },
      facebook: {
        options: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
          }
        },
        series: [
          {
            name: 'Giá bán',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 80, 35, 55, 100]
          },
          {
            name: 'Giá nhập',
            data: [20, 30, 35, 40, 39, 50, 60, 81, 70, 25, 45, 90]
          },
        ],
      },
      content: {
        options: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
          }
        },
        series: [
          {
            name: 'Giá bán',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 80, 35, 55, 100]
          },
          {
            name: 'Giá nhập',
            data: [20, 30, 35, 40, 39, 50, 60, 81, 70, 25, 45, 90]
          },
        ],
      },
      maintenance: {
        options: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
          }
        },
        series: [
          {
            name: 'Giá bán',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 80, 35, 55, 100]
          },
          {
            name: 'Giá nhập',
            data: [20, 30, 35, 40, 39, 50, 60, 81, 70, 25, 45, 90]
          },
        ],
      },
      services: [
        {
          value: 'domain',
          label: 'Tên miền'
        }, 
        {
          value: 'hosting',
          label: 'Hosting'
        }, 
        {
          value: 'ssl',
          label: 'SSL'
        }, 
        {
          value: 'email',
          label: 'Email Doanh Nghiệp'
        }, 
        {
          value: 'google',
          label: 'Quảng cáo Google'
        },
        {
          value: 'facebook',
          label: 'Quảng cáo Facebook'
        },
        {
          value: 'content',
          label: 'Nội dung Marketing'
        },
        {
          value: 'maintenance',
          label: 'Bảo trì Website'
        }
      ],
      selectService: ''
    }
  }
}
</script>

<style>

</style>