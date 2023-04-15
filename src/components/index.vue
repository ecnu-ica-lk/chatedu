<template>
  <div class="wrapper">
    <div class="head">
      <img src="/educhat-removebg-preview.png" style="width: 400px" />
      <!-- <h1>人工智能平台</h1> -->
      <br />
      <p>
        华东师范大学计算机科学与技术学院联合智能教育研究院，由语言认知与知识计算团队（ICALK）主要研发的教育领域对话系统EduChat。EduChat通过自然语言预训练大模型，赋能教育发展，为教育领域提供自动出题、作业批改、心理测评、课程辅导、高考咨询等丰富的功能，服务于老师、学生、家长，让学习更轻松、成绩更出色。
      </p>
      <!-- <p>
        除了利用自然语言AI技术服务于教育领域，人工平台还将提供先进的图像生成等技术，服务于建筑行业、文旅行业等，以驱动更多行业的发展...
      </p> -->
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

      <!-- <div class="cardtitle">{{ title2 }}</div>
      <el-row :gutter="20">
        <el-col :span="screenType" v-for="(item, index) in data2" :key="index">
          <div
            @click="link(item.url)"
            class="card"
            :style="{ 'background-image': item.color }"
          >
            <img :src="getIcon(item.img)" />
            <p>{{ item.title }}</p>
          </div>
        </el-col>
      </el-row> -->

      <div class="cardtitle">团队介绍</div>
      <div class="about-us text-sm text-gray-500 px-2 leading-7">
        <div>
          <strong>负责人:</strong>
          <span>陈琴、周杰和贺樑，华东师范大学</span>
        </div>
        <div>
          <strong>参与人:</strong>
          <span>
            雷智凯、顾轶洋、但宇豪、李雍、殷江灏、叶林浩、铁之琰、周友根、王一雷、董道国、赵佳宝、陈琴、周杰和贺樑
          </span>
        </div>
        <div>
          <strong>致谢:</strong>
          <a href="http://autopaddle.com" style="color: #6d6d6d !important; text-decoration:none">
            <img style="width:1.2em;" :src="getIcon('autopaddle.svg')" />
            竹蜻蜓数据科技（浙江）有限公司
          </a>
        </div>
      </div>
    </div>

    <!-- <div class="bottom">
      <el-divider></el-divider>
      <el-row style="width: 100%" :gutter="10">
        <el-col
          class="bottomtxt"
          :span="bottomType"
          v-for="(item, index) in bottomdata"
          :key="index"
        >
          <a @click="link(item.url)">{{ item.name }}</a>
        </el-col>
      </el-row>
    </div> -->

    <a class="beian" href="https://beian.miit.gov.cn/" target="_blank">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAA5z2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE5LTA5LTIzVDEyOjA5OjI4KzA4OjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxOS0wOS0yM1QxMjowOToyOCswODowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTktMDktMjNUMTI6MDk6MjgrMDg6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjg0OTNiNTZlLWM2MmMtY2I0Zi1hMzBmLWM5ZDk3MGNjZTkyMjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDo5MmFhMDM0YS1lMDk3LTc3NDktYWI1YS03ZTJiMTI1MTk2ZjY8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo5MmFhMDM0YS1lMDk3LTc3NDktYWI1YS03ZTJiMTI1MTk2ZjY8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6OTJhYTAzNGEtZTA5Ny03NzQ5LWFiNWEtN2UyYjEyNTE5NmY2PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE5LTA5LTIzVDEyOjA5OjI4KzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo4NDkzYjU2ZS1jNjJjLWNiNGYtYTMwZi1jOWQ5NzBjY2U5MjI8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTktMDktMjNUMTI6MDk6MjgrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjIwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjIyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4jh4n+AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAATMSURBVHjarNVbbBR1FMfx78zOzs5Od7v3btcuEmgFilyqgNdaBI1cAgUxIWCMikFEjRqJPGh8IRgDLxjReAliFEKMCglJIQSoNcolgjEQAbmUUqC7pbS73XZnd2d3ZmfHB7GKwfji7+08/D/5n+T/P0ewbZv/MxJAme4bRTVQBcZxOvcd4I5FL9YWLp1o/X7fz8+X9LL88GNTtwSnTNl9dtdXicaFS0CuB/pJX9gNQGjcmj/AW2QWsPqLF19vtfVOpaek4gj4Kew894H+Sdt7zY+MbQM+B/b886B4C0zp+Hhrx9Or2pfmileUcR4HK5XrrFZ6eOD+KMH7o9LKVQcfP7B5Qxvg+i8wXjqxfv/7O4ZZvnIsz8az+D49Q/q8RbrLYnjBJyyyTvHatmVs2WVin//sW0D5N7Dx6p63u1oWnGrxN0R5OXyK7h1ZxFF+LM2AUgUh4ufoK0dYqp4g+uBdPLpg78KBw1svAeNvAvNnu5CK+z1t573y8d7pzJuukTuZRbw6jOB34Rq0KB65jnNMCCWnk/ryGEvmGHRcnMj2Q1bMI+TdwTHP3HTDeOWn7zZVBDdIBaq1XrJ94LRMGCwi1KvI0/yI1/LIVEh169QFSyAIZHIiroi0CRgzAl45d/AJI5lsDnhkKLuwYzHCzbXksNEeCGEtj+NZ14T62hTEiErNtDD5ggG2TaxGhcTJWYM9R58bAVVPoDGrmYyNFEEJceCYijS7mvTC0VhJDeHXPIW91zG7h5DXNhN8fSo7t2WAKpomS+S7+ikmuuIjYGWwd2E2IzEprhG/R+aj7VX8sCFB04wYPtVL4UyGSn+J4qkM3uQQp9dfYPM2F9EmP5PrhkklS5iD55pHQFHK+7WsSPXABZbOsSibHsw9fYS+/gWxzokRcVCpkQjPjhHruERqy2nyhoMlrU686U60rITkFZ0jX8+t3t4ujr/cakXrWHGvxqa6CB8lGzF7zhBKdyL63OhnMmgNNSQDMb4R3VDtZ8V9/ZS9cfx3CqiBUXtHQBBr7KxNb5fGpMZu3nljGm+vbWGPNhmyJq2FNEG/yM69XnKoQIA1LynMaOiktxMoFqiUtakjoOQ3ppe9Ucw+k0T/WV5tdrGkvYqOfQXOiVOYO/EiMXeKclsdRkZn1ASVt+Ze5vrRyxRMBSUsI/nlCQCCbduUcsefTB/buEPvMyilTEhcoX5xE66oAlYaKy2R69fxjQnC6BAkUnTvPo/uDeMZ68Fdq+JrWD5TDsz/8U8Qh+B6avD0pg+tou5LHepDqrKpndmINahjFvKIqoISrEKQnaSPdlG2JHzT6zGLpH3jW5bJTrVdDsz/o+VSqgLoyWKfW1eiFV90dgPWcB5Ly4Iq45D9yG4whnLkExmU0SGUeJTSUIFiUrPdo3IY5AgGbjwbB4dxcPjNmru9tc5AjNJwhYolUbEcFAc0sCsY6WFynQMIDicIAsVrKZxukehDsbCsai/IqvbXxHaFZgAszvQe2mgkflshOwpVashFOW+AYOIoDVHWDbwTwjgUB4aeQ6wKIwRqr5al+i2KGnn3phVwIwXglczZ6Dp9eGBeyeyZedvEyMSKJngUvxiU3F60a1x1R/wFqabl5GBXf7t+JXNg9ENU/j4Phf97Sf0+ADr3CMhtMiuNAAAAAElFTkSuQmCC"
      />
      沪ICP备2023009288号-1
    </a>
  </div>
</template>
<script>
import { queuePostFlushCb, reactive, toRefs, ref, onMounted } from "vue";
export default {
  setup() {
    const baseUrl = "/edu-chat/#/";
    let state = reactive({
      //第一栏数据（8个卡片）
      title1: "AI赋能教育",
      data1: [
        {
          title: "教育对话",
          color: "linear-gradient(to bottom right, #d97706, #059669)",
          text: "1000",
          img: "高考咨询.png",
          url: `${baseUrl}?functionUsed=chat`,
        },
        {
          title: "自动出题", //卡片标题
          color: "linear-gradient(to bottom right, #4f46e5, #db2777)", //背景颜色
          text: "1000", //说明
          img: "自动出题.png", //背景底图
          url: `${baseUrl}?functionUsed=question-setter`, //链接
        },
        {
          title: "作业批改",
          color: "linear-gradient(to bottom right, #4b5563, #4f46e5)",
          text: "1000",
          img: "作文批改.png",
          url: `${baseUrl}?functionUsed=homework-correction`,
        },
        {
          title: "心理测评",
          color: "linear-gradient(to bottom right, #4b5563, #059669)",
          text: "1000",
          img: "心理测评.png",
          url: `${baseUrl}?functionUsed=emotion`,
        },
        {
          title: "古诗赏析",
          color: "linear-gradient(to bottom right, #d97706, #7c3aed)",
          text: "1000",
          img: "古诗赏析.png",
          url: `${baseUrl}?functionUsed=poetry`,
        },
        {
          title: "课程辅导",
          color: "linear-gradient(to bottom right, #2563eb, #d97706)",
          text: "1000",
          img: "课程辅导.png",
          url: `${baseUrl}?functionUsed=class-tutorial`,
        },
        {
          title: "作文润色",
          color: "linear-gradient(to bottom right, #059669, #7c3aed)",
          text: "1000",
          img: "作文润色.png",
          url: `${baseUrl}?functionUsed=polishing`,
        },
        // {
        //   title: "作业辅导",
        //   color: "linear-gradient(to bottom right, #059669, #dc2626)",
        //   text: "1000",
        //   img: "作业辅导.png",
        //   url: `${baseUrl}?functionUsed=homework-tutorial`,
        // },
        {
          title: "教师引导",
          color: "linear-gradient(to bottom right, #d97706, #059669)",
          text: "1000",
          img: "教师引导.png",
          url: `${baseUrl}?functionUsed=teacher-guide`,
        },
        {
          title: "高考咨询",
          color: "linear-gradient(to bottom right, #059669, #2563eb)",
          text: "1000",
          img: "高考咨询.png",
          url: `${baseUrl}?functionUsed=gaokao`,
        },
        {
          title: "职业规划",
          color: "linear-gradient(to bottom right, #db2777, #059669)",
          text: "1000",
          img: "职业规划.png",
          url: `${baseUrl}?functionUsed=job-plan`,
        },
        // {
        //   title: "模型教育能力基准评价",
        //   color: "linear-gradient(to bottom right, #4b5563, #db2777)",
        //   text: "1000",
        //   img: "模型基准评价.png",
        //   url: "#",
        // },
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
          name: "华东师范大学计算机科学与技术学院",
          url: "https://www.ecnu.edu.cn",
        },
        {
          name: "智能教育研究院",
          url: "https://www.ecnu.edu.cn",
        },
        {
          name: "语言认知与知识计算团队",
          url: "https://www.ecnu.edu.cn",
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
      width: 16rem;
      height: 16rem;
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
      background-image: linear-gradient(to bottom right, #e0e7ff, #fff);
      margin-top: 2rem;
      margin-bottom: 0.2rem;
      font-size: 1.3rem;
      line-height: 2rem;
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
    width: 90%;
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
  .about-us {
    font-size: 1.25rem;
    color: #6d6d6d !important;
    padding: 24px 0;
    line-height: 1.5rem;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: start;
    strong {
      min-width: 5rem;
      margin-right: 12px;
    }
    div {
      display: flex;
    }
  }
  .beian {
    display: flex;
    align-items: center;
    color: #6d6d6d;
    padding: 36px 0;
  }
}
</style>
