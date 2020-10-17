<template>
    <div>
        <h1 ref="myref">Hooks Template </h1>
        <h3>My name is {{name}}</h3>
    </div>
</template>


<script>
export default {
    data(){
        return{
            name: "SHAHi"
        }
    },

    beforeCreated(){
        console.log('beforeCreated ', this.name)
    },

    created() {
        console.log('Hello ', this.name)
    },

    mounted(){
        console.log(this.$refs.myref)
    }
}
</script>
