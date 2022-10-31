<template>
  <div class="jobs">
    <h1>This is job</h1>
    <div v-if="duties.length">
      <div v-for="duty in duties" :key="duty.id">
        <router-link :to="{ name: 'jobsdetail', params: { id: duty.id } }">
          <h2>{{ duty.title }}</h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      <h1>Loading....</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      duties: [
        // { title: "Ninja boy", id: 1, details: "haha" },
        // { title: "Ninja girl", id: 2, details: "haha" },
        // { title: "Ninja kids", id: 3, details: "haha" },
      ],
    };
  },
  mounted() {
    fetch("http://localhost:3000/duties")
      .then((res) => res.json())
      .then((json) => (this.duties = json))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
.jobs h2 {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
</style>
