<template>
    <div class="gallery">
        <div class="gallery-frame" v-for="(frame, index) in data" :key="index" :class="{active: isActive(index)}">
            <img :src="getImgUrl(frame.frameName)" alt="">
        </div>
    </div>
</template>

<script>
import {lilith} from '@/data/animations.json';

export default {
    name: 'GalleryAnimationComponent',
    data() {
        return {
            data: lilith,
            count: 0,
            scrollDirection: ''
        }
    },
    mounted() {
        document.addEventListener('wheel', (e) => {
            this.animation(e.deltaY);
        });
    },
    methods: {
        getImgUrl(fileName) {
            return require(`@/assets/animations/${fileName}`);
        },
        isActive(index){
            return this.count == index; 
        },
        animation(deltaY){
            if(deltaY >= 0) {
                this.scrollDirection = 'rigth';
                this.scrollSteps = this.count + 10;
                
                if(this.count < this.data.length){
                    this.speedIncrease();
                } else {
                    this.count = this.data.length;
                }
            }

            if(deltaY < 0) {
                this.scrollDirection = 'left';
                this.scrollSteps = this.count - 10;
                if(this.count > 0){
                    this.speedIncrease();
                } else {
                    this.count = 0;
                }                
            }
        },
        speedIncrease() {
            if(this.scrollDirection == 'rigth') {
                if (this.count < this.scrollSteps && this.count < this.data.length - 1) {
                    this.count++;
                    setTimeout(this.speedIncrease, 50);
                } else {
                    this.scrollSteps = this.count;
                } 
            } else {
                if (this.count > this.scrollSteps && this.count > 0) {
                    this.count--;
                    setTimeout(this.speedIncrease, 50);
                } else {
                    this.scrollSteps = this.count;
                }
            }     
        },    
    }
}
</script>

<style lang="scss" scoped>
.gallery {
    position: relative;
    width: 100%;
    height: 100vh;
}

.gallery-frame {
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;

    img {
        width: auto;
        height: 100vh;
    }

    &.active {
        display: flex;
    }
}

@media only screen and (min-width: 992px) {
    .gallery-frame {

        img {
            width: 100%;
            height: auto;
        }
    }
}
</style>