<template>
  <div class="layout">
    <Sidebar />
    <h2>CDRs</h2>
  </div>
</template>

<script>
import Sidebar from '@/components/UI/Sidebar';

export default {
    components : {
        Sidebar
    }
};
</script>

<style lang="scss" scoped>
@import '../styles/_layout.scss';

</style>
