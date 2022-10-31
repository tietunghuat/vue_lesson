<template>
  <div>
    <h1>Hi another API Fetching class!</h1>
    <h2></h2>
  </div>
  <PostList :posts="posts" />
</template>
<script>
import { ref } from "vue";
import PostList from "../components/PostList.vue";
export default {
  name: "Next",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "Vue lesson Composition API",
        body: "API",
        id: 1,
      },
      {
        title: "Vue lesson Composition API part 2",
        body: "API part 2",
        id: 2,
      },
    ]);
    return { posts };
  },
};
</script>
