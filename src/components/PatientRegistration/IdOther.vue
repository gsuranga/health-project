<template>
  <div class="idOther-tab">
    <el-form ref="idOtherForm" :model="idOtherForm" :rules="rules" label-width="140px" label-position="left">
      <el-row>
        <el-col :span="8">
          <el-form-item label="Medicare No:" prop="medicareNo">
            <el-col :span="20">
              <el-input v-model="idOtherForm.medicareNo" size="mini"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Date from:" prop="medicareDateFrom">
            <el-date-picker type="date" v-model="idOtherForm.medicareDateFrom" size="mini"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Last verified:" prop="lastVerified">
            <el-date-picker type="date" v-model="idOtherForm.lastVerified" size="mini"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Driver License No:" prop="driverLicenseNo">
            <el-col :span="20">
              <el-input v-model="idOtherForm.driverLicenseNo" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Expiry Date:" prop="dlExpDate">
            <el-date-picker type="date" v-model="idOtherForm.dlExpDate" size="mini"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Passport No:" prop="passportNo">
            <el-col :span="20">
              <el-input v-model="idOtherForm.passportNo" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Expiry Date:" prop="passportExpDate">
            <el-date-picker type="date" v-model="idOtherForm.passportExpDate" size="mini"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Health id:" prop="healthId">
            <el-col :span="20">
              <el-input v-model="idOtherForm.healthId" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Pvt Insurance:" prop="pvtInsurance">
            <el-col :span="20">
              <el-select v-model="idOtherForm.pvtInsurance" placeholder="-Select-" size="mini">
                <el-option label="Medibank" value="medibank"></el-option>
                <el-option label="Allianze" value="allianze"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Pvt Insurance No:" prop="pvtInsuranceNo">
            <el-col :span="23">
              <el-input v-model="idOtherForm.pvtInsuranceNo" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Policy holder:" prop="policyHolder">
            <el-col :span="20">
              <el-select v-model="idOtherForm.policyHolder" placeholder="-Select-" size="mini">
                <el-option label="Medibank" value="medibank"></el-option>
                <el-option label="Allianze" value="allianze"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Date From:" prop="pvtInsuranceDateFrom">
            <el-date-picker type="date" v-model="idOtherForm.pvtInsuranceDateFrom" size="mini"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Marital Status:" prop="maritalStatus">
            <el-col :span="20">
              <el-select v-model="idOtherForm.maritalStatus" placeholder="-Select-" size="mini">
                <el-option label="Single" value="single"></el-option>
                <el-option label="Married" value="married"></el-option>
                <el-option label="Divorced" value="divorced"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Occupation:" prop="occupation">
            <el-input v-model="idOtherForm.occupation" size="mini" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Citizenship:" prop="citizenship">
            <el-col :span="20">
              <el-select v-model="idOtherForm.citizenship" placeholder="-Select-" size="mini">
                <el-option label="Australia" value="aus"></el-option>
                <el-option label="USA" value="usa"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Country Of Birth:" prop="countryOfBirth">
            <el-select v-model="idOtherForm.countryOfBirth" placeholder="-Select-" size="mini">
              <el-option label="Australia" value="aus"></el-option>
              <el-option label="USA" value="usa"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Spoken language:" prop="spokenLanguage">
            <el-col :span="20">
              <el-select v-model="idOtherForm.spokenLanguage" placeholder="-Select-" size="mini">
                <el-option label="English" value="english"></el-option>
                <el-option label="French" value="french"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Preferred language:" prop="preferredLanguage">
            <el-select v-model="idOtherForm.preferredLanguage" placeholder="-Select-" size="mini">
                <el-option label="English" value="english"></el-option>
                <el-option label="French" value="french"></el-option>
              </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="ATSI Status:" prop="atsiStatus">
            <el-col :span="20">
              <el-select v-model="idOtherForm.atsiStatus" placeholder="-Select-" size="mini">
                <el-option label="Non ATSI" value="non"></el-option>
                <el-option label="Aboriginal" value="aboriginal"></el-option>
                <el-option label="Torres Strait Islander" value="tis"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Religion:" prop="religion">
            <el-select v-model="idOtherForm.religion" placeholder="-Select-" size="mini">
              <el-option label="Non" value="non"></el-option>
              <el-option label="Hinduism" value="hinduism"></el-option>
              <el-option label="Buddhism" value="buddhism"></el-option>
              <el-option label="Islam" value="islam"></el-option>
              <el-option label="Christianity" value="christianity"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Dead:" prop="dateOfDeath">
            <el-checkbox v-model="idOtherForm.isDead" />
            <el-date-picker v-if="idOtherForm.isDead" type="date" placeholder="-Date of Death-" v-model="idOtherForm.dateOfDeath" size="mini"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <div class="acd-upload">
            <el-form-item label="Advance care directives available:">
              <el-checkbox v-model="idOtherForm.isAcdAvailable" />
            </el-form-item>
            <el-upload
              :disabled="!idOtherForm.isAcdAvailable"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-exceed="handleExceed"
              :file-list="idOtherForm.fileList">
              <el-button size="small" type="primary">Upload</el-button>
              <div slot="tip" class="el-upload__tip">Accept PDF format only</div>
            </el-upload>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idOtherForm: {
        medicareNo: '',
        medicareDateFrom: '',
        lastVerified: '',
        driverLicenseNo: '',
        dlExpDate: '',
        passportNo: '',
        passportExpDate: '',
        healthId: '',
        pvtInsurance: '',
        pvtInsuranceNo: '',
        policyHolder: '',
        pvtInsuranceDateFrom: '',
        maritalStatus: '',
        occupation: '',
        citizenship: '',
        countryOfBirth: '',
        spokenLanguage: '',
        preferredLanguage: '',
        atsiStatus: '',
        religion: '',
        isDead: false,
        dateOfDeath: '',
        isAcdAvailable: false,
        fileList:  [{name: 'acd.pdf', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      },
      rules: {
        medicareNo: [{ required: true, message: ' ', trigger: 'blur' }],
        medicareDateFrom: [{ required: true, message: ' ', trigger: 'blur' }],
        lastVerified: [{ required: true, message: ' ', trigger: 'blur' }],
        driverLicenseNo: [{ required: true, message: ' ', trigger: 'blur' }],
        dlExpDate: [{ required: true, message: ' ', trigger: 'blur' }],
        passportNo: [{ required: true, message: ' ', trigger: 'blur' }],
        passportExpDate: [{ required: true, message: ' ', trigger: 'blur' }],
        healthId: [{ required: true, message: ' ', trigger: 'blur' }],
        pvtInsurance: [{ required: true, message: ' ', trigger: 'change' }],
        pvtInsuranceNo: [{ required: true, message: ' ', trigger: 'blur' }],
        policyHolder: [{ required: true, message: ' ', trigger: 'change' }],
        pvtInsuranceDateFrom: [{ required: true, message: ' ', trigger: 'blur' }],
        maritalStatus: [{ required: true, message: ' ', trigger: 'change' }],
        occupation: [{ required: true, message: ' ', trigger: 'blur' }],
        citizenship: [{ required: true, message: ' ', trigger: 'change' }],
        countryOfBirth: [{ required: true, message: ' ', trigger: 'change' }],
        spokenLanguage: [{ required: true, message: ' ', trigger: 'change' }],
        preferredLanguage: [{ required: true, message: ' ', trigger: 'change' }],
        atsiStatus: [{ required: true, message: ' ', trigger: 'change' }],
        religion: [{ required: true, message: ' ', trigger: 'change' }],
        dateOfDeath: [{ required: false, message: ' ', trigger: 'blur' }]
      },
      isFormValidate: false
    }
  },
  methods: {
    handlePreview() {

    },
    handleRemove() {

    },
    handleExceed() {

    },
    saveForm() {
      this.$refs['idOtherForm'].validate((valid) => {
        if (valid) {
          console.log('form is ', valid);
        } else {
          console.log('form is not', valid);
          return false;
        }
      });
    }
  },
  watch: {
    'idOtherForm.isDead'(isDead) {
      // console.log(this.idOtherForm);
      this.rules.dateOfDeath[0].required = isDead;
    }
  }
}
</script>

<style lang="scss">
.idOther-tab {
  .el-form {
    .el-row {
      .el-col {
        .acd-upload {
          .el-form-item {
            &__label {
              width: 250px !important;
            }
          }
        }
        .el-form-item {
          margin-bottom: 0;

          &__content {
            .el-date-editor {
              width: 140px;
            }
          }
        }
      }
    }
  }
}
</style>