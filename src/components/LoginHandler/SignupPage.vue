<template>
  <div class="tab-layout">
    <div class="tabs">
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>
    </div>
    <h2 class="tab-layout__heading">Signup</h2>
    <div class="tab-layout__body">
      <label for="fName">First Name</label>
      <input type="text" id="fName" v-model="state.userData.firstName" />
      <label for="lName">Last Name</label>
      <input type="text" id="lName" v-model="state.userData.lastName" />
      <label for="user">Username</label>
      <input type="text" id="user" v-model="state.userData.userName" />
      <label for="pass">Password</label>
      <input type="password" id="pass" v-model="state.userData.password" />
      <button class="btn-primary" @click="registerUser()">Signup</button>
    </div>
  </div>
</template>
<script>
import { reactive } from "@vue/reactivity";
import Router from "../../router";
import store from "@/../store";
export default {
  name: "LoginPage",
  components: {},
  setup() {
    const state = reactive({
      userData: {
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
      },
    });
    function registerUser() {
      //mocking of setting User data call

      localStorage.setItem(
        state.userData.userName,
        JSON.stringify(state.userData)
      );
      localStorage.setItem("authenticatedUser", state.userData.userName);
      store.dispatch("setUserData", state.userData);
      Router.push("/dashboard");
    }
    return {
      state,
      registerUser,
    };
  },
};
</script>\