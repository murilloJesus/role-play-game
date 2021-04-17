<template>
  <div class="wrapper">
    <!-- Sidebar  -->
    <!-- <menu-template /> -->

    <!-- Page Content  -->
    <div id="content">
      <nav
        style="width: 720px; margin: auto;"
        class="navbar navbar-light bg-light"
      >
        <div class="container-fluid">
          <player-component />
          <div
            id="navbarSupportedContent"
            class="collapse navbar-collapse"
          >
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item active">
                <atribute-group-component />
              </li>
            </ul>
          </div>
          <p>
            <button
              class="btn btn-dark d-inline-block ml-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              style="position: absolute; top: 20px;right: 20px;"
            >
              <svg
                class="svg-inline--fa fa-align-justify fa-w-14"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="align-justify"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              ><path
                fill="currentColor"
                d="M0 84V44c0-8.837 7.163-16 16-16h416c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16zm16 144h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 256h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0-128h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              /></svg><!-- <i class="fas fa-align-justify"></i> -->
            </button>
          </p>
        </div>
      </nav>
      <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 py-4 sm:pt-0">
        <div>
          <skill-group-component />
          <!-- <router-view /> -->
        </div>
      </div>
    </div>
   <dice-history-component />
    <div
      id="canvas"
      style="position: absolute"
    />
  </div>
</template>

<script>
import MenuTemplate from './MenuTemplate.vue'
import SkillGroupComponent from './Skill/SkillGroupComponent.vue'
import PlayerComponent from './Player/PlayerComponent.vue'
import DiceHistoryComponent from './DiceHistoryComponent.vue'
import { onMounted } from 'vue'
import AtributeGroupComponent from './Player/AtributeGroupComponent.vue'
export default {
  components: {
    MenuTemplate,
    SkillGroupComponent,
    PlayerComponent,
    AtributeGroupComponent,
    DiceHistoryComponent
  },
  setup(){

    onMounted(() => {

    })
  }
}
</script>

<style>

</style>