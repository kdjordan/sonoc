<template>
  <div class="layout finance">
    <div class="card">
      <div class="card__title">ADD FUNDS</div>

      <div class="card__wrapper">
        <div class="form__group field">
          <button class="paypal-button">
            <span class="paypal-button-title"> ADD FUNDS WITH</span>
            <span class="paypal-logo"> <i>Pay</i><i>Pal</i> </span>
          </button>
          <div
            class="paypal-button-title"
            style="margin-top: 1rem; font-size: 1.5rem; margin-top: 3rem"
          >
            <center>OR</center>
          </div>
          <div class="finance__stripe">
            <div class="card__heading">Use Secure CC via Stripe</div>
            <!-- <input type="text" placeholder="Name on Card" /> -->
            <input
              type="text"
              v-model="cardname"
              class="form__field"
              cardname="cardname"
              id="cardname"
              name="cardname"
              placeholder="Name on Card"
              required
            />
            <input
              type="text"
              v-model="cardnumber"
              class="form__field"
              cardnumber="cardnumber"
              id="cardnumber"
              name="cardnumber"
              placeholder="Card Number"
              required
            />
            <div class="finance__stripe--lower">
              <div>
                <input
                  type="text"
                  v-model="expirationdate"
                  class="form__field"
                  expirationdate="expirationdate"
                  id="expirationdate"
                  name="expirationdate"
                  placeholder="Expiration Date"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  v-model="ccv"
                  class="form__field"
                  ccv="ccv"
                  id="ccv"
                  name="ccv"
                  placeholder="ccv"
                  required
                />
              </div>
            </div>
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      cardname: '',
      cardnumber: '',
      expirationdate: '',
      ccv: '',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_layout.scss';
@import '../styles/_card.scss';
@import '../styles/_base.scss';
@import '../styles/_form.scss';
//border: 1px solid red;
.card {
  &__wrapper {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 1.5rem;
  }
}

.finance {
  margin-top: 5%;
  align-items: center;
  display: flex;
  flex-direction: column;

  &__stripe {
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    // border: 1px solid red;

    &--title {
      text-transform: uppercase;
    }

    &--lower {
      display: flex;
      justify-content: space-between;
      width: 100%;
      gap: 1rem;
    }

    & button {
      margin-top: 1rem;
      width: 80%;
      padding: 0.3rem 0;
      background-color: var(--blue);
      color: white;
      cursor: pointer;
      border: 1px solid transparent;
      transition: all 0.3s ease;

      &:hover {
        border: 1px solid var(--blue);
        color: var(--blue);
        background-color: white;
      }
    }
  }
}

.paypal {
  &-logo {
    font-family: Verdana, Tahoma;
    font-weight: bold;
    font-size: 26px;

    i:first-child {
      color: #253b80;
    }

    i:last-child {
      color: #179bd7;
    }
  }

  &-button {
    padding: 15px 30px;
    border: 1px solid #ff9933;
    border-radius: 5px;
    background-image: linear-gradient(#fff0a8, #f9b421);
    margin: 0 auto;
    display: block;
    min-width: 138px;
    position: relative;
    cursor: pointer;

    &-title {
      padding-right: 4px;
      font-size: 14px;
      color: #505050;
      vertical-align: baseline;
      text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
    }

    .paypal-logo {
      display: inline-block;
      text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
      font-size: 20px;
    }
  }
}

input[type='text'] {
  margin: 0.5rem 0;
  min-width: 100%;
}

</style>
