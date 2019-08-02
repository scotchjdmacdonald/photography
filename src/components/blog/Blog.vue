<template>
  <div class="blog">

    <BlogPost v-for="(post, index) in listOfBlogPosts"
        :postDetails="post" :key="index"/>
  </div>
</template>

<script>
import BlogPost from '@/components/blog/BlogPost.vue';
import PostDetailsService from '@/services/PostDetailsService';

export default {
  name: 'Blog',
  components: {
    BlogPost,
  },
  mounted() {
    this.getPostDetails();
  },
  computed: {
    totalTvCount() {
      return this.$store.state.totalTvCount;
    },
    listOfBlogPosts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    async getPostDetails() {
      const response = await PostDetailsService.getPostDetails();

      if (response.status === 200) {
        const posts = response.data;
        this.$store.commit('addPostDetails', posts);
      }
    },
  },
};
</script>

<style scoped>
.blog{
    /**background: lightcyan;*/
    background:  url(https://bestanimations.com/Nature/Water/underwater-ocean-gif.gif) no-repeat center center fixed;
    background-size: cover;
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
}
</style>
