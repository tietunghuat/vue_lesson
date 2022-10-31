<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <!--submit.prevent是不要刷新頁面-->
      <div>
        <label>Email:</label>
        <input type="email" required v-model="email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" required v-model="password" />
        <div class="pass-error" v-if="passwordError">{{ passwordError }}</div>
      </div>

      <label>Your skill:</label>
      <input type="text" v-model="tempSkill" @keyup.ctrl="addSkill" />
      <div v-for="skill in skills" :key="skill.id" class="pill">
        <span @click="deleteSkill(skill)"
          ><p class="white">{{ skill }}</p></span
        >
      </div>

      <div>
        <label>Your role:</label>
        <select v-model="role">
          <option value="guard">Guard</option>
          <option value="foward">Forward</option>
          <option value="center">Center</option>
        </select>
      </div>

      <div class="term">
        <input type="checkbox" required v-model="terms" />
        Accept terms and condition
      </div>

      <div class="submit">
        <button>Create an Account</button>
      </div>
    </form>
    <input type="checkbox" value="yoshi" v-model="name" />
    <label>Yoshi</label>
    <input type="checkbox" value="king" v-model="name" />
    <label>King</label>
    <input type="checkbox" value="davis" v-model="name" />
    <label>Davis</label>
  </div>

  <p>Your email:{{ email }}</p>
  <p>Your password:{{ password }}</p>
  <p>Your position:{{ role }}</p>
  <p>Your name:{{ name }}</p>
</template>

<script>
export default {
  name: "FirstOne",
  // setup(){
  //   const password=const obj = reactive()""
  // },
  // return{
  //   password
  // }
  data() {
    return {
      email: "mario",
      password: "",
      role: "center",
      terms: "false",
      name: [],
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill != item; //if item跟skill一样 就return false
      });
    },
    handleSubmit() {
      console.log("form submitted");
      this.passwordError =
        this.password.length > 5
          ? " "
          : "** Password must be at least 6 chars long"; //如果psw長度大於5,就沒事，沒有的話就是提醒
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  width: 420px;
  margin: 30px auto;
  background-color: rgb(51, 57, 147);
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
.term {
  color: #aaa;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
select {
  display: block;
  padding: 10px 6px;
  width: 30%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  position: relative;
  align-items: center;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 10px 10px 0 0;
  position: relative;
  top: 2px;
}
.white {
  color: white;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  padding: 1px 5px 1px 5px;
  background-color: rgb(114, 114, 114);
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}
button {
  background-color: rgb(221, 174, 54);
  border: 0;
  padding: 10px 20px;
  border-radius: 8px;
  margin-top: 10px;
  color: white;
  font-weight: bold;
}
.submit {
  text-align: center;
}
.pass-error {
  color: rgb(219, 53, 53);
  margin-top: 2px;
  margin: auto;
  font-weight: bold;
}
</style>
