<template xmlns:v-slot="v-slo//www.w3.org/1999/XSL/Transform">
    <v-container class="pr-xl-9 pl-xl-9 pr-lg-4 pl-lg-4">
        <p class="uzbekneftegaz-new-title">Hujjat yaratmoq</p>
        <v-row>
            <v-col xl="4">
                <p class="chancellery-send-doc-paragraph"> Hujjat ko’rinishi<span>*</span></p>
                <v-autocomplete
                        outlined
                        class="nf-bor-radius mt-4"
                        v-model="value"
                        :items="items"
                        dense
                        label="Исходящий документ"
                ></v-autocomplete>

                <p class="chancellery-send-doc-lable">Hujjat turi </p>
                <v-autocomplete
                        outlined
                        class="nf-bor-radius mt-4"
                        v-model="value"
                        :items="items"
                        dense
                        label="Протокол"
                ></v-autocomplete>


                <p>Qo`shish</p>
                <v-radio-group class="chancellery-jurnal-radio" row v-model="radios">
                    <v-radio label="Hujjat nomi" value="radio-1"></v-radio>
                    <v-radio label="Boshqa hujjatga asosan" value="radio-2"></v-radio>
                </v-radio-group>
                    <v-dialog
                            v-model="dialog"
                            width="700"
                    >
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    color="#0092c8"
                                    dark
                                    v-on="on"
                                    class="uzbekneftegaz-new-btn pa-1 ma-1"
                            >
                                hujjatni tanlash
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title
                                    class="headline "
                                    primary-title
                            >
                                Tashkilot nomini toliq kiriting
                            </v-card-title>

                            <v-card-text>

                                <v-row>
                                    <v-col>
                                    <p class="chancellery-send-doc-paragraph">Rus tilidagi nomi<span>*</span></p>
                                    <v-text-field
                                            dense
                                            outlined
                                            class="nf-bor-radius mt-4">
                                    </v-text-field>
                                </v-col>
                                <v-col>
                                    <p class="chancellery-send-doc-paragraph">O’zbeak tilidagi nomi <span>*</span></p>
                                    <v-text-field
                                            dense
                                            outlined
                                            class="nf-bor-radius mt-4">
                                    </v-text-field>
                                </v-col>
                            </v-row>


        </v-card-text>


        <v-card-title
                class="headline lighten-2"
                primary-title
        >
            <v-spacer></v-spacer>
            <v-btn class="nf-bor-radius ml-5 white--text" color="#ff7d31" large>
                bekor qilmoq
            </v-btn>
            <v-btn class="nf-bor-radius white--text ml-3" color="#00a5e2" large>
                saqlash
            </v-btn>
        </v-card-title>
        </v-card>
        </v-dialog>

                    <v-dialog
                            v-model="dialog2"
                            width="700"
                    >
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    color="#ff7d31"
                                    dark
                                    v-on="on"
                                    class="uzbekneftegaz-new-btn ma-1 pa-1"
                            >
                                asosiy hujjat
                            </v-btn>

                        </template>

                        <v-card>
                            <v-card-title
                                    class="headline "
                                    primary-title
                            >
                                Qabul qiluvchilarni tanlang
                            </v-card-title>

                            <v-card-text>
                                <v-row>
                                    <v-col xl="9">
                                        <v-text-field
                                                dense
                                                outlined
                                                label="Kiruvchi raqamni kiriting"
                                                class="nf-bor-radius">
                                        </v-text-field>
                                    </v-col>
                                    <v-col xl="3">
                                        <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                                            qo’shish
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-card-title
                                    class="headline lighten-2"
                                    primary-title
                            >
                                <v-spacer></v-spacer>
                                <v-btn class="nf-bor-radius ml-5 white--text" color="#ff7d31" large>
                                    OK
                                </v-btn>
                                <v-spacer></v-spacer>
                            </v-card-title>
                        </v-card>
                    </v-dialog>
                    <v-dialog
                            v-model="dialog3"
                            width="700"
                    >
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    color="#0092c8"
                                    dark
                                    v-on="on"
                                    class="uzbekneftegaz-new-btn ml-1 pa-1"
                            >
                                qabul qiluvchini tanlang
                            </v-btn>

                        </template>

                        <v-card>
                            <v-card-title
                                    class="headline "
                                    primary-title
                            >
                                Kiruvchi asos hujjatni qidirish
                            </v-card-title>

                            <v-card-text>
                                <div class="mt-3">
                                    <v-btn
                                            color="#fff"
                                            v-on="on"
                                            class="uzbekneftegaz-new-btn nf-uzbekneftegaz-new-border"
                                    >
                                        kiruvchilar bo’yicha
                                    </v-btn>
                                    <v-btn
                                            v-on="on"
                                            class="uzbekneftegaz-new-btn nf-uzbekneftegaz-new-border active ml-3"
                                    >
                                        Chiquvchilar bo’yicha
                                    </v-btn>
                                </div>
                                <v-row class="mt-3">
                                    <v-col xl="9">
                                        <v-text-field
                                                dense
                                                outlined
                                                label="Kiruvchi raqamni kiriting"
                                                class="nf-bor-radius">
                                        </v-text-field>
                                        <p class="uzbekneftegaz-new-modal-desc">Kirish raqamini (yoki qismini) kiritib "Qidirish" tugmasini bosing</p>
                                    </v-col>
                                    <v-col xl="3">
                                        <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                                            qidirish
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-text>

                            <v-card-title
                                    class="headline lighten-2"
                                    primary-title
                            >
                                <v-spacer></v-spacer>
                                <v-btn class="nf-bor-radius ml-5 white--text" color="#ff7d31" large>
                                    saqlash
                                </v-btn>
                                <v-spacer></v-spacer>
                            </v-card-title>
                        </v-card>
                    </v-dialog>

        <p class="mt-3 ">Ro’yhatga olish jurnali</p>
        <v-autocomplete
                outlined
                class="nf-bor-radius mt-4"
                v-model="value"
                :items="items"
                dense
                label="Исходящее письмо-Исходящее письмо"
        ></v-autocomplete>
        <p class="mt-2 ">Raxbar indeksi</p>
        <v-autocomplete
                outlined
                class="nf-bor-radius mt-4"
                v-model="value"
                :items="items"
                dense
                label="01"
        ></v-autocomplete>
        <div class="row pa-3 justify-space-between">

            <div>
                <p>Chiqish raqami</p>
                <v-text-field
                        outlined
                        dense
                        class="nf-bor-radius per-input-element mt-4">

                </v-text-field>
            </div>
            <div>
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
                                class="nf-bor-radius per-input-element mt-4">
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
            </div>
        </div>

        <v-radio-group class="chancellery-jurnal-radio" row v-model="radios">
            <v-radio label="DSP/XDFU" value="radio-1"></v-radio>
        </v-radio-group>
        </v-col>
        <v-col xl="6">
            <p class="chancellery-send-doc-paragraph">Hujjat nomi <span>*</span></p>
            <v-text-field
                    dense
                    outlined
                    class="nf-bor-radius mt-4">
            </v-text-field>

            <p class="chancellery-send-doc-paragraph">Qisqa mazmuni <span>*</span></p>
            <v-textarea
                    outlined
                    name="input-7-4"
                    label="Qisqa mazmuni"
                    class="nf-bor-radius mt-4"
            ></v-textarea>

            <div class="chancellery-send-doc-blog-btn">
                <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                    Qidirish
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
            dialog: false,
            dialog2: false,
            dialog3: false,

        }),
    };
</script>
