<template>
  <div class="card__active--card-info">
    <div class="card-info__show">
      <img src="../../assets/images/remove_red_eye-24px.svg" alt="eye" />
      <p>Show card number</p>
    </div>
    <div class="card-info__card">
      <div class="card__logo">
        <img src="../../assets/images/AspireLogo.svg" alt="Logo" />
      </div>
      <span class="card__name">Mark Henry</span>
      <span class="card__number">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <p>2020</p>
      </span>
      <span class="card__data">
        <span>Thru: 12/20</span>
        <span>CVV: ***</span>
      </span>
      <span class="card__brand"
        ><img src="../../assets/images/VisaLogo.svg" alt="visa"
      /></span>
    </div>
    <div class="card-info__pagination">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardBody",
  setup() {},
};
</script>
<style scoped>
.card__active--card-info {
  grid-area: card;
  padding-top: 31.5px;
}

.card-info__show {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
}
.card-info__show p {
  font-size: 12px;
  font-weight: bold;
  color: #01d167;
  margin: 0;
  margin-left: 6px;
}
.card-info__card {
  background-color: #01d167;
  border-radius: 8px;
  height: 248.85px;
  padding: 27.09px;
  display: flex;
  flex-direction: column;
}
.card__logo {
  align-self: flex-end;
  margin-bottom: 27.09px;
}
.card__name {
  font-weight: bold;
  font-size: 24px;
  color: white;
}
.card__number {
  display: flex;
  margin-top: 14px;
  align-items: center;
}
.card__number span {
  width: 9.03px;
  height: 9.03px;
  border-radius: 50%;
  background-color: white;
  margin-right: 6.77px;
}
.card__number span:nth-child(4n) {
  margin-right: 24px;
}
.card__number p {
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 3.46px;
  color: white;
}
.card__data {
  color: white;
  margin-top: 10px;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 0.13px;
}
.card__data span {
  margin-right: 32px;
}
.card__brand {
  align-self: flex-end;
}

.card-info__pagination {
  text-align: center;
}

.card-info__pagination div {
  margin-top: 16px;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: #01d167;
  opacity: 20%;
  display: inline-block;
  margin-right: 8px;
}

.card-info__pagination div:nth-child(1) {
  width: 16px;
  opacity: 100%;
}
</style>