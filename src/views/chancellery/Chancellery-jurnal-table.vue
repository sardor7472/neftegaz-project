<template xmlns:v-slot="v-slo//www.w3.org/1999/XSL/Transform">
    <div>
        <v-container class="pl-9 pr-9 pl-lg-4 pr-lg-4">
            <div class="chancellery-send-list-wrap pt-2 pb-2">
                <p class="chancellery-jurnal-link">
                    <router-link to="/chancellery-registration-document" class="nf-active pa-1">
                        Qabul qilingan yozishmalar
                    </router-link>
                </p>
                <p class="chancellery-jurnal-link">
                    <router-link to="/chancellery-inbox">
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
                    <router-link to="/chancellery-send" class="active"><span>
                    <svg height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                         viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve"
                         class="left-bar-icon"><path data-v-47182f1e="" fill="#fff" d="M740.3,527.3c-32.6,0-59.1,26.2-59.1,58.5V677h-563v-91.2c0-32.3-26.4-58.5-59-58.5    c-32.6,0-59.1,26.2-59.1,58.5v149.7c0,32.3,26.4,58.5,59.1,58.5h681.1c32.6,0,59-26.2,59-58.5V585.8    C799.4,553.5,772.9,527.3,740.3,527.3z M189.9,251.9h97.2v290.3c0,24.8,20.6,44.9,46.1,44.9h133.2c25.5,0,46.1-20.1,46.1-44.9    V251.9h97.2c8.5,0,16.2-5,19.5-12.7c3.3-7.7,1.5-16.5-4.6-22.4l-207-201.5c-9.8-9.6-25.8-9.6-35.6,0L175,216.9    c-6,5.9-7.8,14.7-4.5,22.4C173.7,246.9,181.4,251.9,189.9,251.9z"></path></svg>
                </span>
                        Chiquvchi hujjatlar</router-link>
                </p>
                <p class="chancellery-jurnal-link">
                    <router-link to="/chancellery-jurnal" class="active">
                        <span>
                            <svg height="12" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 800 741.9" enable-background="new 0 0 800 741.9" xml:space="preserve">
		                <path fill="#0092C8"
                              d="M286.4,741.9h228.8V0H286.4V741.9z M337.5,68.2H464v331.3H337.5V68.2z M337.1,452.2h127.3v57.1H337.1    V452.2z M337.1,562.1h127.3v57.1H337.1V562.1z M571.2,0v741.9H800V0H571.2z M622.3,68.2h126.5v331.3H622.3V68.2z M749.2,619.1    H621.9v-57.1h127.3V619.1z M749.2,509.3H621.9v-57.1h127.3V509.3z M1,741.9h228.8V0H1V741.9z M52.2,68.2h126.5v331.3H52.2V68.2z     M51.8,452.2h127.3v57.1H51.8V452.2z M51.8,562.1h127.3v57.1H51.8V562.1z"/>
                        </svg>
                          </span>
                        Jurnallar</router-link>
                </p>
            </div>
        </v-container>

        <v-divider></v-divider>
        <v-container class="pl-9 pr-9 pl-lg-4 pr-lg-4">
            <div class="mt-6">
                <p class="appeal-title">Hamma hujjatlar</p>
            </div>
            <template>
                <v-data-table
                        outline
                        :headers="headers"
                        :items="desserts"
                        :items-per-page="5"
                        class="elevation-1 nf-calendar-table mt-5"
                >
                <template v-slot:item.turi="{item}">
                    <v-btn
                            color="#00a5e2"
                            dark
                            class="uzbekneftegaz-new-btn pa-2"
                    >
                        Kiruvchi
                    </v-btn>
                </template>
                    <template v-slot:item.harakat="{item}">
                        <v-btn
                                color="#00a5e2"
                                dark
                                class="nf-bor-radius pa-2"
                        >
                            <svg height="19" width="19" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve">
                                <path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M380.2,800l84.1-84.1h336.3V800H380.2z M703.3,255.4L540.8,92.1  l69.4-69.8c28.1-28.1,73.6-28.1,101.6,0l72.5,72.8c21.7,21.8,21.7,57,0,78.9L703.3,255.4z M249.7,711.1L87.3,547.8l411.2-413.3  L661,297.8L249.7,711.1z M24.6,799.5c-13.3,3.2-25.3-8.7-22.4-22.1l41-185.3l162.4,163.3L24.6,799.5z"/>
                            </svg>
                        </v-btn>
                        <v-btn
                                color="#ff7d30"
                                dark
                                class="nf-bor-radius ml-5 pa-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="19px" height="19px">
                                <path fill="#fff" d="M21 24.15L8.857 36.293 4.707 32.143 16.85 20 4.707 7.857 8.857 3.707 21 15.85 33.143 3.707 37.293 7.857 25.15 20 37.293 32.143 33.143 36.293z"></path>
                                <path fill="#ff7d30" d="M33.143,4.414l3.443,3.443L25.15,19.293L24.443,20l0.707,0.707l11.436,11.436l-3.443,3.443 L21.707,24.15L21,23.443l-0.707,0.707L8.857,35.586l-3.443-3.443L16.85,20.707L17.557,20l-0.707-0.707L5.414,7.857l3.443-3.443 L20.293,15.85L21,16.557l0.707-0.707L33.143,4.414 M33.143,3L21,15.143L8.857,3L4,7.857L16.143,20L4,32.143L8.857,37L21,24.857 L33.143,37L38,32.143L25.857,20L38,7.857L33.143,3L33.143,3z">
                            </path></svg>
                        </v-btn>
                    </template>
                </v-data-table>
            </template>
            <v-row>
                <v-col xl="4">
                    <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                        Qidirish
                        <span class="ml-2"><svg height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve" class="left-bar-icon"><path data-v-47182f1e="" fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M736.6,470.6H470.4V737c0,34.7-28.2,62.9-62.9,62.9h-15.3  c-34.7,0-62.9-28.2-62.9-62.9V470.6H63.1C28.3,470.6,0,442.3,0,407.5v-14.9c0-34.9,28.3-63.1,63.1-63.1h266.2V63.1  c0-34.7,28.2-62.9,62.9-62.9h15.3c34.7,0,62.9,28.2,62.9,62.9v266.4h266.2c34.9,0,63.1,28.3,63.1,63.1v14.9  C799.7,442.3,771.5,470.6,736.6,470.6z">
                    </path>
                    </svg>
                    </span>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {
        data: () => ({
            date: new Date().toISOString().substr(0, 10),
            headers: [
                {
                    text: '№', value: 'id'
                },
                {
                    text: 'Dessert (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                { text: 'temp', value: 'calories' },
                { text: 'Fat (g)', value: 'fat' },
                { text: 'Carbs (g)', value: 'carbs' },
                { text: 'Turi (g)', value: 'turi' },
                { text: 'Harakat (%)', value: 'harakat' },
            ],
            desserts: [
                {
                    id: '1',
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    turi: 4.0,
                    harakat: '1%',
                },
                {
                    id: '2',
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    turi: 4.0,
                    harakat: '1%',
                },
            ],
        }),
    };
</script>
