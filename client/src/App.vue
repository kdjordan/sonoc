<template v-if="loggedIn">
  <div id="app" :class="{ layout: this.$auth.isAuthenticated }">

    <Sidebar v-if="this.$auth.isAuthenticated == true" />
    <pulse v-if="isLoading"></pulse>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import '@/styles/_reset.scss';
import '@/styles/_base.scss';
import '@/styles/_buttons.scss';
import '@/styles/_layout.scss';
import Sidebar from './components/UI/Sidebar.vue';
import { mapState } from 'vuex';
import { useAuth0 } from '@auth0/auth0-spa-js'

export default {
  data(){
    return {
        isLoading: true,
        useAuth0
    }
  },
  components: {
    Sidebar,
  },
  computed: {
    ...mapState({
      authState: (state) => state.auth.isLoggedIn,
    }),
  },
  methods: {
    login() {
      if(this.$auth.isAuthenticated) {
        this.isLoading = false
        this.$router.push('dashboard');
      } else {
        this.isLoading = false
        this.$auth.loginWithRedirect()
    }
      this.isLoading = false
    }
  },
  mounted() {
    
    // if(this.$auth.isAuthenticated) {
    //   this.$router.push('dashboard');
    // } else {
    //   this.$auth.loginWithRedirect()
    // }
    setTimeout(() => {
      console.log('running', this.$auth)
      this.login()
    }, 2000)
  }
}

</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
