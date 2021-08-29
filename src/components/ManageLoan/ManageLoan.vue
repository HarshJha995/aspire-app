<template>
  <div class="container">
    <div class="content__header">
      <h1>Make Loan Payment</h1>
    </div>
    <div class="content__body">
      <div>
        Total amount due:
        <span class="loan-details">S$ {{ state.loanDetails.amount }}</span>
      </div>
      <div class="content__body__payment">
        <label for="payment">Amount To Pay</label>
        <input
          type="number"
          id="payment"
          v-model="state.amount"
          :class="{ 'error-class': state.isError }"
        />
        <button class="btn-primary" @click="processPayment()">Pay</button>
      </div>
      <span :class="{ 'error-text': state.isError, success: !state.isError }">{{
        state.message
      }}</span>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import store from "@/../store";
export default {
  setup() {
    const state = reactive({
      loanDetails: {},
      amount: "",
      isError: false,
      message: "",
    });

    function processPayment() {
      if (state.amount > state.loanDetails.amount) {
        state.isError = true;
        state.message = "Entered amount is greater than total due";
      } else {
        state.isError = false;
        state.message = "Payment processed!";
        state.loanDetails.amount -= state.amount;
        if (state.loanDetails.amount == 0)
          store.dispatch("setLoanStatus", false);
        state.amount = "";
        let userData = store.getters.getUserData;
        let updatedUserData = { ...userData, loanDetails: state.loanDetails };
        store.dispatch("setUserData", updatedUserData);
      }
    }

    onMounted(() => {
      let userData = store.getters.getUserData;
      console.log(userData);
      state.loanDetails = { ...userData.loanDetails };
    });
    return {
      state,
      processPayment,
    };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
  display: block;
}
.content__header {
  margin: 10px auto;
  padding: 12px;
}
.content__body {
  font-size: 18px;
  font-weight: 600;
  padding: 12px;
}
.loan-details {
  margin-left: 4px;
  font-weight: bold;
  color: #0c365a;
}
.content__body__payment {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  width: 40%;
}
.content__body__payment button {
  align-self: flex-start;
  margin-bottom: 12px;
}
</style>