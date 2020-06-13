<template>
  <v-app style="background-color: #C0F6FF">

    <div class="home-sc">
      <v-container class="fill-height" >
        <v-row align="center" justify="center">
          <v-col cols="12">
            <v-img>
              <v-img src="/img/bg-02.svg" class="mb-5" contain :aspect-ratio="$vuetify.breakpoint.smAndDown ? 1.5 : 3" ></v-img>
            </v-img>
          </v-col>
          <v-col :cols="$vuetify.breakpoint.smAndDown ? 11 : 8">
            <p class="text-h1 text-center">Akai Ito</p>
            <p class="text-overline">o amor no fio vermelho do destino</p>
            <p class="text-subtitle-2">
              Ele simboliza o <b class="red--text">amor verdadeiro</b> e a união de duas pessoas que foram destinadas uma para a outra, que são <b class="red--text">almas gêmeas</b>. 
              <br />
              Essa é a nossa linha, nossa história, uma conexão invisível, pode se emaranhar, pode se esticar, mas <b class="red--text">nunca irá se quebrar.</b>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-timeline reverse :dense="$vuetify.breakpoint.smAndDown">
      <m-template v-for="(item, i) of pages" :key="'section-' + i" :item="item" :path="path"></m-template>
    </v-timeline>
    
    <div class="ft w-100">
      <v-container>
        <v-row align="center" justify="center">
          <v-col>
            <p class="text-overline text-center red--text">That maybe we found love right where we are</p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-dialog v-model="dialog" persistent max-width="400px">
      <v-card>
        <v-card-title>
          <span class="headline">Autenticação</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field type="password" label="Senha" @keyup.enter="auth()" v-model="senha" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="auth()">Try</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-app>
</template>

<script>
import ConfigTemplate from '@/shared/content'

export default {
  name: 'App',
  mixins: [ ConfigTemplate ],
  data: () => ({
    dialog: false,
    senha: '',
  }),
  methods: {
    auth() {
      if (this.senha.toLowerCase() == 'princesinha' ) {
        this.dialog = false
      } 
    }
  }
};
</script>
<style>
.theme--light.v-timeline:before {
  background-color: #f44336!important;
}
.ft {
  background-image: url('./assets/img/bg-05.png');
  background-size: cover;
  background-position: center;
  height: 70vh;
}
.home-sc {
  width: 100%;
  height: 100vh;
  background-color: white;
  background-image: url('./assets/img/bg-04.png');
  background-size: cover;
  background-position: center;
  text-align: center;
  -webkit-box-shadow: inset 0px -26px 14px -26px rgba(0,0,0,0.51);
  -moz-box-shadow: inset 0px -26px 14px -26px rgba(0,0,0,0.51);
  box-shadow: inset 0px -26px 14px -26px rgba(0,0,0,0.51);
}
</style>
