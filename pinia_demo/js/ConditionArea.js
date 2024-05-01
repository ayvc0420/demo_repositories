import { useBulkChangeStore } from "./piniaStore.js";
// import { ref, reactive, computed, defineComponent, onMounted } from './vue3.4.21_esm.js';
const { createApp, ref, onMounted, computed, defineComponent } = Vue

export default defineComponent({
    template:
        `
    <div>
        <h1>ConditionArea 每 1 秒遞增 : {{ cRef }}</h1>
        <li>
            <span>子組件 computed 指向 pinia : </span>
            <span>{{ bulkChangeValue }}</span>
        </li>
    </div>
    `,
    style:
        `
    h1{
        font-size: 30px;
        color:red;
    }
    `,
    setup() {
        const cRef = ref(0);
        const bulkChangeStore = useBulkChangeStore();
        const bulkChangeValue = computed(() => bulkChangeStore.bulkChangeRef.data);

        setTimeout(() => {
            bulkChangeStore.bulkChangeRef.data = '10秒後你會看到我，是 ConditionArea 修改了 pinia 的值';
        }, 10000);

        setInterval(() => {
            cRef.value += 1;
        }, 1000);

        onMounted(() => {

        })

        return {
            cRef,
            bulkChangeValue
        }
    },
})

