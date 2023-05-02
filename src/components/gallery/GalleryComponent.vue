<template>
    <div class="gallery container">
        <el-pagination
            layout="prev, pager, next"
            :page-size="this.pageSize"
            :total="this.data.length"
            :current-page="this.page"
            @current-change="setPage">
        </el-pagination>
        <div class="gallery-portrait" v-for="file in this.pagedItems" :key="file.id">
            <img :src="getImgUrl(file.fileName)" alt="" :class="{fullWidth: file.orientation}">
            <div class="portrait-info">
                <span>{{ file.name }}</span>
                <span>{{ file.size }}</span>
                <span>{{ file.year }}</span>
            </div>
        </div>
        <el-pagination
            layout="prev, pager, next"
            :page-size="this.pageSize"
            :total="this.data.length"
            :current-page="this.page"
            @current-change="setPage">
        </el-pagination>
    </div>
</template>

<script>
import {data} from './../../data/gallery.json'

export default {
    name: "GalleryComponent",
    data() {
        return {
            data: data,
            pageSize: 10,
            page: 1,
            items: []
        }
    },
    computed: {
      pagedItems() {
          let offset = (this.page - 1) * this.pageSize;

          return this.data.slice(offset).slice(0, this.pageSize)
      }
    },
    methods: {
        getImgUrl(fileName) {
            return require(`@/assets/gallery/${fileName}`);
        },
        setPage(val) {
            this.page = val;
        }
    }
}
</script>

<style lang="scss" scoped>
.gallery {
  margin-top: 50px;


  .gallery-portrait {
    width: fit-content;
    margin: auto;
    padding: 30px;
    max-width: 500px;

    img {
      width: 100%;
    }
  }
}

.fullWidth {
  max-width: 700px;
  width: 100% !important;
  height: auto !important;
}

.portrait-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    color: #fff;
    font-weight: 100;

    &:nth-child(1) {
      font-weight: 400;
    }
  }
}


@media only screen and (min-width: 768px) {
  .gallery {
    margin-top: 100px;

    .gallery-portrait {
      padding: 100px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
