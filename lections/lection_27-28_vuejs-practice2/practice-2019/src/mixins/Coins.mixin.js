import Coin from '@/services/CoinSchema'

export default {
    data: function() {
        return {
            listOfCoins: [
                new Coin('C1', 1, 'https://dema.com.ua/image/159_1.png'),
                new Coin('C2', 5, 'https://dema.com.ua/image/035_1.png'),
                new Coin('C3', 25, 'https://dema.com.ua/image/051_1.png')
            ]
        }
    }
}