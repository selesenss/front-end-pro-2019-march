<template>
    <div class="block" :style="{width: width + 'px'}">
        {{title}} {{width}}
    </div>
</template>

<script>
export default {
    name: 'block',
    props: ['title', 'width']
}
</script>

<style>
    .block {
        width: 300px;
        height: 20px;
        background-color: aquamarine;
    }
</style>
