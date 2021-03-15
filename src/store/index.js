import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        textBoxContent: '',
        textBoxOffsetX: '',
        textBoxOffsetY: '',
    },
    mutations: {
        storeTextBoxProperties(state, properties) {
            console.log(properties);
            state.textBoxContent = properties.content,
            state.textBoxOffsetX = properties.offsetX,
            state.textBoxOffsetY = properties.offsetY
        }
    },
    getters: {
        getTextBoxContent: state => state.textBoxContent,
        getTextBoxOffsetX: state => state.textBoxOffsetX,
        getTextBoxOffsetY: state => state.textBoxOffsetY
    }

});

export default store;
