<template>
    <div class='content'>
        <div class='contain'>
            <ul class='btn-group'>
                <li class='html-btn' :class='{"show-on":editor === "html"}' @click="editor = 'html'">html</li>
                <li class='css-btn' :class='{"show-on":editor === "css"}' @click="editor = 'css'">css</li>
                <li class='js-btn' :class='{"show-on":editor === "js"}' @click="editor = 'js'">js</li>
            </ul>
            <button class='running-btn' @click="running()">Run</button>
            <div class='editor-group'>
                <textarea v-if='editor === "html"' v-model='htmlBody' spellcheck="false"></textarea>
                <textarea v-if='editor === "css"' v-model='cssBody' spellcheck="false"></textarea>
                <textarea v-if='editor === "js"' v-model='jsBody' spellcheck="false"></textarea>
            </div>
        </div>
        <RunScreenComponent :show='show' :html='screenHTML' @screenClose='show = false' ></RunScreenComponent>
    </div>
</template>

<script>
import RunScreenComponent from './RunScreen'

export default {
    components:{
        RunScreenComponent,
    },
    data(){
        return{
            htmlBody:null,
            cssBody:null,
            jsBody:null,
            editor:'html',
            show:false,
            screenHTML:null,
        }
    },
    methods:{
        running(){
            // this.show = true;
            // this.screenHTML = `
            //     <!DOCTYPE html>
            //     <html>
            //         <body>
            //             <style>
            //                 .css-show > * {
            //                     ${this.cssBody}
            //                 }
            //             </style>
            //             ${this.htmlBody}
            //         </body>
            //     </html>
            // `;
        console.log(document.styleSheets);
        }
    }
}
</script>


<style lang="scss" scoped>
@import '../../sass/common';

.content{
    padding-top:50px;
    font-size:15px;
    font-family:sans-serif;
    text-align:center;

    > .contain{
        display:inline-block;

        .editor-group{

            textarea{
                width:500px;
                height:500px;
                resize:none;
                font-size:16px;
                color:rgba($color:white, $alpha:0.7);
                overflow-y: scroll;
                outline:none;
            }
        }

        .btn-group{
            display: inline-block;
            margin-bottom:5px;

            li{
                display:inline-block;
                text-transform: uppercase;
                cursor:pointer;
                padding:10px 0px;
                width:120px;
                text-align:center;
                background-color:$darkBackground;
                margin-right:-6px;
                border:1px solid black;
                border-right:none;
                color:rgba($color:white, $alpha:0.5);
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
                color:#e6faff;
            }
            
        }

        .running-btn{
            padding: 10px 0;
            width:100px;
            background-color:$darkBackground;
            cursor:pointer;
            border:1px solid black;
            border-radius:0.5em;
            margin-left:45px;
            color:rgba($color:white, $alpha:0.7);
            font-weight:700;
            vertical-align: middle;
            outline:none;
            margin-bottom:1px;
        }
        .running-btn:hover{
            color:rgba($color:white, $alpha:0.5);
            background-color:rgba($color:#000000, $alpha:0.6);
        }
        .running-btn:active{
            transform:scale(0.98);
        }

    }

}
</style>
