<template>
  <div class="main-container">
    <el-row class="main-container-top">
      <el-col :span="20" class="main-container-top-left">
        <PatientRegistrationForm />
      </el-col>
      <el-col :span="4" class="main-container-top-right">
        <div class="main-container-top-right-missing-box">
          <MissingItemBox />
        </div>
        <div class="main-container-top-right-facts">
          <SpecialFact />
        </div>
      </el-col>
    </el-row>
    <div class="main-container-bottom">
      <GridInfo />
    </div>
  </div>
</template>

<script>
import PatientRegistrationForm from '@/components/PatientRegistration/PatientRegistrationForm.vue'
import GridInfo from '@/components/PatientRegistration/GridInfo.vue'
import MissingItemBox from '@/components/PatientProfile/MissingItemBox.vue'
import SpecialFact from '@/components/PatientProfile/SpecialFact.vue'
export default {
  components: {
    PatientRegistrationForm,
    GridInfo,
    MissingItemBox,
    SpecialFact
  }

}
</script>

<style lang="scss">
.main-container {
  // background: pink;
  height: 100%;
  &-top {
    height: 550px;
    position: relative;
    // overflow: scroll;
    // background: red;
    &-right {
      height: 100%;
      // display: flex;
      // flex-direction: column;
      // align-content: flex-end
      &-facts {
        // align-content: flex-end;
        margin-bottom: 0;
        position: absolute;
        bottom: 0;
      }
    }
  }
  &-bottom {
    height: 300px;
  }
}
</style>