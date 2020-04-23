<template xmlns:v-slot="v-slo//www.w3.org/1999/XSL/Transform">
    <v-container class="pl-9 pr-9 pr-lg-4 pl-lg-4 mt-9">
        <div class="">
            <p class="appeal-title">Hisob palatasi topshiriqlari</p>
        </div>

        <v-row class="mt-3">
            <v-col xl="4">
                <v-text-field
                        outlined
                        dense
                        label="Raqami bo’yicha"
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
                        label="Hujjat tarkibi bo’yicha"
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
            ></v-data-table>
        </template>

    </v-container>
</template>
<script>
    export default {

        data: () => ({
            date: new Date().toISOString().substr(0, 10),

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
                { text: 'Iron (%)', value: 'iron' },
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

                },
                {
                    id: '2',
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                },


            ],

        }),
    };
</script>
