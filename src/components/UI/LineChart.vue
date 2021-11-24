<template>
  <div class="chart">
    <apexchart :options="doIt.chartOptions" :series="doIt.series"> </apexchart>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      wrap: {
        chartOptions: {
          chart: {
            type: 'bar',
            id: 'All',
            toolbar: {
              show: false,
            },
            animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 300,
              animateGradually: {
                enabled: true,
                delay: 75,
              },
              dynamicAnimation: {
                enabled: true,
                speed: 100,
              },
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
      },
    };
  },
  computed: {
    ...mapState({
      currentChart: (state) => state.lineChart.data,
    }),
    doIt() {
      let obj = this.currentChart;
      const newObj = Object.assign(obj, this.wrap);
      return newObj;
    },
  },
  async created() {
    await this.$store.dispatch('lineChart/fetchData', 1);
  },
};
</script>
