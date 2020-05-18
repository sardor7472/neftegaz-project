<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">

    <div >
        <ul class="uzbekneftegaz-received">
            <li><span>Barcha</span><i class="appeal-blog-span">2</i> </li>
            <li><span>Nazoratda</span></li>
            <li class="active"><span>Oddiy</span></li>
            <li><span>Ma’lumot uchun</span></li>
        </ul>
        <v-container class="pl-9 pr-9 pl-lg-4 pr-lg-4">
            <v-layout row class="mt-2">
                <v-flex class="">
                    <div class="appeal-blog">
                        <p class="appeal-title">Murojaat</p>
                        <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                            Eksport
                            <span class="ml-2">
                             <svg height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                  viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve"
                                  class="left-bar-icon"><path fill="#fff" d="M740.3,527.3c-32.6,0-59.1,26.2-59.1,58.5V677h-563v-91.2c0-32.3-26.4-58.5-59-58.5    c-32.6,0-59.1,26.2-59.1,58.5v149.7c0,32.3,26.4,58.5,59.1,58.5h681.1c32.6,0,59-26.2,59-58.5V585.8    C799.4,553.5,772.9,527.3,740.3,527.3z M189.9,251.9h97.2v290.3c0,24.8,20.6,44.9,46.1,44.9h133.2c25.5,0,46.1-20.1,46.1-44.9    V251.9h97.2c8.5,0,16.2-5,19.5-12.7c3.3-7.7,1.5-16.5-4.6-22.4l-207-201.5c-9.8-9.6-25.8-9.6-35.6,0L175,216.9    c-6,5.9-7.8,14.7-4.5,22.4C173.7,246.9,181.4,251.9,189.9,251.9z"></path></svg>
                        </span>
                        </v-btn>
                    </div>
                    <v-row>
                        <v-col xl="10" lg="12">
                            <ul class="appeal-list">
                                <li><a href="">Barcha</a><span class="appeal-blog-span">2</span></li>
                                <li class="active"><a href="">Ish jarayonida</a> <span class="appeal-blog-span">2</span></li>
                                <li><a href="">Muddati o‘tgan</a></li>
                                <li><a href="">Bajarildi</a> <span class="appeal-blog-span">2</span></li>
                                <li><a href="">Muddati o‘tib ijro qilingan</a></li>
                                <li><a href="">Qayta boshlangan</a></li>
                                <li><a href="">Tasdiqlashda</a></li>
                                <li><a href="">Rad etilgan</a></li>
                            </ul>
                        </v-col>
                    </v-row>
                </v-flex>
            </v-layout>
            <div>
                <app-search></app-search>
            </div>
            <v-row class="">
                <v-col xl="4" class="pa-1">
                    <div class="per-input">
                        <v-text-field
                                outlined
                                dense
                                label="Kirish raqami"
                                class="nf-bor-radius per-input-element mt-1">
                        </v-text-field>
                    </div>
                </v-col>
                <v-col xl="4" class="pa-1">
                    <v-text-field
                            outlined
                            dense
                            label="Chiqish raqami"
                            class="nf-bor-radius per-input-element mt-1">
                    </v-text-field>
                </v-col>
                <v-col xl="4" class="pa-1">
                    <v-radio-group class="appeal-radio" row v-model="radios">
                        <v-radio label="Aniq qidiruv" value="radio-1"></v-radio>
                        <v-radio label="Я в своде" value="radio-2"></v-radio>
                    </v-radio-group>
                </v-col>
            </v-row>
            <v-row class="">
                <v-col xl="4" class="pa-1">
                    <div class="per-input">
                        <v-text-field
                                outlined
                                dense
                                label="Qisqa mazmuni"
                                class="nf-bor-radius per-input-element mt-1">

                        </v-text-field>
                    </div>
                </v-col>
                <v-col xl="4" class="pa-1">
                    <v-autocomplete
                            outlined
                            class="nf-bor-radius mt-1"
                            :items="items"
                            dense
                            label="Jurnalni tanlang"
                    ></v-autocomplete>
                </v-col>
                <v-col xl="4" class="pa-1">
                    <v-autocomplete
                            outlined
                            class="nf-bor-radius mt-1"
                            :items="items"
                            dense
                            label="Barcha muddat ichida"
                    ></v-autocomplete>
                </v-col>
            </v-row>
            <v-row class="">
                <v-col xl="4" lg="4" md="4" class="pa-1">
                    <v-autocomplete
                            outlined
                            class="nf-bor-radius mt-1"
                            :items="items"
                            dense
                            label="Sanani tanlang"
                    ></v-autocomplete>
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
                    <template v-slot:item="{ item }">
                        <tr
                                :key="item.id"
                                @click="$router.push({name: 'chancellery-jurnal', params: {cardId: item.id}})"
                                class="tr-class">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>
                                {{ item.calories }}
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </template>
        </v-container>
    </div >

</template>
<script>
import Search from '../components/search'
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
                {text: 'temp', value: 'calories'},
            ],
            desserts: [
                {
                    id: '1',
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
                {
                    id: '2',
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
            ],
        }),
        components: {
            appSearch: Search
        }
    };
</script>
