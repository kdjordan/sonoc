<template>
  <div class="wrapper">
      <div class="api">
        <h1>API Check</h1>
        <button @click="test(1)">Check Unprotected</button>
        <button @click="test(2)">Check Protected</button>
        <button @click="test(3)">Check Protected 2</button>
        <button @click="getToken">Get Token</button>
        <button @click="logout" v-if="$auth.isAuthenticated">Logout</button>
        <p>{{answer}}</p>
        <p>TOKEN :: {{token}}</p>
      </div>
  </div>
</template>

<script>
// http://development.sonoc.io:8080/portal-api/api/public
// http://development.sonoc.io:8080/portal-api/api/private (with token)
// http://development.sonoc.io:8080/portal-api/api/private-scoped (don't know how to handle these yet)
 const baseURI = '  '
 import axios from 'axios'
export default {
    data() {
        return {
            answer: 'Your API result will be here',
            token: null
        }   
    },
    methods: {
        async test(route) {
            console.log('clicked')
            try {
                switch(route) {
                    case 1:
                        this.answer = await axios.get('https://billing-portal-api.glotell.sonoc.io/v1/home', {
                            headers: {
                                'authorization' : `Bearer ${this.token}`
                            }
                        })
                        break
                    case 2:
                        console.log('going in ')
                        this.answer = await axios.get('http://development.sonoc.io:8080/portal-api/v1/home/account', {
                            headers: {
                                'authorization' : `Bearer ${this.token}`
                            }
                        })
                        console.log('answer', this.answer)
                        break
                    case 3:
                        this.answer = await axios.get('http://development.sonoc.io:8080/portal-api/v1/profile', {
                             headers: {
                                'authorization' : `Bearer ${this.token}`
                            }
                        })
                        break
                    default:
                        this.answer = 'Sorry something went wrong'
                }
            } catch(e) {
                this.answer = e
                console.log(e)
            }
            
        },
        logout() { 
            this.$auth.logout(); 
            this.$router.push({ path: '/' }); 
        },
        async getToken() {
         this.token = await this.$auth.getTokenSilently()
         console.log(this.token)
        }
    }

}
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 50%;
  margin: 0 auto;
}

.api {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 50rem;
}

button {
    margin: 1rem 0;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        filter: invert(75%);
    }
}

p {
    margin-top: 3rem;
}
</style>


