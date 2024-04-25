// import { createPinia,setActivePinia } from './pinia.iife.js';
import { createApp, onMounted, ref, reactive, computed, inject, watch } from "./vue3.4.21_esm.js"; 
import { useBulkChangeStore } from "./piniaStore.js";
import Demo from './ConditionArea.js';

const { createPinia } = Pinia;
const pinia = createPinia();

const app = createApp({
    setup(){

        const bulkChangeStore = useBulkChangeStore();
        const bulkChangeRef = ref();
        const bulkChangeRef2 = ref();

        setTimeout(() => {
            bulkChangeStore.bulkChangeRef.data = '5秒後你會看到我，是 main 修改了 pinia 的值';
            bulkChangeRef2.value = '5秒後你會看到我，是 main 修改了 bulkChangeRef2 的值';
        }, 5000);
        
        const tRef = ref(0);

        setInterval(() => {
            tRef.value += 1;
        }, 2000);
        
        onMounted(() => {
            bulkChangeRef.value = bulkChangeStore.bulkChangeRef;
            bulkChangeRef2.value = bulkChangeStore.bulkChangeRef.data;
            top.bulkChangeRef = bulkChangeRef;
            top.bulkChangeStore = bulkChangeStore
        })

        return{
            tRef,
            bulkChangeRef,
            bulkChangeRef2
        }

    }
})

app.use(pinia);
app.component('demo-template', Demo);
app.mount('#app');
