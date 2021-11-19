<template>
  <div class="view">
    <div class="card">
      <div class="card__title">REVENUE</div>
    <PieChart />

    </div>
  </div>
</template>

<script>
import PieChart from '@/components/UI/PieChart';
export default {
  components: {
    PieChart,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_layout.scss';

.view {
  width: 78%;
  margin: 0 auto;
  margin-top: 8%;
}
.chart {
  & h2 {
    padding: 1rem 0;
    font-size: 1rem;
    text-align: center;
    color: var(--grey1);
  }
}
.chart {
  & h2 {
    padding: 1rem 0;
    font-size: 1rem;
    text-align: center;
    color: var(--grey1);
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
