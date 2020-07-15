<template>
    <div class="back-bar">
        <span class="back" @click="$router.go(-1)">
            <span class="iconfont icon-jiantou2 icon"></span>
        </span>
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: 'backbar',
    props: {
        title: String
    },
    data() {
        return {};
    }
}
</script>

<style lang="scss">
.back-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    overflow: hidden; // width: 100%;
    color: #fff;
    background-color: #b83320;
    z-index: 1;

    .back {
        position: absolute;
        top: 8px;
        left: 5px;
        text-align: center;
        .icon {
            width: 24px;
            height: 24px;
        }
    }

    h2 {
        width: 70%;
        margin: 0 auto;
        line-height: 40px;
        text-align: center;
    }
}
</style>


