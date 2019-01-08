<template>
  <div class="courses">
    <p>
      <strong>课程</strong>
    </p>
    <ul>
      <li v-for="(item, idx) in courses" :key="idx" type="none">
        <img :src="`http://127.0.0.1:8000${item.image}`">
        <router-link :to="{name: 'CourseDetail', params:{ id: item.id}}">{{ item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      _item: { // item 数据结构样式
        id: null,
        title: "",
        image: "",
        level: "",
        recommend_courses: [
          {
            id: null,
            re_course_title: ""
          }
        ],
        chapters: [
          {
            id: null,
            chapter_name: ""
          }
        ]
      }
    };
  },
  beforeCreate() {
    this.$store.dispatch("Init_Courses");
  },
  methods: {
    addcourse() {
      this.$store.dispatch("add_course", { id: 4, title: "Linux基础" });
      this.courses = [{ id: 7, title: "test" }];
    }
  },
  computed: {
    courses() {
      return this.$store.getters.all_course;
    }
  }
};
</script>

<style scoped>
li {
  float: left;
  margin: 0px 45px;
}
li > * {
  display: block;
}
</style>
