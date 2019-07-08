<template>
    <div>
        <button @click="onClick">Click me A</button>
    </div>
</template>

<script>
export default {
    name: 'componentA',
    data(){
        return {
            step: 2
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
