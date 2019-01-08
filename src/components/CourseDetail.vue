<template>
  <div>
    <h3>{{ course_detail.title }}</h3>
    <p>课程ID:{{ course_detail.id}}</p>
    <a v-bind:src="course_detail.image"></a>
    <div>
      <ul>
        <li v-for="(course, idx) in course_detail.recommend_courses" v-bind:key="idx" type="none">
          <span @click="goCourseDetail(course.id)">{{course.re_course_title}}</span>
          <!-- <router-link
            :to="{name:'CourseDetail', params:{id: course.id}}"
          >{{ course.re_course_title}}</router-link>-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course_id: null,
      course_detail: {
        title: "",
        id: "",
        image: ""
      },
      _item: {
        // item 数据结构样式
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
  created() {
    console.log("create");
    this.course_id = this.$route.params.id;
    this.init_course_detail(this.course_id);
  },
  computed: {
    course_contents() {
      return this.course_detail;
    }
  },
  methods: {
    init_course_detail(pid) {
      var _that = this;
      this.$axios
        .request({ url: `/course/${pid}/`, method: "get" })
        .then(response => {
          _that.course_detail = response.data;
        });
    },
    goCourseDetail(pid) {
      this.course_id = pid;
      this.init_course_detail(this.course_id);
    //   console.log(pid);
      this.$router.push({ name: "CourseDetail", params: { id: pid } });
    }
  }
};
</script>

<style scoped>
</style>
