<template v-if="loggedIn">
  <div id="app" :class="{ layout: authState }">
    <Sidebar v-if="authState == true" />
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

export default {
  components: {
    Sidebar
  },
  computed: {
    ...mapState({
      authState: (state) => state.auth.isLoggedIn,
    })
  },
};
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
