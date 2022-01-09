<template>
  <div class="accounts">
    <div class="card">
      <div class="card__title">YOUR CUSTOMER ACCOUNTS</div>
      <div v-if="addNewAccountActive" class="modal card" :class="{active: addNewAccountActive}">
          <h2 class="card__heading"><center>ADD NEW ACCOUNT</center></h2>
          <div class="form__group field">
            <input
              type="text"
              v-model="newAccount.name"
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
      <div v-if="deleteAccountActive" class="modal__deleteAccount" :class="{active: deleteAccountActive}">
        <div>
          Are you sure you want to delete account {{deleteAccountNumber}} ?
          <br />
          <br />
        </div>
        <div class="modal__deleteAccount--btn-container">
          <button class="modal__deleteAccount--btn-container--remove" @click="confirmDelete()">DELETE</button>
          <button class="modal__deleteAccount--btn-container--cancel" @click="cancelDelete()">CANCEL</button>
        </div>
      </div>
      <table v-else class="accounts-table">
        <thead>
          <tr>
            <td class="card__heading">ACCOUNT NUMBER</td>
            <td class="card__heading">ACCOUNT NAME</td>
            <td class="card__heading">ACTIVE</td>
            <td class="card__heading">LOGIN EMAIL</td>
            <td class="card__heading">PASSWORD</td>
            <td class="card__heading">DATE ADDED</td>
            <td class="card__heading">ACTIONS</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="account in accounts" :key="account.number">
            <td>{{account.number}}</td>
            <td>{{account.name}}</td>
            <td v-if="editAccountActive && account.number == editAccount.number">
              <label class="switch">
                <input type="checkbox" @click="toggleAccountActive" :checked="editAccount.accIsActive" :disabled="!editAccountActive">
                <span class="slider round"></span>
              </label>
            </td>
            <td v-else>
              <label class="switch">
                <input type="checkbox" :checked="account.accIsActive" disabled>
                <span class="slider round"></span>
              </label>
            </td>
            <td v-if="editAccountActive && account.number == editAccount.number">
               <input
                type="email"
                v-model="editAccount.email"
                class="form__field"
                required
                />
            </td>
            <td v-else>{{account.email}}</td>
            <td v-if="editAccountActive && account.number == editAccount.number">
               <input
                type="text"
                v-model="editAccount.password"
                class="form__field"
                required
                />
            </td>
            <td v-else>******</td>
            <td>{{account.addedDate}}</td>
            <td class="flex-row edit-cell">
              <i class="fas fa-pencil-alt" style="color: var(--blue)" @click="editAcc(account.number)"></i>
              <i class="fas fa-save" style="color: var(--green)" @click="saveEditAcc(account.number)"></i>
              <!-- <i class="fas fa-minus-circle" style="color: red" @click="deleteAcc(account.number)"></i> -->
            </td>
          </tr>
        </tbody>
        
      </table>
      <!-- <button v-if="!addNewAccountActive" :class="{active: addNewAccountActive}" class="card__title button__add" @click="toggleModal">+ Add new Account</button>
      <button v-else class="card__title button__add" @click="toggleModal">X Cancel</button> -->
    </div>
    <!-- {{accounts}}<br /><br />
    {{editAccount}} -->
  </div>
</template>

<script>
import Sidebar from '@/components/UI/Sidebar';
import accounts from '@/static/accounts.js';
export default {
  data() {
    return {
      accounts : [],
      addNewAccountActive : false,
      editAccountActive: false,
      deleteAccountActive: false,
      deleteAccountNumber: null,
      newAccount: {
        number: null,
        name: '',
        email: '',
        password: '',
        addedDate: '',
        accIsActive: true
      },
      editAccount: {}
    }
  },
  methods: {
    toggleModal() {
      this.addNewAccountActive = !this.addNewAccountActive
    },
    submitNewAccount() {
      let date = new Date()
      this.newAccount.addedDate = `${date.getFullYear()} ${date.getMonth()+1} ${date.getDay()}`
      console.log(this.newAccount)
      this.accounts.push(this.newAccount)
      this.toggleModal()
    },
    editAcc(num) {
      this.editAccountActive = !this.editAccountActive
      let theAccount = accounts.filter((acc)=> {
        return acc.number === num
      })
      this.editAccount = theAccount[0]
    },
    saveEditAcc(num) {
      this.editAccountActive = false
      this.accounts = this.accounts.map((obj) => {
        if (obj.number === num) {
          return {...obj, email: this.editAccount.email, password: this.editAccount.email, accIsActive: this.editAccount.accIsActive};
        } 
          return obj
      })
      this.editAccount = {}
    },
    deleteAcc(num) {
      this.deleteAccountActive = !this.deleteAccountActive
      this.deleteAccountNumber = num
    },
    confirmDelete() {

    },
    cancelDelete() {
      this.deleteAccountActive = !this.deleteAccountActive
      this.deleteAccountNumber = null
    },
    toggleAccountActive() {
      this.editAccount.accIsActive = !this.editAccount.accIsActive
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
@import '../styles/_toggle.scss';

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

  &__deleteAccount {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    padding: 1rem;

    &--btn-container {
      display: flex;
      justify-content: space-between;
      width: 70%;
      padding: .2rem;

      & button {
        color: white;
        padding: .3rem .5rem;
        cursor: pointer;
      }

      &--remove {
        background-color: red;
      }

      &--cancel {
        background-color: var(--blue);
      }
    }

  }
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
