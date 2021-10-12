<template>
  <div class="side-menu">
    <h5 class="side-menu-title">Patient's Profile</h5>
    <el-menu default-active="2" @open="commandOpen" @close="commandClose" background-color="#545C64" text-color="#ffffff" active-text-color="#80ff00" unique-opened :default-openeds="['1']">
       <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span><b>Commands</b></span>
        </template>
        <el-menu-item-group>
          <router-link to="/registration">
            <el-menu-item index="1-1">Create New Patient</el-menu-item>
          </router-link>
          <router-link to="/profile">
            <el-menu-item index="1-2">Patient Profile</el-menu-item>
          </router-link>
          <router-link to="/new-episode">
            <el-menu-item index="1-3">Create An Episode</el-menu-item>
          </router-link>
          <router-link to="/vaccination-history">
            <el-menu-item index="1-4">Vaccination History</el-menu-item>
          </router-link>
   
        </el-menu-item-group>

      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-printer"></i>
          <span>Prints</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">Print Patient Profile</el-menu-item>
          <el-menu-item index="2-2">Print Stickers</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
    </el-menu>

  </div>
</template>

<script>
export default {
  methods: {
    commandOpen() {

    },
    commandClose() {

    }
  }

}
</script>

<style lang="scss">

.side-menu {
  height: 400px !important;
  h5 {
    text-align: center;
    line-height: 60px;
    font-size: 25px;

  }
  &-title {
    height: 60px;
  }
  .el-menu {
    border-right: none;
    .el-submenu {
      // &__title {
      //   height: 30px !important;
      // }
      // .el-menu {
      //   &-item-group {
      //     ul {
      //       .el-menu-item,>>>.el-submenu__title {
      //           height: 46px;
      //           line-height: 46px;
      //             color: red;
      //         }
      //     }  
      //   }
      // }

    }
  }
  height: 50px;
  background-color: #545C64;
  color: #fff;
  ul {
    // background-color: #545C64;
    /* width: 100%; */
  }

  // &:hover {
  //   background: rgb(67, 74, 86);
  //   cursor: pointer;

  //   ul {
  //     background: rgb(67, 74, 86);

  //   }
  // }
}
</style>