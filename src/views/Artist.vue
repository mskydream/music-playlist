<template>
<div>
  <v-container fluid class="black">
    <v-row>
      <v-col md="5">
        <v-img
          src="https://adrenaline-stadium.ru/media/5970/scriptonit_108.jpg"
          max-height="400"

        ></v-img>
      </v-col>
      <v-col md="7">
        <div>
            <h1 class="text-center white--text display-3 hidden-xs-only">The best Hip-hop artists</h1>
            <h1 class="text-center white--text display-1 hidden-sm-and-up">The best Hip-hop artists</h1>
            <br>

            <p class="text-center white--text subtitle-1 hidden-xs-only font-weight-medium">Кажется, любой разговор о грайме приходится сопровождать ответом на этот вечный вопрос. «Грайм — это британский рэп, который очень быстро читают под гэридж-бит» — комментарии такого плана до сих пор можно встретить в интернете. Придется обозначить: грайм в своем первоначальном и родовом смысле — это не рэп. Называть грайм частью рэпа — значит обесценить богатое культурное наследие жанра, в которое уместились регги, даб, гэридж и драм'н'бэйс и дэнсхолл.</p>
            <p class="text-center white--text subtitle-1 hidden-sm-and-up font-weight-medium">Кажется, любой разговор о грайме приходится сопровождать ответом на этот вечный вопрос. «Грайм — это британский рэп, который очень быстро читают под гэридж-бит» — комментарии такого плана до сих пор можно встретить в интернете. Придется обозначить: грайм в своем первоначальном и родовом смысле — это не рэп. Называть грайм частью рэпа — значит обесценить богатое культурное наследие жанра, в которое уместились регги, даб, гэридж и драм'н'бэйс и дэнсхолл.</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
    <v-parallax
      class="mx-0"
      height="300"
      src="https://i.ytimg.com/vi/GipYafE8ZYQ/maxresdefault.jpg"
    ></v-parallax>

    <v-container fluid class="content-cards">
        <v-layout row >
                    <v-flex xs12 class="text-center display-2 font-weight my-10">Популярные реп артисты в СНГ <strong>&#128526;</strong></v-flex>
        </v-layout>
      <v-row align-center>
        <v-col
          v-for="(card,i) in cards"
          :key="i"
          :cols="auto"
        >
        <v-card
            class="mx-auto"
            max-width="300"
            elevation="24"
            color="black"
        >
            <v-img
            class="white--text align-end"
            height="300px"
            :src="card.src"
            >
            <v-card-title>{{card.subtitle}}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0 white--text">
            {{card.title}}
            </v-card-subtitle>

            <v-card-text class="text--primary">
            <div class="white--text">In publishing and graphic design, 
                Lorem ipsum is a placeholder text commonly used to 
                demonstrate the visual form of a document or a typeface without 
                relying on meaningful content. Lorem ipsum may be used as a placeholder 
                before final copy is available...
            </div>
            </v-card-text>
                <v-btn class="mb-4 "
                    to="/artist/artist-info"
                    elevation="2"
                    large
                    outlined
                    color="white"
                    :style="{left: '50%', transform:'translateX(-50%)'}"
                >
                  Подробнее
                </v-btn>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
</div>
</template>
<script>
export default {
    data: () => ({
      cards: [
        { title: 'Hip-hop',subtitle: 'Макс Корж', src: 'https://outstyle.org/images/news/1/1/9/afad6ba1a3dea64e0e2e01a84375ae7a.jpg'},
        { title: 'Hip-hop',subtitle: 'Тимати', src: 'http://retail-loyalty.org/upload/iblock/1fa/9ccdef762e8b83674a76ebb6d0d1a4bb.jpg'},
        { title: 'Hip-hop',subtitle: 'Мот', src: 'https://eclectic-magazine.ru/wp-content/uploads/Mot-intervyu-in.jpg'},
        { title: 'Hip-hop',subtitle: 'Скриптонит', src: 'https://cdn23.img.ria.ru/images/155168/11/1551681166_729:0:2777:2048_1920x0_80_0_0_43b48d703e92bc6414fdf3b665de2e63.jpg'},
        { title: 'Hip-hop',subtitle: '104', src: 'https://miro.medium.com/max/1400/0*WZXe61hNjoCKoFsm'},
        { title: 'Hip-hop',subtitle: 'Truwer', src: 'https://ztb.kz/media/imperavi/5d8b010f44747.jpg'},
        { title: 'Hip-hop',subtitle: 'Масло черного тмина', src: 'https://tntmusic.ru/media/content/article/2019-10-31_17-16-06__1f85be80-fc02-11e9-9089-c7eca9d8f4aa.jpg'},
        { title: 'Hip-hop',subtitle: 'Баста', src: 'https://outstyle.org/images/news/0/5/6/basta.jpg__1566805287__73872__vid563169e.jpg'},
        { title: 'Hip-hop',subtitle: 'Гуф', src: 'https://vokrug.tv/pic/news/d/c/c/1/dcc16a4f89c1a11016759006d1cee873.jpg'},
      ],
    }),
}
</script>