<template>
<div>
  <div style="background-color: black;">
    <v-row>
      <v-col md="6" class="my-4">
        <v-img
          src="https://vsrap.ru/wp-content/uploads/2020/08/bez-imeni-1-30.jpg"
          max-height="700"
          alt="The artist photo"
        ></v-img>
      </v-col>
      <v-col md="6" class="my-4">
            <h1 class="text-center white--text display-3 hidden-xs-only">Макс Корж</h1>
            <h1 class="text-center white--text display-1 hidden-sm-and-up">Макс Корж</h1>
            <br>
            <v-card class="white--text" color="black">

              <v-list color="black" class="white--text">
                <v-list-item class="white--text">
                  <v-list-item-content>ФИО:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    Макс Анатольевич Корж
                  </v-list-item-content>
                </v-list-item>

                <v-list-item class="white--text">
                  <v-list-item-content>Дата рождения:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    23.11.1988
                  </v-list-item-content>
                </v-list-item>

                <v-list-item class="white--text">
                  <v-list-item-content>Псевдоним:</v-list-item-content>
                  <v-list-item-content class="align-end">
                    Макс Корж
                  </v-list-item-content>
                </v-list-item>

                <v-list-item class="white--text">
                  <v-list-item-content>Начало карьеры:</v-list-item-content>
                  <v-list-item-content class="align-end">
                      2006 год
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
      </v-col>
    </v-row>
  </div>
</div>
</template>
<script>
export default {
    
}
</script>