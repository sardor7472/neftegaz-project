<template xmlns:v-slot="v-slo//www.w3.org/1999/XSL/Transform">
    <v-container class="pl-9 pr-9 pl-lg-4 pr-lg-4">
        <v-row>
            <v-col xl="3" lg="3" class="nf-vertical-right-line">
                <p>Hujjatlar ro'yxati</p>
                <v-text-field
                        outlined
                        dense
                        label="Qidirish..."
                        class="nf-bor-radius per-input-element mt-2">
                    <template v-slot:append>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1"
                             enable-background="new 0 0 515.558 515.558" height="20" viewBox="0 0 515.558 515.558"
                             width="25">
                            <path fill="#00a5e2"
                                  d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/>
                        </svg>
                    </template>

                </v-text-field>
                <ul class="nf-resolution-list">
                    <li> Barcha</li>
                    <li> С проектом фишки</li>
                </ul>
                <div class="nf-resolution-document pa-2">
                    <p class="nf-resolution-document-number"><span>3/5-346</span><span>Кеча соат 17:00 да</span></p>
                    <p class="nf-resolution-document-text mt-4">Hujjatning qisqacha mazmuni</p>
                    <p class="nf-resolution-document-order mt-4">
                        <span>Приказ № 13 от 13.01.2020г</span><span>Bildirgi</span></p>
                </div>
                <div class="nf-resolution-document pa-2">
                    <p class="nf-resolution-document-number"><span>3/5-346</span><span>Кеча соат 17:00 да</span></p>
                    <p class="nf-resolution-document-text mt-4">Hujjatning qisqacha mazmuni</p>
                    <p class="nf-resolution-document-order mt-4">
                        <span>Приказ № 13 от 13.01.2020г</span><span>Bildirgi</span></p>
                </div>
                <div class="nf-resolution-document pa-2">
                    <p class="nf-resolution-document-number"><span>3/5-346</span><span>Кеча соат 17:00 да</span></p>
                    <p class="nf-resolution-document-text mt-4">Hujjatning qisqacha mazmuni</p>
                    <p class="nf-resolution-document-order mt-4">
                        <span>Приказ № 13 от 13.01.2020г</span><span>Bildirgi</span></p>
                </div>

            </v-col>
            <v-col xl="6" lg="6">
                <ul class="nf-resolution-center-list nf-bottom-line pb-4">
                    <router-link tag="li" exact active-class="active" to="/uzbekneftegaz-resolution">
                        Резолюция
                    </router-link>
                    <router-link tag="li" active-class="active" to="/uzbekneftegaz-resolution-document">
                        Hujjat
                    </router-link>
                    <router-link tag="li" active-class="active" to="/uzbekneftegaz-resolution-history">
                        Topshiriqlar tarixi
                    </router-link>
                    <router-link tag="li" active-class="active" to="/uzbekneftegaz-resolution-execution">
                        Ijro qadamlari
                    </router-link>
                </ul>
                <div class="pl-3 mt-8">

                    <v-layout class="justify-space-around">
                        <v-flex>
                            <div>
                                <p class="uzbekneftegaz-resolution">Ro’yhatga olish jurnali</p>
                                <p>Приказы</p>
                            </div>

                        </v-flex>
                        <v-flex><p class="uzbekneftegaz-resolution">Ro’yhatga olish jurnali</p>
                            <p>Приказы</p></v-flex>
                        <v-flex><p class="uzbekneftegaz-resolution">Ro’yhatga olish jurnali</p>
                            <p>Приказы</p></v-flex>
                    </v-layout>
                    <v-layout class="justify-space-around mt-12">
                        <v-flex>
                            <div>
                                <p class="uzbekneftegaz-resolution">Ro’yhatga olish jurnali</p>
                                <p>Приказы</p>
                            </div>

                        </v-flex>
                        <v-flex><p class="uzbekneftegaz-resolution">Ro’yhatga olish jurnali</p>
                            <p>Приказы</p></v-flex>
                        <v-flex><p class="uzbekneftegaz-resolution">Ro’yhatga olish jurnali</p>
                            <p>Приказы</p></v-flex>
                    </v-layout>

                    <v-layout class="mt-12">
                        <v-flex>
                            <div>
                                <p class="uzbekneftegaz-resolution">Yuborishning dastlabki sanasi</p>
                                <p>2020.01.23</p>
                            </div>
                        </v-flex>
                        <v-flex>
                            <div>
                                <p class="uzbekneftegaz-resolution">Hujjat teglari</p>
                                <v-chip color="#00a5e2" class="text-uppercase" dark>qo'shish</v-chip>

                            </div>
                        </v-flex>
                    </v-layout>

                    <v-layout class="mt-12 pa-2 align-center">
                        <v-flex row>
                        <span>
                            <svg height="25" viewBox="-79 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="m353.101562 485.515625h-353.101562v-485.515625h273.65625l79.445312 79.449219zm0 0" fill="#e3e4d8"/><path d="m273.65625 0v79.449219h79.445312zm0 0" fill="#d0cebd"/><path d="m0 353.101562h353.101562v158.898438h-353.101562zm0 0" fill="#b53438"/><g fill="#fff"><path d="m52.964844 485.515625c-4.871094 0-8.828125-3.953125-8.828125-8.824219v-88.277344c0-4.875 3.957031-8.828124 8.828125-8.828124 4.875 0 8.828125 3.953124 8.828125 8.828124v88.277344c0 4.871094-3.953125 8.824219-8.828125 8.824219zm0 0"/><path d="m300.136719 397.242188h-52.964844c-4.871094 0-8.828125-3.957032-8.828125-8.828126 0-4.875 3.957031-8.828124 8.828125-8.828124h52.964844c4.875 0 8.828125 3.953124 8.828125 8.828124 0 4.871094-3.953125 8.828126-8.828125 8.828126zm0 0"/><path d="m300.136719 441.378906h-52.964844c-4.871094 0-8.828125-3.953125-8.828125-8.828125 0-4.871093 3.957031-8.828125 8.828125-8.828125h52.964844c4.875 0 8.828125 3.957032 8.828125 8.828125 0 4.875-3.953125 8.828125-8.828125 8.828125zm0 0"/><path d="m247.171875 485.515625c-4.871094 0-8.828125-3.953125-8.828125-8.824219v-88.277344c0-4.875 3.957031-8.828124 8.828125-8.828124 4.875 0 8.828125 3.953124 8.828125 8.828124v88.277344c0 4.871094-3.953125 8.824219-8.828125 8.824219zm0 0"/></g><path d="m170.203125 95.136719c-.863281.28125-11.695313 15.261719.847656 27.9375 8.351563-18.371094-.464843-28.054688-.847656-27.9375m5.34375 73.523437c-6.296875 21.496094-14.601563 44.703125-23.527344 65.710938 18.378907-7.042969 38.375-13.195313 57.140625-17.546875-11.871094-13.621094-23.738281-30.632813-33.613281-48.164063m65.710937 57.175782c7.167969 5.445312 8.914063 8.199218 13.613282 8.199218 2.054687 0 7.925781-.085937 10.636718-3.828125 1.316407-1.820312 1.828126-2.984375 2.019532-3.59375-1.074219-.574219-2.515625-1.710937-10.335938-1.710937-4.449218 0-10.027344.191406-15.933594.933594m-119.957031 38.601562c-18.804687 10.425781-26.464843 19-27.011719 23.835938-.089843.804687-.328124 2.90625 3.785157 6.011718 1.316406-.414062 8.96875-3.859375 23.226562-29.847656m-23.421875 44.527344c-3.0625 0-6-.980469-8.507812-2.832032-9.15625-6.796874-10.390625-14.347656-9.808594-19.492187 1.597656-14.132813 19.304688-28.945313 52.648438-44.03125 13.230468-28.636719 25.820312-63.921875 33.324218-93.398437-8.773437-18.871094-17.3125-43.351563-11.097656-57.714844 2.179688-5.03125 4.910156-8.894532 9.976562-10.566406 2.011719-.652344 7.078126-1.480469 8.941407-1.480469 4.617187 0 9.050781 5.507812 11.183593 9.089843 3.972657 6.648438 3.992188 14.390626 3.363282 21.859376-.609375 7.253906-1.84375 14.46875-3.265625 21.601562-1.039063 5.242188-2.214844 10.460938-3.46875 15.660156 11.855469 24.175782 28.644531 48.816406 44.746093 65.683594 11.539063-2.054688 21.460938-3.097656 29.546876-3.097656 13.761718 0 22.121093 3.167968 25.519531 9.691406 2.828125 5.402344 1.660156 11.726562-3.433594 18.769531-4.898437 6.769531-11.640625 10.34375-19.523437 10.34375-10.710938 0-23.15625-6.671875-37.050782-19.851562-24.957031 5.15625-54.097656 14.34375-77.65625 24.515625-7.355468 15.410156-14.398437 27.824218-20.964844 36.933594-8.996093 12.5-16.773437 18.316406-24.472656 18.316406" fill="#b53438"/><path d="m79.449219 450.207031h-26.484375c-4.871094 0-8.828125-3.953125-8.828125-8.828125v-52.964844c0-4.875 3.957031-8.828124 8.828125-8.828124h26.484375c19.472656 0 35.308593 15.835937 35.308593 35.3125 0 19.472656-15.835937 35.308593-35.308593 35.308593zm-17.65625-17.65625h17.65625c9.734375 0 17.652343-7.917969 17.652343-17.652343 0-9.738282-7.917968-17.65625-17.652343-17.65625h-17.65625zm0 0" fill="#fff"/><path d="m158.898438 485.515625h-8.828126c-4.875 0-8.828124-3.953125-8.828124-8.824219v-88.277344c0-4.875 3.953124-8.828124 8.828124-8.828124h8.828126c29.199218 0 52.964843 23.753906 52.964843 52.964843 0 29.210938-23.765625 52.964844-52.964843 52.964844zm0-17.652344h.085937zm0-70.621093v70.621093c19.472656 0 35.308593-15.839843 35.308593-35.3125 0-19.472656-15.835937-35.308593-35.308593-35.308593zm0 0" fill="#fff"/>
                            </svg>
                        </span>
                            <span class="ml-1">ПРИКАЗ № 13.PDF (2 MB)</span>
                        </v-flex>
                        <v-flex>
                            <span class="uzbekneftegaz-resolution-download">Yuklab olish</span>
                        </v-flex>
                    </v-layout>
                    <p class="mt-8">
                        ПРИКАЗ - №13 от 13.01.2020г. - О дополнительных мерах по бесперебойному
                        обеспечению потребителей нефтепродуктами
                    </p>
                    <p class="uzbekneftegaz-resolution-person mt-12 ">
                        Н.К.Шамсидинова
                    </p>
                </div>
            </v-col>
            <v-col xl="3" lg="3" class="nf-vertical-left-line">

                <div class="">

                    <div class="pa-xl-5 pa-lg-2">
                        <p>
                            <span class="uzbekneftegaz-resolution-prent">
                                <svg height="20" width="25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 801.4 734.3" enable-background="new 0 0 801.4 734.3" xml:space="preserve">
                                     <path fill="#444444" d="M284.9,641.7h231.4c14.7,0,26.7-11.8,26.7-26.3c0-14.5-12-26.3-26.7-26.3H284.9    c-14.8,0-26.7,11.8-26.7,26.3C258.2,629.9,270.2,641.7,284.9,641.7z M284.9,558.7h231.4c14.7,0,26.7-11.8,26.7-26.3    c0-14.5-12-26.3-26.7-26.3H284.9c-14.8,0-26.7,11.8-26.7,26.3C258.2,546.9,270.2,558.7,284.9,558.7z M738.9,178.7h-85V26.3    c0-14.5-12-26.3-26.7-26.3H174.1c-14.8,0-26.7,11.8-26.7,26.3v152.4h-85c-34.4,0-62.3,27.6-62.3,61.5v265    c0,33.9,27.9,61.5,62.3,61.5h85v141.4c0,14.5,12,26.3,26.7,26.3h453.1c14.8,0,26.7-11.8,26.7-26.3V566.6h85    c34.4,0,62.3-27.6,62.3-61.5v-265C801.2,206.3,773.2,178.7,738.9,178.7z M200.8,52.6h399.7v126.1H200.8V52.6z M600.5,681.6H200.8    V466.1h399.7V681.6z M627.2,333.3h-68c-14.8,0-26.7-11.8-26.7-26.3c0-14.5,12-26.3,26.7-26.3h68c14.7,0,26.7,11.8,26.7,26.3    C653.9,321.5,641.9,333.3,627.2,333.3z"/>
                                </svg>
                            </span>
                        </p>
                        <p class="text-uppercase headline mt-8">Отдел исследований</p>
                    </div>
                    <v-divider></v-divider>
                    <div class="pa-5">
                        <p>X.I.Ispolnitel</p>
                        <p>X.X.Xurshid</p>
                    </div>
                    <v-divider></v-divider>

                    <p class="pa-xl-5 pa-lg-2">Ўрнатилган тартибда кўриб чиқиб, ижросини таъминлаш учун.
                    </p>
                    <v-divider></v-divider>
                    <div class="pa-xl-5 pa-lg-2">
                        <p class="uzbekneftegaz-resolution-right-title">Ижро муддати</p>
                        <p class="">18.01.2020</p>

                        <p class="uzbekneftegaz-resolution-right-title mt-3">Приказ №13 от 13.01.2020</p>
                        <p class="">18.01.2020</p>
                        <p class="uzbekneftegaz-resolution-right-title mt-3">X.X.Xurshid</p>
                    </div>
                    <div class="pa-xl-5 pa-lg-2">
                        <v-btn class="nf-bor-radius pa-2 white--text" color="#00a5e2" large>
                            Tasdiqlash
                        </v-btn>
                        <v-btn class="nf-bor-radius pa-2 white--text ml-5" color="#ff7d31" large>
                            O’zgartirish
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
            date: new Date().toISOString().substr(0, 10),

        }),
    };
</script>
