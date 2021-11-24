<template>
  <div class="chart">
    <apexchart
      :options="doIt.chartOptions"
      :series="doIt.series"
    >
    </apexchart>
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
            type: 'line',
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
          // chartOptions: this.currentChart.chartOptions
        },
      },
    };
  },
  // computed: {
  //   doIt(){
  //     console.log('somethign')
  //     let obj = this.currentChart
  //     const newObj = Object.assign(obj, this.wrap)
  //     console.log(this.chart)
  //     console.log(newObj)
  //   }
  // },
  computed: {
    ...mapState({
      currentChart: (state) => state.lineChart.data,
    }),
    doIt() {
      console.log('somethign');
      let obj = this.currentChart;
      const newObj = Object.assign(obj, this.wrap);
      console.log(this.chart);
      console.log(newObj);
      return newObj
    },
  },
  async created() {
    await this.$store.dispatch('lineChart/fetchData', 1);
  },
};
</script>
