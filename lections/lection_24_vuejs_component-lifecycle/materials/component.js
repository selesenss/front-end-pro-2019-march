Vue.component('front-end', {
    // props: ['title', 'desc'],
    props: {
        title: {
            type: String,
            default: 'Default title'
        },
        desc: {
            type: String
        },
        flag: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            x: 50
        }
    },
    methods: {
        getX(){
            return this.x;
        }
    },
    beforeUpdate(){
        console.log(this.x)
    },
    template: `
        <div>
            <h2>{{title}}</h2>
            <h4 v-if="flag">{{desc}}</h4>
           <span v-if="getX() > 0">
               X: {{ getX() }}
           </span>
            <input v-model="x" type="number" />  
        </div>
    `
});

new Vue({
    el: '.app',
    data: {
        x: 10,
        title: 'Hello world!',
        checker: false
    },
    beforeUpdate(){
        console.log(this.checker)
    }
});
