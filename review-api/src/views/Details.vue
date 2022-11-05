<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts" class="post">
    <h1>
      {{ posts.title }}
    </h1>
    <p>{{ posts.body }}</p>
  </div>
</template>

<script>
  import getDetails from "../composables/getDetails";
  export default {
    props: ["id"],
    setup(props) {
      const { posts, load, error } = getDetails(props.id);
      load();
      return { posts, error };
    },
  };
</script>
