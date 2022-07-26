import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main.vue'
import Artist from '@/views/Artist'
import PlayList from '@/views/PlayList'
import About from '@/views/About'
import ArtistInfo from '@/components/ArtistInfo'


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Главная', component: Main},
  { path: '/artist', name: 'Артист', component: Artist},
  { path: '/artist/artist-info', name: 'Информация об артисте', component: ArtistInfo},
  { path: '/playlist', name: 'Плэйлист', component: PlayList},
  { path: '/about', name: 'О нас', component: About},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
