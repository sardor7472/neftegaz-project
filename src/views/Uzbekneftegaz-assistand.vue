<template xmlns:v-slot="v-slo//www.w3.org/1999/XSL/Transform">
    <v-container class="pl-9 pr-9 pl-lg-4 pr-lg-4">
        <v-row>
            <v-col lg="3" xl="3">
                <p>{{$t('Listofdocuments')}}</p>
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
                    <li>{{$t('Local')}}</li>
                    <li>{{$t('From above')}}</li>
                </ul>
                <div class="pa-2 nf-resolution-document">
                    <p class="nf-resolution-document-number "><span class="nf-sime">3/5-346</span><span>Кеча соат 17:00 да</span></p>
                    <p class="nf-resolution-document-text  mt-4">Hujjatning qisqacha mazmuni</p>
                    <p class="nf-resolution-document-order  mt-4">
                        <span class="nf-sime">Приказ № 13 от 13.01.2020г</span><span>Bildirgi</span></p>
                </div>
                <div class="pa-2 nf-resolution-document">
                    <p class="nf-resolution-document-number "><span class="nf-sime">3/5-346</span><span>Кеча соат 17:00 да</span></p>
                    <p class="nf-resolution-document-text  mt-4">Hujjatning qisqacha mazmuni</p>
                    <p class="nf-resolution-document-order  mt-4">
                        <span class="nf-sime">Приказ № 13 от 13.01.2020г</span><span>Bildirgi</span></p>
                </div>
                <div class="pa-2 nf-resolution-document active">
                    <p class="nf-resolution-document-number "><span class="nf-sime">3/5-346</span><span>Кеча соат 17:00 да</span></p>
                    <p class="nf-resolution-document-text  mt-4">Hujjatning qisqacha mazmuni</p>
                    <p class="nf-resolution-document-order  mt-4">
                        <span class="nf-sime">Приказ № 13 от 13.01.2020г</span><span>Bildirgi</span></p>
                </div>
                <v-dialog
                        width="300"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                                color="#0092c8"
                                dark
                                v-on="on"
                                class="uzbekneftegaz-new-btn pa-1"
                        >
                           modalka hujjatni tanlash
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title
                                class="headline "
                                primary-title
                        >
                            Qayta yo'naltirilsinmi?
                        </v-card-title>
                        <v-card-title
                                class="headline lighten-2"
                                primary-title
                        >
                            <v-spacer></v-spacer>
                            <v-btn class="nf-bor-radius white--text ml-3" color="#00a5e2" large>
                                ha
                            </v-btn>
                            <v-btn class="nf-bor-radius ml-5 white--text" color="#ff7d31" large>
                                yoq
                            </v-btn>
                            <v-spacer></v-spacer>
                        </v-card-title>
                    </v-card>
                </v-dialog>
            </v-col>
            <v-col class="nf-vertical-left-line" lg="6" xl="6">
                <ul class="nf-resolution-center-list mb-2">
                    <li> {{$t('Resolution')}}</li>
                    <li>{{$t('document')}}</li>
                    <li>{{$t('Historyassignments')}}</li>
                    <li>{{$t('Executionsteps')}}</li>
                </ul>
                <v-divider></v-divider>

                <div class="pt-5">
                    <p class="mt-5 ">{{$t('Registrationlog')}}</p>
                    <v-autocomplete
                            outlined
                            class="nf-bor-radius mt-2"
                            :items="items"
                            dense
                            label="Ijro uchun"
                    ></v-autocomplete>
                    <p class="chancellery-send-doc-paragraph">{{$t('Executiontime')}}</p>
                    <v-text-field
                            dense
                            outlined
                            label="22.01.2020"
                            class="nf-bor-radius mt-2">
                    </v-text-field>
                    <v-radio-group class="chancellery-jurnal-radio" row>
                        <v-radio :label="$t('Staff')" value="radio-1"></v-radio>
                        <v-radio :label="$t('Relevantorganizations')" value="radio-2"></v-radio>
                        <v-radio :label="$t('Regionaldivisions')" value="radio-3"></v-radio>
                    </v-radio-group>
                    <p class="nf-sime">
                        Д.Руслан <span class="ml-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="12px" height="12px"><path
                                fill="#a8a8a8"
                                d="M21 24.15L8.857 36.293 4.707 32.143 16.85 20 4.707 7.857 8.857 3.707 21 15.85 33.143 3.707 37.293 7.857 25.15 20 37.293 32.143 33.143 36.293z"></path><path
                                fill="#c74343"
                                d="M33.143,4.414l3.443,3.443L25.15,19.293L24.443,20l0.707,0.707l11.436,11.436l-3.443,3.443 L21.707,24.15L21,23.443l-0.707,0.707L8.857,35.586l-3.443-3.443L16.85,20.707L17.557,20l-0.707-0.707L5.414,7.857l3.443-3.443 L20.293,15.85L21,16.557l0.707-0.707L33.143,4.414 M33.143,3L21,15.143L8.857,3L4,7.857L16.143,20L4,32.143L8.857,37L21,24.857 L33.143,37L38,32.143L25.857,20L38,7.857L33.143,3L33.143,3z">
                        </path></svg>
                    </span>
                    </p>
                    <p class="nf-sime">
                        Ж.Т.Жураев
                        <span class="ml-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="12px" height="12px"><path
                                    fill="#a8a8a8"
                                    d="M21 24.15L8.857 36.293 4.707 32.143 16.85 20 4.707 7.857 8.857 3.707 21 15.85 33.143 3.707 37.293 7.857 25.15 20 37.293 32.143 33.143 36.293z"></path><path
                                    fill="#c74343"
                                    d="M33.143,4.414l3.443,3.443L25.15,19.293L24.443,20l0.707,0.707l11.436,11.436l-3.443,3.443 L21.707,24.15L21,23.443l-0.707,0.707L8.857,35.586l-3.443-3.443L16.85,20.707L17.557,20l-0.707-0.707L5.414,7.857l3.443-3.443 L20.293,15.85L21,16.557l0.707-0.707L33.143,4.414 M33.143,3L21,15.143L8.857,3L4,7.857L16.143,20L4,32.143L8.857,37L21,24.857 L33.143,37L38,32.143L25.857,20L38,7.857L33.143,3L33.143,3z">
                            </path>
                            </svg>
                        </span>
                    </p>
                    <ul class="assistend-otpravet-center-menu mt-5">
                        <li>{{$t('Thatall')}}</li>
                        <li>{{$t('Fornow')}}/{{$t('Subsections')}}</li>
                    </ul>
                    <v-text-field
                            outlined
                            dense
                            label="Qidirish..."
                            class="nf-bor-radius per-input-element mt-4">
                        <template v-slot:append>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1"
                                 enable-background="new 0 0 515.558 515.558" height="20" viewBox="0 0 515.558 515.558"
                                 width="25">
                                <path fill="#00a5e2"
                                      d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"/>
                            </svg>
                        </template>
                    </v-text-field>
                    <div class="">
                        <vue-custom-scrollbar class="scroll-area pr-4" :settings="settings" @ps-scroll-y="scrollHanle">
                            <p class="pt-3 pb-1">
                                <span class="nf-sime">Д.Руслан</span><span class="ml-5">
                                Делопроизводитель | Отдел по внедрению информационных
                                систем
                            </span>
                            </p>
                            <v-divider></v-divider>
                            <p class="pt-3 pb-1">
                                <span class="nf-sime">Д.Руслан</span><span class="ml-5">
                                Делопроизводитель | Отдел по внедрению информационных
                                систем
                            </span>
                            </p>
                            <v-divider></v-divider>
                            <p class="pt-3 pb-1">
                                <span class="nf-sime">Д.Руслан</span><span class="ml-5">
                                Делопроизводитель | Отдел по внедрению информационных
                                систем
                            </span>
                            </p>
                            <v-divider></v-divider>
                        </vue-custom-scrollbar>
                    </div>
                    <div class="mt-5">
                        <v-radio-group class="chancellery-jurnal-radio" row>
                            <v-radio label="Ўзбекча" value="radio-1"></v-radio>
                            <v-radio label="Русский" value="radio-2"></v-radio>
                        </v-radio-group>
                    </div>
                    <div class="">
                        <vue-custom-scrollbar class="scroll-area pr-4" :settings="settings" @ps-scroll-y="scrollHanle">
                            <p class="assistend-otpravet-center-scrol-item">
                                Ўрнатилган тартибда ишлаш учун.
                            </p>
                            <p class="assistend-otpravet-center-scrol-item">
                                Ўрнатилган тартибда ишлаш учун.
                            </p>
                            <p class="assistend-otpravet-center-scrol-item">
                                Ўрнатилган тартибда ишлаш учун.
                            </p>
                            <p class="assistend-otpravet-center-scrol-item">
                                Ўрнатилган тартибда ишлаш учун.
                            </p>
                            <p class="assistend-otpravet-center-scrol-item">
                                Ўрнатилган тартибда ишлаш учун.
                            </p>
                            <p class="assistend-otpravet-center-scrol-item">
                                Ўрнатилган тартибда ишлаш учун.
                            </p>
                        </vue-custom-scrollbar>
                    </div>
                    <div class="mt-5">
                        <p class="chancellery-send-doc-paragraph">{{$t('Description')}} <span>*</span></p>
                        <v-textarea
                                outlined
                                name="input-7-4"
                                label="Qisqa mazmuni"
                                class="nf-bor-radius mt-2"
                        ></v-textarea>
                    </div>
                    <div class="assistend-otpravet-center-radio-element">
                        <p>("Ўзбекнефтгаз" АЖ) Mas’ul ijrochi:</p>
                        <v-radio-group class="chancellery-jurnal-radio ml-8" row>
                            <v-radio label="ha" value="radio-1"></v-radio>
                            <v-radio label="yo'q" value="radio-2"></v-radio>
                        </v-radio-group>
                    </div>
                    <p class="">{{$t('Executor')}}</p>
                    <v-autocomplete
                            outlined
                            class="nf-bor-radius mt-2"
                            :items="items"
                            dense
                            label="Ko‘rsatilmagan"
                    ></v-autocomplete>

                    <v-radio-group class="chancellery-jurnal-radio" row>
                        <v-radio label="Dublikat" value="radio-1"></v-radio>
                    </v-radio-group>
                    <v-autocomplete
                            outlined
                            class="nf-bor-radius"
                            :items="items"
                            dense
                            label="Har chorakda"
                    ></v-autocomplete>
                    <div class="assistend-otpravet-center-btn">
                        <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                            Yuborish
                        </v-btn>

                        <v-btn class="nf-bor-radius ml-5 white--text" color="#ff7d31" large>
                            Bekor qilish
                        </v-btn>
                    </div>

                </div>

            </v-col>
            <v-col class="nf-vertical-left-line" lg="3" xl="3">
                <div class="nf-font-size mt-5">
                    Vazifa
                </div>
                <div>
                    <p class="assistend-otpravet-right-list">
                        <span>Natija</span> <span>Ruxsat berish uchun</span>
                    </p>
                    <v-divider></v-divider>
                    <p class="assistend-otpravet-right-list">
                        <span>Jo’natuvchi</span> <span>Ж.Ш.Умурзоқов</span>
                    </p>
                    <v-divider></v-divider>
                    <p class="assistend-otpravet-right-list">
                        <span>Nazoratchi</span>
                    </p>
                    <v-divider></v-divider>
                    <p class="assistend-otpravet-right-list">
                        <span>Yuborish sanasi</span> <span>2020.01.13 18:40</span>
                    </p>
                    <v-divider></v-divider>
                    <p class="assistend-otpravet-right-list">
                        <span>Юрист</span> <span class="link-color">Advokatga yuborish</span>
                    </p>
                    <v-divider></v-divider>
                    <p class="assistend-otpravet-right-list">
                        <span>Maqom</span> <span class="base-color">Ish jarayonida</span>
                    </p>
                    <v-divider></v-divider>
                </div>
                <div class="">
                    <div class="assistend-otpravet-right-blog pt-3 pb-3">
                        <span class="assistend-otpravet-right-blog-cricle">Ж</span>
                        <div class="ml-3">
                            <p>Ж.Ш.Умурзоқов</p>
                            <p class="base-color nf-font-size16">O`qilmagan</p>
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <div class="mt-3">
                        <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                            Ruxsat berish
                        </v-btn>
                    </div>
                    <div class="mt-3">
                        <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                            Punktlar bilan Ruxsat berish
                        </v-btn>
                    </div>
                    <div class="mt-3">
                        <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                            Hujjatni qayta yo'naltirish
                        </v-btn>
                    </div>
                    <div>
                        <v-autocomplete
                                outlined
                                class="nf-bor-radius mt-4"
                                :items="items"
                                dense
                                label="Qabul qiluvchini tanlang"
                        ></v-autocomplete>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import vueCustomScrollbar from 'vue-custom-scrollbar'

    export default {
        components: {
            vueCustomScrollbar
        },
        data() {
            return {
                settings: {
                    suppressScrollX: true,
                },
                date: new Date().toISOString().substr(0, 10),
                items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            }
        },
        methods: {
            scrollHanle(evt) {
                console.log(evt)
            }
        }
    }
</script>
<style>
    .scroll-area {
        position: relative;
        margin: auto;
        width: 100%;
        height: 150px;
    }
</style>