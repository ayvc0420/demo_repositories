// import { defineStore } from './pinia.iife.js'
const { defineStore } = Pinia
// import { ref, onMounted } from './vue3.4.21_esm.js';
const { ref, onMounted } = Vue

export const useBulkChangeStore = defineStore('bulkChangeStore', () => {
    const bulkChangeRef = ref({});

    onMounted(() => {
        bulkChangeRef.value.data = '一開始會先看到我，是預設 piniaStore 的值';
    })


    return {
        bulkChangeRef
    }
})