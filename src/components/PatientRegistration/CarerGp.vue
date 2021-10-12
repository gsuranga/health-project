<template>
  <div class="carergp-tab">
    <el-form ref="carerGpForm" :rules="rules" :model="carerGpForm" label-width="140px" label-position="left">
      <!-- Start of Carer -->
      <el-divider content-position="left"><b>Personal Carer</b></el-divider>
      <el-row>
        <el-col :span="6">
          <el-form-item label="Title:" prop="carer.title">
            <el-col :span="20">
              <el-select v-model="carerGpForm.carer.title" placeholder="-Select-" size="mini">
                <el-option label="Mr" value="Mr"></el-option>
                <el-option label="Mrs" value="Mrs"></el-option>
                <el-option label="Miss" value="Miss"></el-option>
                <el-option label="Ms" value="Ms"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="18" :push="2">
          <el-form-item label="Address:" prop="carer.addr">
            <el-col :span="16">
              <el-input v-model="carerGpForm.carer.addr" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="First Name:" prop="carer.fName">
            <el-col :span="20">
              <el-input v-model="carerGpForm.carer.fName" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Surname:" prop="carer.sName">
            <el-col :span="20">
              <el-input v-model="carerGpForm.carer.sName" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
         <el-col :span="8">
          <el-form-item label="Phone:" prop="carer.phone">
            <el-col :span="20">
              <el-input v-model="carerGpForm.carer.phone" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Sex:" prop="carer.sex">
            <el-col :span="20">
              <el-select v-model="carerGpForm.carer.sex" placeholder="-Select Sex-" size="mini">
                <el-option label="Male" value="male"></el-option>
                <el-option label="Female" value="female"></el-option>
                <el-option label="Other" value="other"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
         <el-col :span="8">
          <el-form-item label="DOB:" prop="carer.dob">
            <el-date-picker type="date" placeholder="-Select DOB-" v-model="carerGpForm.carer.dob" size="mini"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Mobile:" prop="carer.mobile">
            <el-col :span="20">
              <el-input v-model="carerGpForm.carer.mobile" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Realtionship:" prop="carer.relationship">
            <el-col :span="20">
              <el-select v-model="carerGpForm.carer.relationship" placeholder="-Select-" size="mini">
                <el-option label="Father" value="Father"></el-option>
                <el-option label="Mother" value="Mother"></el-option>
                <el-option label="Grandparents" value="Grandparents"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
         <el-col :span="8" :push="8">
          <el-form-item label="Email:" prop="carer.email">
            <el-col :span="20">
              <el-input v-model="carerGpForm.carer.email" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Country Of Birth:" prop="carer.countryOfBirth">
            <el-col :span="20">
              <el-select v-model="carerGpForm.carer.countryOfBirth" placeholder="-Select-" size="mini">
                <el-option label="Australia" value="Australia"></el-option>
                <el-option label="USA" value="USA"></el-option>
                <el-option label="China" value="China"></el-option>
                <el-option label="France" value="France"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
         <el-col :span="8">
          <el-form-item label="Language:" prop="carer.spokenLanguage">
            <el-col :span="20">
              <el-select v-model="carerGpForm.carer.spokenLanguage" placeholder="-Select-" size="mini">
                <el-option label="English" value="English"></el-option>
                <el-option label="French" value="French"></el-option>
                <el-option label="Germany" value="Germany"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- End of Carer -->
      <el-divider content-position="left">
        <b>Next of Kin</b>
        <span @click="nokSameAsCarer"><el-link type="primary">Same as Carer</el-link></span>
      </el-divider>
      <!-- Start of NOK -->
      <el-row>
        <el-col :span="8">
          <el-form-item label="Name:" prop="nok.name">
            <el-col :span="20">
              <el-input v-model="carerGpForm.nok.name" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
         <el-col :span="8">
          <el-form-item label="Nok Address:" prop="nok.addr">
            <el-col :span="20">
              <el-input v-model="carerGpForm.nok.addr" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Email:" prop="nok.email">
            <el-col :span="20">
              <el-input v-model="carerGpForm.nok.email" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Relationship:" prop="nok.relationship">
            <el-col :span="20">
              <el-select v-model="carerGpForm.nok.relationship" placeholder="-Select-" size="mini">
                <el-option label="Father" value="Father"></el-option>
                <el-option label="Mother" value="Mother"></el-option>
                <el-option label="Grandparents" value="Grandparents"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Phone:" prop="nok.phone">
            <el-col :span="20">
              <el-input v-model="carerGpForm.nok.phone" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Mobile:" prop="nok.mobile">
            <el-col :span="20">
              <el-input v-model="carerGpForm.nok.mobile" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- End of NOK -->
      <el-divider content-position="left">
        <b>Emergency Contact</b>
        <span @click="contactSameAsCarer"><el-link type="primary">Same as Carer</el-link></span>
        <span @click="contactSameAsNOK"><el-link type="primary">Same as NOK</el-link></span>
      </el-divider>
      <!-- Start of Contact -->
      <el-row>
        <el-col :span="8">
          <el-form-item label="Name:" prop="contact.name">
            <el-col :span="20">
              <el-input v-model="carerGpForm.contact.name" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
         <el-col :span="8">
          <el-form-item label="Nok Address:" prop="contact.addr">
            <el-col :span="20">
              <el-input v-model="carerGpForm.contact.addr" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Email:" prop="contact.email">
            <el-col :span="20">
              <el-input v-model="carerGpForm.contact.email" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Relationship:" prop="contact.relationship">
            <el-col :span="20">
              <el-select v-model="carerGpForm.contact.relationship" placeholder="-Select-" size="mini">
                <el-option label="Father" value="Father"></el-option>
                <el-option label="Mother" value="Mother"></el-option>
                <el-option label="Grandparents" value="Grandparents"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Phone:" prop="contact.phone">
            <el-col :span="20">
              <el-input v-model="carerGpForm.contact.phone" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Mobile:" prop="contact.mobile">
            <el-col :span="20">
              <el-input v-model="carerGpForm.contact.mobile" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- End of Contact -->
      <el-divider content-position="left">
        <b>Enduring Guardian</b>
        <span @click="guardianSameAsCarer"><el-link type="primary">Same as Carer</el-link></span>
        <span @click="guardianSameAsNOK"><el-link type="primary">Same as NOK</el-link></span>
        <span @click="guardianSameAsContact"><el-link type="primary">Same as Emergency Contact</el-link></span>
      </el-divider>
      <!-- Start of Guardian -->
      <el-row>
        <el-col :span="8">
          <el-form-item label="Name:" prop="guardian.name">
            <el-col :span="20">
              <el-input v-model="carerGpForm.guardian.name" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
         <el-col :span="8">
          <el-form-item label="Nok Address:" prop="guardian.addr">
            <el-col :span="20">
              <el-input v-model="carerGpForm.guardian.addr" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Email:" prop="guardian.email">
            <el-col :span="20">
              <el-input v-model="carerGpForm.guardian.email" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Relationship:" prop="guardian.relationship">
            <el-col :span="20">
              <el-select v-model="carerGpForm.guardian.relationship" placeholder="-Select-" size="mini">
                <el-option label="Father" value="Father"></el-option>
                <el-option label="Mother" value="Mother"></el-option>
                <el-option label="Grandparents" value="Grandparents"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Phone:" prop="guardian.phone">
            <el-col :span="20">
              <el-input v-model="carerGpForm.guardian.phone" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Mobile:" prop="guardian.mobile">
            <el-col :span="20">
              <el-input v-model="carerGpForm.guardian.mobile" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- End of Guardian -->
      <el-divider content-position="left">
        <b>General Practioner</b>
      </el-divider>
      <!-- Start of GP -->
      <el-row>
        <el-col :span="8">
          <el-form-item label="GP Name:" prop="gp.name">
            <el-col :span="20">
              <el-input v-model="carerGpForm.gp.name" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
         <el-col :span="8">
          <el-form-item label="GP ID:" prop="gp.gpid">
            <el-col :span="20">
              <el-input v-model="carerGpForm.gp.gpid" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="GP Practice:" prop="gp.practice">
            <el-col :span="20">
              <el-input v-model="carerGpForm.gp.practice" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="GP Phone:" prop="gp.phone">
            <el-col :span="20">
              <el-input v-model="carerGpForm.gp.phone" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
         <el-col :span="16">
          <el-form-item label="GP Address:" prop="gp.addr">
            <el-input v-model="carerGpForm.gp.addr" size="mini" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="Provider No:" prop="gp.providerNo">
            <el-col :span="20">
              <el-input v-model="carerGpForm.gp.providerNo" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
         <el-col :span="8">
          <el-form-item label="GP Email:" prop="gp.email">
            <el-input v-model="carerGpForm.gp.email" size="mini" type="email" />
          </el-form-item>
        </el-col>
      </el-row>
      <!-- End of GP -->

    </el-form>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      carerGpForm: {
        carer: {
          title: '',
          addr: '',
          fName: '',
          sName: '',
          sex: '',
          dob: '',
          phone: '',
          mobile: '',
          email: '',
          relationship: '',
          countryOfBirth: '',
          spokenLanguage: ''
        },
        nok: {
          name: '',
          addr: '',
          phone: '',
          mobile: '',
          email: '',
          relationship: '',
        },
        contact: {
          name: '',
          addr: '',
          phone: '',
          mobile: '',
          email: '',
          relationship: '',
        },
        guardian: {
          name: '',
          addr: '',
          phone: '',
          mobile: '',
          email: '',
          relationship: '',
        },
        gp: {
          name: '',
          practice: '',
          gpid: '',
          addr: '',
          phone: '',
          email: '',
          providerNo: ''
        }
      },
      rules: {
        'carer.title': [{ required: true, message: ' ', trigger: 'blur' }],
        'carer.addr': [{ required: true, message: ' ', trigger: 'blur' }],
        'carer.fName': [{ required: true, message: ' ', trigger: 'blur' }],
        'carer.sName': [{ required: true, message: ' ', trigger: 'blur' }],
        'carer.sex': [{ required: true, message: ' ', trigger: 'blur' }],
        'carer.dob': [{ required: true, message: ' ', trigger: ['change', 'blue'] }],
        'carer.phone': [{ required: true, message: ' ', trigger: 'blur' }],
        'carer.mobile': [{ required: true, message: ' ', trigger: 'blur' }],
        'carer.email': [{ type: 'email', required: true, message: ' ', trigger: 'blur' }],
        'carer.relationship': [{ required: true, message: ' ', trigger: 'blur' }],
        'carer.countryOfBirth': [{ required: true, message: ' ', trigger: 'blur' }],
        'carer.spokenLanguage': [{ required: true, message: ' ', trigger: 'change' }],
        'nok.name': [{ required: true, message: ' ', trigger: 'blur' }],
        'nok.addr': [{ required: true, message: ' ', trigger: 'blur' }],
        'nok.phone': [{ required: true, message: ' ', trigger: 'blur' }],
        'nok.mobile': [{ required: true, message: ' ', trigger: 'blur' }],
        'nok.email': [{ type: 'email', required: true, message: ' ', trigger: 'blur' }],
        'nok.relationship': [{ required: true, message: ' ', trigger: 'blur' }],
        'contact.name': [{ required: true, message: ' ', trigger: 'blur' }],
        'contact.addr': [{ required: true, message: ' ', trigger: 'blur' }],
        'contact.phone': [{ required: true, message: ' ', trigger: 'blur' }],
        'contact.mobile': [{ required: true, message: ' ', trigger: 'blur' }],
        'contact.email': [{ type: 'email', required: true, message: ' ', trigger: 'blur' }],
        'contact.relationship': [{ required: true, message: ' ', trigger: 'blur' }],
        'guardian.name': [{ required: true, message: ' ', trigger: 'blur' }],
        'guardian.addr': [{ required: true, message: ' ', trigger: 'blur' }],
        'guardian.phone': [{ required: true, message: ' ', trigger: 'blur' }],
        'guardian.mobile': [{ required: true, message: ' ', trigger: 'blur' }],
        'guardian.email': [{ type: 'email', required: true, message: ' ', trigger: 'blur' }],
        'guardian.relationship': [{ required: true, message: ' ', trigger: 'blur' }],
        'gp.name': [{ required: true, message: ' ', trigger: 'blur' }],
        'gp.practice': [{ required: true, message: ' ', trigger: 'blur' }],
        'gp.gpid': [{ required: true, message: ' ', trigger: 'blur' }],
        'gp.addr': [{ required: true, message: ' ', trigger: 'blur' }],
        'gp.phone': [{ required: true, message: ' ', trigger: 'blur' }],
        'gp.email': [{ type: 'email', required: true, message: ' ', trigger: 'blur' }],
        'gp.providerNo': [{ required: true, message: ' ', trigger: 'blur' }]
      },
      isFormValidate: false
    }
  },
  methods: {
    copyData(fromSection, toSection) {
      let name;
      if (fromSection == 'carer') {
        name = this.carerGpForm[fromSection].fName + ' ' + this.carerGpForm.carer.sName;
      } else {
        name = this.carerGpForm[fromSection].name;
      }
      const { addr, phone, mobile, email, relationship } = {...this.carerGpForm[fromSection] };
      this.carerGpForm[toSection] = { name, addr, phone, mobile, email, relationship };
    },
    nokSameAsCarer() {
      this.copyData('carer', 'nok');
    },
    contactSameAsCarer() {
      this.copyData('carer', 'contact');
    },
    contactSameAsNOK() {
      this.copyData('nok', 'contact');
    },
    guardianSameAsCarer() {
      this.copyData('carer', 'guardian');
    },
    guardianSameAsNOK() {
      this.copyData('nok', 'guardian');
    },
    guardianSameAsContact() {
      this.copyData('contact', 'guardian');
    },
    saveForm() {
      this.$refs['carerGpForm'].validate((valid) => {
        if (valid) {
          console.log('form is ', valid);
        } else {
          console.log('form is not', valid);
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss">
.carergp-tab {
  .el-form {
    .el-divider {
      &__text {
        span {
          margin-left: 8px;
        }
      }
    }
    .el-row {
      .el-col {
        .el-form-item {
          margin-bottom: 0px;
          &__content {
            .el-date-editor {
              width: 130px;
            }
          }
        }
      }
    }

  }
}
</style>