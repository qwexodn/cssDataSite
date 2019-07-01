<template>
    <div class='content'>
        <ul class='btn-group'>
            <li class='html-btn' :class='{"show-on":show === "html"}' @click="show = 'html'">html</li>
            <li class='css-btn' :class='{"show-on":show === "css"}' @click="show = 'css'">css</li>
            <li class='js-btn' :class='{"show-on":show === "js"}' @click="show = 'js'">js</li>
        </ul>
        <textarea v-if='show === "html"' v-model='htmlBody'></textarea>
        <textarea v-if='show === "css"' v-model='cssBody'></textarea>
        <textarea v-if='show === "js"' v-model='jsBody'></textarea>
    </div>
</template>

<script>
export default {
    data(){
        return{
            htmlBody:null,
            cssBody:null,
            jsBody:null,
            show:'html',
        }
    },
    methods:{
        
    }
}
</script>


<style lang="scss" scoped>
@import '../../sass/_variables';

.content{
    position:absolute;
    left:50%;
    transform: translateX(-50%);
    margin:10px;

    textarea{
        width:500px;
        height:500px;
    }

    .btn-group{

        li{
            display:inline-block;
            text-transform: uppercase;
            cursor:pointer;
            padding:10px 0px;
            width:120px;
            text-align:center;
            background-color:rgba($color:#000000, $alpha:0.7);
            margin-right:-6px;
            border:1px solid black;
            border-right:none;
            color:rgba($color:white, $alpha:0.7);
            font-weight:700;
        }
        li:first-child{
            border-radius: 0.5em 0 0 0.5em;
        }
        li:last-child{
            border-radius: 0 0.5em 0.5em 0;
            border-right:1px solid black;
        }
        li:hover{
            color:rgba($color:white, $alpha:0.5);
            background-color:rgba($color:#000000, $alpha:0.6);
        }

        .show-on{
            color:$headerBackground;
        }
    }


}
</style>
