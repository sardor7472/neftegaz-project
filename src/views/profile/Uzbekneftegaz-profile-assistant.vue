<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-container>
            <v-row class="mt-10">
                <v-col lg="3" xl="2">
                    <div class="nf-input-file">
                        <v-image-input
                                class="nf-input-file-main"
                                v-model="imageData"
                                clearable
                                hideActions
                                imageMaxScaling="4"
                                uploadIcon="yangi rasm"
                                clearIcon="rasmni o’chirish"
                                image-format="jpeg"
                                overlayBorderColor="red"
                        />
                    </div>

                </v-col>
                <v-col lg="9" xl="8">
                    
                    <v-row class="align-center mt-5">
                        <v-col xl="6">
                            <p>Nazoratchini tanlang</p>

                            <v-autocomplete
                                        outlined
                                        class="nf-bor-radius mt-2"
                                        v-model="value"
                                        :items="items"
                                        dense
                                        label="А.А. Руководилов"
                                ></v-autocomplete>
                        </v-col>
                        <v-col xl="2">
                            <v-btn class="nf-bor-radius white--text mt-2" color="#00a5e2" large>
                                Saqlash
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
    export default {

        data: () => ({
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }),

    };
</script>
