<template xmlns:v-slot="v-slo//www.w3.org/1999/XSL/Transform">
    <v-container class="pl-9 pr-9 pl-lg-4 pr-lg-4">
        <v-row>
            <v-col lg="8" xl="8">
                <ul class="nf-info-top-list pb-4">
                    <li><span class="mr-2">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="12" height="12"
                             viewBox="0 0 123.969 123.97" style="enable-background:new 0 0 123.969 123.97;"
                             xml:space="preserve">
	<path d="M96.059,24.603c5.799-5.801,5.699-15.301-0.5-20.9c-5.801-5.3-14.801-4.8-20.301,0.8l-47.4,47.3
		c-2.8,2.801-4.2,6.5-4.2,10.2s1.4,7.4,4.2,10.2l47.3,47.3c5.5,5.5,14.6,6.101,20.3,0.8c6.101-5.6,6.3-15.1,0.5-20.899l-30.2-30.3
		c-3.9-3.9-3.9-10.2,0-14.101L96.059,24.603z"></path>
</svg>
                    </span>
                        Oldingi hujjat
                    </li>
                    <li>Keyingi hujjat
                        <span class="ml-2">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="12" height="12"
                             viewBox="0 0 123.97 123.97" style="enable-background:new 0 0 123.97 123.97;"
                             xml:space="preserve">
	<path d="M27.961,99.367c-5.8,5.8-5.7,15.3,0.5,20.899c5.8,5.301,14.8,4.801,20.3-0.8l47.3-47.3c2.8-2.8,4.2-6.5,4.2-10.2
		s-1.4-7.399-4.2-10.2l-47.2-47.3c-5.5-5.5-14.6-6.1-20.3-0.8c-6.1,5.6-6.3,15.1-0.5,20.9l30.2,30.399c3.9,3.9,3.9,10.2,0,14.101
		L27.961,99.367z"></path>
</svg>
                    </span>
                    </li>
                </ul>
                <v-divider></v-divider>
                <ul class="nf-document-dep-center-list pb-4 pt-4">
                    <router-link tag="li" exact active-class="active" to="/document-dep-document">
                        Hujjat
                    </router-link>
                    <router-link tag="li" active-class="active" to="/">Yuborish</router-link>
                    <router-link tag="li" active-class="active" to="/document-dep-history">
                        Topshiriqlar tarixi
                    </router-link>
                    <router-link tag="li" active-class="active" to="/document-dep-execution">
                        Ijro qadamlari
                    </router-link>
                    <router-link tag="li" active-class="active" to="/">Nazorat punktlari</router-link>
                    <router-link tag="li" active-class="active" to="/document-dep-related">
                        Bog‘liq hujjatlar
                    </router-link>
                </ul>
                <v-divider></v-divider>
                <template>
                    <v-treeview :items="items"></v-treeview>
                </template>
            </v-col>
            <v-col class="nf-vertical-left-line" lg="4" xl="4">

                <div>
                    <div class="nf-document-info pl-5 pt-5 pb-5">
                        <div>
                            <img src="../../assets/images/gerb.png" alt="">
                        </div>
                        <div class="nf-info-right-title">
                            "ЎЗБЕКНЕФТГАЗ" АЖ
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <ul class="nf-info-right-list pl-5 pt-5 pb-5">
                        <li>М.Р.Нурмухамедовга</li>
                        <li>А.А.Обидовга</li>
                        <li>А.М.Норкуловга</li>
                        <li>Д.А.Кашаповага</li>
                        <li>Д.З.Очиловга</li>
                        <li>А.М.Артикниязовга</li>
                        <li>У.Б.Саттаровга</li>
                        <li>М.М.Бобоёровга</li>
                    </ul>
                    <v-divider></v-divider>
                    <div class="pt-5 pb-5 pl-5">
                        Ўрнатилган тартибда кўриб чиқиб, маълумот ва ишда қўллаш ҳамда
                        тегишлилиги бўйича топшириқни бажариш учун.
                    </div>

                    <v-divider></v-divider>

                    <div class="pa-5">
                        <p class="uzbekneftegaz-resolution-right-title">Ижро муддати</p>
                        <p class="">18.01.2020</p>

                        <p class="uzbekneftegaz-resolution-right-title mt-3">Приказ №13 от 13.01.2020</p>
                        <p class="">18.01.2020</p>
                        <p class="uzbekneftegaz-resolution-right-title mt-3">X.X.Xurshid</p>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
    export default {
        data: () => ({
            items: [
                {
                    id: 1,
                    name: 'Hujjatni ro’yxatdan o’tkazish Н.К. Шамсидинова ',
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