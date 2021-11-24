<template>
  <div class="chart">
    <apexchart :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  data: () => ({
    series: [44, 55, 13, 43, 22],

    chartOptions: {
      plotOptions: {
        pie: {
          customScale: 0.9,
        },
      },
      dataLabels: {
        enabled: true,
      },
      chart: {
        type: 'donut',
      },

      labels: [
        'ABC Telecom',
        'Voip Central',
        'XYZ Telecom',
        '10x Comms',
        'PhunkVoip',
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  }),
};
</script>
