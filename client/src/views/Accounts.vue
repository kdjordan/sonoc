<template>
  <div class="accounts">
    <div class="card">
      <div class="card__title">YOUR CUSTOMER ACCOUNTS</div>
      <div v-if="isActive" class="modal card" :class="{active: isActive}">
          <h2 class="card__heading"><center>ADD NEW ACCOUNT</center></h2>
          <div class="form__group field">
            <input
              type="text"
              v-model="newAccount.number"
              class="form__field"
              id="number"
              name="name"
              placeholder="Account Number"
              required
            />
          </div>
          <div class="form__group field">
            <input
              type="text"
              v-model="newAccount.name"
              class="form__field"
              
              id="name"
              name="name"
              placeholder="Account Name"
              required
            />
          </div>
          <div class="form__group field">
            <input
              type="email"
              v-model="newAccount.email"
              class="form__field"
              name="email"
              id="email"
              placeholder="LOGIN EMAIL"
              required
            />
          </div>
          <div class="form__group field">
            <input
              type="password"
              v-model="newAccount.password"
              class="form__field"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <button class="modal__button" @click="submitNewAccount">SUBMIT</button>
          </div>
      </div>
      <table v-else class="accounts-table">
        <thead>
          <tr>
            <td class="card__heading">ACCOUNT NUMBER</td>
            <td class="card__heading">LOGIN EMAIL</td>
            <td class="card__heading">DATE ADDED</td>
            <td class="card__heading">ACTIVE</td>
            <td class="card__heading">PASSWORD</td>
            <td class="card__heading">ACTIONS</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="account in accounts" :key="account.number">
            <td>{{account.number}}</td>
            <td>{{account.email}}</td>
            <td>{{account.addedDate}}</td>
            <td :class="{accIsActive: !account.accIsActive}" class="accActiveTrue">{{account.accIsActive}}</td>
            <td>******</td>
            <td class="flex-row edit-cell">
              <i class="fas fa-pencil-alt" style="color: var(--blue)"></i>
              <i class="fas fa-save" style="color: var(--green)"></i>
              <i class="fas fa-minus-circle" style="color: red"></i>
            </td>
          </tr>
        </tbody>
        
      </table>
      <button v-if="!isActive" :class="{active: isActive}" class="card__title button__add" @click="toggleModal">+ Add new Account</button>
      <button v-else class="card__title button__add" @click="toggleModal">X Cancel</button>
    </div>
    
  </div>
</template>

<script>
import Sidebar from '@/components/UI/Sidebar';
import accounts from '@/static/accounts.js';
export default {
  data() {
    return {
      accounts : {},
      isActive : false,
      newAccount: {
        number: '',
        name: '',
        emaidl: '',
        password: ''
      }
    }
  },
  methods: {
    toggleModal() {
      this.isActive = !this.isActive
    },
    submitNewAccount() {

    }
  },
  components: {
    Sidebar,
  },
  async created() {
    this.accounts = accounts
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/_base.scss';
@import '../styles/_card.scss';
@import '../styles/_form.scss';
.flex-col {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: .5rem;
}

.accIsActive {
  color:red !important;
}

.accActiveTrue {
  text-transform: uppercase;
  color: green;
}

.modal {
  padding: 1rem;

  &__button {
    width : 100%;
    margin-top: .8rem;
    margin-left: auto;
    background: var(--blue);
    color: white;
  }
}

.field {
  margin-top: 1.5rem;
}

.active {
  position: relative;
  background-color: white;
  height: 100%;
  max-width: 30%;
  margin: 3rem auto;
}

.accounts {
  width: 90%;
  margin: 0 auto;
  margin-top: 5%;

&-table {
  font-family: inherit;
  width: 100%;
  margin: 0 auto;
  text-align: left;
  border-collapse: separate;
  border-spacing:10px;

   & td, thead {
    text-align: center;
    padding: .2rem 0;
  }
}
}
.button__add {
  cursor: pointer;
  font-size: 1.1rem;
  text-transform: uppercase;
  padding: 4px 5px;
  float: right;
  border: 2px solid var(--blue);
  transition: all .3s ease;

  &:hover {
    background-color: white;
    color: var(--blue);
  }
}

.edit-cell {
  justify-content: space-evenly;
}

i {
  cursor: pointer;
  transition: all .3s ease;

  &:hover {
    transform: scale(2);
  }
}

</style>
