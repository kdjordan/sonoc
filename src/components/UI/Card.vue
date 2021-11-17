<template>
  <div class="card">
    <div class="card__header">
        {{cardTitle}}
    </div>
  </div>
</template>

<script>


export default {
    name : 'Card',
    props: ['cardTitle'],
  
};
</script>

<style lang="scss" scoped> 

.card {
    border: 1px solid red;
    .card__header {
        background-color: var(--blue);
        color: white;
        font-size: 1.2rem;
        text-align: center;
    }
}

</style>
