<template>
  <div v-if="!$auth.loading">
    <button @click="login" v-if="!$auth.isAuthenticated">
      Login
    </button>
    <button @click="loginPopup" v-if="!$auth.isAuthenticated">
      Login Popup
    </button>
    <button @click="logout" v-if="$auth.isAuthenticated">
  Logout
  </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  methods: { 
  login() { 
    this.$auth.loginWithRedirect(); 
  }, 
  loginPopup() { 
    this.$auth.loginWithPopup(); 
  }, 
  logout() { 
  this.$auth.logout(); 
  this.$router.push({ path: '/' }); 
}
}
}

</script>
