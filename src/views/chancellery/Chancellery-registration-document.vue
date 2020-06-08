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
        <v-container class="pl-9 pr-9 pl-lg-4 pr-lg-4 mt-5">
            <v-row>
                <v-col xl="8">
                    <div class="appeal-blog">
                        <p class="appeal-title">Qabul qilingan yozishmalar</p>
                        <v-btn class="nf-bor-radius white--text" color="#00a5e2" large>
                            hujjat yaratish
                        </v-btn>
                    </div>
                    <div class="mt-6">
                        <template>
                            <v-data-table
                                    outline
                                    :headers="headers"
                                    :items="desserts"
                                    :items-per-page="5"
                                    class="elevation-1 nf-calendar-table"
                            >
                                <template v-slot:item="{ item }">
                                    <tr
                                            :key="item.id"
                                            @click="$router.push({name: 'chancellery-jurnal', params: {cardId: item.id}})"
                                            class="tr-class">
                                        <td>{{ item.id }}</td>
                                        <td>{{ item.name }}</td>
                                        <td>
                                            {{ item.calories }}
                                        </td>
                                    </tr>
                                </template>

                            </v-data-table>
                        </template>
                    </div>
                    <ul class="nf-chancellery-regstration-doc-pagination">
                        <li class="nf-chancellery-regstration-doc-pagination-arrow">
                            <svg height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 412.3 412.3" enable-background="new 0 0 412.3 412.3" xml:space="preserve">
                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#D9D9D9" d="M317.2,412.3h-222C42.6,412.3,0,369.7,0,317.2v-222  C0,42.6,42.6,0,95.2,0h222c52.6,0,95.2,42.6,95.2,95.2v222C412.3,369.7,369.7,412.3,317.2,412.3z M404.4,103.1  c0-52.6-42.6-95.2-95.2-95.2H103.1c-52.6,0-95.2,42.6-95.2,95.2v206.2c0,52.6,42.6,95.2,95.2,95.2h206.2c52.6,0,95.2-42.6,95.2-95.2  V103.1z M182.4,235l-10.8,10.8l-36.7-36.7l2.9-2.9l-2.9-2.9l36.7-36.7l10.8,10.8l-20.9,20.9h116v15.9h-116L182.4,235z"/>
                    </svg>
                        </li>
                        <li>1</li>
                        <li class="nf-chancellery-regstration-doc-pagination-arrow">
                            <svg height="50px" width="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 412.3 412.3" enable-background="new 0 0 412.3 412.3" xml:space="preserve">
                    <path fill-rule="evenodd" clip-rule="evenodd" fill="#D9D9D9" d="M0,317.2l0-222C0,42.6,42.6,0,95.2,0l222,0  c52.6,0,95.2,42.6,95.2,95.2v222c0,52.6-42.6,95.2-95.2,95.2h-222C42.6,412.3,0,369.7,0,317.2z M7.9,309.2  c0,52.6,42.6,95.2,95.2,95.2h206.2c52.6,0,95.2-42.6,95.2-95.2V103.1c0-52.6-42.6-95.2-95.2-95.2H103.1c-52.6,0-95.2,42.6-95.2,95.2  V309.2z M250.8,214.1h-116v-15.9h116L230,177.4l10.8-10.8l36.7,36.7l-2.9,2.9l2.9,2.9l-36.7,36.7L230,235L250.8,214.1z"/>
                    </svg>
                        </li>
                    </ul>
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
                {text: 'temp', value: 'calories'},
            ],
            desserts: [
                {
                    id: '1',
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
                {
                    id: '2',
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
            ],
        }),
    };
</script>
