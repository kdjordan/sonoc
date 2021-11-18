<template>
  <div class="chart">
    <h2>USAGE CPS</h2>
    <apexchart type="bar" :options="chartOptions" :series="series"> </apexchart>
  </div>
</template>

<script>
export default {
  data: () => ({
    chartOptions: {
      chart: {
        id: 'Chart 1',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
    },
    series: [
      {
        name: 'CPS',
        data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139],
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.chart {
  & h2 {
      padding: 1rem 0;
      font-size: 1rem;
      text-align: center;
      color: var(--grey1);
  }
}
</style>
