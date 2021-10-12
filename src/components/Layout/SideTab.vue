<template>
<div class="side-tab">
  <el-tabs type="card" v-model="activeTabName">
    <el-tab-pane label="Episode" name="ep">
      <el-row type="flex" class="episode" justify="center">
        <el-alert type="success"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>
      <el-row type="flex" class="episode" justify="center">
        <el-alert type="info"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>
      <el-row type="flex" class="episode" justify="center">
        <el-alert type="primary"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>
      <el-row type="flex" class="episode" justify="center">
        <el-alert type="warning"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>
      <el-row type="flex" class="episode" justify="center">
        <el-alert type="danger"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>
      <el-row type="flex" class="episode" justify="center">
        <el-alert type="success"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>
      <el-row type="flex" class="episode" justify="center">
        <el-alert type="info"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>
      <el-row type="flex" class="episode" justify="center">
        <el-alert type="primary"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>
      <el-row type="flex" class="episode" justify="center">
        <el-alert type="warning"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>
      <el-row type="flex" class="episode" justify="center">
        <el-alert type="danger"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>      <el-row type="flex" class="episode" justify="center">
        <el-alert type="success"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>
      <el-row type="flex" class="episode" justify="center">
        <el-alert type="info"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>
      <el-row type="flex" class="episode" justify="center">
        <el-alert type="primary"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>
      <el-row type="flex" class="episode" justify="center">
        <el-alert type="warning"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>
      <el-row type="flex" class="episode" justify="center">
        <el-alert type="danger"><p>Emergency visit  13/04/19</p></el-alert>
      </el-row>

    </el-tab-pane>
    <el-tab-pane label="Correspondent" name="correspondent">
      2
    </el-tab-pane>
    <el-tab-pane label="Notes" name="notes">
     3
    </el-tab-pane>
    <el-tab-pane label="All" name="all">
     4
    </el-tab-pane>

  </el-tabs>

</div>
</template>

<script>
export default {
data() {
    return {
      activeTabName: 'ep'
      // activeTabName: 'id_other'
      // activeTabName: 'carer_gp'
    }
  },
}
</script>

<style lang="scss">
.side-tab {
  background: #909ca8;
  height: 230px;
  overflow: scroll;
  .el-tabs {
    &__header {
      .el-tabs__nav-wrap {
        .el-tabs__nav-prev, .el-tabs__nav-next {
          color: #fff;
          font-weight: 600;
          font-size: 18px;
        }
        .el-tabs__nav-scroll {
          .el-tabs__nav {
            .el-tabs__item {
              font-size: 16px;
                color: #fff;
              // color: rgb(221, 221, 221);
              &.is-active {
                color: #fff;
                font-weight: 600;
                background: rgba(255, 127, 80, 0.623);
                // color: #67C23A;
              }
            }
          }
        }
      }
    }
  }
}
</style>