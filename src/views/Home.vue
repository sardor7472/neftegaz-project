<template>
    <v-container>
        <v-row class="pr-9 pl-9 pr-lg-4 pl-lg-4 pr-md-0 pl-md-0 mt-7">
            <v-col xl="9" lg="8" md="8" class="nf-calendar">
                <template>
                    <div class="main-calendar-right">
                        <p class="main-calendar-right-title">Nazoratdagi topshiriqlar kalendari</p>
                        <span class="main-calendar-right-span">Meniki</span>
                    </div>
                    <v-row class="fill-height">
                        <v-col>
                            <v-sheet height="80">
                                <v-toolbar flat color="white">
                                    <v-toolbar-title>{{ title }}</v-toolbar-title>
                                    <span class="nf-only-responsible">Faqat ma’sul bo’lgan</span>
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                            </v-sheet>
                            <v-sheet height="450">
                                <v-calendar
                                        :locale="$i18n.locale"
                                        ref="calendar"
                                        color="primary"
                                        :events="tasks"
                                        class="task-calendar"
                                        @click:day="showDayEvent"
                                >
                                    <template #event="{event}">
                                        {{event.taskCount}}
                                    </template>

                                </v-calendar>
                                <v-dialog
                                        width="800"
                                        v-model="selectedOpen"
                                        :close-on-content-click="false"
                                        offset-x>
                                    <v-card
                                            color="grey lighten-4"
                                            min-width="350px"
                                            flat>
                                        <v-toolbar dark color="primary">
                                            <v-toolbar-title v-html="selectedEvent.day"></v-toolbar-title>
                                            <v-spacer></v-spacer>

                                            <v-btn icon>
                                                <v-icon>mdi-dots-vertical</v-icon>
                                            </v-btn>
                                        </v-toolbar>
                                        <v-card-text>
                                            <!--                                            <span v-html="selectedEvent.details"></span>-->
                                            <template>
                                                <v-data-table
                                                        :headers="tableTaskHeaders"
                                                        :items="selectedEvent.tasks"
                                                        :items-per-page="5"
                                                        class="elevation-1 nf-calendar-table"
                                                ></v-data-table>
                                            </template>


                                        </v-card-text>
                                        <v-card-actions>
                                            <v-btn
                                                    text
                                                    color="secondary"
                                                    @click="selectedOpen = false">
                                                Cancel
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-sheet>
                            <v-toolbar flat color="white">

                                <v-btn
                                        fab
                                        small
                                        absolute
                                        left
                                        color="primary"
                                        @click="prev"
                                >
                                    <v-icon dark>mdi-chevron-left</v-icon>
                                </v-btn>


                                <v-btn
                                        fab
                                        small
                                        absolute
                                        right
                                        color="primary"
                                        @click="$refs.calendar.next()"
                                >
                                    <v-icon dark>mdi-chevron-right</v-icon>
                                </v-btn>
                            </v-toolbar>

                        </v-col>
                    </v-row>
                </template>
            </v-col>
            <v-col xl="3" lg="4" md="4" class="">
                <p class="main-calendar-right-title">Bo'limlar</p>

                <div class="main-calendar-right-blog-btn">
                    <button type="button" class="main-calendar-right-btn">
                        <span>
                            <svg data-v-47182f1e="" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                 viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve"
                                 class="left-bar-icon"><path data-v-47182f1e="" fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M632.5,802.5H177.7c-48.9,0-88.7-36.4-88.7-81.2V81.8  c0-44.8,39.8-81.1,88.7-81.1h190.6c-6.3,16.4-4.7,11.1-4.7,180.2c0,83.4,74.2,151.3,165.5,151.3c181.1,0,174.2,1.5,192.2-4.3v393.4  C721.2,766.1,681.4,802.5,632.5,802.5z M405.1,422.7c-58.3,0-105.5,47.2-105.5,105.5s47.2,105.5,105.5,105.5  c58.3,0,105.5-47.2,105.5-105.5S463.4,422.7,405.1,422.7z M693.8,282H529.1c-61,0-110.6-45.4-110.6-101.2V25.7  c0-22.4,29.9-33.6,47-17.6l247.9,231.2C730.4,255.2,718.1,282,693.8,282z"></path></svg>
                        </span>
                        Mening hujjatlarim
                    </button>
                    <button type="button" class="main-calendar-right-btn">
                        <span>
                            <svg data-v-47182f1e="" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                 viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve"
                                 class="left-bar-icon"><path data-v-47182f1e="" fill="#fff" d="M527.1,280.8h164.4c24.2,0,36.5-26.8,19.5-42.6L463.6,7.6c-17.1-16-46.9-4.9-46.9,17.5v154.8    C416.7,235.5,466.2,280.8,527.1,280.8z M527.1,330.8c-91,0-165.1-67.7-165.1-151c0-168.8-1.6-163.4,4.7-179.8H176.5    C127.7,0.1,88,36.4,88,81v638.1c0,44.7,39.7,81,88.5,81h453.8c48.8,0,88.5-36.3,88.5-81V326.6    C700.9,332.3,707.8,330.8,527.1,330.8z"></path></svg>
                        </span>
                        Mening bo’limim hujjatlari
                    </button>

                </div>
                <div class="main-calendar-right-blog-btn">
                    <button type="button" class="main-calendar-right-btn">
                        <span><svg data-v-47182f1e="" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve" class="left-bar-icon"><path data-v-47182f1e="" fill="#fff" d="M741,527.2c-32.6,0-59.1,26.2-59.1,58.5V677H118.7v-91.2c0-32.3-26.4-58.5-59.1-58.5    c-32.6,0-59.1,26.2-59.1,58.5v149.7C0.5,767.8,27,794,59.6,794H741c32.6,0,59.1-26.2,59.1-58.5V585.7    C800,553.4,773.6,527.2,741,527.2z M382.5,589.5c9.8,9.7,25.8,9.7,35.7,0l207-205.1c6-6,7.8-15,4.6-22.8    c-3.3-7.8-10.9-12.9-19.5-12.9H513V53.1c0-25.2-20.6-45.7-46.1-45.7H333.7c-25.5,0-46.1,20.4-46.1,45.7v295.6h-97.2    c-8.5,0-16.2,5.1-19.5,12.9c-3.3,7.8-1.5,16.8,4.5,22.8L382.5,589.5z"></path></svg></span>
                        Kelib tushgan
                    </button>
                    <button type="button" class="main-calendar-right-btn">
                        <span><svg data-v-47182f1e="" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve" class="left-bar-icon"><path data-v-47182f1e="" fill="#fff" d="M740.3,527.3c-32.6,0-59.1,26.2-59.1,58.5V677h-563v-91.2c0-32.3-26.4-58.5-59-58.5    c-32.6,0-59.1,26.2-59.1,58.5v149.7c0,32.3,26.4,58.5,59.1,58.5h681.1c32.6,0,59-26.2,59-58.5V585.8    C799.4,553.5,772.9,527.3,740.3,527.3z M189.9,251.9h97.2v290.3c0,24.8,20.6,44.9,46.1,44.9h133.2c25.5,0,46.1-20.1,46.1-44.9    V251.9h97.2c8.5,0,16.2-5,19.5-12.7c3.3-7.7,1.5-16.5-4.6-22.4l-207-201.5c-9.8-9.6-25.8-9.6-35.6,0L175,216.9    c-6,5.9-7.8,14.7-4.5,22.4C173.7,246.9,181.4,251.9,189.9,251.9z"></path></svg></span>
                        Murojaat
                    </button>
                </div>
            </v-col>
        </v-row>
        <template>
            <v-data-table
                    outline
                    :items="items"
                    :items-per-page="5"
                    class="elevation-1 nf-calendar-table"
            ></v-data-table>
        </template>
    </v-container>
</template>

<script>
    import {tasks} from "../responseExample";

    export default {
        data() {
            return {
                selectedDate: new Date(),
                selectedEvent: {},
                selectedOpen: false,
                tasks: [],
                tableTaskHeaders: [
                    {
                        text: this.$t('title'),
                        value: 'title'
                    },
                    {
                        text: this.$t('description'),
                        value: 'description'
                    }
                ],
                items: [],
            }
        },
        computed: {
            title() {
                const {start} = this
                if (!start) {
                    return ''
                }
                const startMonth = this.monthFormatter(start)
                const startYear = start.year
                return `${startMonth} ${startYear}`
            },
            selectedYear() {
                return this.$store.state.selectedYear
            }
        },

        methods: {
            showDayEvent({date}) {
                const selectedDayEvent = this.tasks.find(item => item.start === date)
                if (selectedDayEvent) {
                    this.selectedOpen = true
                    this.selectedEvent.day = date
                    this.selectedEvent.tasks = selectedDayEvent.tasks
                }
            },
            prev() {
                this.$refs.calendar.prev()
            },
            next() {
                this.$refs.calendar.next()
            },
            getTasks() {
                this.tasks = Object.keys(tasks).map(item => {
                    return {
                        start: item,
                        taskCount: tasks[item].taskCount,
                        tasks: tasks[item].tasks
                    }
                })
            }
        },

        mounted() {
            this.getTasks()
        }
    }
</script>

