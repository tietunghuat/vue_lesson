<template>
  <div>
    <h1>Hi another API Fetching class!</h1>
  </div>
  <div v-if="error">{{ error }}</div>
  <div v-if="postsku.length"><PostList v-if="showPosts" :posts="postsku" /></div>
  <div v-else>Loading..</div>

  <button @click="showPosts = !showPosts">toggle posts</button>
  <button @click="postsku.pop()">delete a post</button>
</template>
<script>
  import { ref } from "vue";
  import getPosts from "../composables/getPosts";
  import PostList from "../components/PostList.vue";
  export default {
    name: "Next",
    components: { PostList },
    setup() {
      const showPosts = ref(true);
      const { postsku, error, load } = getPosts(); //getPosts是底下這些剛剛寫好的function這樣比較有效率,不用每一頁都寫一個setup try catch
      load();

      // const postsku = ref([]); //如果裡面有東西代表裡面有length,就會有資料
      // const error = ref(null);

      // const load = async () => {
      //   try {
      //     let data = await fetch("http://localhost:3000/postsku");
      //     if (!data.ok) {
      //       throw Error("no data available");
      //     }
      //     postsku.value = await data.json();
      //   } catch (err) {
      //     error.value = err.message;
      //     console.log(error.value);
      //   }
      // };
      // load();

      // return { postsku, showPosts, error };

      return { postsku, error, showPosts };
    },
  };
</script>
