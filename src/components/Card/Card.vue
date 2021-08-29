<template>
  <div class="card__active">
    <CardBody />
    <div class="card__active--side-bar">
      <div class="side-bar__card-details">
        <img
          src="../../assets/images/Group11889.svg"
          class="card-details__card-icon"
          alt="card details"
        />
        <span>Card details</span>
        <img
          src="../../assets/images/down-arrow.svg"
          alt="down-arrow"
          class="card-details__down-arrow"
        />
      </div>
      <div class="side-bar__recent-trans">
        <div class="recent-trans__header">
          <img src="../../assets/images/Group11889(2).svg" alt="recent" />
          <span>Recent transactions</span>
          <img src="../../assets/images/up-arrow.svg" alt="up-arrow" />
        </div>
        <div class="recent-trans__content">
          <ul>
            <TransactionItem status="refund" transType="Storage" />
            <TransactionItem status="refund" transType="Flight" />
            <TransactionItem status="refund" transType="Megaphone" />
            <TransactionItem status="charged" transType="Storage" />
          </ul>
        </div>
        <div class="recent-trans__footer">
          <span>View All Transactions </span>
        </div>
      </div>
    </div>
    <div class="card__active--menu">
      <div class="menu__item">
        <img src="../../assets/images/Freezecard.svg" alt="freeze card" /><span
          >Freeze card</span
        >
      </div>
      <div class="menu__item">
        <img
          src="../../assets/images/Setspendlimit.svg"
          alt="Set spend limit"
        /><span>Set spend limit</span>
      </div>
      <div class="menu__item">
        <img src="../../assets/images/GPay.svg" alt="Add to GPay" /><span
          >Add to GPay</span
        >
      </div>
      <div class="menu__item">
        <img
          src="../../assets/images/Replacecard.svg"
          alt="Replace card"
        /><span>Replace card</span>
      </div>
      <div class="menu__item">
        <img
          src="../../assets/images/Deactivatecard.svg"
          alt="Cancel card"
        /><span>Cancel card</span>
      </div>
    </div>
  </div>
</template>

<script>
import CardBody from "./CardBody.vue";
import TransactionItem from "./TransactionItem.vue";
export default {
  name: "Card",
  components: { CardBody, TransactionItem },
  setup() {},
};
</script>

<style scoped>
.card__active {
  width: 100%;
  height: 767px;
  margin-top: 20px;
  padding: 0px 40px;
  border: 1px solid #fcfcfc;
  box-shadow: 0px 2px 12px rgb(201 201 201 / 30%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 46px;
  grid-template-areas:
    "card sidebar"
    "menu sidebar";
}

.card__active--menu {
  grid-area: menu;
  background-color: #edf3ff;
  height: 116px;
  display: flex;
  border-radius: 16px;
}

.menu__item {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}

.card__active--side-bar {
  grid-area: sidebar;
  margin-top: 60px;
}
.side-bar__card-details {
  display: flex;
  align-items: center;
  background-color: #f5f9ff;
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
}
.side-bar__card-details img,
.recent-trans__header img {
  flex-grow: 0;
}
.side-bar__card-details span,
.recent-trans__header span {
  flex-grow: 5;
  font-size: 14px;
  margin-left: 12px;
}

.side-bar__recent-trans {
  height: 565px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  margin-top: 24px;
}
.recent-trans__header {
  background-color: #f5f9ff;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 24px;
}

.recent-trans__content {
  padding: 12px 26px 0px;
  border-bottom: 1px solid #f0f0f0;
}
.recent-trans__content ul {
  padding: 0px;
  margin: 0px;
}

.recent-trans__content li:last-child {
  border-bottom: none;
}

.recent-trans__footer {
  background-color: #edfff5;
  border: 1px solid #ddffec;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #01d167;
  font-weight: 500;
}

@media (max-width: 1120px) {
  .side-bar__recent-trans {
    height: unset;
  }
  .card__active {
    height: unset;
  }
}
</style>