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
          label="Name"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="form.email"
          color="white"
          :rules="emailRules"
          required
          label="Email"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="form.message"
          :rows="4"
          color="white"
          :rules="messageRules"
          required
          label="Message"
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
import axios from "axios";
let matchPeople = function (v) {
  let array = [
    {
      firstName: "nour",
      firstNameAr: "نور",
      lastName: "boubes",
      lastNameAr: "بوبس",
      message: "اهلين برفيقي الاسطورة السنيور الحارق الخارق المتفجر 😍",
    },
    {
      firstName: "ghaith",
      firstNameAr: "غيث",
      lastName: "lolo",
      lastNameAr: "لولو",
      message: " اي اي اي 😂 😂 قوم نزيل راس ع راس",
    },
    {
      firstName: "ajam",
      firstNameAr: "عجم",
      lastName: "al fattal",
      lastNameAr: "الفتال",
      message: "اي اي اي بالحمصي 😂 😂, سيد مين شجع النادي الملكي",
    },
    {
      firstName: "hani",
      firstNameAr: "هاني",
      lastName: "abdulfattah",
      lastNameAr: "عبد الفتاح",
      message: "وانا هاني عبد الفتاح 😂, حلم حياتي اصحى بكير متلك",
    },
    {
      firstName: "teuta",
      firstNameAr: "تيوتا",
      lastName: "Ukshini",
      lastNameAr: "يوكاشيني",
      message: "sure it's teuta not tueta, I know you girl .. Welcome 🤍😂",
    },
    {
      firstName: "jihan",
      firstNameAr: "جهان",
      lastName: "kana'n",
      lastNameAr: "كنعان",
      message: "هلا و مرحب، بصناع الحضارة😂",
    },
    {
      firstName: "mahmoud",
      firstNameAr: "محمود",
      lastName: "alhallak",
      lastNameAr: "الحلاق",
      message: "هلا بالمدير ❤, سيد مين كتب سويفت و دخن بالمكتب",
    },
    {
      firstName: "jehad",
      firstNameAr: "جهاد",
      lastName: "hamouda",
      lastNameAr: "حمودة",
      message: "hey tomy ..I love you ❤😂",
    },
    {
      firstName: "emad",
      firstNameAr: "عماد",
      lastName: "loubani",
      lastNameAr: "لوباني",
      message: "بقولو عنك فساد بس مارح صدق، لهيك جيب تنتين اوغاريت خلينا نزهزه  ❤😂, ",
    },
    {
      firstName: "njeeb",
      firstNameAr: "نجيب",
      lastName: "shbib",
      lastNameAr: "شبيب",
      message: "The Matrix 😎, I stole these colors, forgive me ❤😂",
    },
    {
      firstName: "zouhair",
      firstNameAr: "زهير",
      lastName: "naser",
      lastNameAr: "ناصر",
      message: "الاب الروحي للفيو ❤ ,ريل هومي دونت دو زيس شيت ❤😂",
    },
    {
      firstName: "khaled",
      firstNameAr: "خالد",
      lastName: "hijazy",
      lastNameAr: "حجازي",
      message: "😂رح تحقق شي احسن من يلي انا و زهير عملناه بكتير طبعا الكلام الك و لباقي الشباب🦾 تؤبرو البي شو بحبكن❤ ...، بس لو انك بتحضر انمي   ",
    },
   
    {
      firstName: "mohamad",
      firstNameAr: "محمد",
      lastName: "alhomsi",
      lastNameAr: "الحمصي",
      message: "مين بيعرف غيت متل محمد 😂",
    },
    {
      firstName: "yasser",
      firstNameAr: "ياسر",
      lastName: "alkabbani",
      lastNameAr: "القباني",
      message: "لمدا و كريتين وسنغلتون و داتاتايب ..خلص فهمنا والله رح اتعلمهم كلهم 😂",
    },
    {
      firstName: "abduljaleel",
      firstNameAr: "عبد الجليل",
      lastName: "khallouf",
      lastNameAr: "خلوف",
      message: "نزلي فيها تاسك 😂",
    },
    {
      firstName: "ayham",
      firstNameAr: "ايهم",
      lastName: "hamdan",
      lastNameAr: "حمدان",
      message: "هلا اسيادنا 😎 الله يخلي .. الله يعلي",
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
          let res = await axios.post("http://hbo30edthree-001-site1.dtempurl.com/api/contact", this.form);
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