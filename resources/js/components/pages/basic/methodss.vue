<template>

    <div>
        <h1>Methods Vue</h1>

        <br>

        <h1>Number is {{counter}}</h1>

        <button class="btn btn-danger" @click="updateCounter(1)">Plus number</button>
        <br>
        <button @click="updateCounter(-1)">Minus number</button>

        <br>
        <br>

        <div v-for="(blog, i) in blogs" :key="i" v-if="blogs.length">
            <span>{{i}}</span>
            <h2>{{blog.title}}</h2>
            <p>{{blog.body}}</p>
        </div>

        <br>
        <br>


        <div>
            <h1 v-if="showItem">Show Item {{showItem}}</h1>
            <h1 v-else>Show Item {{showItem}}</h1>
        </div>

        <button @click="showView">Click view item</button>

    </div>

</template>

<script>
export default {
data(){
    return{
        counter:0,
        blogs:[],
        showItem:false,
    }
},

    methods: {
        updateCounter(number){
             this.counter += number
        },

        showView(){
            this.showItem = !this.showItem
        }
    },

    created(){
    this.counter =100
    let posts =[
            {
                id:1,
                title:'This is blog title 1',
                'body':'this is blog body 1'
            },
            {
                id:2,
                title:'This is blog title 1',
                'body':'this is blog body 1'
            },
            {
                id:3,
                title:'This is blog title 1',
                'body':'this is blog body 1'
            },
            {
                id:4,
                title:'This is blog title 1',
                'body':'this is blog body 1'
            },
            {
                id:5,
                title:'This is blog title 1',
                'body':'this is blog body 1'
            }
        ]

        this.blogs = posts
    }
}
</script>

<style scoped>

</style>
