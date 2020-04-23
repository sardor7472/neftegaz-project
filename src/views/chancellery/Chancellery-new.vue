<template xmlns:v-slot="v-slo//www.w3.org/1999/XSL/Transform">
    <v-container class="pl-9 pr-9 pl-lg-4 pr-lg-4">
        <v-row class="mt-2">
            <v-col xl="4" lg="5">
                <p class="chancellery-send-doc-paragraph">Hujjat ko’rinishi</p>
                <v-autocomplete
                        outlined
                        class="nf-bor-radius mt-2"
                        v-model="value"
                        :items="items"
                        dense
                        label="Kiruvchi hujjat"
                ></v-autocomplete>

                <p class="chancellery-send-doc-lable">Hujjat turi </p>
                <v-autocomplete
                        outlined
                        class="nf-bor-radius mt-2"
                        v-model="value"
                        :items="items"
                        dense
                        label="Хат"
                ></v-autocomplete>


                <p>Qo`shish</p>
                <v-radio-group class="chancellery-jurnal-radio" row v-model="radios">
                    <v-radio label="Yuboruvchi" value="radio-1"></v-radio>
                    <v-radio label="Nazorat punktlari" value="radio-3"></v-radio>

                </v-radio-group>
                <v-radio-group class="chancellery-jurnal-radio" row v-model="radios">
                    <v-radio label="Hujjat nomi" value="radio-2"></v-radio>
                    <v-radio label="Qisqa mazmuni" value="radio-4"></v-radio>
                </v-radio-group>
                <v-radio-group>
                    <v-radio class="" label="Boshqa hujjat asosida" value="radio-5"></v-radio>
                </v-radio-group>
                <p class="mt-2">
                    <span class="chancellery-attach-file nf-font-size14">faylni biriktirish</span>
                    <v-file-input label="File input"></v-file-input>
                </p>

                <v-radio-group class="chancellery-jurnal-radio" row v-model="radios">

                    <v-radio class="mt-2" label="Hodimga" value="radio-6"></v-radio>
                </v-radio-group>

                <p class="mt-2 chancellery-send-doc-lable">Ro’yhatga olish jurnali</p>
                <v-autocomplete
                        outlined
                        class="nf-bor-radius mt-2"
                        v-model="value"
                        :items="items"
                        dense
                ></v-autocomplete>
                <v-row>
                    <v-col class="">
                        <p>Kirish raqami</p>
                        <v-text-field
                                outlined
                                dense
                                class="nf-bor-radius per-input-element mt-2">
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <p>Chiqish raqami</p>
                        <v-text-field
                                outlined
                                dense
                                class="nf-bor-radius per-input-element mt-2">
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <p>Kiruvchi sana</p>
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
                                        v-model="date"
                                        readonly
                                        v-on="on"
                                        class="nf-bor-radius per-input-element mt-2">
                                    >

                                    <template v-slot:append>
                                        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1"
                                             x="0px" y="0px" viewBox="0 0 757.9 800"
                                             enable-background="new 0 0 757.9 800" xml:space="preserve">
		<path fill="#d9d9d9"
              d="M701.5,96.8h-62V55.3c0-30.5-25.3-55.3-56.4-55.3h-2.3c-31.1,0-56.4,24.7-56.4,55.3v41.5h-291V55.3    c0-30.5-25.3-55.3-56.4-55.3h-2.3c-31.1,0-56.4,24.7-56.4,55.3v41.5h-62C25.2,96.8,0,121.5,0,152.1v592.6    C0,775.3,25.2,800,56.4,800h645.1c31.1,0,56.4-24.7,56.4-55.3V152.1C757.9,121.5,732.6,96.8,701.5,96.8z M663.1,712.7H94.7V263.7    h568.4V712.7z M172,466.9h98.1c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9H172c-5,0-9,4-9,8.9V458C163,462.9,167,466.9,172,466.9z     M329.9,466.9H428c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9V458C320.9,462.9,324.9,466.9,329.9,466.9z     M487.8,466.9h98.1c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9V458C478.8,462.9,482.8,466.9,487.8,466.9z     M172,621.7h98.1c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9H172c-5,0-9,4-9,8.9v96.2C163,617.7,167,621.7,172,621.7z M329.9,621.7    H428c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9v96.2C320.9,617.7,324.9,621.7,329.9,621.7z M487.8,621.7h98.1    c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9v96.2C478.8,617.7,482.8,621.7,487.8,621.7z"/>
</svg>

                                    </template>

                                </v-text-field>
                            </template>
                            <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                        </v-menu>
                    </v-col>
                    <v-col>
                        <p>Chiquvchi sana</p>
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

                                        v-model="date"
                                        readonly
                                        v-on="on"
                                        class="nf-bor-radius per-input-element mt-2">
                                    >

                                    <template v-slot:append>
                                        <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1"
                                             x="0px" y="0px" viewBox="0 0 757.9 800"
                                             enable-background="new 0 0 757.9 800" xml:space="preserve">
		<path fill="#d9d9d9"
              d="M701.5,96.8h-62V55.3c0-30.5-25.3-55.3-56.4-55.3h-2.3c-31.1,0-56.4,24.7-56.4,55.3v41.5h-291V55.3    c0-30.5-25.3-55.3-56.4-55.3h-2.3c-31.1,0-56.4,24.7-56.4,55.3v41.5h-62C25.2,96.8,0,121.5,0,152.1v592.6    C0,775.3,25.2,800,56.4,800h645.1c31.1,0,56.4-24.7,56.4-55.3V152.1C757.9,121.5,732.6,96.8,701.5,96.8z M663.1,712.7H94.7V263.7    h568.4V712.7z M172,466.9h98.1c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9H172c-5,0-9,4-9,8.9V458C163,462.9,167,466.9,172,466.9z     M329.9,466.9H428c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9V458C320.9,462.9,324.9,466.9,329.9,466.9z     M487.8,466.9h98.1c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9V458C478.8,462.9,482.8,466.9,487.8,466.9z     M172,621.7h98.1c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9H172c-5,0-9,4-9,8.9v96.2C163,617.7,167,621.7,172,621.7z M329.9,621.7    H428c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9v96.2C320.9,617.7,324.9,621.7,329.9,621.7z M487.8,621.7h98.1    c5,0,9-4,9-8.8v-96.2c0-4.9-4-8.9-9-8.9h-98.1c-5,0-9,4-9,8.9v96.2C478.8,617.7,482.8,621.7,487.8,621.7z"/>
</svg>

                                    </template>

                                </v-text-field>
                            </template>
                            <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>
                <v-row>
                    <v-radio-group v-model="radios">
                        <v-radio label="Shoshilinch" value="radio-1"></v-radio>
                        <v-radio label="DSP" value="radio-2"></v-radio>
                    </v-radio-group>
                </v-row>
            </v-col>


            <v-col xl="6" lg="7">

                <p class="chancellery-send-doc-paragraph">Ro'yxatdan o'tkazuvchini tanlang <span>*</span></p>
                <v-autocomplete
                        outlined
                        class="nf-bor-radius mt-2"
                        v-model="value"
                        :items="items"
                        dense
                ></v-autocomplete>


                <p class="chancellery-send-doc-paragraph">Jo'natuvchining ismini qo'lda kiriting</p>
                <v-text-field
                        outlined
                        dense
                        label=""
                        class="nf-bor-radius per-input-element mt-2 pr-6">
                    <template v-slot:append-outer>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 386.667 386.667" height="12" viewBox="0 0 386.667 386.667" width="12">
                                <path fill="#ff7d31" d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/>
                            </svg>
                            </span>
                    </template>
                </v-text-field>

                <v-row>
                    <v-col>
                        <p class="chancellery-send-doc-paragraph">O'zbek tilida nomi <span class="nf-star">*</span></p>
                        <v-text-field
                                dense
                                outlined
                                class="nf-bor-radius mt-2">

                        </v-text-field>
                    </v-col>
                    <v-col>
                        <p class="chancellery-send-doc-paragraph">Rus tilida nomi <span class="nf-star">*</span></p>
                        <v-text-field
                                dense
                                outlined
                                class="nf-bor-radius mt-2">
                        </v-text-field>
                    </v-col>
                </v-row>
                <div class="text-right">
                    <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                        Saqlash
                    </v-btn>

                    <v-btn class="nf-bor-radius ml-5 white--text" color="#ff7d31" large>
                        bekor qilish
                    </v-btn>
                </div>
                <div class="mt-5">
                    <div class="nf-chancellery-new-btn-blog">
                        <button class="chancellery-send-doc-add grey lighten-2 mr-4">
                            <svg height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px"
                                 y="0px"
                                 viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve"
                                 class="left-bar-icon">
                                            <path fill-rule="evenodd" clip-rule="evenodd" fill="#00a5e2"
                                                  d="M736.6,470.6H470.4V737c0,34.7-28.2,62.9-62.9,62.9h-15.3  c-34.7,0-62.9-28.2-62.9-62.9V470.6H63.1C28.3,470.6,0,442.3,0,407.5v-14.9c0-34.9,28.3-63.1,63.1-63.1h266.2V63.1  c0-34.7,28.2-62.9,62.9-62.9h15.3c34.7,0,62.9,28.2,62.9,62.9v266.4h266.2c34.9,0,63.1,28.3,63.1,63.1v14.9  C799.7,442.3,771.5,470.6,736.6,470.6z">
                                        </path>
                                        </svg>
                        </button>
                        <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                            tashkilot qo'shing
                        </v-btn>
                    </div>

                </div>
                <p class="chancellery-send-doc-paragraph mt-6">Yuqori turuvchi organ buyrug’i</p>
                <v-text-field
                        dense
                        outlined
                        class="nf-bor-radius mt-2">
                </v-text-field>
                <p class="chancellery-send-doc-paragraph">Kim tomonidan imzolangan</p>
                <v-text-field
                        dense
                        outlined
                        class="nf-bor-radius mt-2">
                </v-text-field>
                <p class="chancellery-send-doc-paragraph">Hujjat nomi <span class="nf-star">*</span></p>
                <v-text-field
                        dense
                        outlined
                        class="nf-bor-radius mt-2">
                </v-text-field>
                <p class="chancellery-send-doc-paragraph">Qisqa mazmuni <span>*</span></p>
                <v-textarea
                        outlined
                        name="input-7-4"
                        label="Qisqa mazmuni"
                        class="nf-bor-radius mt-2"
                ></v-textarea>
                <p class="chancellery-send-doc-paragraph">Nazoratchi tanlang</p>
                <v-autocomplete
                        outlined
                        class="nf-bor-radius mt-2"
                        v-model="value"
                        :items="items"
                        dense
                        label="А.А. Руководилов"
                ></v-autocomplete>
                <div class="chancellery-send-doc-blog-btn">
                    <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                        Saqlash
                    </v-btn>
                    <v-btn class="nf-bor-radius ml-5 white--text" color="#ff7d31" large>
                        yopish
                    </v-btn>
                </div>

            </v-col>
        </v-row>


    </v-container>
</template>
<script>
    export default {

        data: () => ({
            date: new Date().toISOString().substr(0, 10),
            menu2: false,
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            radios: 'radio-1',


        }),
    };
</script>
