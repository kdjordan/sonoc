<template>
  <div class="wrapper">
    <div class="login">
      <div>
        <Logo class="login__logo" />
      </div>
      <h3>SONOC PORTAL LOGIN</h3>
      <div class="form__group field">
        <input
          type="email"
          v-model="username"
          class="form__field"
          username="password"
          id="username"
          name="username"
          placeholder="Username"
          required
        />
      </div>
      <div class="form__group field">
        <input
          type="password"
          v-model="password"
          class="form__field"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
      </div>
      <button @click="submit" class="button__add">LOGIN</button>
      <select v-model="accountType" style="margin-top:2rem;">
        <option value="1" default>Account Owner</option>
        <option value="2">Account User</option>
      </select>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/SVG/SonocLogoSVG';

export default {
  data() {
    return {
      username: '',
      password: '',
      accountType: 1,
    };
  },
  components: {
    Logo,
  },
  methods: {
    async submit() {
      await this.$store.commit('auth/toggleAuth', true);
      await this.$store.commit('auth/setAccountType', this.accountType);
      this.$router.push('/dashboard');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_form.scss';

.button__add {
  cursor: pointer;
  font-size: 1.1rem;
  width: 30%;
  margin-top: 3rem;
  text-transform: uppercase;
  padding: 0.5rem 0;
  border: 2px solid var(--blue);
  background-color: var(--blue);
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: var(--blue);
  }
}
.wrapper {
  max-width: 50%;
  margin: 0 auto;
  height: 100%;
  // border: 1px solid red;
}

.login {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 20rem;

  &__logo {
    width: 10rem;
    height: auto;
  }
}
select {
  background-color: var(--blue);
  color: white;
  padding: 0.5rem;
  width: 10rem;
  border: none;
  font-size: 1rem;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
}

h3 {
  color: var(--blue);
}
</style>
