<template>
    <div class='courses'>
        <p>课程</p>
        <ul>
            <li v-for='(item, idx) in courses' :key="idx">{{ item.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    beforeCreate(){
        this.$store.dispatch('Init_Courses');
    },
    methods:{
        addcourse(){
            this.$store.dispatch('add_course', {id: 4, title: 'Linux基础'})
            this.courses = [{id:7, title:'test'}]
        }
    },
    computed:{
        courses(){
            return this.$store.getters.all_course
        }
    }
}
</script>

<style scoped>

</style>
