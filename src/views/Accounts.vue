<template>
  <div class="accounts">
    <div class="card">
      <div class="card__title">YOUR CUSTOMER ACCOUNTS</div>
      <table class="accounts-table">
        <thead>
          <tr>
            <td class="card__heading">ACCOUNT NAME</td>
            <td class="card__heading">EMAIL</td>
            <td class="card__heading">ADDED DATE</td>
            <td class="card__heading">LOGIN</td>
            <td class="card__heading">PASSWORD</td>
            <td class="card__heading">ACTIONS</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>XYZ Telecom</td>
            <td>voip@gmail.com</td>
            <td>2021/2/25</td>
            <td>voip@gmail.com</td>
            <td>********</td>
            <td class="flex-row edit-cell">
              <i class="fas fa-pencil-alt" style="color: var(--blue)"></i>
              <i class="fas fa-save" style="color: var(--green)"></i>
              <i class="fas fa-minus-circle" style="color: red"></i>
            </td>
          </tr>
          <tr>
            <td>XYZ Telecom</td>
            <td>voip@gmail.com</td>
            <td>2021/2/25</td>
            <td>voip@gmail.com</td>
            <td>********</td>
            <td class="flex-row edit-cell">
              <i class="fas fa-pencil-alt" style="color: var(--blue)"></i>
              <i class="fas fa-save" style="color: var(--green)"></i>
              <i class="fas fa-minus-circle" style="color: red"></i>
            </td>
          </tr>
          <tr>
            <td>XYZ Telecom</td>
            <td>voip@gmail.com</td>
            <td>2021/2/25</td>
            <td>voip@gmail.com</td>
            <td>********</td>
            <td class="flex-row edit-cell">
              <i class="fas fa-pencil-alt" style="color: var(--blue)"></i>
              <i class="fas fa-save" style="color: var(--green)"></i>
              <i class="fas fa-minus-circle" style="color: red"></i>
            </td>
          </tr>
          <tr>
            <td>XYZ Telecom</td>
            <td>voip@gmail.com</td>
            <td>2021/2/25</td>
            <td>voip@gmail.com</td>
            <td>********</td>
            <td class="flex-row edit-cell">
              <i class="fas fa-pencil-alt" style="color: var(--blue)"></i>
              <i class="fas fa-save" style="color: var(--green)"></i>
              <i class="fas fa-minus-circle" style="color: red"></i>
            </td>
          </tr>
          <tr>
            <td>XYZ Telecom</td>
            <td>voip@gmail.com</td>
            <td>2021/2/25</td>
            <td>voip@gmail.com</td>
            <td>********</td>
            <td class="flex-row edit-cell">
              <i class="fas fa-pencil-alt" style="color: var(--blue)"></i>
              <i class="fas fa-save" style="color: var(--green)"></i>
              <i class="fas fa-minus-circle" style="color: red"></i>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="card__title button__add">+ Add new Account</button>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/UI/Sidebar';

export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_card.scss';

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
