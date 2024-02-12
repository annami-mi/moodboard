import {defineStore} from "pinia";
import {ref} from "vue";
export const useMoodBoardStore = defineStore('moodBoard', () =>{
    const notes = ref({
        quote: 'If you want to get somewhere else, you must run at least twice as fast as that',
        author: 'Lewis Carroll',
    })
    return{
        notes
    }
})
