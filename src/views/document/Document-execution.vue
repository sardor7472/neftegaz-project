<template xmlns:v-slot="v-slo//www.w3.org/1999/XSL/Transform">
    <v-container class="pl-9 pr-9 pl-lg-4 pr-lg-4">
        <v-row>
            <v-col lg="8" xl="8">
                <ul class="nf-info-top-list nf-bottom-line pb-4">
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
                <ul class="nf-document-dep-center-list nf-bottom-line pb-4 pt-4">
                    <router-link to="/document-document">
                        <li class="active">Hujjat</li>
                    </router-link>
                    <router-link to="/document-send">
                        <li>Yuborish</li>
                    </router-link>
                    <router-link to="/document-history">
                        <li>Topshiriqlar tarixi</li>
                    </router-link>
                    <router-link to="/document-execution">
                        <li>Ijro qadamlari</li>
                    </router-link>
                    <router-link to="/document-control">
                        <li> Nazorat punktlari</li>
                    </router-link>
                    <router-link to="/document-related">
                        <li>Bog‘liq hujjatlar</li>
                    </router-link>
                </ul>
                <template>
                    <v-treeview :items="items"></v-treeview>
                </template>
            </v-col>
            <v-col class="nf-vertical-left-line pt-xl-12" lg="4" xl="4">
                <div class="nf-font-size pl-xl-12">
                    Vazifa
                </div>
                <div>
                    <p class="assistend-otpravet-right-list pl-xl-12">
                        <span>Natija</span> <span>Ruxsat berish uchun</span>
                    </p>
                    <v-divider></v-divider>
                    <p class="assistend-otpravet-right-list pl-xl-12">
                        <span>Jo’natuvchi</span> <span>Ж.Ш.Умурзоқов</span>
                    </p>
                    <v-divider></v-divider>
                    <p class="assistend-otpravet-right-list pl-xl-12">
                        <span>Nazoratchi</span>
                    </p>
                    <v-divider></v-divider>
                    <p class="assistend-otpravet-right-list pl-xl-12">
                        <span>Yuborish sanasi</span> <span>2020.01.13 18:40</span>
                    </p>
                    <v-divider></v-divider>
                    <p class="assistend-otpravet-right-list pl-xl-12">
                        <span>Юрист</span> <span class="link-color">Advokatga yuborish</span>
                    </p>
                    <v-divider></v-divider>
                    <p class="assistend-otpravet-right-list pl-xl-12">
                        <span>Maqom</span> <span class="link-color">Ish jarayonida</span>
                    </p>
                    <v-divider></v-divider>
                </div>
                <p class="assistend-otpravet-right-list pl-xl-12">
                    <span>Х.А.Рахимов</span> <span class="link-color">2020.01.14 12:34</span>
                </p>
                <v-divider></v-divider>
                <p class="assistend-otpravet-right-list pl-xl-12">
                    <span>Х.А.Рахимов</span> <span class="link-color">2020.01.14 12:34</span>
                </p>
                <v-divider></v-divider>
                <p class="assistend-otpravet-right-list pl-xl-12">
                    <span>С.Э.Маллаев</span> <span class="base-color">O'qilmagan</span>
                </p>
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