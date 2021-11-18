<template>
  <div class="view cdr">
    <div class="flex-row cdr__row">
      <div class="cdr__box">
        <Dload />
        <div class="cdr__box--title"><a href="#">voip_10_11.csv</a></div>
      </div>
      <div class="cdr__box">
        <Dload />
        <div class="cdr__box--title"><a href="#">voip_10_12.csv</a></div>
      </div>
      <div class="cdr__box">
        <Dload />
        <div class="cdr__box--title"><a href="#">voip_10_13.csv</a></div>
      </div>
    </div>
    <div class="flex-row cdr__row">
      <div class="cdr__box">
        <Dload />
        <div class="cdr__box--title"><a href="#">voip_10_14.csv</a></div>
      </div>
      <div class="cdr__box">
        <Dload />
        <div class="cdr__box--title"><a href="#">voip_10_15.csv</a></div>
      </div>
      <div class="cdr__box">
        <Dload />
        <div class="cdr__box--title"><a href="#">voip_10_16.csv</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import Dload from '@/assets/SVG/Dload.vue';

export default {
  components: {
    Dload,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_layout.scss';

.view {
  width: 78%;
  margin: 0 auto;
  margin-top: 8%;
}

.cdr {
  &__row {
    justify-content: center;
    gap: 3rem;
    margin-top: 4rem;
  }

  &__box {
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid var(--blue);
    border-radius: 5px;
    box-shadow: 0px 11px 5px 4px #d0d0d0;
    transition: all .3s ease;
    padding: 1rem;

    &:hover {
      box-shadow: 2px 2px 5px 4px #d0d0d0;
    }

    &--title {
      color: var(--grey1);
    }
  }
}
</style>
