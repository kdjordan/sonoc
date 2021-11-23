<template>
  <div class="chart">
    <apexchart type="line" :options="currentChart.chartOptions" :series="currentChart.series"> </apexchart>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
      ...mapState({
        currentChart: state => state.lineChart.data
        })
  },
  methods: {
    updateData() {
      let chart;
      // chart = this.getData()
    },
  },
  async mounted() {
    await this.$store.dispatch('lineChart/fetchData', 1);
  },
};
</script>
