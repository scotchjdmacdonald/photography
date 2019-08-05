<template>
  <div class="blog-post">
    <img :src="imgSrc" width="100%" height="auto">
    <div class="blurb">
      <div class="title">
        {{postDetails.title}}
      </div>
      <div class="descr">
        {{postDetails.description}}
      </div>
    </div>
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

.blog-post {
    padding-top: 100px;
    margin-left: 5%;
    margin-right: 5%;
    font-family: 'Assistant', sans-serif;
}

.blurb {
  border-left: black 2px solid;
  padding-left: 6px;
}

.descr {
  font-family: 'Cutive Mono', monospace;
}

.title {
  font-family: 'Rubik Mono One', sans-serif;
}

</style>
