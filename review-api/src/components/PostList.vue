<template>
  <div class="post-list" v-for="post in posts" :key="post.id">
    <p>{{ post.title }}</p>
    <SinglePost :posta="post" />
  </div>
</template>
<script>
  import { onMounted, onUnmounted, onUpdated } from "vue";
  import SinglePost from "@/components/SinglePost.vue";
  export default {
    name: "PostList",
    components: { SinglePost },
    props: ["posts"],
    setup(props) {
      onMounted(() => console.log("component mounted"));
      onUnmounted(() => console.log("component Unmounted"));
      onUpdated(() => console.log("component updated"));
    },
  };
</script>
