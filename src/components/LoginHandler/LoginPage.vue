<template>
  <div class="tab-layout">
    <div class="tabs">
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Signup</router-link>
    </div>
    <h2 class="tab-layout__heading">Login</h2>
    <div class="tab-layout__body">
      <label for="user">Username</label>
      <input
        type="text"
        id="user"
        v-model="state.userName"
        :class="{ 'error-class': state.isError }"
      />
      <label for="pass">Password</label>
      <input
        type="password"
        id="pass"
        v-model="state.password"
        :class="{ 'error-class': state.isError }"
      />
      <button class="btn-primary" @click="verifyUser()">Login</button>
      <span
        >New User? <router-link to="/signup">Please register</router-link></span
      >
      <span v-if="state.isError" class="error-text"
        >{{ state.errorText }}
      </span>
    </div>
    <div class="static">
      <router-link to="/static">Please visit the static page here.</router-link>
    </div>
  </div>
</template>
<script>
import { reactive } from "@vue/runtime-core";
import Router from "../../router";
import store from "@/../store";
export default {
  name: "LoginPage",
  components: {},
  setup() {
    const state = reactive({
      userName: "",
      password: "",
      isError: false,
      errorText: "",
    });
    function verifyUser() {
      //mocking of getUserData API call

      if (!localStorage.getItem(state.userName)) {
        state.isError = true;
        state.errorText = "Username not found! Please register.";
      } else if (
        state.password !==
        JSON.parse(localStorage.getItem(state.userName)).password
      ) {
        state.isError = true;
        state.errorText = "Password incorrect. Please try again.";
      } else {
        state.isError = false;
        state.errorText = "";
        localStorage.setItem("authenticatedUser", state.userName);
        let userData = JSON.parse(localStorage.getItem(state.userName));
        store.dispatch("setUserData", userData);
        store.dispatch("setLoanStatus", userData.loanApplied);
        Router.push("/dashboard");
      }
    }
    return {
      state,
      verifyUser,
    };
  },
};
</script>
<style>
.container {
  display: flex;
  flex-grow: 1;
}

.tabs {
  display: flex;
  justify-content: flex-end;
}
.tabs a {
  margin-right: 32px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.3);
  padding: 2.5px;
  cursor: pointer;
  text-decoration: none;
}

.tabs .router-link-active {
  color: black;
  border-bottom: 2px solid #23cefd;
}

.tab-layout {
  width: 80%;
  min-height: 567px;
  padding: 30px 40px;
  border: 1px solid #fcfcfc;
  box-shadow: 0px 2px 12px rgb(201 201 201 / 30%);
}
.tab-layout__heading {
  text-align: center;
  margin-top: 50px;
}
.tab-layout__body {
  display: flex;
  flex-direction: column;
  padding: 18px;
  margin-top: 5%;
  margin: auto;
  max-width: 50%;
}
.tab-layout__body label {
  align-self: flex-start;
}
.static {
  text-align: center;
  margin-top: 20px;
}
</style>