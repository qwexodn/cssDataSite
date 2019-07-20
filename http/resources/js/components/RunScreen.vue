<template>
    <div v-if='show' class='screen' @click='$emit("screenClose")'>
        <iframe name='cssFrame' src="" frameborder="0"></iframe>
    </div>
</template>
<script>
export default {
    props:['show','html'],
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
@import '../../sass/common';

.screen{
    position:fixed;
    left:0px;
    top:0px;
    width:100vw;
    height:100vh;
    background-color: rgba($color:black, $alpha:0.3);
    display:flex;
    justify-content: center;
    align-items: center;

    // .css-show{
    //     width:100px;
    //     height:100px;
    //     background: black;
    // }
}    
</style>
