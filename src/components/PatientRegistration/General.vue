<template>
  <div class="general-tab">
    <el-form :rules="rules" ref="generalForm" :model="generalForm" label-width="130px" label-position="left">
      <el-row>
        <el-col :span="12">
          <el-form-item label="Title:" prop="title">
            <el-col :span="11">
              <el-select v-model="generalForm.title" placeholder="-Select Title-" size="mini">
                <el-option label="Mr" value="Mr"></el-option>
                <el-option label="Mrs" value="Mrs"></el-option>
                <el-option label="Miss" value="Miss"></el-option>
                <el-option label="Ms" value="Ms"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Patient Id:">
            <el-col :span="14"><el-input v-model="generalForm.ptid" disabled size="mini"></el-input></el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="First Name:" prop="fName">
            <el-col :span="20"><el-input v-model="generalForm.fName" size="mini" /></el-col>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Middle Name:" prop="mName">
            <el-col :span="20"><el-input v-model="generalForm.mName" size="mini" /></el-col>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Surname:" prop="sName">
            <el-col :span="20"><el-input v-model="generalForm.sName" size="mini" /></el-col>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Preferred Name:" prop="pName">
            <el-col :span="20"><el-input v-model="generalForm.pName" size="mini" /></el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="Sex:" prop="sex">
            <el-col :span="20">
              <el-select v-model="generalForm.sex" placeholder="-Select Sex-" size="mini">
                <el-option label="Male" value="male"></el-option>
                <el-option label="Female" value="female"></el-option>
                <el-option label="Other" value="other"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Date of Birth:" prop="dob">
            <el-col :span="20">
              <el-date-picker @change="onSelectDOB" type="date" placeholder="-Select DOB-" v-model="generalForm.dob" size="mini"></el-date-picker>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="Age:">
        <el-row>
          <el-col :span="8">
            <el-form-item label="Years">
              <el-col :span="12">
                <el-input v-model="generalForm.years" readonly size="mini" />
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Months">
              <el-col :span="12">
                <el-input v-model="generalForm.months" readonly size="mini" />
              </el-col>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Days">
              <el-col :span="12">
                <el-input v-model="generalForm.days" readonly size="mini" />
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-row>
        <el-col :span="10">
          <el-form-item label="Phone:" prop="phone">
            <el-col :span="18">
              <el-input v-model.number="generalForm.phone" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="Mobile:" prop="mobile">
            <el-col :span="18">
              <el-input v-model.number="generalForm.mobile" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="Address 1:" prop="address1">
            <el-col :span="18">
              <el-input v-model="generalForm.address1" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="Address Type:" prop="addressType">
            <el-col :span="18">
              <el-select v-model="generalForm.addressType" placeholder="-Address Type-" size="mini">
                <el-option label="Residential" value="residential"></el-option>
                <el-option label="Home" value="home"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="Address2:">
            <el-col :span="18">
              <el-input v-model="generalForm.address2" size="mini" />
            </el-col>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="City/Suburb:" prop="citySuburb">
            <el-select v-model="generalForm.citySuburb" placeholder="-City / Suburb-" size="mini">
              <el-option label="Residential" value="residential"></el-option>
              <el-option label="Home" value="home"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="State:" prop="state">
            <el-select v-model="generalForm.state" size="mini">
              <el-option label="Tas" value="tas"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Country:" prop="country">
            <el-select v-model="generalForm.country" size="mini">
              <el-option label="Australia" value="aus"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="Post Code:" prop="postcode">
            <el-input v-model="generalForm.postcode" size="mini" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="Email:" prop="email">
        <el-col :span="6">
          <el-input v-model="generalForm.email" size="mini" type="email" />
        </el-col>
      </el-form-item>
      <el-row class="checkMobileUse">
        <el-col :span="12" class="checkMobileUse_col">
          <el-row class="checkMobileUse_col_row">
            <el-col :span="20">
              <span>Willing to receive SMS/Mobile app notifications:</span>
            </el-col>
            <el-col :span="4">
              <el-checkbox v-model="generalForm.receiveSms"></el-checkbox>
            </el-col>
          </el-row>
          <el-row class="checkMobileUse_col_row">
            <el-col :span="20">
              <span>Willing to use consumer mobile app:</span>
            </el-col>
            <el-col :span="4">
              <el-checkbox v-model="generalForm.useMobileApp"></el-checkbox>
            </el-col>
          </el-row>
          <el-row class="checkMobileUse_col_row">
            <el-col :span="20">
              <span>Consumer mobile app is installed:</span>
            </el-col>
            <el-col :span="4">
              <el-checkbox v-model="generalForm.hasInstalledMobileApp"></el-checkbox>
            </el-col>
          </el-row>
          <el-row class="checkMobileUse_col_row">
            <el-col :span="20">
              <span>Consumer mobile app is already in use:</span>
            </el-col>
            <el-col :span="4">
              <el-checkbox v-model="generalForm.hasUsedMobileApp"></el-checkbox>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Other comments on Consumer App:" label-width="300px" label-position="left">
          </el-form-item>
          <el-form-item label-width="0px">
            <el-input type="textarea" :rows="2" placeholder="Other comments on Consumer App"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import short from 'short-uuid';
// // import dayjs from 'dayjs';
import moment from 'moment';
// require('moment-precise-range-plugin');
import 'moment-precise-range-plugin';


export default {
  data() {
    return {
      generalForm: {
        ptid: short.generate(),
        title: '',
        fName: '',
        mName: '',
        SName: '',
        pName: '',
        sex: '',
        dob: '',
        years: '',
        months: '',
        days: '',
        phone: '',
        mobile: '',
        address1: '',
        addressType: '',
        address2: '',
        citySuburb: '',
        state: '',
        country: '',
        postcode: '',
        email: '',
        receiveSms: false,
        useMobileApp: false,
        hasInstalledMobileApp: false,
        hasUsedMobileApp: false,
        comments: ''
      },
      isFormValidate: false,
      rules: {
        title: [{ required: true, message: ' ', trigger: 'blur' }],
        fName: [{ required: true, message: ' ', trigger: 'blur' }],
        mName: [{ required: true, message: ' ', trigger: 'blur' }],
        sName: [{ required: true, message: ' ', trigger: 'blur' }],
        pName: [{ required: true, message: ' ', trigger: 'blur' }],
        sex: [{ required: true, message: ' ', trigger: 'blur' }],
        dob: [{ required: true, message: ' ', trigger: ['change', 'blur'] }],
        phone: [{ type: 'number', required: true, message: ' ', trigger: 'blur' }],
        mobile: [{ type: 'number', required: true, message: ' ', trigger: 'blur' }],
        address1: [{ required: true, message: ' ', trigger: 'blur' }],
        addressType: [{ required: true, message: ' ', trigger: 'blur' }],
        citySuburb: [{ required: true, message: ' ', trigger: 'blur' }],
        state: [{ required: true, message: ' ', trigger: 'blur' }],
        country: [{ required: true, message: ' ', trigger: 'blur' }],
        postcode: [{ required: true, message: ' ', trigger: 'blur' }],
        email: [{ type: 'email', required: true, message: ' ', trigger: 'blur' }],
      }
    }
  },
  methods: {
    saveForm() {
      this.$refs['generalForm'].validate((valid) => {
        if (valid) {
          console.log('form is ', valid);
        } else {
          console.log('form is not', valid);
          return false;
        }
      });
    },
    onSelectDOB(e) {
      let dob = moment(e);
      let now = moment();
      let diff = moment.preciseDiff(dob, now, true); 
      if (diff) {
        this.generalForm.years = diff.years;
        this.generalForm.months = diff.months;
        this.generalForm.days = diff.days;
      }
    }
  }
}
</script>

<style lang="scss">
.general-tab {
  /* padding: 0 50px; */
  .el-form {
    &-item {
      margin-bottom: 0;
      &__content {
        .el-input__inner {
          // background: pink;
        }
      }
    }

    .checkMobileUse {
      font-size: 14px;
      color: #606266;
      /* margin-top: 10px; */

      &_col {
        margin-top: 5px;
        &_row {
          margin-top: 5px;
        }
      }
    }
  }
}

</style>