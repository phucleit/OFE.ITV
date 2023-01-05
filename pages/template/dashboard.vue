<template>
    <div class="w-full grid grid-cols-12 gap-3">
      <div class="col-span-8">
        <WidgetCard></WidgetCard>
      </div>
      <div class="col-span-4">
        <div class="bg-green-300 h-full rounded-lg p-0 shadow-md">
          <div class="bg-custom-1 h-full p-3">
            <money v-model="price"></money> {{price}}
          </div>
        </div>
      </div>
      <div class="col-span-12 grid grid-cols-12 gap-3">
        <div class="col-span-12 bg-white rounded-lg shadow-md p-3">
          <h3>Thống Kê Chi Phí Dịch Vụ</h3>
          <DashboardStatistical></DashboardStatistical>
        </div>
        <!-- <div class="col-span-6 bg-white rounded-lg shadow-md p-3">
          <h3>Thống Kê Chi Phí Dịch Vụ Theo Tháng</h3>
          <DashboardStatisticalServiceMonth></DashboardStatisticalServiceMonth>
        </div>
        <div class="col-span-6 bg-white rounded-lg shadow-md p-3">
          <h3>Thống Kê Chi Phí Dịch Vụ Theo Năm</h3>
          <DashboardStatisticalServiceYear></DashboardStatisticalServiceYear>
        </div> -->
      </div>
      <div class="col-span-12 grid grid-cols-12 gap-3">
        <div class="col-span-6">
          <DashboardExpiredTable class="p-3 bg-white rounded-lg shadow-md">
            
          </DashboardExpiredTable>
        </div>
        <div class="col-span-6">
          <div class="flex-noshink grid grid-cols-2 gap-3">
            <span>
              <div class="w-full min-h-64 bg-white rounded-lg shadow-md p-3 relative max-h-[700px]">
                <label class="font-semibold text-lg text-gray-400">
                  Total Cost
                </label>
                <span class="absolute text-2xl top-[50px] left-[15px] text-red-500 font-semibold">
                  2.123.412vnđ
                </span>
                <div id="chart1"></div>
                <el-divider></el-divider>
                <div id="chartPie1"></div>
              </div>
            </span>
            <span>
              <div class="w-full min-h-64 bg-white rounded-lg shadow-md p-3 relative max-h-[700px]">
                <label class="font-semibold text-lg text-gray-400">
                  Total Income
                </label>
                <span class="absolute text-2xl top-[50px] left-[15px] text-green-500 font-semibold">
                  2.123.412vnđ
                </span>
                <div id="chart2"></div>
                <el-divider></el-divider>
                <div id="chartPie2"></div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return {
        price: 123.45,
      }
    },
    methods: {
  
    },
    mounted(){
      var vm = this;
      vm.$nextTick(()=>{
        var options = {
          series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          }],
          chart: {
            height: '250px',
            type: 'line',
            zoom: {
              enabled: false
            },
            toolbar:{
              show: false
            },
          },
          stroke: {
            curve: 'straight'
          },
          // title: {
          //   text: 'Product Trends by Month',
          //   align: 'left'
          // },
          grid: {
            show: false,      // you can either change hear to disable all grids
            xaxis: {
              lines: {
                show: false  //or just here to disable only x axis grids
              }
            },  
            yaxis: {
              lines: { 
                show: false  //or just here to disable only y axis
              }
            },   
          },
          
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            axisTicks: {
              show: false
            },
            axisBorder: {
              show: false
            },
            labels: {
              show: false
            },
          },
          yaxis: {
            axisTicks: {
              show: false
            },
            axisBorder: {
              show: false
            },
            labels: {
              show: false
            },
          },
          sparkline: {
            enabled: true
          }
        }
        var chart = new ApexCharts(document.querySelector("#chart1"), options);
        chart.render();
  
        chart = new ApexCharts(document.querySelector("#chart2"), options);
        chart.render();
  
        var optionsPie = {
            series: [44, 55, 41, 17, 15],
            chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
          };
          var chartPie = new ApexCharts(document.querySelector("#chartPie1"), optionsPie);
          chartPie.render();
          chartPie = new ApexCharts(document.querySelector("#chartPie2"), optionsPie);
          chartPie.render();
      })
    }
  }
  </script>
  
  <style>
  .bg-custom-1 {
    background: url('https://preview.keenthemes.com/metronic8/demo17/assets/media/misc/city.png');
    background-size:cover;
  }
  .v-money {
    @apply outline-none px-2 py-1 rounded-lg
  }
  </style>
  