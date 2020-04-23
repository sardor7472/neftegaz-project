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
                    <router-link to="/uzbekneftegaz-resolution">
                        <li class="active"> Резолюция</li>
                    </router-link>
                    <router-link to="/uzbekneftegaz-resolution-document">
                        <li>Hujjat</li>
                    </router-link>
                    <router-link to="/uzbekneftegaz-resolution-history">
                        <li>Topshiriqlar tarixi</li>
                    </router-link>
                    <router-link to="/uzbekneftegaz-resolution-execution">
                        <li>Ijro qadamlari</li>
                    </router-link>
                </ul>
                <template>
                    <v-treeview :items="items"></v-treeview>
                </template>
            </v-col>
            <v-col xl="3" lg="3" class="nf-vertical-left-line">

                <div class="">

                    <div class="pa-xl-5 pa-lg-2">
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
            items: [
                {
                    id: 1,
                    name: '<span>Hujjatni ro’yxatdan o’tkazish </span>      Н.К. Шамсидинова ',
                    children: [
                        {
                            id: 2,
                            name: 'Bajarish uchun       ПРИКАЗ - №13 от 13.01.2020г. - О дополнительных мерах по бесперебойному... ',
                            children: [
                                {
                                    id: 3,
                                    name: 'src :',
                                    children: [
                                        { id: 4, name: 'index : ts' },
                                        { id: 5, name: 'bootstrap : ts' },
                                    ],
                                },
                            ],
                        },
                        {
                            id: 6,
                            name: 'material2 :',
                            children: [
                                {
                                    id: 7,
                                    name: 'src :',
                                    children: [
                                        { id: 8, name: 'v-btn : ts' },
                                        { id: 9, name: 'v-card : ts' },
                                        { id: 10, name: 'v-window : ts' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 11,
                    name: 'Hujjatni ro’yxatdan o’tkazish       Р.К.Медитова',
                    children: [
                        {
                            id: 12,
                            name: 'Tutorials :',
                            children: [
                                { id: 13, name: 'Basic layouts : mp4' },
                                { id: 14, name: 'Advanced techniques : mp4' },
                                { id: 15, name: 'All about app : dir' },
                            ],
                        },
                        { id: 16, name: 'Intro : mov' },
                        { id: 17, name: 'Conference introduction : avi' },
                    ],
                },
            ],
        }),
    }
</script>