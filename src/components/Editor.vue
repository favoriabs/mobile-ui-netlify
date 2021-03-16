<template>
    <div id="parentDiv" class="bg-gradient-to-tr from-blue-400 to-white h-screen flex flex-col items-center justify-center space-y-5">
        <div class="w-1/2 bg-white h-10 rounded-lg">
            <div class="px-5 py-2 flex space-x-5">
                <select name="" id="" v-model="orientation">
                    <option value="landscape">Landscape</option>
                    <option value="potrait">Potrait</option>
                </select>
                <select name="" id="" @change="triggerOption($event)">
                    <option value="">Select Option</option>
                    <option value="save">Save</option>
                    <option value="view">View</option>
                    <option value="sdk">SDK</option>
                    <option value="android">Android</option>
                </select>
                <button class="border px-5" @click="toggleTextField()">TOGGLE TEXT</button>
                <button class="border px-5">LIST</button>
            </div>
        </div>
        <container-component
            :orientation="orientation"
            :saveSettings="saveSettings"
            :showTextField="showTextField"
        >
        </container-component>
        <!-- <div id="container" :class="containerWidth" class="border-2 border-blue-400 h-3/4 bg-white rounded-lg p-10 w-1/2" @drop="onDrop($event, 1)" @dragover="dragOver($event)"> -->
            <!-- <input type="text" id="draggableText" draggable @dragstart='startDrag($event)' class="cursor-move h-20 p-5 border border-blue-400" placeholder="Enter Text Here">

            <div id="listDiv">
                <ol>
                    <li>Ok</li>
                    <li>Ok sir</li>
                </ol>
            </div> -->
        <!-- </div> -->
        
    </div>
</template>

<script>
import ContainerComponent from './ContainerComponent.vue'

export default {
    name: "EditorPage",
    components: {
        ContainerComponent
        
    },
    data() {
        return {
            orientation: 'landscape',
            saveSettings: false,
            showTextField: false,
        }
    },
    methods: {
        toggleTextField() {
            this.showTextField = !this.showTextField;
        },
        triggerOption($event) {
            if($event.target.value == 'save') {
                this.saveSettings = true;
            }
        }
    }
}
</script>
