<template>
  <div id="app">
    <el-container>
      <el-aside width="250px">
        <SideMenu />
        <SideTab />
        <DiagnosticBox />
      </el-aside>
      <el-container>
        <el-header>A Health</el-header>
        <el-main>
          <router-view />
          <!-- <router-view/> -->
          <!-- <PatientRegistrationForm /> -->
        </el-main>
        <el-footer>footer</el-footer>
      </el-container>
    </el-container>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->

  </div>
</template>

<script>
import SideMenu from '@/components/Layout/SideMenu.vue'
import SideTab from '@/components/Layout/SideTab.vue'
import DiagnosticBox from '@/components/Layout/DiagnosticBox.vue'
import MainContainer from '@/components/Layout/MainContainer.vue'
// import PatientRegistrationForm from '@/components/PatientRegistration/PatientRegistrationForm.vue'

export default {
  name: 'App',
  components: {
    SideMenu,
    SideTab,
    DiagnosticBox,
    MainContainer
    // PatientRegistrationForm
  }
}
</script>


<style lang="scss">
// .el-container {
//   /* aside {
//     height: 100%;
//     background: pink;
//   } */
// }

.el-aside {
  background: #545C64;
  min-height: 768.5px;
  // &-inner {
  //   height: 100%;
  //   background: red;
  // }
}

.el-header {
  background: #b3c0d1;
}

.el-main {
  /* background: grey; */
  padding: 10px 20px;
}

.el-footer {
  /* background: yellow; */
  background: #b3c0d1;
}
</style>
