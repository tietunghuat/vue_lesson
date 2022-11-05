import { ref } from "vue";

const getPosts = () => {
  const postsku = ref([]); //如果裡面有東西代表裡面有length,就會有資料
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/postsku");
      if (!data.ok) {
        throw Error("no data available");
      }
      postsku.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { postsku, load, error };
};

export default getPosts;
