<template>
    <div class="gallery container">
        <div class="gallery-portrait" v-for="file in data" :key="file.id">
            <img :src="getImgUrl(file.fileName)" alt="" :class="{fullWidth: file.orientation}">
            <div class="portrait-info">
                <span>{{ file.name }}</span>
                <span>{{ file.size }}</span>
                <span>{{ file.year }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { data } from './../../data/gallery.json'

export default {
    name: "GalleryComponent",
    data() {
        return {
            data: data
        }
    },
    methods: {
        getImgUrl(fileName) {
            return require(`@/assets/gallery/${fileName}`);
        },
    }
}
</script>

<style lang="scss" scoped>
.gallery {
    margin-top: 50px;
    

    .gallery-portrait {
        width: fit-content;
        margin: auto;
        padding: 30px;
        max-width: 500px;
        
        img {
            width: 100%;
        }
    }
}

.fullWidth {
    max-width: 700px;
    width: 100%!important;
    height: auto!important;
}

.portrait-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
        color: #fff;
        font-weight: 100;

        &:nth-child(1) {
            font-weight: 400;
        }
    }
}


@media only screen and (min-width: 768px) {
    .gallery {
        margin-top: 100px;

        .gallery-portrait {
            padding: 100px;

            img {
                width: 100%;
            }
        }
    }
}
</style>