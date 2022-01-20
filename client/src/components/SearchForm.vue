<template>
  <div>
      <input type="number" v-model="searchData.score">
      <select v-model="searchData.type">
          <option :value="k" v-for="(v, k) of typeOptions" :key="k">{{v}}</option>
      </select>
  </div>
</template>

<script>
import _ from "lodash"
const typeOptions = {
    greater:'大于',
    less:'小于',
    equal:'等于'
}
export default {
    name:"SearchForm",
    props:{
        initialType:{
            type:String,
            validator(value){
                return Object.keys(typeOptions).includes(value);
            },
            default:'greater'
        }
    },
    data(){
        return{
            typeOptions,
            searchData:{
                score:56,
                type:this.initialType
            }
        }
    },
    watch:{
        searchData:{
            handler(){
                this.checkParams();

                // this.$emit('get-students',{...this.searchData});//加一个防抖函数
                this.submit();
            },
            deep:true
        }
    },
    methods:{
        checkParams(){
            let {score} = this.searchData;
            let searchScore = Number(score);
            if(score == '' || isNaN(searchScore)){
                this.searchData.score = 0;
                return;
            }
            this.searchData.score = searchScore;
        },
        submit:_.debounce(function(){
            this.$emit('submit-data',{...this.searchData});
        },1000)
    }
}
</script>

<style>

</style>