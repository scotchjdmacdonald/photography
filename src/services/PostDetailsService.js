import Api from '@/services/Api';

export default {
  getPostDetails() {
    const baseUri = process.env.VUE_APP_BE_BASE_URI;
    return Api().get(`${baseUri}/api/blogposts`);
  },
};
