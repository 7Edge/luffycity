<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Brand</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <router-link :to="{name:'Index'}">首页</router-link>
            </li>
            <li>
              <router-link :to="{name:'Courses'}">专题课</router-link>
            </li>
            <li>
              <router-link :to="{name:'DegreeCourse'}">Luffxy学位</router-link>
            </li>
            <li>
              <router-link :to="{name:'Mirco'}">深科技</router-link>
            </li>
            <li>
              <router-link :to="{name:'News'}">新闻</router-link>
            </li>
            <!-- <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >Dropdown
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
                <li role="separator" class="divider"></li>
                <li>
                  <a href="#">One more separated link</a>
                </li>
              </ul>
            </li>-->
          </ul>
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-info">Go</button>
          </form>
          
            <div v-if="!this.$store.getters.logined">
              <ul class="nav navbar-nav navbar-right">
              <li>
                <router-link :to="{name: 'Login'}">登录</router-link>
              </li>
              <li>
                <a href>注册</a>
              </li>
              </ul>
            </div>
            <div v-else>
              <ul class="nav navbar-nav navbar-right">
              <li><a href=""> <strong> <span class="glyphicon glyphicon-user"></span> {{ get_userinfo.user }}</strong></a></li>
              <li><a @click='logout' href>注销</a></li>
              </ul>
            </div>
          
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "hehe",
  data() {
    return {
    };
  },
  methods: {
    logout(){
      this.$store.dispatch('logout');
    }
  }
  ,
  computed:{
    get_userinfo:{
      get(){
        return this.$store.getters.get_online_userinfo;
      }
    }
  }
};
</script>

<style>
</style>

