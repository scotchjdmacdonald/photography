<template>
  <div class="blog-post">
    {{description}}
  </div>
</template>

<script>

export default {
  name: 'BlogPost',
  props: {
    description: String,
    title: String,
    imageLink: String,
  },
};
</script>

<style scoped>

</style>
