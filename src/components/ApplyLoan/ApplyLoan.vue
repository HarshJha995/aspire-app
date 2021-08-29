<template>
  <div class="loan-container">
    <div class="loan-container__header">
      <span>Loan Application Form</span>
    </div>
    <div class="loan-container__body">
      <label for="loanAmount">Loan Amount (S$)*</label>
      <input
        type="number"
        id="loanAmount"
        v-model="state.loanApplDetails.loanAmount"
        :class="{ 'error-class': state.isError }"
      />
      <label for="loanTenure">Loan Tenure *</label>
      <select
        name="loanTenure"
        id="loanTenure"
        v-model="state.loanApplDetails.loanTenure"
        :class="{ 'error-class': state.isError }"
      >
        <option value="">Select</option>
        <option value="3">3 months</option>
        <option value="6">6 months</option>
        <option value="9">9 months</option>
        <option value="12">12 months</option>
      </select>
      <label for="reasonForLoan">Reason For Loan</label>
      <textarea id="reasonForLoan" cols="30" rows="10"></textarea>
      <button class="btn-primary" @click="processApplication()">Apply</button>
      <span :class="{ 'error-text': state.isError, success: !state.isError }">{{
        state.message
      }}</span>
    </div>
  </div>
</template>
<script>
import { reactive } from "@vue/reactivity";
import store from "@/../store";
export default {
  name: "ApplyLoan",
  //   emits: ["loanApplied"],
  setup() {
    const state = reactive({
      loanApplDetails: {
        loanAmount: "",
        loanTenure: "",
        reasonForLoan: "",
        isError: false,
        message: "",
      },
    });
    function processApplication() {
      if (
        !state.loanApplDetails.loanAmount ||
        !state.loanApplDetails.loanTenure
      ) {
        state.isError = true;
        state.message = "Please enter required details";
      } else {
        state.isError = false;
        state.message = "Loan application successful!";
        let userData = store.getters.getUserData;
        let updatedUserData = {
          ...userData,
          loanApplied: true,
          loanDetails: {
            amount: state.loanApplDetails.loanAmount,
            tenure: state.loanApplDetails.loanTenure,
            reason: state.loanApplDetails.reasonForLoan,
          },
        };
        store.dispatch("setUserData", updatedUserData);
        store.dispatch("setLoanStatus", true);
      }
    }
    return {
      state,
      processApplication,
    };
  },
};
</script>
<style scoped>
.loan-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin: 20px;
  padding: 12px;
}
.loan-container__header {
  font-size: 32px;
  text-align: center;
  font-weight: 600;
}
.loan-container__body {
  display: flex;
  width: 80%;
  flex-direction: column;
  margin: 30px 0;
}
.loan-container__body label {
  margin-top: 20px;
}
.loan-container__body input,
select {
  width: 40%;
}
.loan-container__body span {
  font-weight: bold;
  letter-spacing: 0.86;
}
</style>