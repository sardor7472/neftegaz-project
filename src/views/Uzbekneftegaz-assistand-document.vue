<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-container class="pl-9 pr-9 pl-lg-4 pr-lg-4 mt-5">
        <v-row>
            <v-col class="">
                <div class="">
                    <p class="appeal-title">
                        Ruxsat bo'yicha</p>
                </div>
            </v-col>
        </v-row>
        <div class="mt-4">
            <template>
                <v-data-table
                        outline
                        :headers="headers"
                        :items="desserts"
                        :items-per-page="5"
                        class="elevation-1 nf-calendar-table"
                >
                    <template v-slot:item.file="{item}">
                        <v-btn class="nf-bor-radius white--text mt-3" color="#00a5e2" large>
                            Hujjatni qayta yo'naltirish
                        </v-btn>
                        <v-autocomplete
                                outlined
                                class="nf-bor-radius mt-3"
                                v-model="value"
                                :items="items"
                                dense
                                label="Qabul qiluvchini tanlang"
                        ></v-autocomplete>
                    </template>
                </v-data-table>
            </template>
        </div>
    </v-container>
</template>
<script>
    export default {

        data: () => ({
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            radios: 'radio-1',
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
                { text: 'Hujjatni qayta yo\'naltirish', value: 'file' },
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
                    file: '123'
                },
                {
                    id: '2',
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                    file: '123'
                },


            ],
        }),

    };
</script>
