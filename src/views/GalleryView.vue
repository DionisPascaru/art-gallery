<template>
    <div>
        <!-- <gallery-animation-component></gallery-animation-component> -->
        <gallery-component></gallery-component>
    </div>
</template>

<script>
// import GalleryAnimationComponent from '../components/gallery/GalleryAnimationComponent.vue';
import GalleryComponent from '../components/gallery/GalleryComponent.vue';

export default {
    name: 'GalleryView',
    components: {
        // GalleryAnimationComponent
        GalleryComponent
    }
}
</script>