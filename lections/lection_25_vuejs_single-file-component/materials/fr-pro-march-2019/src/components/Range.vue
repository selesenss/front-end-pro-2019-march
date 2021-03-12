<template>
    <div class="range">
        <input @input="onChange" v-model="innerValue" type="range" min="0" max="1000">
        Range: {{innerValue}}
    </div>
</template>

<script>
export default {
    name: 'range',
    props: ['rangeValue'],
    data(){
        return {
            innerValue: this.rangeValue
        }
    },
    methods: {
        onChange(ev){
            // console.log(this.rangeValue)
            this.$emit('custom', this.innerValue);
        }
    }
}
</script>

<style>
    .range {
        font-size: 28px;
    }
</style>
