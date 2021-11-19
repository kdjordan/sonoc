<template>
  <div>
    <div class="dash">
      <div class="dash__wrapper">
        <div class="card">
          <div class="card__title">ACCOUNT DETAILS</div>
          <div class="card__wrapper">
            <div class="card__col flex-col">
              <div>ACCOUNT NAME: XYZ TELECOM</div>
              <div>BALANCE: $1232.56</div>
              <div style="padding-bottom: 0.5rem; margin-left: 20%">
                <u>SETTINGS</u>
              </div>
              <div>CPS LIMIT: 50</div>
              <div>TOTAL PORTS: 200</div>
              <div>
                CURRENT RATES: <a href="//:dummy.csv">voip_int_11_21.csv</a>
              </div>
            </div>
            <div class="card__col card__col--right flex-col">
              <div style="padding-bottom: 0.5rem; margin-left: 20%">
                <u>CARRIER DETAILS</u>
              </div>
              <div>ACCOUNTING CONTACT: voip-acc@gmail.com</div>
              <div>BUSINESS CONTACT: voip@gmail.com</div>
              <div>RATES CONTACT: voip-rates@gmail.com</div>
              <div>SUPPORT CONTACT: voip-support@gmail.com</div>
            </div>
          </div>
        </div>
        <!-- end of top card -->
      </div>
      <div class="dash__wrapper">
        <div class="card__title">PERFORMANCE</div>
        <div class="card flex-row" style="justify-content: space-around;">
          <LineChart />
          <PieChart />
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
    PieChart
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_layout.scss';

.dash {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 1rem;

  &__wrapper {
    width: 90%;
    margin: 0 auto;
    margin-top: 3rem;
    border: 2px solid var(--blue);
  }
}

.card {
  box-shadow: 0 0 8px 5px #d0d0d0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
  }

  &__title {
    background: var(--blue);
    color: white;
    text-align: center;
    font-size: 1.6rem;
  }

  &__col {
    width: 50%;

    &--right {
      & div:not(:first-child) {
        margin: 0.2rem 0;
      }
    }
  }
}
</style>
