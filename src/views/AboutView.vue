<template>
    <div class="author">
        <div class="author-animated-block">
            <img src="@/assets/author.png" alt="author"/>
        </div>
        <div class="author-name">
            <span>Victor</span>
            <span>Teslaru</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutView'
}
</script>

<style lang="scss" scoped>
.author {
    height: 100%;
}

.author-animated-block {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    
    img {
        width: auto;
    }
}

.author-name {
    position: absolute;
    left: 200px;
    bottom: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
        font-size: 86px;
    }
}
</style>