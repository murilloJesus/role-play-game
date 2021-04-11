<template>
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>Bootstrap Sidebar</h3>
      </div>

      <ul class="list-unstyled components">
        <p>Nome Player</p>
        <!-- <li class="active">
          <a
            href="#homeSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >Home</a>
          <ul
            id="homeSubmenu"
            class="collapse list-unstyled"
          >
            <li>
              <a href="#">Home 1</a>
            </li>
            <li>
              <a href="#">Home 2</a>
            </li>
            <li>
              <a href="#">Home 3</a>
            </li>
          </ul>
        </li> -->
        <li>
          <router-link to="/player">
            <a href="#">Player</a>
          </router-link>
        </li>
        <li>
          <router-link to="/skills">
            <a href="#">Habilidades</a>
          </router-link>
        </li>
        <!-- <li>
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >Pages</a>
          <ul
            id="pageSubmenu"
            class="collapse list-unstyled"
          >
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </li> -->
        <li>
          <a href="#">Pericias</a>
        </li>
        <li>
          <a href="#">Arsenal</a>
        </li>
      </ul>

      <ul class="list-unstyled CTAs" 
      style="   position: fixed;
                bottom: 0px;
                width: 250px;"
      >
        <li>
          <a
            href="https://bootstrapious.com/tutorial/files/sidebar.zip"
            class="download"
          >Download source</a>
        </li>
        <li>
          <a
            href="https://bootstrapious.com/p/bootstrap-sidebar"
            class="article"
          >Back to article</a>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>