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
    background: whitesmoke;
    background-size: cover;
    margin-top: 30px;
    padding: 0% 10% 5% 10%;
}
</style>
