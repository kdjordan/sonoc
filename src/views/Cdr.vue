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
      <div class="flex-row cdr__row cdr__wrapper" style="padding-bottom: 1rem;">
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
      <div class="flex-row cdr__row cdr__wrapper" style="padding-bottom: 1rem;">
        <div class="card__heading">NEXT DAY CDR ADDED 0:01 GMT</div>
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
@import '../styles/_card.scss';

.view {
  width: 80%;
  margin: 0 auto;
  margin-top: 10%;
}

.cdr {
  &__wrapper {
    padding: 0 1rem;
  }
  &__row {
    justify-content: center;
    gap: 3rem;
    margin-top: 3rem;
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

    &--title {
      margin-top: 1.5rem;
    }

    &:hover {
      box-shadow: 2px 2px 5px 4px #d0d0d0;
    }
  }
}
</style>
