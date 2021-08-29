<template>
  <div class="container">
    <div class="dashboard__header">
      <h1>Hello {{ state.userData.userName }}!</h1>
    </div>
    <div class="dashboard__body">
      <span v-if="!$store.getters.getLoanStatus">
        No Loan Found. Apply Now!
      </span>
      <div v-else>
        <h3>Loan Details</h3>
        <span
          >Pending:
          <span class="loan-details">S$ {{ state.amount }}</span></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import store from "@/../store";
export default {
  name: "Dashboard",
  setup() {
    const state = reactive({
      userData: {},
      amount: "",
    });
    onMounted(() => {
      let userData = store.getters.getUserData;
      state.userData = { ...userData };
      if (state.userData.loanDetails)
        state.amount = userData.loanDetails.amount;
    });
    return {
      state,
    };
  },
};
</script>

<style scoped>
.container {
  display: block;
  padding: 20px;
}
.dashboard__header {
  margin: 10px auto;
  padding: 12px;
}
.dashboard__body {
  font-size: 18px;
  font-weight: 600;
  padding: 12px;
}
.loan-details {
  margin-left: 4px;
  font-weight: bold;
  color: #0c365a;
}
</style>