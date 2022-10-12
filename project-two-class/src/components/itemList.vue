<template>
    <div class="item-list">
        <p>Ordered by {{orders}}</p>
        <ul>
            <li v-for="fac in facela" :key="fac.id">{{fac}}

                <h1>{{fac.name}}is{{fac.age}} years old</h1>
                <div class="over">
                    {{fac.over_age}} over!
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem officiis numquam, consequuntur sapiente ipsa iure expedita accusantium in optio dolorum inventore perferendis excepturi natus dolores officia animi laudantium aliquam? Maiores.</p>
            </li>
        </ul>
    </div>
</template>


<script lang="ts">
import { defineComponent ,PropType} from 'vue'
import facehere from "@/types/face"
import orderFace from '@/types/orderFace';

export default defineComponent({
    props:{
        facela:{
            required:true,
            type:Array as PropType<facehere[]>
        },
        orders:{
            required:true,
            type:String as PropType<orderFace>
        }
    }
})
</script>


<style scoped>

</style>