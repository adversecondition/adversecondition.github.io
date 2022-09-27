import {createStore} from "vuex";


const store = createStore({
    state: {
        prefersDarkScheme: true
    },
    mutations: {
        loadPrefersDarkScheme (state) {
            let darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if(darkMode === undefined){
                darkMode =  true;
            }
            state.prefersDarkScheme = darkMode;
        }
    },
    getters: {
        prefersDarkScheme: (state) => state.prefersDarkScheme,
    },
    actions: {
        init(context) {
            context.commit("loadPrefersDarkScheme")
            console.log("initialized")
        }
    }
})

export default store;