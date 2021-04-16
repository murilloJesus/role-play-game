<template>
  <div class="wrapper">
    <!-- Sidebar  -->
    <menu-template />

    <!-- Page Content  -->
    <div id="content">
      <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-4 sm:pt-0">
        <div>
          <router-view />
        </div>
      </div>
    </div>
    <div id="dices_roll" style="">Dicces ROll</div>
    <div
      id="canvas"
      style="position: absolute"
    />
  </div>
</template>

<script>
import MenuTemplate from './MenuTemplate.vue'
export default {
  components: {
    MenuTemplate
  }
}
</script>

<style>

</style>