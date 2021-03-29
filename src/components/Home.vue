<template>
  <div id="input_form">
    <input v-model="postcode" type="text" name="postcode" placeholder="">
    <button v-on:click="autoCompleteAddress(zipCode)">住所自動入力</button>

  </div>
</template>


<script>
data(); {
  return {
    postCode: "",
    address: "",
  }
}
methods; {
  autoCompleteAddress(postCode);{
    this.axios.get(`https://apis.postcode-jp.com/api/v4/postcodes/${this.address}?apiKey=APIキー``https://apis.postcode-jp.com/api/v4/postcodes/${this.address}?apiKey=dsEkrTkHTJNJR2ASwXkgaGlEesHb1Mn0Nfcq22F `)
    then.((response)=>{
      this.address = response.data.fullAddress
    }),
    .catch(() => {
      this.address = "";
    })
  }
}

</script>

<style scoped>
#input_form {
  padding:20px;
  input{
    margin:0 3px;
  }
  input[type="text"] {
    width: 200px;
    margin-right:15px;
    padding: 6px 12px;
    border:none;
    font-size: 16px;
    border-radius: 6px;
  
  }
  button {
    padding: 7px 20px;
    font-size: 12px;
    border:none;
    border-radius: 6px;
    color:#333;
  }
}
</style>
