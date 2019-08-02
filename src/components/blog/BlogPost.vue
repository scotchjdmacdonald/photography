<template>
  <div class="blog-post">
    <img :src="imgSrc" width="100%">
  </div>
</template>

<script>

export default {
  name: 'BlogPost',
  props: {
    postDetails: Object,
  },
  data() {
    return {
      imgSrc: this.postDetails.imageUrl,
    };
  },
};
</script>

<style scoped>

</style>
