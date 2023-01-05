<template>
  <div v-if="$attrs.value" class="w-full services-list">
    <el-table :data="$attrs.value.data" stripe style="width: 100%">
      <el-table-column label="Tên miền" width="170">
        <template slot-scope="scope">
          {{ scope.row.name }}{{ scope.row.plan[0].name }}
        </template>
      </el-table-column>
      <el-table-column label="Trạng thái" width="170">
        <template slot-scope="scope">
          <el-tag
            size="mini"
            effect="dark"
            :type="compareDate(scope.row.expiredAt).type"
          >
            {{ compareDate(scope.row.expiredAt).daysLeft }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Chi phí" width="140">
        <template slot-scope="scope">
          {{ scope.row.plan[0].sell_price | currency(' đ', 0, { symbolOnLeft: false }) }}
        </template>
      </el-table-column>
      <el-table-column label="Ngày tạo" width="130">
        <template slot-scope="scope">
          {{ scope.row.startedAt | moment("DD-MM-YYYY") }}
        </template>
      </el-table-column>
      <el-table-column label="Ngày hết hạn" width="130">
        <template slot-scope="scope">
          {{ scope.row.expiredAt | moment("DD-MM-YYYY") }}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination 
      background 
      layout="prev, pager, next" 
      v-if="$attrs.value.total" 
      :page-size="$attrs.value.total.pageSize" 
      :total="$attrs.value.total.rows"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
  import moment from 'moment';

  export default {
    methods: {
      compareDate(date) {
        var period_date = moment(date, "YYYY-MM-DD");
        var current_date = moment(new Date(), "YYYY-MM-DD");
        var count = moment.duration(period_date.diff(current_date)).asDays();

        if(Math.round(count, 0) > 30) {
          return { daysLeft: 'Đang sử dụng', type: 'primary' };
        } else if (Math.round(count, 0) < 0) {
          return { daysLeft: 'Hết hạn', type: 'danger' };
        } else {
          return { daysLeft: `Còn ${Math.round(count, 0)} ngày hết hạn`, type: 'warning' };
        }
      },
    },
  }
</script>

<style>
  
</style>