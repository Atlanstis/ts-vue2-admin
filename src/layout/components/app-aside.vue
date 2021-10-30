<template>
  <div class="aside">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item index="/role">
          <i class="el-icon-menu"></i>
          <span slot="title">角色列表</span>
        </el-menu-item>
        <el-menu-item index="/menu">
          <i class="el-icon-menu"></i>
          <span slot="title">菜单列表</span>
        </el-menu-item>
        <el-menu-item index="/resourse"
          ><i class="el-icon-menu"></i>
          <span slot="title">资源列表</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/course">
        <i class="el-icon-menu"></i>
        <span slot="title">课程管理</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-document"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>广告管理</span>
        </template>
        <el-menu-item index="/advert">
          <i class="el-icon-menu"></i>
          <span slot="title">广告列表</span>
        </el-menu-item>
        <el-menu-item index="/advert-space">
          <i class="el-icon-menu"></i>
          <span slot="title">广告位管理</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppAside',
})
</script>

<style lang="scss" scoped>
.aside {
  .el-menu {
    min-height: 100vh;
  }
}
</style>
