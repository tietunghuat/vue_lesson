import { ref } from "vue";

const getDetails = (id) => {
  const posts = ref(null); //如果裡面有東西代表裡面有length,就會有資料
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/postsku" + "/" + id);
      if (!data.ok) {
        throw Error("posts doesn't exist");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, load, error };
};

export default getDetails;
