<template xmlns:v-slot="v-slo//www.w3.org/1999/XSL/Transform">
    <v-container class="pl-9 pr-9 pl-lg-4 pr-lg-4">
        <v-row>
            <v-col lg="8" xl="8">
                <ul class="nf-resolution-center-list pb-4">
                    <li class="active"> Hujjatni ro'yxatdan o'tkazish</li>
                    <li>Hujjat</li>
                    <li>Topshiriqlar tarixi</li>
                    <li>Ijro qadamlari</li>
                </ul>
                <v-divider></v-divider>
                <div class="nf-chancellery-registration">
                    <div class="nf-chancellery-registration-title mt-6">Imzolangan</div>
                    <div>А.А. Обидов</div>
                    <v-row>
                        <v-col lg="6" xl="6">
                            <p class="chancellery-send-doc-paragraph">Qayt etish jurnali</p>
                            <v-autocomplete
                                    outlined
                                    class="nf-bor-radius mt-2"
                                    :items="items"
                                    dense
                                    label="1/ 1/"
                            ></v-autocomplete>
                        </v-col>
                        <v-col lg="6" xl="6">
                            <p class="chancellery-send-doc-paragraph">Qayt etish sanasi</p>
                            <v-text-field
                                    dense
                                    outlined
                                    class="nf-bor-radius mt-2">
                            </v-text-field>
                        </v-col>
                        <v-col lg="6" xl="6">
                            <p class="chancellery-send-doc-paragraph">Kiruvchi hujjat raqami</p>
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
                        <v-col lg="6" xl="6">
                            <p class="chancellery-send-doc-paragraph">Nazoratchini tanlang</p>
                            <v-autocomplete
                                    outlined
                                    class="nf-bor-radius mt-2"
                                    :items="items"
                                    dense
                                    label="Filled"
                            ></v-autocomplete>
                        </v-col>
                    </v-row>
                    <div class="nf-chancellery-regstration-btn">
                        <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                            Ro'yxatdan o'tish
                        </v-btn>
                    </div>
                </div>
            </v-col>
            <v-col class="nf-vertical-left-line" lg="4" xl="4">

                <div class="">

                    <div class="pa-5">
                        <p>
                            <span class="uzbekneftegaz-resolution-prent">
                                <svg height="20" width="25" xmlns="http://www.w3.org/2000/svg"
                                     xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px"
                                     y="0px" viewBox="0 0 801.4 734.3" enable-background="new 0 0 801.4 734.3"
                                     xml:space="preserve">
                                     <path fill="#444444"
                                           d="M284.9,641.7h231.4c14.7,0,26.7-11.8,26.7-26.3c0-14.5-12-26.3-26.7-26.3H284.9    c-14.8,0-26.7,11.8-26.7,26.3C258.2,629.9,270.2,641.7,284.9,641.7z M284.9,558.7h231.4c14.7,0,26.7-11.8,26.7-26.3    c0-14.5-12-26.3-26.7-26.3H284.9c-14.8,0-26.7,11.8-26.7,26.3C258.2,546.9,270.2,558.7,284.9,558.7z M738.9,178.7h-85V26.3    c0-14.5-12-26.3-26.7-26.3H174.1c-14.8,0-26.7,11.8-26.7,26.3v152.4h-85c-34.4,0-62.3,27.6-62.3,61.5v265    c0,33.9,27.9,61.5,62.3,61.5h85v141.4c0,14.5,12,26.3,26.7,26.3h453.1c14.8,0,26.7-11.8,26.7-26.3V566.6h85    c34.4,0,62.3-27.6,62.3-61.5v-265C801.2,206.3,773.2,178.7,738.9,178.7z M200.8,52.6h399.7v126.1H200.8V52.6z M600.5,681.6H200.8    V466.1h399.7V681.6z M627.2,333.3h-68c-14.8,0-26.7-11.8-26.7-26.3c0-14.5,12-26.3,26.7-26.3h68c14.7,0,26.7,11.8,26.7,26.3    C653.9,321.5,641.9,333.3,627.2,333.3z"/>
                                </svg>
                            </span>
                        </p>
                        <p class="text-uppercase headline mt-8">"Стройснаб" АЖ</p>
                    </div>
                    <v-divider></v-divider>
                    <div class="pa-2">
                        <p class="nf-sime pl-3 ">"Стройснаб" АЖ</p>
                    </div>
                    <v-divider></v-divider>

                    <p class="pa-5">Ўрнатилган тартибда кўриб чиқиб, ижросини таъминлаш учун.
                    </p>
                    <v-divider></v-divider>

                    <div class="mt-3">
                        <p class="pl-5 uzbekneftegaz-resolution-right-title">Ижро муддати</p>
                        <p class="pl-5 ">18.01.2020</p>

                        <p class="pl-5 uzbekneftegaz-resolution-right-title mt-3">Приказ №13 от 13.01.2020</p>
                        <p class="pl-5 ">18.01.2020</p>
                        <p class="pl-5 uzbekneftegaz-resolution-right-title mt-3">X.X.Xurshid</p>
                    </div>
                    <div class="">
                        <p class="pl-5 pt-5 nf-font-size">Vazifa</p>

                        <p class="pl-5 nf-chancellery-regstration-right-text pt-4 pb-2">
                            <span>Natija</span>
                            <span>Ma’lumot uchun</span>
                        </p>
                        <v-divider></v-divider>
                        <p class="pl-5 nf-chancellery-regstration-right-text pt-4 pb-2">
                            <span>Jo’natuvchi</span>
                            <span>Ж.Ш.Умурзоқов</span>
                        </p>
                        <v-divider></v-divider>
                        <p class="pl-5 nf-chancellery-regstration-right-text pt-4 pb-2">
                            <span>Nazoratchi</span>
                            <span>2020.01.13 18:40</span>
                        </p>
                        <v-divider></v-divider>
                        <p class="pl-5 nf-chancellery-regstration-right-text pt-4 pb-2">
                            <span>Yuborish sanasi</span>
                            <span>Advokatga yuborish</span>
                        </p>
                        <v-divider></v-divider>
                        <p class="pl-5 nf-chancellery-regstration-right-text pt-4 pb-2">
                            <span>Юрист</span>
                            <span></span>
                        </p>
                        <v-divider></v-divider>
                        <p class="pl-5 nf-chancellery-regstration-right-text pt-4 pb-2">
                            <span>Mazmuni</span>
                            <span class="ml-3">Ўрнатилган тартибда кўриб чиқиб, маълумот ва
                        ишда қўллаш учун.</span>
                        </p>
                        <v-divider></v-divider>

                        <p class="pl-5 nf-chancellery-regstration-right-text pt-4 pb-2">
                            <span>Maqom</span>
                            <span>Ish jarayonida</span>
                        </p>
                        <v-divider></v-divider>

                    </div>
                    <div class="nf-chancellery-regstration-right-img pa-5">
                        <div>
                            <img src="../../assets/images/registration.png" alt="">
                        </div>
                        <div>
                            <p class="nf-sime">"Стройснаб" АЖ</p>
                            <p>"2020.01.13 18:40</p>
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div class="pa-5">
                        <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                            Ro'yxatdan o'tish
                        </v-btn>
                    </div>


                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {

        data: () => ({
            menu2: '',
            date: new Date().toISOString().substr(0, 10),
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }),
    };
</script>
