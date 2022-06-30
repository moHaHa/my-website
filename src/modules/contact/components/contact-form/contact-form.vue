<template>
  <v-form ref="form" v-model="valid" @submit.prevent="formSubmit">
    <v-row dense no-gutters>
      <v-col cols="12">
        <v-text-field
          required
          v-model="form.name"
          :rules="nameRules"
          :messages="msg"
          color="white"
          label="name"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="form.email"
          color="white"
          :rules="emailRules"
          required
          label="email"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="form.message"
          :rows="4"
          color="white"
          :rules="messageRules"
          required
          label="message"
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <div class="d-flex">
          <div>{{ thanks }}</div>
          <v-spacer></v-spacer>
          <v-btn
            v-if="loader"
            disabled
            :height="46"
            style="border-radius: 10px"
            color="majorelle-blue"
          >
            <v-progress-circular
              :size="19"
              :width="2"
              color="white"
              indeterminate
            ></v-progress-circular>
          </v-btn>
          <v-btn
            v-else
            @click="formSubmit()"
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
</template>

<script>
// finished
import axios from "@/axios";
let matchPeople = function (v) {
  let array = [
    {
      firstName: "nour",
      firstNameAr: "نور",
      lastName: "bobes",
      lastNameAr: "بوبس",
      message: "اهلين برفيقي الاسطورة السنيور الحارق الخارق المتفجر 😍",
    },
    {
      firstName: "ghaith",
      firstNameAr: "غيث",
      lastName: "lolo",
      lastNameAr: "لولو",
      message: "اي اي اي 😂 😂",
    },
  ];
  let msg = "";
  for (let i = 0; i < array.length; i++) {
    const person = array[i];
    let reFname = new RegExp(person.firstName, "gi");
    let reLname = new RegExp(person.lastName, "gi");
    let reFname_ar = new RegExp(person.firstNameAr, "gi");
    let reLname_ar = new RegExp(person.lastNameAr, "gi");
    if (
      (reFname.test(v) || reFname_ar.test(v)) &
      (reLname_ar.test(v) || reLname.test(v))
    ) {
      msg = person.message;
    }
  }
  return msg;
};
export default {
  created() {},
  data() {
    return {
      thanks: "",
      valid: false,
      loader: false,
      form: {},
      nameRules: [(v) => !!v || "Name is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/gi.test(v) || "E-mail must be valid",
      ],
      messageRules: [(v) => !!v || "You must type smth "],
      msg: [(v) => matchPeople(v)],
    };
  },
  methods: {
    async formSubmit() {
      this.thanks = ''
      if (this.valid) {
        this.loader = true;
        try {
          let res = await axios.post("/contact", this.form);
          if (res.status === 200) {
            this.thanks = "Message sent successfully ";
            this.form = {};
            this.$refs.form.resetValidation();
          } else {
            this.thanks = "Failed, Plaese Send Your Message Again";
          }
          this.loader = false;
        } catch (err) {
          console.log(err);
          this.loader = false;
        }
      } else {
        this.$refs.form.validate();
      }
    },
  },
};
</script>

<style>
</style>