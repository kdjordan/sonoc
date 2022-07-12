<template>
<div class="wrapper">
  <div v-if="!$auth.loading" class="login">
    <Logo class="login__logo" />
    <h3>SONOC PORTAL LOGIN</h3>
    <button @click="login" v-if="!$auth.isAuthenticated">
      Login
    </button>
    <!-- <button @click="loginPopup" v-if="!$auth.isAuthenticated">
      Login Popup
    </button> -->
    <button @click="logout" v-if="$auth.isAuthenticated">
  Logout
  </button>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/assets/SVG/SonocLogoSVG';

export default {
  components: {
    Logo,
  },
  methods: { 
  login() { 
    this.$auth.loginWithRedirect(); 
    this.$router.push({ path: '/dashboard' }); 
  }, 
  logout() { 
    this.$auth.logout(); 
    this.$router.push({ path: '/' }); 
  }
  },
  // updated() {
  //   console.log('auth is ', this.$auth.isAuthenticated)
  //   if(this.$auth.isAuthenticated) {
  //     this.$router.push({path: '/APICheck'})
  //   }
  // },
  created() {
    // console.log('running auth')
    // setInterval(()=>{
    //   this.$auth.loginWithRedirect()
    // },5000)
    // window.location.href="https://portal-glotell.us.auth0.com/authorize?response_type=code|token&client_id=dcL7bEsmau6UhQCrXeu7O3i3XzTydArp&connection=CONNECTION&redirect_uri=http://localhost:8080/APICheck&state=STATE"
    // window.location.href = "https://google.com/contact";
  }

  
}

</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login {
  width: 80%;
  margin: 0 auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  &__logo {
    width: 10rem;
    height: auto;
  }
}
.wrapper {
  max-width: 50%;
  margin: 0 auto;
  min-height: 100vh;
  // display: flex;
  // justify-content: center;
  
}


</style>
