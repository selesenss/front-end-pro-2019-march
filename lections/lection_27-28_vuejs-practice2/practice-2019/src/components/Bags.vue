<template>
    <div class="bags">
        <div 
            class="bag" 
            v-for="bag in list" 
            :key="bag.amount" 
            :class="{'full': bag.isFull}"
            :style="{'width': width+'px', height: bag.sum+'px'}">
            {{getBagSum(bag)}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'bags',
    props: {
        list: {
            type: Array,
            default: []
        },
        width: {
            type: Number,
            default: 100
        }
    },
    methods: {
        getBagSum(bag) {
            return bag.sum || '';
        }
    },
}
</script>

<style>
    .bags {
       height: 100px;
       width: 100%;

       display: flex;
       flex-direction: row;
       justify-content: space-around;
       align-items: flex-end;
    }
    .bag {
        background-color: aquamarine;
        height: 0px;
    }
     .bag.full {
        background-color: brown;
    }
</style>
