<template>
<div class="view">
  <LineChart />
</div>
</template>

<script>

import LineChart from '@/components/UI/LineChart';
export default {
 components: {
   LineChart
 }
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
</style>
