<template>
  <div class="container-scroller">
    <Loaders v-if="loading" />
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth">
        <div class="row flex-grow">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left p-5">
              <img src="/static/assets/images/logo.png" alt="" srcset="" />
              <h4>New here?</h4>
              <h6 class="font-weight-light">
                Signing up is easy. It only takes a few steps
              </h6>
              <form class="pt-3" @submit.prevent="registerReferral">
                <p style="color: red">{{ error }}</p>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="register.name"
                    placeholder="Fullname"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="register.email"
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="register.phone_number"
                    type="tel"
                    class="form-control form-control-lg"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="register.bank_name"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Bank Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="register.account_number"
                    placeholder="Account number"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    v-model="register.occupation"
                    placeholder="Occupation"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    v-model="register.password"
                    placeholder="Password"
                    required
                  />
                </div>

                <div class="mt-3">
                  <input
                    style="background: #c8342b; border: none"
                    type="submit"
                    class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    value="Register"
                  />
                </div>
                <div class="text-center mt-4 font-weight-light">
                  Already have an account?
                  <a href="/login" class="text-primary">Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        phone_number: "",
        bank_name: "",
        account_number: "",
        occupation: "",
      },
    };
  },
  computed: {
    ...mapGetters(["loading", "error"]),
  },
  methods: {
    ...mapActions(["registerAction"]),
    registerReferral() {
      this.register.phone_number =
        "+234" + this.register.phone_number.substring(1);
      this.registerAction(this.register);
    },
  },
};
</script>

<style scoped></style>
