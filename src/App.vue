<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
      right
      class="black"
    >
        <v-list>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.link"
                link
                class="white--text"
            >
                {{ item.title}}
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="black">

      <v-toolbar-title class="white--text">Playlist</v-toolbar-title>
      <v-spacer></v-spacer>

      <span class="hidden-sm-and-up white--text">
        <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>
      </span>
      <v-toolbar-items class="hidden-xs-only">
          <v-btn to="/" text color="white">
            Main
          </v-btn>

          <v-btn to="/artist" text color="white">
            Artist
          </v-btn>

          <v-btn to="/playlist" text color="white">
            Playlist
          </v-btn>

          <v-btn to="/about" text color="white">
            About
          </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

        <div>
        <v-footer
            dark
            padless
          >
            <v-card
              flat
              tile
              class="black lighten-1 white--text text-center"
            >
              <v-card-text>
                <v-btn
                  v-for="(icon,i) in icons"
                  :key="i"
                  class="mx-4 white--text"
                  icon
                >
                  <v-icon size="24px" >
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </v-card-text>

              <v-card-text class="white--text pt-0">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>I love Vuetify</strong> <strong style="color: red;">&#10084;</strong>
              </v-card-text>
            </v-card>
          </v-footer>
    </div>
  </v-app>
</template>

<script>
  export default {
    data(){
        return{
            drawer: false,
            items:[
                { title: 'Main', link:'/'},
                { title: 'Artist', link:'/artist'},
                { title: 'Playlist', link:'/playlist'},
                { title: 'About', link:'/about'}
            ],
            icons: [
              'mdi-facebook',
              'mdi-twitter',
              'mdi-linkedin',
              'mdi-instagram',
            ],
        }
    },
  }
</script>