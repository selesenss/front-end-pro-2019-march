<template>
    <div class="coins">
        <div class="coin" 
             v-for="coin in list" 
             :key="coin.amount"
             @click="onClick(coin)"
             :style="{'width': width+'px'}">
            <img :src="coin.img" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "Coins",
    props: {
        list: {
            type: Array,
            default: []
        },
        action: {
            type: Function,
            default: (item) => console.warn('no action', item)
        },
        width: {
            type: Number,
            default: 100
        }
    },
    methods: {
        onClick(item){
            const resolver = this.action(item);

            if (resolver.status == 'reject') {
                this.$set(item, 'isFull', true);
                return;
            }

            if (!item.sum) {
                this.$set(item, 'sum', item.amount);
            }  else {
                item.sum += item.amount;
            }
        }
    }
}
</script>

<style>
    .coins {
       min-height: 200px;
       width: 100%;
       background-color: coral;

       display: flex;
       flex-direction: row;
       justify-content: space-around;
       align-items: center;
    }
    .coin {
        cursor: pointer;
    }

    .coin img{
        width: 100%;
    }
</style>
