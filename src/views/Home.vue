<template>
  <div class="home">
    <div class="main-title">
      g r a i n y
    </div>
    <Blog msg="there will be things here soon"/>
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
  .main-title{
    padding-left: 5%;
  }
</style>
