import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("../views/layouts/cabinet"),
        children: [
            {
                path: "",
                component: () => import("../views/Home")
            },
            {
                path: "/appeal",
                name: "appeal",
                component: () => import("../views/Appeal")
            },
            {
                path: "/chancellery-jurnal",
                name: "chancellery-jurnal",
                component: () => import("../views/chancellery/Chancellery-jurnal")
            },
            {
                path: "/chancellery-jurnal-table",
                name: "chancellery-jurnal-table",
                component: () => import("../views/chancellery/Chancellery-jurnal-table")
            },
            {
                path: "/chancellery-inbox",
                name: "chancellery-inbox",
                component: () => import("../views/chancellery/Chancellery-inbox")
            },
            {
                path: "/chancellery-send",
                name: "chancellery-send",
                component: () => import("../views/chancellery/Chancellery-send")
            },
            {
                path: "/chancellery-send-blog",
                name: "chancellery-send-blog",
                component: () => import("../views/chancellery/Chancellery-send-blog")
            },
            {
                path: "/chancellery-send-document",
                name: "chancellery-send-document",
                component: () => import("../views/chancellery/Chancellery-send-document")
            },
            {
                path: "/chancellery-new",
                name: "chancellery-new",
                component: () => import("../views/chancellery/Chancellery-new")
            },
            {
                path: "/chancellery-appeal",
                name: "chancellery-appeal",
                component: () => import("../views/chancellery/Chancellery-appeal")
            },
            {
                path: "/chancellery-registration",
                name: "chancellery-registration",
                component: () => import("../views/chancellery/Chancellery-registration")
            },
            {
                path: "/chancellery-registration-document",
                name: "chancellery-registration-document",
                component: () => import("../views/chancellery/Chancellery-registration-document")
            },
            {
                path: "/uzbekneftegaz-dep",
                name: "uzbekneftegaz-dep",
                component: () => import("../views/Uzbekneftegaz-dep")
            },
            {
                path: "/uzbekneftegaz-send",
                name: "uzbekneftegaz-send",
                component: () => import("../views/Uzbekneftegaz-send")
            },
            {
                path: "/uzbekneftegaz-my-document",
                name: "uzbekneftegaz-my-document",
                component: () => import("../views/Uzbekneftegaz-my-document")
            },
            {
                path: "/uzbekneftegaz-received",
                name: "uzbekneftegaz-received",
                component: () => import("../views/Uzbekneftegaz-received")
            },
            {
                path: "/profile-assistant-password",
                name: "profile-assistant-password",
                component: () => import("../views/profile/Uzbekneftegaz-profile-assistant-password")
            },
            {
                path: "/profile-assistant-education",
                name: "profile-assistant-education",
                component: () => import("../views/profile/Uzbekneftegaz-profile-assistant-education")
            },
            {
                path: "/uzbekneftegaz-profile-assistant",
                name: "uzbekneftegaz-profile-assistant",
                component: () => import("../views/profile/Uzbekneftegaz-profile-assistant")
            },
            {
                path: "/profile-assistant-info",
                name: "profile-assistant-info",
                component: () => import("../views/profile/Uzbekneftegaz-profile-assistant-info")
            },
            {
                path: "/profile",
                name: "profile",
                component: () => import("../views/profile/Uzbekneftegaz-profile")
            },
            {
                path: "/uzbekneftegaz-new",
                name: "uzbekneftegaz-new",
                component: () => import("../views/Uzbekneftegaz-new")
            },
            {
                path: "/uzbekneftegaz-resolution",
                name: "uzbekneftegaz-resolution",
                component: () => import("../views/resolution/Uzbekneftegaz-resolution")
            },
            {
                path: "/uzbekneftegaz-resolution-document",
                name: "uzbekneftegaz-resolution-document",
                component: () => import("../views/resolution/Uzbekneftegaz-resolution-document")
            },
            {
                path: "/uzbekneftegaz-resolution-history",
                name: "uzbekneftegaz-resolution-history",
                component: () => import("../views/resolution/Uzbekneftegaz-resolution-history")
            },
            {
                path: "/uzbekneftegaz-resolution-execution",
                name: "uzbekneftegaz-resolution-execution",
                component: () => import("../views/resolution/Uzbekneftegaz-resolution-execution")
            },
            {
                path: "/document-dep-document",
                name: "document-dep-document",
                component: () => import("../views/document-dep/Document-document")
            },
            {
                path: "/document-dep-related",
                name: "document-dep-related",
                component: () => import("../views/document-dep/Document-related")
            },
            {
                path: "/document-dep-execution",
                name: "document-dep-execution",
                component: () => import("../views/document-dep/Document-execution")
            },
            {
                path: "/document-dep-history",
                name: "document-dep-history",
                component: () => import("../views/document-dep/Document-history")
            },
            {
                path: "/document-document",
                name: "document-document",
                component: () => import("../views/document/Document-document")
            },
            {
                path: "/document-related",
                name: "document-related",
                component: () => import("../views/document/Document-related")
            },
            {
                path: "/document-execution",
                name: "document-execution",
                component: () => import("../views/document/Document-execution")
            },
            {
                path: "/document-history",
                name: "document-history",
                component: () => import("../views/document/Document-history")
            },
            {
                path: "/document-send",
                name: "document-send",
                component: () => import("../views/document/Document-send")
            },
            {
                path: "/document-control",
                name: "document-control",
                component: () => import("../views/document/Document-control")
            },
            {
                path: "/uzbekneftegaz-assistand-document",
                name: "uzbekneftegaz-assistand-document",
                component: () => import("../views/Uzbekneftegaz-assistand-document")
            },
            {
                path: "/uzbekneftegaz-assistand",
                name: "uzbekneftegaz-assistand",
                component: () => import("../views/Uzbekneftegaz-assistand")
            },
            {
                path: "/uzbekneftegaz-assistand-doc",
                name: "uzbekneftegaz-assistand-doc",
                component: () => import("../views/Uzbekneftegaz-assistand-doc")
            },
            {
                path: "/uzbekneftegaz-chamber",
                name: "uzbekneftegaz-chamber",
                component: () => import("../views/Uzbekneftegaz-chamber")
            },
        ]
    },
    {
        path: "/",
        component: () => import("../views/layouts/empty"),
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import("../views/Login")
            },
            {
                path: "/enter",
                name: "enter",
                component: () => import("../views/Enter")
            }
        ]
    },

];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
