<template>
  <div class="new-ep">
    <div class="new-ep-infobar">
      <!-- <h1>Create Inpatient Episodes</h1> -->
      <div class="new-ep-infobar-info">
        <span>PID: <strong>1221335622 </strong></span>
        <el-divider direction="vertical"></el-divider>
        <span>Name: <strong>Hohn Doel </strong></span>
        <el-divider direction="vertical"></el-divider>
        <span>DOB: <strong>23-05-1967 </strong></span>
        <el-divider direction="vertical"></el-divider>
        <span>Address: <strong>17 Main Rd, Rosetta, TAS 7008 </strong></span>
        <el-divider direction="vertical"></el-divider>
        <el-button type="success" size="mini">Patient Profile</el-button>
        <el-button type="success" size="mini">Episode Dashboard</el-button>
        <el-button type="success" size="mini">Patient Search</el-button>
      </div>
    </div>
    <el-row class="new-ep-main">
      <el-col :span="7" class="new-ep-main-left">
        <div class="new-ep-main-left-list">
          <el-table :data="patientList" height="450" border style="width: 100%">
            <el-table-column fixed="" prop="date" label="Date" min-width="30%"  :resizable="false">
            </el-table-column>
            <el-table-column fixed="" prop="name" label="Consultant -Ward(Diagnosis)" min-width="70%" :resizable="false">
            </el-table-column>
          </el-table>
        </div>
        <div class="new-ep-main-left-search">
          <div>Search: </div>
          <el-select v-model="search.field" placeholder="Field">
            <el-option
              :key=1
              label="xxxx1"
              value="xxxx1">
            </el-option>
            <el-option
              :key=2
              label="xxxx1"
              value="xxxx1">
            </el-option>
          </el-select>
          <el-select v-model="search.criteria" placeholder="Criteria">
            <el-option
              :key=3
              label="xxxx1"
              value="xxxx1">
            </el-option>
            <el-option
              :key=4
              label="xxxx1"
              value="xxxx1">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="17" class="new-ep-main-right">
        <el-form :rules="rules" ref="episodeForm" :model="episodeForm" label-width="150px" label-position="left">
          <!-- Admission Date Time -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="Admission Date:" prop="adminssionDate">
                <el-col :span="20">
                  <el-date-picker @change="onSelectAdmDate" type="date" placeholder="-Select Date-" v-model="episodeForm.adminssionDate" size="mini"></el-date-picker>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Admission Time:" prop="adminssionTime">
                <el-col :span="20">
                  <el-time-picker v-model="episodeForm.adminssionTime" placeholder="-Select Time-" size="mini">
                  </el-time-picker>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- Consultant -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="Admitting Consultant:" prop="admConsultant">
                <el-col :span="18">
                  <el-select v-model="episodeForm.admConsultant" size="mini">
                    <el-option label="xxxx" value="residential"></el-option>
                    <el-option label="yyyy" value="home"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Admitting Ward:" prop="admWard">
                <el-col :span="18">
                  <el-select v-model="episodeForm.admWard" size="mini">
                    <el-option label="xxxx" value="residential"></el-option>
                    <el-option label="yyyy" value="home"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- Visit Type -->
          <el-row>
            <el-col>
              <el-form-item label="Visit Type:" prop="visitType">
                <el-col :span="24">
                  <el-select v-model="episodeForm.visitType" placeholder="-Visit Type-" size="mini">
                    <el-option label="Elective" value="elective"></el-option>
                    <el-option label="Emergency" value="emergency"></el-option>
                    <el-option label="Day" value="day"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- Compliant -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="Compliant:" prop="compliant">
                <el-col :span="20">
                  <el-select v-model="episodeForm.compliant" filterable allow-create default-first-option placeholder="Select or Input" size="mini">
                      <el-option label="SNOMED 1" value="snomed1"></el-option>
                      <el-option label="SNOMED 2" value="snomed2"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Onset Date:" prop="onsetDate">
                <el-col :span="20">
                  <el-date-picker @change="onSelectOnsetDate" type="date" placeholder="-Select Date-" v-model="episodeForm.onsetDate" size="mini"></el-date-picker>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- Primary Diagnosis -->
          <el-row>
            <el-col :span="24">
              <el-form-item label="Primary Diagnosis:" prop="primDiagnosis">
                <el-select v-model="episodeForm.primDiagnosis" size="mini" filterable allow-create placeholder="Select or Input">
                  <el-option label="SNOMED 1" value="snomed1"></el-option>
                  <el-option label="SNOMED 2" value="snomed2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- Diagnosis Type -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="Diagnosis Type:" prop="diagnosisType">
                <el-col :span="20">
                  <el-select v-model="episodeForm.diagnosisType" filterable default-first-option placeholder="Select" size="mini">
                      <el-option label="Confirmed" value="snomed1"></el-option>
                      <el-option label="Tentative" value="snomed2"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Current Ward:" prop="currentWard">
                <el-col :span="20">
                  <el-select v-model="episodeForm.currentWard" filterable default-first-option placeholder="Select" size="mini">
                      <el-option label="Confirmed" value="snomed1"></el-option>
                      <el-option label="Tentative" value="snomed2"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- Care Plan -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="Care Plan :" prop="carePlan">
                <el-col :span="20">
                  <el-select v-model="episodeForm.carePlan" filterable default-first-option placeholder="Select" size="mini">
                      <el-option label="Confirmed" value="snomed1"></el-option>
                      <el-option label="Tentative" value="snomed2"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Remarks:" prop="remark">
                <el-col :span="20">
                  <el-input type="textarea" size="mini" :rows="2" v-model="episodeForm.remark">
                  </el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- Outcome -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="Outcome:" prop="outcome">
                <el-col :span="6">
                  <el-select v-model="episodeForm.outcome" size="mini" filterable default-first-option placeholder="Select">
                    <el-option label="Recovered" value="snomed1"></el-option>
                    <el-option label="Transfer" value="snomed2"></el-option>
                    <el-option label="Dead" value="snomed3"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- Discharge -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="Discharge Date:" prop="dischargeDate">
                <el-col :span="20">
                  <el-date-picker type="date" placeholder="-Select Date-" v-model="episodeForm.dischargeDate" size="mini"></el-date-picker>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Discharge Time:" prop="dischargeTime">
                <el-col :span="20">
                  <el-time-picker v-model="episodeForm.dischargeTime" placeholder="-Select Time-" size="mini">
                  </el-time-picker>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- Discharge Consultant -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="Discharge Consul.:" prop="dischargeConsultant">
                <el-col :span="18">
                  <el-select v-model="episodeForm.dischargeConsultant" size="mini">
                    <el-option label="xxxx" value="residential"></el-option>
                    <el-option label="yyyy" value="home"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Discharge Ward:" prop="admWard">
                <el-col :span="18">
                  <el-select v-model="episodeForm.dischargeWard" size="mini">
                    <el-option label="xxxx" value="residential"></el-option>
                    <el-option label="yyyy" value="home"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- Destination -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="Discharge Dest.:" prop="dischargeDestination">
                <el-col :span="18">
                  <el-select v-model="episodeForm.dischargeDestination" size="mini">
                    <el-option label="xxxx" value="residential"></el-option>
                    <el-option label="yyyy" value="home"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12" class="checkDischargeSum">
              <el-row>
                <el-col :span="12">
                  <span>Discharge Summary Completed:</span>
                </el-col>
                <el-col :span="12">
                  <el-checkbox v-model="episodeForm.dischargeSumCompleted"></el-checkbox>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <!-- Add Entry -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="Additional Entry:" prop="addEntry_1">
                <el-col :span="18">
                  <el-input placeholder="Add. Entry 1" v-model="episodeForm.addEntry_1" size="mini"/>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="Additional Entry:" prop="addEntry_2">
                <el-col :span="18">
                  <el-input placeholder="Add. Entry 2" v-model="episodeForm.addEntry_1" size="mini"/>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="Additional Entry:" prop="addEntry_3">
                <el-col :span="18">
                  <el-input placeholder="Add. Entry 3" v-model="episodeForm.addEntry_1" size="mini"/>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <BottomButtonGroup />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BottomButtonGroup from '@/components/Common/BottomButtonGroup.vue';

export default {
  components: {
    BottomButtonGroup
  },
  data() {
    return {
      patientList: [
        {
          date: '2016-05-02',
          name: 'Peter White - K10(XXX)',
        },
        {
          date: '2016-05-02',
          name: 'Peter White - K10(XXX)',
        },
        {
          date: '2016-05-02',
          name: 'Peter White - K10(XXX)',
        },
        {
          date: '2016-05-02',
          name: 'Peter White - K10(XXX)',
        },
        {
          date: '2016-05-02',
          name: 'Peter White - K10(XXX)',
        },
        {
          date: '2016-05-02',
          name: 'Peter White - K10(XXX)',
        },
        {
          date: '2016-05-02',
          name: 'Peter White - K10(XXX)',
        },
        {
          date: '2016-05-02',
          name: 'Peter White - K10(XXX)',
        },
        {
          date: '2016-05-02',
          name: 'Peter White - K10(XXX)',
        },
        {
          date: '2016-05-02',
          name: 'Peter White - K10(XXX)',
        }
      ],
      search: { field: '', criteria: '' },
      episodeForm: {

      },
      rules: {

      }
    }
  },
  methods: {
    onSelectAdmDate() {

    },
    onSelectAdmTime() {

    },

    onSelectOnsetDate() {

    }
  }
}
</script>

<style lang="scss">
.new-ep {
  // background: pink;
  height: 100%;
  &-infobar {
    border: 1px solid #EBEEF5;
    padding: 2px;
    min-width: 1230px;
    h1 {
      color: #ffffff;
      background: #409EFF;
    }
    span {
      font-size: 14px;
    }
    .el-button-mini {
      padding: 0;
    }
  }
  &-main {
    // background: pink;
    // height: 100%;
    padding-top: 15px;
    &-left {
      &-search {
        margin-top: 10px;
        .el-select {
          margin-top: 5px;
        }
      }
    }

    &-right {
      // padding-left: 25px;
      padding: 25px 0 0 50px;
      border-left: 1px solid #bebec0;

      .el-form {
        .el-row {
          .el-col {
            .el-form-item {
              margin-bottom: 0;
            }
          }
        }
      }

      .checkDischargeSum {
        color: #606266;
        .el-row {
          margin-top: 5px;
          .el-col {
            margin-top: 5px;
            span {
              margin-left: 0;

            }
          }
        } 
      }
    }

  }
}
</style>