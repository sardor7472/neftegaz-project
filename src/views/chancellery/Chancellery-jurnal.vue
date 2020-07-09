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
        <v-container class="pl-9 pr-9 pl-lg-4 pr-lg-4">
            <v-row>
                <v-col cols="12">
                    <p class="chancellery-jurnal-title">
                        Jurnal
                    </p>
                </v-col>
            </v-row>
            <v-row class="">
                <v-col xl="4" class="pa-1">
                    <p>Indeks / Prefiks</p>
                    <div class="per-input">
                        <v-text-field
                                dense
                                outlined
                                label="4/"
                                class="nf-bor-radius mt-2">
                            <template v-slot:append>
                                <svg class="mt-2" height="12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 800 641.3" enable-background="new 0 0 800 641.3" xml:space="preserve">
                                    <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#29AA63" points="799.8,99.9 699.8,0 257.5,442.4 100.3,285.2 0.3,385.1     157.5,542.3 157.5,542.4 257.4,642.3 257.5,642.3 257.5,642.3 357.4,542.4 357.4,542.3   "/>
                            </svg>
                            </template>
                        </v-text-field>
                    </div>
                </v-col>
                <v-col xl="4" class="pa-1">
                    <p>Jurnal nomi (рус)</p>
                    <v-text-field
                            dense
                            outlined
                            class="nf-bor-radius mt-2">
                    </v-text-field>
                </v-col>

            </v-row>
            <v-row class="">

                <v-col xl="4" class="pa-1">
                    <div class="per-input">
                        <p>Jurnal nomi (uzb)</p>
                        <v-text-field
                                dense
                                outlined
                                class="nf-bor-radius mt-2">
                        </v-text-field>
                    </div>
                </v-col>


                <v-col xl="4" class="pa-1">
                    <p>Departamentni tanlang</p>
                    <v-autocomplete
                            outlined
                            class="nf-bor-radius mt-2"
                            :items="items"
                            dense
                            label="Filled"
                    ></v-autocomplete>
                </v-col>

            </v-row>
            <v-row>
                <v-col xl="4" class="pa-1">
                    <v-radio-group class="chancellery-jurnal-radio" row v-model="radios">
                        <v-radio label="Chiquvchi" value="radio-1"></v-radio>
                        <v-radio label="Kiruvchi" value="radio-2"></v-radio>
                        <v-radio label="Murojatlar" value="radio-3"></v-radio>
                        <v-radio label="Hujjat" value="radio-4"></v-radio>
                    </v-radio-group>
                </v-col>
            </v-row>
            <v-row class="">
                <v-col xl="4" class="pa-1">
                    <div>
                        <p class="chancellery-jurnal-save-title">
                            Kartoteka
                        </p>
                        <v-autocomplete
                                outlined
                                class="nf-bor-radius mt-2"
                                :items="items"
                                dense
                                label="Ko’rsatilmagan"
                        ></v-autocomplete>
                    </div>
                </v-col>
                <v-col xl="4" class="pa-1">
                    <v-btn class="nf-bor-radius white--text mt-8" color="#00a5e2" large>
                        saqlash
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>

</template>
<script>
    export default {

        data: () => ({
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            radios: 'radio-3',

        }),

    };
</script>
