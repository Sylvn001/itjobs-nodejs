<template>
  <!-- <img src="" alt=""> -->
  <div class="p-3 jobs" :style="{ backgroundColor: color }">
    <div class="container">
      <div class="search mb-4">
        <p class="text-start mb-0">Qual vaga tem mais a sua cara?</p>
        <input type="search" v-model="search" class="search-box" />
      </div>

      <div class="row">
        <JobCardVue v-for="(job, index) in jobs" :key="index" :job="job" />
      </div>
    </div>
  </div>
</template>

<script>
import JobCardVue from "./JobCard.vue";
import axios from "axios";

export default {
  name: "JobPanel",
  data() {
    return {
      search: "",
      jobs: [
        // {
        //   img: 'https://media.glassdoor.com/sql/2763/deloitte-squarelogo-1481880537463.png',
        //   title: 'Desenvolvedor Front End',
        //   contract: 'CLT',
        //   location: 'SP - Presidente Prudente',
        //   salary: '2.000,00',
        //   description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, explicabo velit? Commodi non fugit dolor? Aspernatur voluptatum minima beatae et repudiandae. Maiores enim pariatur velit tenetur cupiditate natus voluptas quidem.'
        // },
        // {
        //   img: 'https://logosmarcas.net/wp-content/uploads/2020/07/Accenture-Logo-650x366.png',
        //   title: 'Analista de Suporte',
        //   contract: 'CLT',
        //   location: 'SP - Presidente Prudente',
        //   salary: '2.000,00',
        //   description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, explicabo velit? Commodi non fugit dolor? Aspernatur voluptatum minima beatae et repudiandae. Maiores enim pariatur velit tenetur cupiditate natus voluptas quidem.'
        // },
        // {
        //   img: 'https://yt3.ggpht.com/ytc/AKedOLRqs8NBXARXm50WhrzV3vgKf1HfJCkuRW47UVWDyA=s900-c-k-c0x00ffffff-no-rj',
        //   title: 'Analista de Suporte',
        //   contract: 'CLT',
        //   location: 'SP - Presidente Prudente',
        //   salary: '2.000,00',
        //   description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, explicabo velit? Commodi non fugit dolor? Aspernatur voluptatum minima beatae et repudiandae. Maiores enim pariatur velit tenetur cupiditate natus voluptas quidem.'
        // },
        // {
        //   img: 'https://1.bp.blogspot.com/-CeFm3Y4ycpg/YYFiD9GMi0I/AAAAAAAADkI/LJO9urQAupstByv1O-suvKo5iCvwzb_rgCNcBGAsYHQ/s2048/Meta.png',
        //   title: 'Analista de Suporte',
        //   contract: 'CLT',
        //   location: 'SP - Presidente Prudente',
        //   description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, explicabo velit? Commodi non fugit dolor? Aspernatur voluptatum minima beatae et repudiandae. Maiores enim pariatur velit tenetur cupiditate natus voluptas quidem.'
        // }
      ],
    };
  },
  props: {
    color: String,
    msg: String,
  },
  components: {
    JobCardVue,
  },
  methods: {
    async searchJobs(filter = "") {
      try {
        let { data } = await axios.get(`http://localhost:3000/jobs/${filter}`);
        this.jobs = data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.searchJobs();
  },
};
</script>

<style scoped>
.jobs {
  position: relative;
}
.search-box {
  border: none;
  outline: none;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 15px;
  width: 100%;
  box-shadow: 0 51px 37px -37px #0000001f;
}
</style>
