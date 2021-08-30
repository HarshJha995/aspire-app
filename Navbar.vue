<template>
  <div class="navbar">
    <div class="navbar__brand">
      <div class="navbar__brand__logo">
        <router-link to="/login">
          <img src="../../assets/images/Logo.png" />
        </router-link>
      </div>
      <div class="navbar__brand__slogan">
        <span
          >Trusted way of banking for 3,000+ SMEs and startups in
          Singapore</span
        >
      </div>
    </div>
    <div class="navbar__controls" v-if="this.$route.path == '/static'">
      <ul>
        <li class="navbar__controls__item">
          <img src="../../assets/images/Home.svg" alt="Home" /><span>Home</span>
        </li>
        <li class="navbar__controls__item">
          <img src="../../assets/images/Card.svg" alt="Cards" /><span
            >Cards</span
          >
        </li>
        <li class="navbar__controls__item">
          <img src="../../assets/images/Payments.svg" alt="Payments" /><span
            >Payments</span
          >
        </li>
        <li class="navbar__controls__item">
          <img src="../../assets/images/Credit.svg" alt="Credit" /><span
            >Credit</span
          >
        </li>
        <li class="navbar__controls__item">
          <img src="../../assets/images/Account.svg" alt="Settings" /><span
            >Settings</span
          >
        </li>
      </ul>
    </div>
    <div
      class="navbar__controls"
      v-if="
        this.$route.path == '/dashboard' ||
        this.$route.path == '/applyloan' ||
        this.$route.path == '/manageloan'
      "
    >
      <ul>
        <li class="navbar__controls__item">
          <router-link to="/dashboard"
            ><img src="../../assets/images/Home.svg" alt="Home" /><span
              >Home</span
            ></router-link
          >
        </li>
        <li class="navbar__controls__item" v-if="!$store.getters.getLoanStatus">
          <router-link to="/applyloan">
            <img src="../../assets/images/Payments.svg" alt="Payments" /><span
              >Apply For Loan</span
            >
          </router-link>
        </li>
        <li class="navbar__controls__item" v-if="$store.getters.getLoanStatus">
          <router-link to="/manageloan">
            <img src="../../assets/images/Credit.svg" alt="Credit" /><span
              >Manage Loan</span
            >
          </router-link>
        </li>
        <li class="navbar__controls__item">
          <router-link to="/login">
            <img src="../../assets/images/Account.svg" alt="Settings" /><span
              >Logout</span
            >
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  setup() {},
};
</script>
<style scoped>
.navbar {
  background-color: #0c365a;
  width: 340px;
  padding: 32px;
  height: 100vh;
  position: sticky;
  top: 0;
}
.navbar__brand {
  padding: 16px;
  cursor: pointer;
}
.navbar__brand__slogan {
  margin-top: 19px;
}
.navbar__brand__slogan span {
  color: rgba(255, 255, 255, 0.3);
  font-size: 15px;
  width: 237px;
}

.navbar__controls ul {
  padding-left: 16px;
}
.navbar__controls__item {
  display: flex;
  list-style-type: none;
  color: #ffff;
  margin: 62px 0px;
  cursor: pointer;
}
.navbar__controls__item img {
  margin-right: 16px;
}
a {
  text-decoration: none;
  color: unset;
  display: unset;
  display: flex;
}
</style>