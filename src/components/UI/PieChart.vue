<template>
  <div class="chart">
    <h2>TOP 5 REVENUE</h2>
    <apexchart type="pie" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  data: () => ({
     series: [44, 55, 13, 43, 22],
          chartOptions: {
            chart: {
              type: 'pie',
            },
            labels: ['MegaPhone', 'ConvoPhone', 'SamplePhone', 'PhoneHome', 'FoneFone'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
          
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
