<template>
  <div class="vacc-history">
    <div class="vacc-history-infobar">
      <!-- <h1>Create Inpatient Episodes</h1> -->
      <div class="vacc-history-infobar-info">
        <span>PID: <strong>1221335622 </strong></span>
        <el-divider direction="vertical"></el-divider>
        <span>Name: <strong>Hohn Doel </strong></span>
        <el-divider direction="vertical"></el-divider>
        <span>DOB: <strong>23-05-1967 </strong></span>
        <el-divider direction="vertical"></el-divider>
        <span>Address: <strong>17 Main Rd, Rosetta, TAS 7008 </strong></span>
        
        <el-button type="success" size="mini">Patient Profile</el-button>
        <el-button type="success" size="mini">Patient Search</el-button>
      </div>
    </div>
    <el-row class="vacc-history-main">
      <el-col :span="8" class="vacc-history-main-left">
        <h1 class="vacc-history-main-left-header">Vaccination History</h1>
        <div class="vacc-history-main-left-list">
          <el-table :data="vaccineList" height="350" border style="width: 100%">
            <el-table-column fixed prop="vaccine" label="Vaccine" min-width="40%"  :resizable="false">
            </el-table-column>
            <el-table-column fixed prop="date" label="Date Received" min-width="35%" :resizable="false">
            </el-table-column>
             <el-table-column fixed prop="status" label="Status" min-width="25%" :resizable="false">
            </el-table-column>
          </el-table>
        </div>
        <div class="vacc-history-main-left-toggle">
          <el-button type="primary">Show Inactives</el-button>
        </div>
        <h1 class="vacc-history-main-left-header2">Customer Entry</h1>
        <div class="vacc-history-main-left-list">
          <el-table :data="customerEntry" height="200" border style="width: 100%">
            <el-table-column fixed prop="content" label="Entries From Customer" min-width="40%" :resizable="false">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="16" class="vacc-history-main-right">
        <el-form :rules="rules" ref="vaccinationForm" :model="vaccinationForm" label-width="150px" label-position="left">
          <!-- Vaccine -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="Vaccine:" prop="vaccine">
                <el-col :span="20">
                  <el-select filterable allow-create placeholder="-Select Or Input-" v-model="vaccinationForm.vaccine" size="mini">
                    <el-option label="AZ" value="snomed1"></el-option>
                    <el-option label="Phizer" value="snomed2"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- Other Name -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="OtherName/Disease:" prop="otherName">
                <el-col :span="20">
                  <el-select filterable allow-create placeholder="-Select Or Input-" v-model="vaccinationForm.otherName" size="mini">
                    <el-option label="AZ" value="snomed1"></el-option>
                    <el-option label="Phizer" value="snomed2"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- Date Received -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="Date Received:" prop="receivedDate">
                <el-col :span="20">
                  <el-date-picker type="date" placeholder="-Select Date-" v-model="vaccinationForm.receivedDate" size="mini"></el-date-picker>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- Status -->
          <el-row>
            <el-col :span="12">
              <el-form-item label="Status:" prop="status">
                <el-col :span="20">
                  <el-select filterable allow-create placeholder="-Select Or Input-" v-model="vaccinationForm.status" size="mini">
                    <el-option label="Given" value="snomed1"></el-option>
                    <el-option label="Not Given" value="snomed2"></el-option>
                    <el-option label="Reaction" value="snomed3"></el-option>
                  </el-select>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="Description 1:" prop="desc_1">
                <el-col :span="20">
                  <el-input type="textarea" size="mini" :rows="2" v-model="vaccinationForm.desc_1">
                  </el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="Description 2:" prop="desc_2">
                <el-col :span="20">
                  <el-input type="textarea" size="mini" :rows="2" v-model="vaccinationForm.desc_2">
                  </el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="Description 3:" prop="desc_3">
                <el-col :span="20">
                  <el-input type="textarea" size="mini" :rows="2" v-model="vaccinationForm.desc_3">
                  </el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="Description 4:" prop="desc_4">
                <el-col :span="20">
                  <el-input type="textarea" size="mini" :rows="2" v-model="vaccinationForm.desc_4">
                  </el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="customeCheckBox">
            <el-col :span="8">
              <p>Do not view in the Consumer side</p>
            </el-col>
            <el-col :span="16">
              <el-checkbox v-model="vaccinationForm.showForConsumer"></el-checkbox>
            </el-col>
          </el-row>
          <el-row class="customeCheckBox">
            <el-col :span="8">
              <p>Include In the discharge summary</p>
            </el-col>
            <el-col :span="16">
              <el-checkbox v-model="vaccinationForm.isInDischargeSum"></el-checkbox>
            </el-col>
          </el-row>
          <el-row class="vacc-note-table">
            <el-col :span="4">
              <p class="vacc-note-table__label">Notes:</p>
              <div class="vacc-note-table__btn">
                <el-button type="primary" size="mini">Add Note</el-button>
              </div>
            </el-col>
            <el-col :span="20">
              <el-table :data="vaccineNotes" height="200" border style="width: 100%">
                <el-table-column fixed prop="note" label="Note" min-width="60%" :resizable="false">
                </el-table-column>
                <el-table-column fixed prop="author" label="Author" min-width="20%" :resizable="false">
                </el-table-column>
                <el-table-column fixed prop="date" label="Date" min-width="20%" :resizable="false">
                </el-table-column>
            </el-table>
            </el-col>
          </el-row>
          <el-row class="isVaccineActive">
            <el-col :span="12">
              <p>Active: {{vaccinationForm.isActive ? 'Yes' : 'No'}}</p>
            </el-col>
          </el-row>
          <!-- Signature -->
          <el-row style="margin: 10px 0">
            <el-col :span="8">
              <el-form-item label="Date Entered:" prop="enteredDate">
                <el-col :span="20">
                  <el-input size="mini" disabled v-model="vaccinationForm.enteredDate">
                  </el-input>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Created By:" prop="createdBy">
                <el-col :span="20">
                  <el-input size="mini" disabled v-model="vaccinationForm.createdBy">
                  </el-input>
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Last Edited By:" prop="editedBy">
                <el-col :span="20">
                  <el-input size="mini" disabled v-model="vaccinationForm.editedBy">
                  </el-input>
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
      today: '',
      vaccineList: [
        {
          vaccine: 'AZ 001',
          date: '2016-05-02',
          status: 'Given'
        },
        {
          vaccine: 'AZ 001',
          date: '2016-05-02',
          status: '1st Dose'
        },
        {
          vaccine: 'AZ 001',
          date: '2016-05-02',
          status: '1st Dose'
        },
        {
          vaccine: 'AZ 001',
          date: '2016-05-02',
          status: 'Given'
        },
        {
          vaccine: 'AZ 001',
          date: '2016-05-02',
          status: 'Given'
        },
        {
          vaccine: 'AZ 001',
          date: '2016-05-02',
          status: 'Given'
        },
        {
          vaccine: 'AZ 001',
          date: '2016-05-02',
          status: 'Given'
        },
        {
          vaccine: 'AZ 001',
          date: '2016-05-02',
          status: 'Given'
        },
      ],
      customerEntry: [
        { content: 'Hepatitis B - (21/02/1965)' },
        { content: 'Hepatitis B - (21/02/1965)' },
        { content: 'Hepatitis B - (21/02/1965)' },
        { content: 'Hepatitis B - (21/02/1965)' },
      ],
      vaccineNotes: [
        { 
          note: 'Sunt et incididunt dolor do veniam quis minim eiusmod ut eiusmod occaecat consectetur.',
          author: 'John',
          date: '12/01/20'
        },
        { 
          note: 'Mollit cillum ut ex eu cupidatat mollit cillum non elit nulla commodo elit.',
          author: 'Linda',
          date: '15/01/20'
        }
      ],
      vaccinationForm: {
        isActive: true,
        enteredDate: new Date().toLocaleDateString(),
        createdBy: 'Jane Brightman',
        editedBy: 'John Doe'
      },
      rules: {

      }
    }
  }
}
</script>

<style lang="scss">
.vacc-history {
  &-infobar {
    border: 1px solid #EBEEF5;
    padding: 2px;
    span {
      font-size: 14px;
      margin-bottom: 15px;
    }
  }
  &-main {
    padding-top: 15px;
    &-left {
      padding-right: 10px;
      &-header, &-header2 {
        text-align: center;
        margin: 5px auto;
      }

      &-toggle {
        button {
          display: block;
          margin: 10px auto 30px auto;
        }
      }
    }
    &-right {
      padding: 25px 0 0 50px;
      border-left: 1px solid #bebec0;
      color: #606266;
      font-size: 14px;
      .el-form {
        .el-row {
          .el-col {
            .el-form-item {
              margin-bottom: 0;
            }
          }
        }
      }

      .customeCheckBox {
        margin-top: 10px;
      }

      .vacc-note-table {
        margin-top: 10px;
        &__label {

        }
        &__btn {
          margin: 10px auto;
          button {
            display: block;
          }
        }
      }
    }
  }
}
</style>