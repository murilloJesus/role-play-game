<template>
  <div class="wrapper">
    <!-- Sidebar  -->
    <menu-template></menu-template>

    <!-- Page Content  -->
    <div id="content">
      <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            id="sidebarCollapse"
            type="button"
            class="btn btn-info"
          >
            <i class="fas fa-align-left" />
            <span>Toggle Sidebar</span>
          </button>
          <button
            class="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-align-justify" />
          </button>

          <div
            id="navbarSupportedContent"
            class="collapse navbar-collapse"
          >
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item active">
                <a
                  class="nav-link"
                  href="#"
                >Page</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Page</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Page</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                >Page</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> -->

      <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-4 sm:pt-0">
        <div>
          <router-view />
        </div>
      </div>
    </div>
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