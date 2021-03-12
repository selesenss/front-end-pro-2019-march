<template>
    <div>
        <button @click="onClick">Click me B</button>
    </div>
</template>

<script>
export default {
    name: 'componentB',
    data(){
        return {
            step: 4
        }
    },
    props: {
        handler: {
            type: Function,
            default: () => {}
        }
    },
    methods: {
        onClick(){
            this.handler(this.step);
        }
    }
}
</script>

<style>

</style>
