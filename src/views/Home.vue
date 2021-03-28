<template>
  <div id="input_form">
    <input v-model="postcode" type="text" name="postcode" placeholder="郵便番号入力">
    <button v-on:click="createUser">住所自動入力</button>
    <p class="weather-title">Address：</p>

  </div>
</template>
<style>
.home{
  padding: 15px;
}
</style>

<script>
import axios from "axios";
export default {
  props: ["data"],
  data() {
    return {
      pref: "",
      city: "",
      town: "",
      
    };
  },
  async created() {
    const item = await axios.get(
      `https://apis.postcode-jp.com/api/v2/postcodes/=${this.postcode}&units=metric&appid=dsEkrTkHTJNJR2ASwXkgaGlEesHb1Mn0Nfcq22F
`
    );
    const postCodeData = item.data;
    this.postcode = postCodeData.postcode;
    this.pref = postCodeData.pref;
    this.city = postCodeData.city;
    this.town = postCodeData.town;
  }
};

</script>
