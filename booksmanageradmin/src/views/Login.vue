<template>
  <div class="loginPage">
    <div class="login">
      <div>用户登录</div>
      <div class="inputItem">
        <el-input v-model="account" placeholder="请输入账号"></el-input>
      </div>
      <div class="inputItem">
        <el-input v-model="password" placeholder="请输入密码"></el-input>
      </div>
      <div class="footer">
        <el-button class="item" type="primary" @click="loginfun">登录</el-button>
        <el-button class="item">忘记密码</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  login,
  getUserInfo,
} from '@/api/common';

export default {
  name: 'login',
  // components: {
  // },
  data() {
    return {
      password: '',
      account: '',
    };
  },
  methods: {
    submit() {
      console.log('getUserInfo');
      getUserInfo().then((res) => {
        console.log('getUserInfo', res);
      }).catch();
    },
    loginfun() {
      console.log('login');
      login().then((res) => {
        console.log('login', res);
        this.$router.push({
          name: 'Home',
        });
      }).catch();
    },
  },
};
</script>
<style lang="less">
.loginPage {
  display: flex;
  width: 100%;
  margin-top: 10vh;
  justify-content: center;
  .login {
    padding: 10px;
    width: 40vw;
    border: 1px solid #efefef;
    padding: 30px;
    background: #efefef;
    .inputItem{
      padding: 10px 0;
    }
    .footer{
      display: flex;
      justify-content: space-between;
      .item{
        flex:1
      }
    }
  }
}
</style>
