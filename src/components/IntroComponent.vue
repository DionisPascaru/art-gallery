<template>
    <div class="intro-animation">
        <img src="@/assets/logo.png" alt="logo">
    </div>
</template>

<script>
export default {
    name: 'IntroComponent'
}
</script>

<style lang="scss" scoped>
.intro-animation {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        opacity: 0;
        animation: fadeOpacity 3s ease-out;
    }
}

@keyframes fadeOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
}
</style>