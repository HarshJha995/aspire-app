<template>
  <!-- <div class="container"> -->
  <!-- <Navbar :isLogged="true" /> -->
  <div class="dashboard">
    <div class="dashboard__header">
      <div class="dashboard__header__balance">
        <div class="balance_title">Available balance</div>
        <div class="balance">
          <span class="balance__balance_icon active">S$</span>
          <span class="balance__balance_value">3,000</span>
        </div>
      </div>
      <div class="dashboard__header__card">
        <button>
          <img src="../assets/images/box.svg" alt="Box" />New Card
        </button>
      </div>
    </div>
    <div class="dashboard__layout">
      <div class="card-tabs">
        <span>My debit cards</span>
        <span>All company cards</span>
      </div>
      <Card />
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
// import Navbar from "../components/Navbar/Navbar.vue";
import { onUpdated } from "vue";
import Card from "../components/Card/Card.vue";
export default {
  components: { Card },
  setup() {
    onUpdated(() => {
      localStorage.setItem("authStatus", "static");
    });
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.dashboard {
  flex-grow: 1;
  padding: 40px 60px;
}
.dashboard__header {
  display: flex;
  margin-top: 20px;
  margin-bottom: 34px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
}
.balance_title {
  font-size: 14px;
  margin-bottom: 16px;
}
.balance {
  display: flex;
  align-items: center;
}

.balance__balance_icon {
  color: white;
  background-color: #01d167;
  width: 40px;
  height: 24px;
  padding: 4px 13px;
  font-size: 13px;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 12px;
}
.balance__balance_value {
  font-size: 26px;
  font-weight: bold;
}
.dashboard__header__card button {
  width: 109px;
  height: 35px;
  background: #325baf;
  border-radius: 4px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.card-tabs span {
  margin-right: 32px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.3);
  padding: 2.5px;
  cursor: pointer;
}

.card-tabs span:nth-child(1) {
  color: black;
  border-bottom: 2px solid #23cefd;
}
</style>