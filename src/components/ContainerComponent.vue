<template>
        <div id="container" :class="orientationClass" class="border-2 border-blue-400 h-3/4 bg-white rounded-lg p-10" @drop="onDrop($event, 1)" @dragover="dragOver($event)">
            <div v-if="savedToFireBase" class="bg-green-300 p-5 font-semibold text-center">
                Saved to Firebase successfully (postion Y -{{$store.getters.getTextBoxOffsetY}} position X - {{$store.getters.getTextBoxOffsetX}})
            </div>
            <input v-if=showTextField type="text" id="draggableText" draggable @dragstart='startDrag($event)' class="cursor-move h-20 p-5 border border-blue-400 m-5" placeholder="Enter Text Here" v-model="textContent">

            <!-- <div id="listDiv">
                <ol>
                    <li>Ok</li>
                    <li>Ok sir</li>
                </ol>
            </div> -->
        </div>
</template>

<script>
import firebase from "../firebase-config.js";
const db = firebase.firestore();

export default {
    name: 'ContainerComponent',
    props: {
        orientation: {
            type: String,
            default: 'landscape'
        },
        saveSettings: {
            type: Boolean,
            default: false,
        },
        showTextField: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            containerWidth: 'w-1/2',
            textContent: '',
            savedToFireBase: false
        }
    },
    watch: {
        saveSettings() {
            console.log(this.saveSettings);
            if(this.saveSettings) {
                db.collection("textProps")
                .add({ 
                    textContent: this.$store.getters.getTextBoxContent, 
                    textOffsetY: this.$store.getters.getTextBoxOffsetY,
                    textOffsetX: this.$store.getters.getTextBoxOffsetX, 
                    date: new Date,
                })
                .then(() => {
                    this.savedToFireBase = true;
                    setTimeout(() => this.savedToFireBase = false, 2000);
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
            }
        },
        showTextField() {
            this.textContent = '';
            let properties = {
                content: this.textContent,
                offsetY: '',
                offsetX: '',
            }
            this.$store.commit('storeTextBoxProperties', properties);
        }
    },
    computed: {
        orientationClass() {
            if(this.orientation == 'landscape') {
                return 'w-1/2';
            }else{
                return 'w-1/4'
            }
        },
    },
    methods: {
        startDrag(evt){
            console.log(evt.target);
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData("text", evt.target.id);
        },
        onDrop(evt) {
            console.log(evt);
            console.log(evt.offsetX);
            console.log(evt.offsetY);
            let input = evt.dataTransfer.getData('text');

            evt.target.appendChild(document.getElementById(input));
            let inputElement = document.getElementById('draggableText');
            inputElement.style.top = evt.offsetY+'px';
            inputElement.style.left = evt.offsetX+'px';
            
            let properties = {
                content: this.textContent,
                offsetY: evt.offsetY+'px',
                offsetX: evt.offsetX+'px',
            }
            console.log(properties);
            this.$store.commit('storeTextBoxProperties', properties);
            console.log(this.$store.getters.getTextBoxContent);
        },
        dragOver(evt){
            evt.preventDefault();
        },
    }
}
</script>

<style scoped>
    #container{
        position: relative;
    }
    #draggableText{
        position: absolute;
    }
    #listDiv {
        position: absolute;
    }
</style>