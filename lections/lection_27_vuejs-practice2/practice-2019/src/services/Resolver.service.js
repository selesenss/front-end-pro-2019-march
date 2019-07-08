const MAX_BAG_AMOUNT = 100;

export default {
    isBugFull(coin){
        return {
            status: coin.sum + coin.amount > MAX_BAG_AMOUNT ? 'reject' : 'resolve'
        }
    }
}