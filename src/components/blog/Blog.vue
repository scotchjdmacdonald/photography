<template>
  <div class="blog">
    <h1></h1>
    <BlogPost v-for="(post, index) in listOfBlogPosts"
        :description="post.description" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '@/components/blog/BlogPost.vue';

export default {
  name: 'Blog',
  props: {
    msg: String,
  },
  components: {
    BlogPost,
  },
  computed: {
    totalTvCount() {
      return this.$store.state.totalTvCount;
    },
    listOfBlogPosts() {
      return this.$store.state.posts.postsArry;
    },
  },
};
</script>

<style scoped>
.blog{
    /**background: lightcyan;*/
    background:  url(http://bestanimations.com/Nature/Water/underwater-ocean-gif.gif) no-repeat center center fixed;
    background-size: cover;
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
}
</style>
