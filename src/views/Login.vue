<template>
  <div class="login">
    <div class="loginContent">
      <p class="loginTilte">罗湖区房屋信息调查平台</p>
      <div class="login-form">
        <p class="form-title">用户登录</p>
        <el-form class="mt50">
          <el-input placeholder="请输入用户名/手机号" v-model="userName">
            <template #prepend>
              <img src="../assets/user.png" alt="" />
            </template>
          </el-input>
          <el-input
            type="password"
            placeholder="请输入用户密码"
            v-model="password"
            class="mt50"
          >
            <template #prepend>
              <img src="../assets/pwd.png" alt="" />
            </template>
          </el-input>
          <el-button class="login-btn" @click="login">登 录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/login";
import { setToken } from "@/utils/auth";
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    async login() {
      if (!this.userName || !this.password) {
        this.$message({
          message: "登录信息请填写完整",
          type: "warning",
        });
      } else {
        let data = {
          name: this.userName,
          pwd: this.password,
        };
        let res = await login(data);
        if (res.code === 1) {
          setToken(res.data.id);
          this.$router.push({
            path: "/home",
          });
        } else {
          this.$message({
            message: res.msg,
            type: "error",
          });
        }
      }
    },
  },
};
</script>

<style lang="scss">
.login {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: url("../assets/login-bg.jpg") center/cover no-repeat;
  .loginContent {
    width: 50%;
    height: 100%;
    margin: 10% auto;
    box-sizing: border-box;
    .loginTilte {
      font-size: 34px;
      font-weight: 400;
      background: linear-gradient(to bottom, #04d6f1, #98eff9);
      -webkit-background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
    }
    .login-form {
      width: 460px;
      background: url("../assets/form-bg.png") center/100% no-repeat;
      margin: 70px auto;
      border-radius: 10px;
      position: relative;
      padding: 30px 60px;
      .form-title {
        color: #99f6fb;
        font-size: 30px;
        font-weight: 400;
      }
      img {
        width: 20px;
      }
      .login-btn {
        background: #00f7ff;
        border: none;
        width: 100%;
        font-size: 18px;
        margin-top: 70px;
        padding: 16px 20px;
        color: #333;
        font-weight: 400;
      }
      .login-btn:hover {
        color: #333;
        font-weight: 400;
      }
    }
  }
  .el-input-group__append,
  .el-input-group__prepend {
    background-color: transparent;
    border-color: #00f7ff;
  }
  .el-input__inner {
    background-color: transparent;
    border-color: #00f7ff;
    border-left: none;
    color: #fff;
  }
  .el-input__inner:hover {
    border-color: #00f7ff;
  }
  .el-input__inner:focus {
    border-color: #00f7ff;
  }
  input:-internal-autofill-selected {
    background-color: transparent !important;
  }
}
</style>
