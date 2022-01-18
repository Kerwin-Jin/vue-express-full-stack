<template>
  <div>
      <h1>Hello Vue！！！</h1>
  </div>
</template>

<script>
import {getStudents} from "./service/index"
export default {
    name:"App",
    mounted(){
      this.getData('greater',50)
    },
    methods:{
      async getData(type, score){
        try{
          let {data} = await getStudents(type,score);
          console.log(data);
        }catch(e){
          console.log(e);
        }
        
      }
    }
}
</script>

<style>

</style>