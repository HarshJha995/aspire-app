<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "./components/Navbar/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  setup() {},
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}

input,
select,
textarea {
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 12px;
  border: 2px solid #dfdfdf;
}

.btn-primary {
  width: 109px;
  height: 35px;
  background: #325baf;
  border-radius: 4px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: flex-end;
  cursor: pointer;
}

.btn-primary:hover {
  background: rgb(50, 91, 175, 0.9);
}

.error-class {
  border: 2px solid red !important;
  box-shadow: 2px 2px 4px rgba(255, 0, 0, 0.4);
}

.error-text {
  margin-top: 12px;
  color: red;
}

.success {
  color: #01d167;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
