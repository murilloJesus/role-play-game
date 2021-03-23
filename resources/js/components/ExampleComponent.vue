<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            Example Component
          </div>

          <div class="card-body">
            I'm an example component.
          </div>
          <new-component />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewComponent from "./NewComponent.vue"

    export default 
    {
        components: { NewComponent },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
