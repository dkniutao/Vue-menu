<template>
  <div class="home">
    <div class="nav">
      <ul>
        <li
        v-for="item in $router.options.routes[0].children" :key="item.path">
        <router-link class="a" :to="item.path">{{item.name}}</router-link>
          <ul>
            <li
            v-for="item2 in item.children" :key="item2.path">
              <router-link class="a2" :to="item2.path">{{item2.name}}</router-link>
            </li>
          </ul>
        </li>
      </ul>
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
    }
  },
  methods: {
  },
  created () {
    console.log(this.$router)
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
