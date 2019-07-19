<template>
    <div>
        name - {{getName}}


        <!-- <button @click="goTo()">Go back</button>   -->
        
        <router-link :to="{name: 'home'}">
            <button>
                Go back
            </button>  
        </router-link>
       
    </div>
</template>

<script>
export default {
    methods: {
        goTo(){
            // this.$router.push('/');
            // this.$router.push({
            //     path: '/'
            // });
            // this.$router.push({
            //     name: 'home'
            // });
            // this.$router.push({
            //     name: 'nameRoute',
            //     params: {
            //         id: 'alena'
            //     }
            // });
        }
    },
    computed: {
        getName(){
            return this.$route.params.id;
        }
    },
    created(){
        console.log(this.$route);
    }
}
</script>

<style>

</style>
