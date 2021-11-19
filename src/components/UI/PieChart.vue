<template>
  <div class="chart">
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
