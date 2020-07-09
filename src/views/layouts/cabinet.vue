<template>
    <v-app id="sandbox">
        <left-sidebar
                :options="primaryDrawer"
                :group.sync="group"
        />
        <v-app-bar class="elevation-1" height="75" :clipped-left="primaryDrawer.clipped" app>
            <v-app-bar-nav-icon
                    class="nf-header-burger-wrap"

                    v-if="primaryDrawer.type !== 'permanent'"
                    @click.stop="primaryDrawer.model = !primaryDrawer.model"
                    @click="primaryDrawer.mini = false"
            />
            <v-toolbar-title class="ml-4">
                <router-link to="/" tag="span" class="pointer">
                    <img src="@/assets/images/logo.png" alt=""/>
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="nf-header-select">
                <v-select class="ml-5"
                          :items="items"
                          label="O`ZB"
                          single-line
                >
                    <!--                   <template v-slot:append>-->
                    <!--                       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"-->
                    <!--                            id="Capa_1" x="0px" y="0px" width="20px" height="12px" viewBox="0 0 284.929 284.929"-->
                    <!--                            style="enable-background:new 0 0 284.929 284.929;" xml:space="preserve">-->
                    <!--                    <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>-->
                    <!--                </svg>-->
                    <!--                   </template>-->

                </v-select>
                <v-select
                        :items="years"
                        label="2020"
                        single-line

                >
                    <!--                   <template v-slot:append>-->
                    <!--                       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"-->
                    <!--                            id="Capa_1" x="0px" y="0px" width="20px" height="12px" viewBox="0 0 284.929 284.929"-->
                    <!--                            style="enable-background:new 0 0 284.929 284.929;" xml:space="preserve">-->
                    <!--                    <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>-->
                    <!--                </svg>-->
                    <!--                   </template>-->
                </v-select>
                <div class="nf-header-select-person">
                    <span class="nf-header-select-person-icon">
                        <svg height="15" width="15" viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg">
                            <path d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0"/><path
                                d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0"/>
                        </svg>
                    </span>
                    User Name
                    <div class="nf-header-select-person-cabinet">
                        <p>
                            <span>
                                <svg height="15" width="15" viewBox="-42 0 512 512.002"
                                     xmlns="http://www.w3.org/2000/svg">
                            <path d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0"/><path
                                        d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0"/>
                        </svg>
                            </span>
                            Shaxsiy ma’lumotlar
                        </p>
                        <p>
                            <span>
                            <svg height="15" width="15" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                                 viewBox="0 0 801.4 800" enable-background="new 0 0 801.4 800" xml:space="preserve">
                                    <path fill="#444444"
                                          d="M500.9,700h-400V100h400v50h100V0H0.9v800h600V650h-100V700z M615.5,214.6l-70.7,70.7l64.6,64.7H350.9v100    h258.6l-64.6,64.6l70.7,70.7L800.9,400L615.5,214.6z"/>
                            </svg>
                            </span>
                            Chiqish
                        </p>
                    </div>
                </div>
            </div>
            <v-btn
                    icon
                    @click.stop="drawer = !drawer"
            >
                <v-icon>mdi-apps</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer
                v-model="drawer"
                app
                right
        >
            <v-list-item class="mt-3">
                <v-list-item-content>
                    <v-list-item-title class="main-right-sidebar-title">Bildirishnomalar</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title>Kelib tushgan</v-list-item-title>
                    <v-list-item-subtitle><span class="main-right-sidebar-text">Приказ №13</span></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title>Hujjat yuborildi</v-list-item-title>
                    <v-list-item-subtitle>
                        <span class="main-right-sidebar-text">Протокол</span>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-navigation-drawer>
        <v-main>
            <router-view></router-view>
        </v-main>
        <v-footer :inset="footer.inset" app>
            <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>
<script>
    import LeftSidebar from "../../components/cabinet/LeftSidebar";
    export default {
        name: "App",
        data: () => ({
            drawer: false,
            group: "",
            primaryDrawer: {
                model: null,
                mini: true
            },
            footer: {
                inset: true
            },
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            years: ['2021', '2022', '2023', '2024'],

        }),
        methods: {},
        components: {
            LeftSidebar
        }
    };
</script>

<style scoped lang="scss">
    .nf-header-select {
        display: flex;
        align-items: center;
        margin-right: 55px;

        .theme--light.v-input {
            width: 100px;
            margin-right: 40px;
        }

        &-person {
            display: flex;
            align-items: center;
        }

        &-person-icon {
            margin-right: 14px;
            width: 30px;
            height: 30px;
            background: #ff7d30;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;

            svg {
                path {
                    fill: #fff;
                }
            }
        }
    }
    .nf-header-burger-wrap {
        display: none;
    }
    .main-right-sidebar-text {
        color: #0092c8;
    }
    .main-right-sidebar-title {
        font-size: 26px;
    }
    .pointer {
        cursor: pointer;
    }
    .controls {
        position: relative;
    }
    @media screen and (max-width: 1263px) {
        .nf-header-burger-wrap {
            display: block;
        }
    }
</style>
