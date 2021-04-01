<template>
  <div id="input_form">
    <input v-model="postcode" type="text" name="postcode" placeholder="" />
    <button v-on:click="autoCompleteAddress">住所自動入力</button>
    <p>Adress:{{address}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
  return {
    postCode: "",
    address: "",
  }
},

  methods: {
    async autoCompleteAddress() {
        await axios.get(`https://apis.postcode-jp.com/api/v4/postcodes/${this.postcode}?apiKey=dsEkrTkHTJNJR2ASwXkgaGlEesHb1Mn0Nfcq22F`)
      .then((response)=>{
        this.address = response.data[0].allAddress
        
      })
     .catch(() => {
        this.address = ""
     })
    }
  }
};
</script>

<style scoped>
#input_form {
  padding: 20px;
  input {
    margin: 0 3px;
  }
  input[type="text"] {
    width: 200px;
    margin-right: 15px;
    padding: 6px 12px;
    border: none;
    font-size: 16px;
    border-radius: 10px;
  }
  button {
    padding: 20px 20px;
    font-size: 12px;
    border: none;
    border-radius: 30px;
    color: #333;
    margin-right: 30px;
  }
  p{
    margin-bottom: 100px;
  }
  
}
</style>
