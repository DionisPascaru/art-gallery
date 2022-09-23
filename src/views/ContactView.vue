<template>
    <div class="contact">
        <span>victorteslaruart@gmail.com</span>
        <a href="https://instagram.com/victor.teslaru?igshid=MTA0ZTI1NzA=">
            <img src="@/assets/instagram.png" alt="instagram">
        </a>
    </div>
</template>

<script>
export default {
    name: 'ContactView'
}
</script>

<style lang="scss" scoped>
.contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;

    span {
        color: #fff;
        font-size: 24px;
        font-weight: 100;
        margin-bottom: 30px;
    }
}
</style>