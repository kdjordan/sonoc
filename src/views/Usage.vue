<template>
  <div class="view">
    <div class="card">
      <div class="card__title">USAGE</div>
      <LineChart />
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/UI/LineChart';
export default {
  components: {
    LineChart,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_layout.scss';
@import '../styles/_card.scss';

.view {
  width: 78%;
  margin: 0 auto;
  margin-top: 10%;
}
.chart {
  & h2 {
    padding: 1rem 0;
    font-size: 1rem;
    text-align: center;
    color: var(--grey1);
  }
}

</style>
