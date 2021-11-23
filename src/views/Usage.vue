<template>
  <div class="view">
    <div class="card">
      <div class="card__title">CPS USAGE</div>
      <div class="box" style="">
        <select @change="fetchCPS">
          <option value="1">ALL</option>
          <option value="2">XYZ Telecom</option>
          <option value="3">ABC VOIP</option>
        </select>
      </div>
      <LineChart />
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/UI/LineChart';

export default {
  data() {
    return {
    };
  },
  components: {
    LineChart,
  },
  methods: {
    async fetchCPS($event) {
      console.log('changed', $event.target.value);
      await this.$store.dispatch('lineChart/fetchData',  $event.target.value)
    },
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
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.chart {
  & h2 {
    padding: 1rem 0;
    font-size: 1rem;
    text-align: center;
    color: var(--grey1);
  }
}

.box {
  text-align: center;
  margin: 0.5rem 0;
}

select {
  background-color: var(--blue);
  color: white;
  padding: 0.5rem;
  width: 250px;
  border: none;
  font-size: 1rem;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}
</style>
