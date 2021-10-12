<template>
<div class="grid-info">
  <div class="grid-info-top">
    <div class="grid comorbidities">
      <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>Comorbidities/Surgical History</span>
        <el-button style="float: right; padding: 3px 0" type="primay" plain @click="dialogVisible = true">Expand</el-button>
      </div>
      <p> - COPD (2018)</p>
      <p> - Hyperstension (2018)</p>
      <p> - Diabetes (2015)</p>
      </el-card>
    </div>
    <div class="grid Allergies">
      <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>Alerts and Allergies</span>
        <el-button @click="dialogVisible = true" style="float: right; padding: 3px 0" type="primay" plain>Expand</el-button>
      </div>
      <p> - Falls risk</p>
      <p> - Language barrier</p>
      <p> - Fish</p>
      </el-card>
    </div>
    <div class="grid acd">
      <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>Alerts and Allergies</span>
        <el-button @click="dialogVisible = true" style="float: right; padding: 3px 0" type="primay" plain>Expand</el-button>
      </div>
      <p> - Falls risk</p>
      <p> - Language barrier</p>
      <p> - Fish</p>
      </el-card>
    </div>
    <div class="grid pending-tasks">
      <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>Alerts and Allergies</span>
        <el-button @click="dialogVisible = true" style="float: right; padding: 3px 0" type="primay" plain>Expand</el-button>
      </div>
      <p> - Falls risk</p>
      <p> - Language barrier</p>
      <p> - Fish</p>
      </el-card>
    </div>
  </div>
  <div class="grid-info-mid">
    <div class="grid Comorbidities">
      <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>Alerts and Allergies</span>
        <el-button @click="dialogVisible = true" style="float: right; padding: 3px 0" type="primay" plain>Expand</el-button>
      </div>
      <p> - Falls risk</p>
      <p> - Language barrier</p>
      <p> - Fish</p>
      </el-card>
    </div>
    <div class="grid Allergies">
      <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>Alerts and Allergies</span>
        <el-button @click="dialogVisible = true" style="float: right; padding: 3px 0" type="primay" plain>Expand</el-button>
      </div>
      <p> - Falls risk</p>
      <p> - Language barrier</p>
      <p> - Fish</p>
      </el-card>
    </div>
    <div class="grid acd">
      <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>Alerts and Allergies</span>
        <el-button @click="dialogVisible = true" style="float: right; padding: 3px 0" type="primay" plain>Expand</el-button>
      </div>
      <p> - Falls risk</p>
      <p> - Language barrier</p>
      <p> - Fish</p>
      </el-card>
    </div>
    <div class="grid pending-tasks">
      <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>Alerts and Allergies</span>
        <el-button @click="dialogVisible = true" style="float: right; padding: 3px 0" type="primay" plain>Expand</el-button>
      </div>
      <p> - Falls risk</p>
      <p> - Language barrier</p>
      <p> - Fish</p>
      </el-card>
    </div>
  </div>
  <div class="grid-info-bottom">
    <div class="grid Comorbidities">
      <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>Alerts and Allergies</span>
        <el-button @click="dialogVisible = true" style="float: right; padding: 3px 0" type="primay" plain>Expand</el-button>
      </div>
      <p> - Falls risk</p>
      <p> - Language barrier</p>
      <p> - Fish</p>
      </el-card>
    </div>
    <div class="grid Allergies">
      <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>Alerts and Allergies</span>
        <el-button @click="dialogVisible = true" style="float: right; padding: 3px 0" type="primay" plain>Expand</el-button>
      </div>
      <p> - Falls risk</p>
      <p> - Language barrier</p>
      <p> - Fish</p>
      </el-card>
    </div>
    <div class="grid acd">
      <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>Alerts and Allergies</span>
        <el-button @click="dialogVisible = true" style="float: right; padding: 3px 0" type="primay" plain>Expand</el-button>
      </div>
      <p> - Falls risk</p>
      <p> - Language barrier</p>
      <p> - Fish</p>
      </el-card>
    </div>
    <div class="grid pending-tasks">
      <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <span>Alerts and Allergies</span>
        <el-button @click="dialogVisible = true" style="float: right; padding: 3px 0" type="primay" plain>Expand</el-button>
      </div>
      <p> - Falls risk</p>
      <p> - Language barrier</p>
      <p> - Fish</p>
      </el-card>
    </div>
  </div>
  <el-dialog
  title="Info"
  :visible.sync="dialogVisible"
  width="30%"
  close-on-click-modal>
  <h4>Vaccination Record</h4>
  <p>Covid-19 Vac Dose 1 - Completed</p>
  <p>Covid-19 Vac Dose 2 - Completed</p>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      // this.$confirm('Confirm close?')
      //   .then(_ => {
      //     done();
      //   })
      //   .catch(_ => {});
    }
  }
}
</script>

<style lang="scss">
.grid-info {
  // background: green;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  &-top, &-mid, &-bottom {
    height: 100%;
    display: flex;
    justify-content: space-between;
    .grid {
      // background: red;
      max-width: 320px;
      width: 100%;
      margin-bottom: 3px;
      .el-card {
        background: #eeeaea46;
      }
    }
  }

  &-top {
    // background: pink;
  }

}
</style>