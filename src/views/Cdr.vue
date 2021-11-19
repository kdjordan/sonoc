<template>
  <div class="view cdr">
    <div class="card">
      <div class="card__title">CDR DOWNLOAD</div>
      <div class="flex-row cdr__row cdr__wrapper">
        <div class="cdr__box">
          <Dload />
          <div class="cdr__box--title"><a href="#">voip_10_11.zip</a></div>
        </div>
        <div class="cdr__box">
          <Dload />
          <div class="cdr__box--title"><a href="#">voip_10_12.zip</a></div>
        </div>
        <div class="cdr__box">
          <Dload />
          <div class="cdr__box--title"><a href="#">voip_10_13.zip</a></div>
        </div>
      </div>
      <div class="flex-row cdr__row cdr__wrapper" style="padding-bottom: 7rem;">
        <div class="cdr__box">
          <Dload />
          <div class="cdr__box--title"><a href="#">voip_10_14.zip</a></div>
        </div>
        <div class="cdr__box">
          <Dload />
          <div class="cdr__box--title"><a href="#">voip_10_15.zip</a></div>
        </div>
        <div class="cdr__box">
          <Dload />
          <div class="cdr__box--title"><a href="#">voip_10_16.zip</a></div>
        </div>
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
  &__wrapper {
    padding: 2rem;
  }
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
    transition: all 0.3s ease;
    padding: 1rem;

    &:hover {
      box-shadow: 2px 2px 5px 4px #d0d0d0;
    }

    &--title {
      color: var(--grey1);
    }
  }
}
.chart {
  & h2 {
    padding: 1rem 0;
    font-size: 1rem;
    text-align: center;
    color: var(--grey1);
  }
}
.card {
  box-shadow: 0 0 8px 5px #d0d0d0;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
  }

  &__title {
    background: var(--blue);
    color: white;
    text-align: center;
    font-size: 1.6rem;
  }

  &__col {
    width: 50%;

    &--right {
      & div:not(:first-child) {
        margin: 0.2rem 0;
      }
    }
  }
}
</style>
