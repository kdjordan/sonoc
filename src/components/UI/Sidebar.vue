<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <Logo  class="sidebar__logo--logo" />
    </div>
    <ul class="sidebar__nav">
      <li>
        <router-link to="/dashboard" class="sidebar__nav-link">
          <i class="fas fa-tachometer-alt"></i>Quicklook
        </router-link>
      </li>
      <li>
        <router-link to="/finance" class="sidebar__nav-link">
         <i class="fas fa-university"></i></i>Finance
        </router-link>
      </li>
      <li>
        <router-link to="/usage" class="sidebar__nav-link">
        <i class="fas fa-chart-bar"></i>Usage
        </router-link>
      </li>
      <li>
        <router-link to="/revenue" class="sidebar__nav-link">
         <i class="fas fa-dollar-sign"></i>Revenue
        </router-link>
      </li>
      <li>
        <router-link to="/accounts" class="sidebar__nav-link">
          <i class="fas fa-users"></i>Accounts
        </router-link>
      </li>
      <li>
        <router-link to="/cdr" class="sidebar__nav-link">
         <i class="fas fa-file-download"></i>CDRs
        </router-link>
      </li>
      <li>
        <router-link to="/details" class="sidebar__nav-link">
          <i class="fas fa-info-circle"></i>Details
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from '@/assets/SVG/SonocLogoSVG';

export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/_sidebar.scss';
</style>
