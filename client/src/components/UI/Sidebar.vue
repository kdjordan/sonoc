<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <router-link to="/" class="sidebar__nav-link" @click.native="logout">
        <Logo class="sidebar__logo--logo" />
      </router-link>

      <div class="sidebar__logo--title">
        SONOC CUSTOMER PORTAL
      </div>
    </div>
    <ul class="sidebar__nav">
      <li>
        <router-link to="/dashboard" class="sidebar__nav-link">
          <i class="fas fa-tachometer-alt"></i>QUICKLOOK
        </router-link>
      </li>
      <li>
        <router-link to="/addfunds" class="sidebar__nav-link">
          <i class="fas fa-university"></i>ADD FUNDS
        </router-link>
      </li>
      <li>
        <router-link to="/usage" class="sidebar__nav-link">
          <i class="fas fa-chart-bar"></i>USAGE
        </router-link>
      </li>
      <li>
        <router-link to="/revenue" class="sidebar__nav-link">
          <i class="fas fa-dollar-sign"></i>REVENUE
        </router-link>
      </li>
      <li v-if="accountType == 1">
        <router-link to="/accounts" class="sidebar__nav-link">
          <i class="fas fa-users"></i>ACCOUNTS
        </router-link>
      </li>
      <li>
        <router-link to="/cdr" class="sidebar__nav-link">
          <i class="fas fa-file-download"></i>CDRS
        </router-link>
      </li>
      <!-- <li>
        <router-link to="/details" class="sidebar__nav-link">
          <i class="fas fa-info-circle"></i>DETAILS
        </router-link>
      </li> -->
    </ul>
  </div>
</template>

<script>
import Logo from '@/assets/SVG/SonocLogoSVG';
import { mapState } from 'vuex';

export default {
  components: {
    Logo,
  },
  computed: {
    ...mapState({
      accountType: (state) => state.auth.accountType
    })
  },
  methods: {
    async logout() {
      await this.$store.commit('auth/fullLogOut')
      // this.$router.push('/')

    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/_sidebar.scss';
@import '../../styles/_card.scss';
</style>
