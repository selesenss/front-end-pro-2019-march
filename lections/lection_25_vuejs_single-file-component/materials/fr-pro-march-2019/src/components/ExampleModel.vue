<template>
    <div>
        <hr>
        <!-- <input type="text" @input="title=$event.target.value" :value="title"> -->
        <input type="text" @input="onChange" :value="title">
        <input type="text" v-model="title">
        title: {{title}}
    </div>
</template>

<script>
export default {
    name: 'example',
    data(){
        return {
            title: 'Defa'
        }
    },
    methods: {
        onChange(ev){
            this.title = ev.target.value;
            // console.log(ev)
            if(!isNaN(+ev.data)){
                var val = this.title.split('')
                val.pop();
                this.title = val.join('');
            }
        }
    }
}
</script>

<style>

</style>
