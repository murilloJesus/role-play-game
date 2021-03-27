<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12s">
        <atribute-group-component />
      </div>
    </div>
  </div>
</template>

<script>
import AtributeGroupComponent from './AtributeGroupComponent'


    export default 
    {
      components:{
        AtributeGroupComponent
      },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
