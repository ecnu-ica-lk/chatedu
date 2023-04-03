<template>
  <div class="wrapper">
    <div class="head">
      <img src="../assets/logo.svg" />
      <h1>人工智能平台</h1>
      <br>
      <p>
        华东师范大学人工智能平台，通过自然语言预训练大模型，赋能教育发展，为教育领域提供自动出题、作业批改、心理测评、课程辅导、高考咨询等丰富的功能，服务于老师、学生、家长，让学习更轻松、成绩更出色。
      </p>
      <p>
        除了利用自然语言AI技术服务于教育领域，人工平台还将提供先进的图像生成等技术，服务于建筑行业、文旅行业等，以驱动更多行业的发展...
      </p>
    </div>
    <div class="body">
      <div class="cardtitle">{{ title1 }}</div>
      <el-row :gutter="20">
        <el-col :span="screenType" v-for="(item, index) in data1" :key="index">
          <div
            @click="link(item.url)"
            class="card"
            :style="{ 'background-image': item.color }"
          >
            <img :src="getIcon(item.img)" />
            <p>{{ item.title }}</p>
            <!-- div class="star"><img src="../assets/star.png" /></div -->
          </div>
          <!-- <p class="text">{{ item.text }}</p> -->
        </el-col>
      </el-row>
      
      <div class="cardtitle">{{ title2 }}</div>
      <el-row :gutter="20">
        <el-col :span="screenType" v-for="(item, index) in data2" :key="index">
          <div
            @click="link(item.url)"
            class="card"
            :style="{ 'background-image': item.color }"
          >
            <img :src="getIcon(item.img)" />
            <p>{{ item.title }}</p>
            <!-- div class="star"><img src="../assets/star.png" /></div -->
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bottom">
      <el-divider></el-divider>
      <el-row style="width: 100%;" :gutter="10">
        <el-col
          class="bottomtxt"
          :span="bottomType"
          v-for="(item, index) in bottomdata"
          :key="index"
        >
          <a @click="link(item.url)">{{ item.name }}</a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { queuePostFlushCb, reactive, toRefs, ref, onMounted } from "vue";
export default {
  setup() {
    let state = reactive({  
      //第一栏数据（8个卡片）
      title1: "AI赋能教育",
      data1: [
        {
          title: "自动出题", //卡片标题
          color: "linear-gradient(to bottom right, #4f46e5, #db2777)", //背景颜色
          text: "1000", //说明
          img: "自动出题.png", //背景底图
          url: "https://www.baidu.com/", //链接
        },
        {
          title: "作业批改",
          color: "linear-gradient(to bottom right, #4b5563, #4f46e5)",
          text: "1000",
          img: "作文批改.png",
          url: "https://www.baidu.com/",
        },
        {
          title: "心理测评",
          color: "linear-gradient(to bottom right, #4b5563, #059669)",
          text: "1000",
          img: "心理测评.png",
          url: "https://www.baidu.com/",
        },
        {
          title: "古诗赏析",
          color: "linear-gradient(to bottom right, #d97706, #7c3aed)",
          text: "1000",
          img: "古诗赏析.png",
          url: "https://www.baidu.com/",
        },
        {
          title: "课程辅导",
          color: "linear-gradient(to bottom right, #2563eb, #d97706)",
          text: "1000",
          img: "课程辅导.png",
          url: "https://www.baidu.com/",
        },
        {
          title: "作文润色",
          color: "linear-gradient(to bottom right, #059669, #7c3aed)",
          text: "1000",
          img: "作文润色.png",
          url: "https://www.baidu.com/",
        },
        {
          title: "作业辅导",
          color: "linear-gradient(to bottom right, #059669, #dc2626)",
          text: "1000",
          img: "作业辅导.png",
          url: "https://www.baidu.com/",
        },
        {
          title: "教师引导",
          color: "linear-gradient(to bottom right, #d97706, #059669)",
          text: "1000",
          img: "教师引导.png",
          url: "https://www.baidu.com/",
        },
        {
          title: "高考咨询",
          color: "linear-gradient(to bottom right, #059669, #2563eb)",
          text: "1000",
          img: "高考咨询.png",
          url: "https://www.baidu.com/",
        },
        {
          title: "职业规划",
          color: "linear-gradient(to bottom right, #db2777, #059669)",
          text: "1000",
          img: "职业规划.png",
          url: "https://www.baidu.com/",
        },
        {
          title: "模型教育能力基准评价",
          color: "linear-gradient(to bottom right, #4b5563, #db2777)",
          text: "1000",
          img: "模型基准评价.png",
          url: "https://www.baidu.com/",
        },
        
      ],
      
      title2: "AI赋能其他行业",
      data2: [
        {
          title: "建筑效果图生成",
          color: "linear-gradient(to bottom right, #dc2626, #2563eb)",
          text: "1000",
          img: "建筑效果图生成.png",
          url: "https://www.baidu.com/",
        },
        {
          title: "自动图片生成",
          color: "linear-gradient(to bottom right, #059669, #dc2626)",
          text: "1000",
          img: "自动图片生成.png",
          url: "https://www.baidu.com/",
        },
        {
          title: "自动音乐生成",
          color: "linear-gradient(to bottom right, #db2777, #d97706)",
          text: "1000",
          img: "自动音乐生成.png",
          url: "https://www.baidu.com/",
        },
        {
          title: "自动视频生成",
          color: "linear-gradient(to bottom right, #4b5563, #db2777)",
          text: "1000",
          img: "自动视频生成.png",
          url: "https://www.baidu.com/",
        },
        {
          title: "三维模型生成",
          color: "linear-gradient(to bottom right, #dc2626, #2563eb)",
          text: "1000",
          img: "三维模型生成.png",
          url: "https://www.baidu.com/",
        },
      ],
      //底部数据
      bottomdata: [
        {
          name: "华东师范大学",
          url: "www.ecnu.edu.cn",
        },
        {
          name: "华东师范大学计算机学院",
          url: "www.baidu.com",
        },
        {
          name: "华东师范大学智能教育研究院",
          url: "www.baidu.com",
        },
      ],
    });
    function getIcon(name) {
      return new URL(`../assets/icon/${name}`, import.meta.url).href;
    }
    function link(url) {
      window.open(url, "_blank");
    }
    let screenType = ref(6);
    let bottomType = ref(8);
    function setScreenType() {
      if (window.innerWidth <= 1200 && window.innerWidth >= 1000) {
        screenType.value = 8;
        //bottomType.value = 8;
      } else if (window.innerWidth >= 650 && window.innerWidth <= 1000) {
        screenType.value = 12;
        //bottomType.value = 12;
      } else if (window.innerWidth <= 650) {
        screenType.value = 24;
        //bottomType.value = 24;
      } else {
        screenType.value = 6;
        //bottomType.value = 3;
      }
      // let type = +(window.innerWidth <= 1000);
      // if (type == screenType.value) return;
      // screenType.value = type;
      // console.log(type, "type");
    }

    window.addEventListener("resize", setScreenType);
    onMounted(() => {
      setScreenType();
    });

    return {
      ...toRefs(state),
      getIcon,
      link,
      screenType,
      setScreenType,
      bottomType,
    };
  },
};
</script>
<style scoped lang="scss">
.wrapper {
  padding: 8rem 8rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .head {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img {
      width: 30rem;
      height: 6rem;
      margin-bottom: 1rem;
    }
    h1 {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      font-size: 3.75rem;
      line-height: 1.2;
      text-align: center;
      padding: 0 10rem;
      // min-width: 35rem;
    }
    p {
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      font-size: 1.2rem;
      line-height: 1.75rem;
      text-align: center;
      color: rgb(107 114 128);
      min-width: 15rem;
    }
  }
  .divider {
    margin-top: 6rem;
  }
  .body {
    width: 100%;
    padding: 2rem 10rem;
    .cardtitle {
      width: 15rem;
      padding: 0.2rem 1rem;
      background-image: linear-gradient(to bottom right,#e0e7ff, #fff);
      margin-top: 2rem;
      margin-bottom: 0.2rem;
      font-size: 1.3rem;
      line-height: 2.0rem;
      color: rgb(67 56 202);
      border-radius: 9999px;
    }

    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      // margin: 0 1rem 0 0;
      margin-top: 1rem;
      margin-bottom: 1rem;
      height: 7rem;
      padding: 2rem 2rem;
      border-radius: 0.5rem;
      // background-image: linear-gradient(to bottom right, #55efc4, #a29bfe);
      cursor: pointer;
      min-width: 12rem;
      &:hover {
        filter: brightness(1.1);
      }
      img {
        width: 5rem;
        height: 5rem;
        opacity: 0.6;
      }
      p {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 100%;
        z-index: 10;
        color: white;
        font-weight: 700;
        font-size: 1.5rem;
      }
      .star {
        position: absolute;
        right: 1rem;
        top: 1rem;
        z-index: 10;
        img {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
    .text {
      text-align: left;
      color: black;
      font-weight: 400;
      // font-size: 1rem;
    }
  }
  .bottom {
    width: 60%;
    text-align: center;
    .bottomtxt {
      
      a {
        cursor: pointer;
        color: rgb(156 163 175);
        font-size: 0.8rem;
        text-align: center;
        margin-bottom: 0.4rem;
        display: inline-block;
      }
      a:link {
        color: rgb(156 163 175);
        text-decoration: none;
      }
      a:hover {
        color: rgb(156 163 175);
        text-decoration: underline;
      }
      a:visited {
        color: red;
        text-decoration: none;
      }
    }
  }
}
</style>
