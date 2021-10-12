<template>
  <div class="diagnostic-box" >
    <el-row type="flex" justify="center"><h3>Diagnostics</h3></el-row>
    <el-row type="flex" justify="center">
      <el-col :span="24"><h4 >Pathology</h4></el-col>
      <el-col :span="24"><p>FBC - 15/02/21</p></el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="24"><h4 >Radiology</h4></el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.diagnostic-box {
 background: #b5c7d8;
 min-height: 300px;
 padding: 20px;
}
</style>