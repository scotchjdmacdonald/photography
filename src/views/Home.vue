<template>
  <div class="home">
    <div class="header">
      <div class="main-title"> g r a i n y</div>
    </div>
    <Blog/>
    <div class="footer">
      <div class="footer-title">by scotch</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Blog from '@/components/blog/Blog.vue';

export default {
  name: 'home',
  components: {
    Blog,
  },
};
</script>

<style scoped>
  .home{
    height: 100%;
  }
  .header{
    position: fixed;
    padding-top: 20px;
    padding-bottom: 20px;
    background:  url(https://bestanimations.com/Nature/Water/underwater-ocean-gif.gif) no-repeat center fixed;
    background-size: cover;
    width: 100%;
    top: 0;
  }

  .main-title{
    color: whitesmoke;
    padding-left: 5%;
    font-family: 'Lacquer', sans-serif;
    font-size: 25px;
  }

  .footer-title {
    padding-left: 5%;
    color: whitesmoke;
    font-family: 'Lacquer', sans-serif;
    font-size: 20px;
  }

  .footer {
    width: 100%;
    background:  url(https://bestanimations.com/Nature/Water/underwater-ocean-gif.gif) no-repeat center fixed;
    background-size: cover;
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>
