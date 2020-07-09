<template xmlns:v-slot="v-slo//www.w3.org/1999/XSL/Transform">
<div>
    <v-container class="pl-9 pr-9 pl-lg-4 pr-lg-4">
        <div class="chancellery-send-list-wrap pt-2 pb-2">
            <p class="chancellery-jurnal-link">
                <router-link exact active-class="active" to="/chancellery-registration-document" class="pa-1">
                    Qabul qilingan yozishmalar
                </router-link>
            </p>
            <p class="chancellery-jurnal-link">
                <router-link active-class="active" to="/chancellery-inbox">
                        <span>
                        <svg height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                             viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve"
                             class="left-bar-icon"><path data-v-47182f1e="" fill="#fff" d="M741,527.2c-32.6,0-59.1,26.2-59.1,58.5V677H118.7v-91.2c0-32.3-26.4-58.5-59.1-58.5    c-32.6,0-59.1,26.2-59.1,58.5v149.7C0.5,767.8,27,794,59.6,794H741c32.6,0,59.1-26.2,59.1-58.5V585.7    C800,553.4,773.6,527.2,741,527.2z M382.5,589.5c9.8,9.7,25.8,9.7,35.7,0l207-205.1c6-6,7.8-15,4.6-22.8    c-3.3-7.8-10.9-12.9-19.5-12.9H513V53.1c0-25.2-20.6-45.7-46.1-45.7H333.7c-25.5,0-46.1,20.4-46.1,45.7v295.6h-97.2    c-8.5,0-16.2,5.1-19.5,12.9c-3.3,7.8-1.5,16.8,4.5,22.8L382.5,589.5z"></path></svg>
                    </span>
                    Kiruvchi hujjatlar
                </router-link>
            </p>
            <p class="chancellery-jurnal-link">
                <router-link active-class="active" to="/chancellery-send">
                        <span>
                        <svg height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                             viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve"
                             class="left-bar-icon"><path data-v-47182f1e="" fill="#fff" d="M740.3,527.3c-32.6,0-59.1,26.2-59.1,58.5V677h-563v-91.2c0-32.3-26.4-58.5-59-58.5    c-32.6,0-59.1,26.2-59.1,58.5v149.7c0,32.3,26.4,58.5,59.1,58.5h681.1c32.6,0,59-26.2,59-58.5V585.8    C799.4,553.5,772.9,527.3,740.3,527.3z M189.9,251.9h97.2v290.3c0,24.8,20.6,44.9,46.1,44.9h133.2c25.5,0,46.1-20.1,46.1-44.9    V251.9h97.2c8.5,0,16.2-5,19.5-12.7c3.3-7.7,1.5-16.5-4.6-22.4l-207-201.5c-9.8-9.6-25.8-9.6-35.6,0L175,216.9    c-6,5.9-7.8,14.7-4.5,22.4C173.7,246.9,181.4,251.9,189.9,251.9z"></path></svg>
                        </span>
                    Chiquvchi hujjatlar
                </router-link>
            </p>
            <p class="chancellery-jurnal-link">
                <router-link active-class="active" to="/chancellery-jurnal">
                        <span>
                            <svg height="12" width="12" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                 viewBox="0 0 800 741.9" enable-background="new 0 0 800 741.9" xml:space="preserve">
		                <path fill="#0092C8"
                              d="M286.4,741.9h228.8V0H286.4V741.9z M337.5,68.2H464v331.3H337.5V68.2z M337.1,452.2h127.3v57.1H337.1    V452.2z M337.1,562.1h127.3v57.1H337.1V562.1z M571.2,0v741.9H800V0H571.2z M622.3,68.2h126.5v331.3H622.3V68.2z M749.2,619.1    H621.9v-57.1h127.3V619.1z M749.2,509.3H621.9v-57.1h127.3V509.3z M1,741.9h228.8V0H1V741.9z M52.2,68.2h126.5v331.3H52.2V68.2z     M51.8,452.2h127.3v57.1H51.8V452.2z M51.8,562.1h127.3v57.1H51.8V562.1z"/>
                        </svg>
                          </span>
                    Jurnallar
                </router-link>
            </p>
        </div>
    </v-container>
    <v-divider></v-divider>
    <v-container class="pl-9 pr-9 pl-lg-4 pr-lg-4 mt-3">
        <v-row>
            <v-col cols="12">
                <p class="chancellery-jurnal-title">
                    Kiruvchi hujjatlar
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col xl="4">
                <v-text-field
                        outlined
                        dense
                        label="Kirish raqami"
                        class="nf-bor-radius per-input-element mt-1">
                    <template v-slot:append>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1"
                             enable-background="new 0 0 515.558 515.558" height="20" viewBox="0 0 515.558 515.558"
                             width="25">
                            <path fill="#00a5e2"
                                  d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/>
                        </svg>
                    </template>

                </v-text-field>
            </v-col>
            <v-col xl="4">
                <v-text-field
                        outlined
                        dense
                        label="Chiqish raqami"
                        class="nf-bor-radius per-input-element mt-1">
                    <template v-slot:append>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1"
                             enable-background="new 0 0 515.558 515.558" height="20" viewBox="0 0 515.558 515.558"
                             width="25">
                            <path fill="#00a5e2"
                                  d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/>
                        </svg>
                    </template>
                </v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                                outlined
                                dense
                                label="Ruyxatdan utkazilgan sana"
                                v-model="date"
                                readonly
                                v-on="on"
                                class="nf-bor-radius per-input-element mt-1">
                            >

                            <template v-slot:append>
                                <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1"
                                     x="0px" y="0px" viewBox="0 0 757.9 800"
                                     enable-background="new 0 0 757.9 800" xml:space="preserve">
		<path fill="#d9d9d9"
              d="M701.5,96.8h-62V55.3c0-30.5-25.3-55.3-56.4-55.3h-2.3c-31.1,0-56.4,24.7-56.4,55.3v41.5h-291V55.3    c0-30.5-25.3-55.3-56.4-55.3h-2.3c-31.1,0-56.4,24.7-56.4,55.3v41.5h-62C25.2,96.8,0,121.5,0,152.1v592.6    C0,775.3,25.2,800,56.4,800h645.1c31.1,0,56.4-24.7,56.4-55.3V152.1C757.9,121.5,732.6,96.8,701.5,96.8z M663.1,712.7H94.7V263.7    h568.4V712.7z M172,466.9h98.1c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9H172c-5,0-9,4-9,8.9V458C163,462.9,167,466.9,172,466.9z     M329.9,466.9H428c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9V458C320.9,462.9,324.9,466.9,329.9,466.9z     M487.8,466.9h98.1c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9V458C478.8,462.9,482.8,466.9,487.8,466.9z     M172,621.7h98.1c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9H172c-5,0-9,4-9,8.9v96.2C163,617.7,167,621.7,172,621.7z M329.9,621.7    H428c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9v96.2C320.9,617.7,324.9,621.7,329.9,621.7z M487.8,621.7h98.1    c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9v96.2C478.8,617.7,482.8,621.7,487.8,621.7z"/>
</svg>
                                <svg class="ml-2" xmlns="http://www.w3.org/2000/svg" id="Capa_1"
                                     enable-background="new 0 0 515.558 515.558" height="20" viewBox="0 0 515.558 515.558"
                                     width="25">
                                    <path fill="#00a5e2"
                                          d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/>
                                </svg>
                            </template>
                        </v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                </v-menu>
            </v-col>
        </v-row>
        <v-row>
            <v-col xl="4">
                <v-text-field
                        outlined
                        dense
                        label="Kalit so’z"
                        class="nf-bor-radius per-input-element mt-1">
                    <template v-slot:append>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1"
                             enable-background="new 0 0 515.558 515.558" height="20" viewBox="0 0 515.558 515.558"
                             width="25">
                            <path fill="#00a5e2"
                                  d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/>
                        </svg>
                    </template>

                </v-text-field>
            </v-col>
            <v-col xl="4">
                <v-text-field
                        outlined
                        dense
                        label="Hujjat turi"
                        class="nf-bor-radius per-input-element mt-1">
                    <template v-slot:append>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1"
                             enable-background="new 0 0 515.558 515.558" height="20" viewBox="0 0 515.558 515.558"
                             width="25">
                            <path fill="#00a5e2"
                                  d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/>
                        </svg>
                    </template>

                </v-text-field>
            </v-col>
            <v-col xl="4">
                <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                    Qidirish
                </v-btn>
            </v-col>
        </v-row>


        <template>
            <v-data-table
                    outline
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1 nf-calendar-table"
            >

                <template v-slot:item.file="{item}">
                    <a :href="item.file">Download book</a>
                </template>
            </v-data-table>
        </template>

    </v-container>
</div>
</template>
<script>
    export default {

        data: () => ({
            date: new Date().toISOString().substr(0, 10),
            menu2: false,

            headers: [
                {
                    text: '№', value: 'id'
                },
                {
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'temp', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Protein (g)', value: 'protein' },
                { text: 'Iron (%)', value: 'iron' },
                { text: 'File', value: 'file' },
            ],
            desserts: [
                {
                    id: '1',
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                    file: 'https://b-ok.cc/dl/3601991/d6681c?dsource=mostpopular',

                },
                {
                    id: '2',
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                    file: 'https://b-ok.cc/dl/3601991/d6681c?dsource=mostpopular',
                },


            ],

        }),
    };
</script>
