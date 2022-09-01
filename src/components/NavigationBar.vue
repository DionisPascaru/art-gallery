<template>
    <el-menu 
        :default-active="activeMenuItem"
        background-color="transparent" 
        class="navigation-bar" 
        mode="horizontal"
        :router="true">
        <el-menu-item index="GalleryView" :route="{ name: 'GalleryView'}">
            <span>Gallery</span>
        </el-menu-item>
        <el-menu-item index="EventsView" :route="{ name: 'EventsView'}">
            <span>Events</span>
        </el-menu-item>
        <el-menu-item index="AboutView" :route="{ name: 'AboutView'}">
            <span>About</span>
        </el-menu-item>
        <el-menu-item index="CommingSoonView" :route="{ name: 'CommingSoonView'}">
            <span>Comming soon</span>
        </el-menu-item>
        <el-menu-item index="ContactView" :route="{ name: 'ContactView'}">
            <span>Contact</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: 'NavigationBar',
    computed: {
        activeMenuItem() {
            return this.$route.name;
        }
    }
}
</script>

<style lang="scss" scoped>
.navigation-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 100px;

    &.el-menu.el-menu--horizontal {
        border: none;
    }

    .el-menu-item {
        background-color: transparent !important;
        height: auto;
        line-height: normal;
        font-size: 1.563rem;
        font-weight: 600;

        &.is-active {
            border-color: transparent;
        }
    }
}
</style>