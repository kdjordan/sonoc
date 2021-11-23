<template>
  <div>
    <div class="dash">
      <div class="dash__wrapper">
        <div class="card">
          <div class="card__title">ACCOUNT DETAILS</div>
          <div class="card__wrapper">
            <div class="card__col flex-col">
              <div class="card__heading">ACCOUNT NAME: <span class="card__entry">XYZ TELECOM</span></div>
              <div class="card__heading">BALANCE: <span class="card__entry">$1232.56</span></div>
              <div class="card__heading">CPS LIMIT:<span class="card__entry"> 50</span></div>
              <div class="card__heading">TOTAL PORTS:<span class="card__entry"> 200</span></div>
              <div class="card__heading">CURRENT RATES: <a href="//:dummy.csv">voip_int_11_21.csv</a></div>
            </div>
            <div class="card__col  flex-col">
              <div class="card__heading">ACCOUNTING CONTACT: <span class="card__entry">voip-acc@gmail.com</span></div>
              <div class="card__heading">BUSINESS CONTACT: <span class="card__entry">voip@gmail.com</span></div>
              <div class="card__heading">RATES CONTACT: <span class="card__entry">voip-rates@gmail.com</span></div>
              <div class="card__heading">SUPPORT CONTACT: <span class="card__entry">voip-support@gmail.com</span></div>
            </div>
          </div>
        </div>
        <!-- end of top card -->
      </div>
      <div class="dash__wrapper">
        <div class="card">
          <div class="card__title">PERFORMANCE</div>
          <div class="flex-row" style="justify-content: space-around; align-items:center;">
            <LineChart style="margin-top: 1rem;"/>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/UI/Sidebar';
import LineChart from '@/components/UI/LineChart';
import PieChart from '@/components/UI/PieChart';

export default {
  components: {
    Sidebar,
    LineChart,
    PieChart,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_layout.scss';
@import '../styles/_card.scss';

.dash {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 1rem;

  &__wrapper {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 10%;
    border: 2px solid var(--blue);
  }
}
</style>
