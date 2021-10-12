<template>
  <div class="patient-registration">
    <el-tabs type="card" v-model="activeTabName" editable closable>
      <el-tab-pane label="General" name="general">
        <General ref="generalTab" />
      </el-tab-pane>
      <el-tab-pane label="ID & Other" name="id_other">
        <IdOther ref="idOtherTab"  />
      </el-tab-pane>
      <el-tab-pane label="Carers & GP" name="carer_gp">
        <CarerGp ref="carerGpTab"  />
      </el-tab-pane>
      <!-- <el-tab-pane label="Additional" name="addtional">
        tab cntent
      </el-tab-pane> -->
    </el-tabs>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="5"><el-button type="warning">Edit</el-button></el-col>
      <el-col :span="5"><el-button type="info" plain>Cancel</el-button></el-col>
      <el-col :span="5"><el-button type="success" @click="onSave">Save</el-button></el-col>
      <el-col :span="5"><el-button type="danger">Inactivate</el-button></el-col>
    </el-row>
  </div>
</template>

<script>
import General from '@/components/PatientRegistration/General.vue';
import IdOther from '@/components/PatientRegistration/IdOther.vue';
import CarerGp from '@/components/PatientRegistration/CarerGp.vue';

import { mapActions } from 'vuex';

export default {
  components: {
    General,
    IdOther,
    CarerGp
  },
  data() {
    return {
      activeTabName: 'general'
      // activeTabName: 'id_other'
      // activeTabName: 'carer_gp'
    }
  },
  methods: {
    ...mapActions([
      'saveRegistration'
    ]),
    onSave() {
      this.$refs.generalTab.saveForm();
      // this.$refs.idOtherTab.saveForm();
      // this.$refs.carerGpTab.saveForm();
      
    }
  }
}
</script>

<style lang="scss">
.patient-registration {
  padding: 0 60px;
  // .el-tabs {
  // }
  .el-divider {
    margin: 10px 0;
  }
}
</style>