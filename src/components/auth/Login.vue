<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="panel panel-info">
            <div class="panel-heading">
              <div>
                <span class="pull-left">登录</span>
                &nbsp;
              </div>
            </div>
            <div class="panel-body">
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="control-label col-sm-2" for="username">用户名:</label>
                  <div class="col-sm-10">
                    <input class="form-control" id="username" type="text" v-model="username">
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label" for="password">密码:</label>
                  <div class="col-sm-10">
                    <input class="form-control" type="password" v-model="password" id="password">
                  </div>
                </div>
                <button type="button" @click="login" class="btn btn-success pull-right">登录</button>
              </form>
            </div>
            <div class="panel-foot"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    login() {
      // 登录发起axios,获取到token后，更新到vuex中，让vue应用全局知道已经登录用户
      var _that = this;
      this.$axios
        .request({
          url: "/online/",
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            user: this.username,
            pwd: this.password
          }
        })
        .then(response => {
          let data = response.data;
          if (data.code === 1000) {
            let userinfo = {
              user: _that.username,
              user_token: data.user_token,
              expired: data.expired
            };
            _that.$store.dispatch("login", userinfo);
          } else {
            alert(data.error);
          }
        })
        .catch(error => {
          alert(error);
        });
    }
  },
  computed: {}
};
</script>

<style scoped>
</style>
