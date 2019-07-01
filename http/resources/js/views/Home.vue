<template>
    <div>
        <HeaderComponent></HeaderComponent>
        <div class='body'>
            <CssEditorComponent></CssEditorComponent>
        </div>
    </div>
</template>
<script>
import HeaderComponent from '../components/Header'
import CssEditorComponent from '../components/CssEditor'

export default {
    components:{
        HeaderComponent,
        CssEditorComponent,
    }
}
</script>
