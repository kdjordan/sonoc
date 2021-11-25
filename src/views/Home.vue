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
    };
  },
  components: {
    Logo,
  },
  methods: {
    async submit() {
      await this.$store.commit('auth/toggleAuth', true);
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

h3 {
  color: var(--blue);
}
</style>
