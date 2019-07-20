<template>
    <div class='content'>
        <div class='logo'><a href='/'>CSSDATA</a></div>
        <div class='page'>Page</div>
        <div class='mobile-menu'></div>
        <div class='body-background'></div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import '../../sass/common';

.content{
    width:100%;
    height:50px;
    position: relative;
    box-shadow: 0 0.1px 3px 0.3px rgba($color: #000000, $alpha: 0.2); 
    font-family: sans-serif;
    background-color:$headerBackground;

    div{
        display: inline-block;
        position:absolute;
        top:50%;
        transform: translateY(-50%);
        color:$headerTextColor;
        padding:10px;

        a{
            text-decoration: none;
            color:$headerTextColor;
        }
    }
    .logo{
        left:15px;
        cursor:pointer;
        font-weight:900;
    }
    .page{
        left:50%;
        transform: translate(-50%, -50%);
    }
    .mobile-menu{
        right:15px;
        cursor:pointer;
    }
    .body-background{
        background-color:rgba($color:#000000, $alpha:0.7);
        width:100%;
        height:100vh;
        position:fixed;
        left:0px;
        z-index:-999;
    }
}
</style>
