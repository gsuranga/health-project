<template>
  <div class="profile">
    <el-row class="profile-top">
      <el-col :span="20" class="profile-top-left">
        <PatientRegistrationForm />
      </el-col>
      <el-col :span="4" class="profile-top-right">
        <div class="profile-top-right-missing-box">
          <MissingItemBox />
        </div>
        <div class="profile-top-right-facts">
          <SpecialFact />
        </div>
      </el-col>
    </el-row>
    <div class="profile-bottom">
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
.profile {
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