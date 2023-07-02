<template>
    <div>
        <!-- Desktop menu -->
        <el-menu
            v-if="!isMobile" 
            :default-active="activeMenuItem"
            background-color="transparent" 
            class="navigation-bar" 
            mode="horizontal"
            :router="true">
            <el-menu-item index="GalleryView" :route="{ name: 'GalleryView'}">
                <span>Gallery</span>
            </el-menu-item>
            <el-menu-item v-if="false" index="EventsView" :route="{ name: 'EventsView'}">
                <span>Events</span>
            </el-menu-item>
            <el-menu-item index="AboutView" :route="{ name: 'AboutView'}">
                <span>About</span>
            </el-menu-item>
            <el-menu-item v-if="false" index="CommingSoonView" :route="{ name: 'CommingSoonView'}">
                <span>Comming soon</span>
            </el-menu-item>
            <el-menu-item index="ContactView" :route="{ name: 'ContactView'}">
                <span>Contact</span>
            </el-menu-item>
        </el-menu>

        <!-- Mobile menu -->
        <div v-if="isMobile">
            <div class="hamburger-lines" 
                :class="{active: this.isActive}"
                @click="this.collabseMenu">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </div>
            <el-menu
                :default-active="activeMenuItem"
                :class="{active: this.isActive}"
                class="navigation-bar navigation-bar-mobile" 
                mode="horizontal"
                :router="true">
                <el-menu-item index="GalleryView" :route="{ name: 'GalleryView'}" @click="this.collabseMenu">
                    <span>Gallery</span>
                </el-menu-item>
                <el-menu-item index="EventsView" v-if="false" :route="{ name: 'EventsView'}" @click="this.collabseMenu">
                    <span>Events</span>
                </el-menu-item>
                <el-menu-item index="AboutView" :route="{ name: 'AboutView'}" @click="this.collabseMenu">
                    <span>About</span>
                </el-menu-item>
                <el-menu-item index="CommingSoonView" v-if="false" :route="{ name: 'CommingSoonView'}" @click="this.collabseMenu">
                    <span>Comming soon</span>
                </el-menu-item>
                <el-menu-item index="ContactView" :route="{ name: 'ContactView'}" @click="this.collabseMenu">
                    <span>Contact</span>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavigationBar',
    data() {
        return {
            isActive: false,
            windowWidth: window.innerWidth,
        }
    },
    computed: {
        activeMenuItem() {
            return this.$route.name;
        },
        isMobile() {
            return this.windowWidth < 768;
        }
    },
    mounted() {
        window.addEventListener("resize", () => {
            this.windowWidth = window.innerWidth;
        });
    },
    methods: {
        collabseMenu() {
            this.isActive = !this.isActive;
        },
    }
}
</script>

<style lang="scss" scoped>
.navigation-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  min-height: 100px;
  margin-left: auto;
  margin-right: auto;

  &.el-menu.el-menu--horizontal {
    border: none;
  }

  .el-menu-item {
    background-color: transparent !important;
    height: auto;
    line-height: normal;
    font-size: 1.563rem;
    font-weight: 400;
    border: none;

    &:focus span,
    &.is-active {
      color: #303133;
      border: none;
    }
  }
}

.navigation-bar-mobile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 0;
  background-color: #000;
  transition: 1s;
  min-height: unset;

  .el-menu-item {
    font-size: 0;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  &.active {
    height: 100vh;

    .el-menu-item {
      font-size: 1.563rem;
      margin: 15px 0;
      opacity: 1;
    }
  }
}
</style>