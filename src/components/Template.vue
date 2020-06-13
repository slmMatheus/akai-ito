<template>
  <v-timeline-item
    color="red dark-2" small fill-dot>
        
    <template v-slot:opposite>
      <p class="text-body-2 font-weight-bold" v-html="item.info.description"></p>
      <p class="text-overline">{{ item.info.caption }}</p>
    </template>

    <div class="conteudo">
      
      <v-lazy :options="{ threshold: 1 }" transition="slide-x-transition">
        <div class="box">
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" md="12">
                <v-img :src="item.src" class="mb-3" contain :aspect-ratio="$vuetify.breakpoint.smAndDown ? 1 : 2" ></v-img>
                <p class="text-overline">{{ item.date }}</p>
              </v-col>
              <v-col :cols="$vuetify.breakpoint.smAndDown ? 11 : 9">
                <p class="mt-4" :class="{ 'text-h4': !$vuetify.breakpoint.smAndDown, 'text-h5': $vuetify.breakpoint.smAndDown }">
                  {{ item.title }}
                </p>
                <p class="text-justify mt-2" :class="{ 'text-body-1': !$vuetify.breakpoint.smAndDown, 'text-body-2': $vuetify.breakpoint.smAndDown, 'text-justify': $vuetify.breakpoint.smAndDown }">
                  {{ item.description }}
                </p>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-lazy>
      

    </div>

  </v-timeline-item>
</template>

<script>

export default {
  name: 'Template',
  props: {
    item: {
      type: Object,
      required: true
    },
    path: {
      type: String,
      required: false,
      default: '../assets/img'
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.box-secao {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: antiquewhite;
  border-bottom: 1px solid black;
}
.conteudo {
  height: 100vh;
  padding: 0.7em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.descricao {
  font-size: 0.9em;
  color: black;
  opacity: 0.8;
  text-align: center;
}
@media (max-width: 567px) {
  .box {
    margin-top: 0 !important;
  }
  .conteudo {
    height: 120vh !important;
  }
}
.box {
  /* position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  margin-top: 15%;
  text-align: center;
}
.linha {
  position: absolute;
  height: 100%;
  width: 5px;
  background: red;
  left: 1em;
}
</style>