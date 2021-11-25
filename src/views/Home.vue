<template>
  <div>
    <div class="login">
      <Logo class="login__logo" />
      <h3>PORTAL LOGIN</h3>
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
      <button
        @click="submit"
        class="btn btn__primary"
        style="margin-top: 1.5rem"
      >
        LOGIN
      </button>
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
    submit() {
      console.log(`submitted ${this.username}`);
      this.$router.push('/dashboard');
    },
  },
  created() {
    this.$router.push('/dashboard');
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_login.scss';

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 20rem;

  &__logo {
    width: 30%;
  }
}

h3 {
  color: var(--black3);
}
</style>
