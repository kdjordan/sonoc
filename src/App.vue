  <template v-if="loggedIn">
  <div id="app" class="layout">
    <Sidebar />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      <!-- <transition name="fade" mode="out-in">
         <div v-if="getModalState">
        <Modal />
      </div>
      </transition> -->
  </div>
</template>

<script>
import '@/styles/_reset.scss';
import '@/styles/_base.scss';
import '@/styles/_buttons.scss';
import '@/styles/_layout.scss';
import Sidebar from './components/UI/Sidebar.vue';
import Modal from './components/UI/Modal2.vue';

export default {
  components: {
    Sidebar,
    Modal
  },
  data() {
    return {
      getModalState: true,
    };
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
