<template>
  <div class="home">
    <div class="nav">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu :key="index" index='index'
        v-if="item.children"
        v-for="(item, index) of routeres">
          <template slot="title">
            <i  class="el-icon-location"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group :key="index2"
          v-for="(item2, index2) of item.children">
            <template slot="title"></template>
            <el-menu-item :index="item2.path">{{item2.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="item.path" :key="index"
        v-else>
          <i class="el-icon-document"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: [
  ],
  data () {
    return {
      routeres: []
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  created () {
    // this.$http.get('http://localhost:8080/api/seller').then((response) => {
    //   console.log(response)
    // })
    this.routeres = this.$router.options.routes[0].children
    console.log('222', this.$router.options.routes[0].children)
  },
  mounted () {
  },
  watch: {
  }
}
</script>

<style>
  html, body, #app, .home, .nav{
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .nav{
    float: left;
  }
  .nav ul{
    width: 200px;
    height: 100%;
    margin: 0;
    padding: 0;
    border-right: 1px solid #e0e0e0;
  }
  .nav ul li{
    text-align: center;
    list-style: none;
  }
  .nav ul li .a{
    display: block;
    padding-right: 80px;
    line-height: 50px;
    color: #000;
    text-decoration: none;
    border-left: 5px solid #fff;
    transition: all 0.5s
  }
    .nav ul li .a2{
    display: block;
    line-height: 50px;
    color: #000;
    font-size: 14px;
    text-decoration: none;
    border-left: 5px solid #fff;
    transition: all 0.5s
  }
  .nav ul li .a:hover{
    background: #d6d6d6;
  }
  .main{
    margin-left: 201px;
    box-sizing: border-box;
  }
  .nav ul li .router-link-active {
    background: #d6d6d6;
    border-left: 5px solid #000;
  }
  .nav ul li .router-link-exact-active{
    background: #f6f6f6;
  }
</style>
