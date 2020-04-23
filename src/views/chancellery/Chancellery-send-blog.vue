<template xmlns:v-slot="v-slo//www.w3.org/1999/XSL/Transform">
    <v-container class="pa-9">

        <v-row>
            <v-col xl="4">
                <p class="chancellery-send-doc-paragraph">Hujjat turi <span>*</span></p>
                <v-autocomplete
                        outlined
                        class="nf-bor-radius mt-2"
                        :items="items"
                        dense
                        label="Filled"
                ></v-autocomplete>

                <p class="chancellery-send-doc-lable">Hujjat turi </p>
                <v-autocomplete
                        outlined
                        class="nf-bor-radius mt-2"
                        :items="items"
                        dense
                        label="Filled"
                ></v-autocomplete>


                <p>Qo`shish</p>
                <v-radio-group class="chancellery-jurnal-radio" row v-model="radios">
                    <v-radio label="Nazorat-o'tkazish joylari" value="radio-1"></v-radio>
                    <v-radio label="Hujjat nomi" value="radio-2"></v-radio>
                </v-radio-group>

                <p>Qabul qiluvchilar</p>
                <div class="mt-5">
                    <p class="chancellery-send-doc-recipients-element">1.”Нефтегаз” АЖ</p>
                    <p class="chancellery-send-doc-recipients-element">2.”Стройснаб” АЖ</p>
                </div>
                <div class="mt-9">
                    <v-dialog
                            v-model="dialog"
                            width="600"

                    >
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    color="#0092c8"
                                    dark
                                    v-on="on"
                                    class="chancellery-send-doc-recipients"
                            >
                                Qabul qiluvchilarni tanlang
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
                                <p class="nf-sime">1.”Нефтегаз” АЖ <span class="ml-5"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="12px" height="12px"><path fill="#a8a8a8" d="M21 24.15L8.857 36.293 4.707 32.143 16.85 20 4.707 7.857 8.857 3.707 21 15.85 33.143 3.707 37.293 7.857 25.15 20 37.293 32.143 33.143 36.293z"></path><path fill="#c74343" d="M33.143,4.414l3.443,3.443L25.15,19.293L24.443,20l0.707,0.707l11.436,11.436l-3.443,3.443 L21.707,24.15L21,23.443l-0.707,0.707L8.857,35.586l-3.443-3.443L16.85,20.707L17.557,20l-0.707-0.707L5.414,7.857l3.443-3.443 L20.293,15.85L21,16.557l0.707-0.707L33.143,4.414 M33.143,3L21,15.143L8.857,3L4,7.857L16.143,20L4,32.143L8.857,37L21,24.857 L33.143,37L38,32.143L25.857,20L38,7.857L33.143,3L33.143,3z">
                                </path></svg>
                                </span>
                                </p>
                                <p class="chancellery-send-doc-paragraph mt-2">Qabul qiluvchilarni tanlang</p>
                                <div class="row align-start">
                                    <v-text-field
                                            dense
                                            outlined
                                            class="nf-bor-radius mt-2">
                                    </v-text-field>
                                    <button class="chancellery-send-doc-add grey lighten-2 ml-5 mt-2">
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
                                    <v-row>
                                        <v-col>
                                            <p class="chancellery-send-doc-paragraph">Rus tilidagi nomi <span>*</span></p>
                                            <v-text-field
                                                    dense
                                                    outlined
                                                    class="nf-bor-radius mt-2">
                                            </v-text-field>
                                        </v-col>
                                        <v-col>
                                            <p class="chancellery-send-doc-paragraph">O’zbek tilidagi nomi <span>*</span></p>
                                            <v-text-field
                                                    dense
                                                    outlined
                                                    class="nf-bor-radius mt-2">
                                            </v-text-field>
                                        </v-col>
                                    </v-row>
                                    <div class="nf-dialog-btn">
                                        <v-btn class="nf-bor-radius ml-5 white--text" color="#ff7d31" large>
                                            bekor qilmoq
                                        </v-btn>
                                        <v-btn class="nf-bor-radius white--text ml-5" color="#00a5e2" large>
                                            saqlash
                                        </v-btn>
                                    </div>
                                </div>
                            </v-card-text>

                            <v-card-title
                                    class="headline grey lighten-2"
                                    primary-title
                            >
                                <v-spacer></v-spacer>
                                <v-btn color="#ff7d31" class="white--text">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-title>
                        </v-card>
                    </v-dialog>
                </div>

                <p class="mt-9 ">Ro’yhatga olish jurnali</p>
                <v-autocomplete
                        outlined
                        class="nf-bor-radius mt-2"
                        :items="items"
                        dense
                        label="Filled"
                ></v-autocomplete>

                <div class="row pa-3 justify-space-between">

                    <div>
                        <p>Chiqish raqami</p>
                        <v-text-field
                                outlined
                                dense
                                label="Indeks / Prefiks"
                                class="nf-bor-radius per-input-element mt-2">

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
                    </div>
                </div>

                <v-radio-group class="chancellery-jurnal-radio" row v-model="radios">
                    <v-radio label="DSP" value="radio-1"></v-radio>
                </v-radio-group>
            </v-col>
            <v-col xl="6">
                <p class="chancellery-send-doc-paragraph">Hujjat nomi <span>*</span></p>
                <v-text-field
                        dense
                        outlined
                        class="nf-bor-radius mt-2">
                </v-text-field>

                <p class="chancellery-send-doc-paragraph">Hujjat nomi <span>*</span></p>
                <v-textarea
                        outlined
                        name="input-7-4"
                        label="Qisqa mazmuni"
                        class="nf-bor-radius mt-2"
                ></v-textarea>
                <div class="chancellery-send-doc-blog-btn">
                    <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                        saqlash
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

        }),
    };
</script>
