<template>
  <v-form v-if="false">
    <v-row dense no-gutters>
      <v-col cols="12">
        <v-text-field color="white" label="name"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field color="white" label="email"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea :rows="4" color="white" label="message"></v-textarea>
      </v-col>
      <v-col cols="12">
        <div class="d-flex">
          <v-spacer></v-spacer>
          <v-btn
            :height="46"
            style="border-radius: 10px"
            color="majorelle-blue"
          >
            Send Message
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-form>
  <v-form v-else v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="firstname"
            :messages="msg"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
let matchPeople = function (v) {
  console.log(v);
  let array = [
    { firstName: "ghaith" || "غيث" , lastName : 'lolo' || 'لولو' , message: 'اي اي اي 😂 😂' },
    { firstName: "nour" || "نور" , lastName : 'bobes' || 'بوبس' , message: 'اهلين برفيقي الاسطورة السنيور الحارق الخارق المتفجر 😍' },
  ];
  let msg = '';
  array.forEach(person => {
      let  reF = new RegExp(person.firstName, 'gi');
      let  reL = new RegExp(person.lastName, 'gi')
      if(reF.test(v) & reL.test(v) ) {
          msg =  person.message 
      }
      return msg
  });
 
  // if(/nour/gi.test(v) & /bobes/.test(v) || /نور/.test(v) & /بوبس/.test(v)) {
  //   return 'اهلين برفيقي الاسطورة السنيور الحارق الخارق المتفجر 😍'
  // } else if(/gaith/gi.test(v) & /lolo/gi.test(v) || /غيث/gi.test(v) & /لولو/gi.test(v)) {
  //   return 'اي اي اي 😂 😂'
  // } else if(/jihan/gi.test(v) & /kana'n/gi.test(v) || /جهان/gi.test(v) & /كنعان/gi.test(v)) {
  //   return ' هلا و مرحب بصناع الحضارة 😂'
  // } else {
  //   return ''
  // }
};
console.log(matchPeople('nour bobes'));
export default {
  created() {},
  data() {
    return {
      valid: false,
      firstname: "",
      lastname: "",
      // msg: [(v) => matchPeople(v)],
      msg: [''],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/gi.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    // async sendHi() {
    //   this.loader = true;
    //   try {
    //     await axios.post("/contact", this.form);
    //     this.loader = false;
    //   } catch (err) {
    //     console.log(err);
    //     this.loader = false;
    //   }
    // },
  },
};
</script>

<style>
</style>