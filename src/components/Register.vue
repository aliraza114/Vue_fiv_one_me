<template>
  <v-row>
    <v-col class="justify-center">
      <v-card height="auto" width="500px" class="CustomCard">
        <v-row>
          <v-col class="mt-3">
            <img class="imgClass" src="../assets/svg/logo.png" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12" class="mt-3">
            <v-form v-model="valid" ref="form">
              <v-text-field
                class="border"
                v-model="username"
                :rules="[rules.required, rules.min]"
                label="Username"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                class="border"
                v-model="email"
                :rules="[rules.required, rules.email]"
                label="Email"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                class="border"
                v-model="password"
                :rules="[rules.required, rules.password]"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show1 = !show1"
                :type="show1 ? 'text' : 'password'"
                label="Password"
                outlined
                dense
              ></v-text-field>
              <v-text-field
                class="border"
                v-model="confirmPassword"
                :rules="[rules.required, rules.password, (password === confirmPassword || 'Password not matched')]"
                :append-icon="show2? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show2 = !show2"
                :type="show2 ? 'text' : 'password'"
                label="Confirm Password"
                outlined
                dense
              ></v-text-field>
                <!-- :disabled="!valid || loading" -->
              <v-btn
                :loading="loading"
                color="#82C131"
                outlined
              >Get Started</v-btn>
              <div class="mt-2">
                <p class="text--disabled border">Or sign up with</p>
              </div>
              <div>
                <v-btn small color="#3B5999" min-width="22%" class="border facebook text-capitalize">
                  <img src="../assets/svg/facebook.svg" class="pr-2" /> Facebook
                </v-btn>
                <v-btn small color="#FFFFFF" min-width="22%" class="border text-capitalize ml-2 mr-2">
                  <img src="../assets/svg/seo-and-web.svg" class="pr-2" />Google
                </v-btn>
                <v-btn small color="#FFFFFF" min-width="22%" class="border text-capitalize text-twitter">
                  <img src="../assets/svg/twitter.svg" class="pr-2" />Twitter
                </v-btn>
              </div>
              <div class="mt-2">
                <p class="text--disabled caption border">
                  By logging in or using this app, you are indicating that
                  <br />you have read and agree to the
                  <span
                    class="customColor Cursor font-weight-medium"
                  >Terms of Service</span> and
                  <br />
                  <span class="customColor font-weight-medium Cursor">Privacy Policy.</span>
                </p>
              </div>
              <p class="text--disabled caption">
                Already have an account?
                <span class="customColor Cursor font-weight-medium">Login</span>
              </p>
              <!-- @click="$router.push('/login')" -->
            </v-form>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    type: "info",
    message: "there is a ",
    loading: false,
    valid: true,
    username: "",
    errors: [],
    email: "",
    password: "",
    show1: false,
    show2: false,
    package: null,
    confirmPassword: "",
    rules: {
      required: (value) => !!value || "Required",
      min: (value) =>
        value.length >= 3 || "Username must be greater than 3 characters",
      password: (value) =>
        value.length >= 8 || "Password must be  greater than  8 characters",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
  }),
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style>
.CustomCard {
  background: #ffffff no-repeat padding-box !important;
  box-shadow: 0px 5px 15px #00000033 !important;
  border-radius: 10px !important;
  opacity: 1 !important;
  margin: auto;
}
.facebook {
  color: #ffffff !important;
}
.text-twitter {
  color: #03a9f4 !important;
}
.customColor {
  color: #6a95f9;
}
.Cursor {
  cursor: pointer;
}
.Package {
  height: 164%;
  width: 81%;
  border-radius: 4px;
  border-top: 4px solid #9ccc65;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 10px #0000001a;
}
.imgClass {
  width: 85px;
  height: 85px;
}
.border {
  margin: 16px !important;
}
</style>