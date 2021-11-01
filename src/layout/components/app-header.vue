<template>
  <div class="header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          :size="30"
          shape="square"
          :src="userInfo.portrait || require('@/assets/avator-default.png')"
        ></el-avatar>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>{{ userInfo.userName }}</el-dropdown-item>
        <el-dropdown-item divided @click.native="logoutHandle">
          退出
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getUserInfo } from '@/services/user'

export default Vue.extend({
  name: 'AppHeader',

  data() {
    return {
      userInfo: {},
    }
  },

  mounted() {
    this.loadUserInfo()
  },

  methods: {
    async loadUserInfo() {
      const { data } = await getUserInfo()
      this.userInfo = data.content
    },

    logoutHandle() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$store.commit('setUser', null)
          this.$router.push({
            name: 'login',
          })
          this.$message({
            type: 'success',
            message: '退出成功!',
          })
        })
        .catch()
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}
</style>
