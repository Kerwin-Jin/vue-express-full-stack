<template>
  <div>
      <h1>Hello Vue！！！</h1>
      <search-form
        :initialType="'equal'"
        @submit-data="getData"
      ></search-form>
  </div>
</template>

<script>
import SearchForm from "./components/SearchForm.vue"
import {getStudents} from "./service/index"
export default {
    name:"App",
    components:{SearchForm},
    methods:{
      async getData(searchForm){
        try{
          let {type, score} = searchForm;
          let {data} = await getStudents(type,score);
          
          if(data.errNo==0){
            console.log(data.data);
          }
         
        }catch(e){
          console.log(e);
        }
        
      }
    }
}
</script>

<style>

</style>