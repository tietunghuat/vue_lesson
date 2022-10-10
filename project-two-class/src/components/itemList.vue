<template>
    <div class="item-list">
        <ul>
            <li v-for="fac in face" :key="fac.id">{{fac}}

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
import facehere from "@/haloface/face"

export default defineComponent({
    props:{
        face:{
            required:true,
            type:Array as PropType<facehere[]>
        }
    }
})
</script>


<style scoped>

</style>