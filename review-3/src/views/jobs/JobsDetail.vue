<template>
  <div class="body" v-if="job">
    <h1>Jobs details page</h1>
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>The jod details is {{ job.details }}</p>
  </div>

  <div v-else>
    <h1>Loading .......</h1>
  </div>
</template>

<script>
export default {
  prop: ["id"],
  data() {
    return {
      job: null,
      id: 1,
      // id: this.$route.params.id, //這個方法也是可以,但props然後用params更快
    };
  },

  mounted() {
    fetch("http://localhost:3000/duties" + "/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
