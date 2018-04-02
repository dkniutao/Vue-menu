<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="compile(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <iTEMDialog
    :dialogFormVisible='dialogFormVisible' v-on:CloseDialog="CloseDialog"></iTEMDialog>
  </div>
</template>

<script>
import iTEMDialog from '../../components/dialog.vue'
export default {
  components: {
    iTEMDialog
  },
  props: [
  ],
  data () {
    return {
      dialogFormVisible: false,
      tableData: []
    }
  },
  computed: {
  },
  methods: {
    handleClick (row) {
      console.log(row)
    },
    compile (row) {
      this.dialogFormVisible = true
    },
    CloseDialog () {
      this.dialogFormVisible = false
    },
    tabledata () {
      this.$http.get('http://localhost:8080/api/goods').then((response) => {
        this.tableData = response.data.data.tabledata
        console.log('1111111111', response.data.data)
      })
    }
  },
  beforeCreate () {
  },
  created () {
    this.tabledata()
  },
  mounted () {
  }
}
</script>
