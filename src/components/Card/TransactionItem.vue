<template>
  <li class="trans__content__item">
    <div class="item__logo" v-if="transType == 'Storage'">
      <img src="../../assets/images/file-storage.svg" alt="file-storage" />
    </div>
    <div class="item__logo flights" v-if="transType == 'Flight'">
      <img src="../../assets/images/flights.svg" alt="flights" />
    </div>
    <div class="item__logo megaphone" v-if="transType == 'Megaphone'">
      <img src="../../assets/images/megaphone.svg" alt="megaphone" />
    </div>
    <div class="item__text">
      <span class="item__text__title">Hamleys</span>
      <span class="item__text__date">20 May 2020</span>
    </div>
    <div class="item__price">
      <span>+ S$ 150</span><img src="../../assets/images/next.svg" alt="next" />
    </div>
    <div class="item__status">
      <div class="storage">
        <img
          src="../../assets/images/business-and-finance.svg"
          alt="business"
        />
      </div>
      <span>{{ status == "refund" ? "Refund" : "Charged" }} on debit card</span>
    </div>
  </li>
</template>
<script>
export default {
  name: "TransactionItem",
  props: ["status", "transType"],
  setup() {},
};
</script>
<style scoped>
.trans__content__item {
  list-style-type: none;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 60px 2fr 1fr;
  grid-template-areas:
    "logo content content price"
    "status status status status";
  border-bottom: 2px solid #f0f0f0;
  margin-top: 12px;
}
.item__logo {
  grid-area: logo;
  height: 48px;
  width: 48px;
  background-color: #009dff1a;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 16px;
}
.item__text {
  grid-area: content;
  display: flex;
  flex-direction: column;
}
.item__text__title {
  font-size: 14px;
  font-weight: 600;
}
.item__text__date {
  font-size: 13px;
  color: #aaaaaa;
}
.item__price span {
  font-size: 14px;
  font-weight: bold;
  color: #01d167;
  margin-right: 10px;
}
.item__status {
  grid-area: status;
  padding: 8px;
  margin-left: 50px;
  display: flex;
  align-items: baseline;
}
.item__status div {
  width: 24px;
  height: 20px;
  background-color: #325baf;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 6px;
  margin-right: 8px;
}
.item__status span {
  font-size: 12px;
  font-weight: 600;
  color: #325baf;
}
.flights {
  background-color: #00d6b51a;
}
.megaphone {
  background-color: #f251951a;
}

@media (max-width: 1120px) {
  .item__price {
    display: none;
  }
}
</style>