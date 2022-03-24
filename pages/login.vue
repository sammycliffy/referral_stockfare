<template>
  <div class="container-scroller">
    <Loaders v-if="loading" />
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth">
        <div class="row flex-grow">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left p-5">
              <div class="brand-logo">
                <!-- <img src="../../assets/images/logo-dark.svg" /> -->
              </div>
              <h4 style="color: #c8342b">Hello! let's get started</h4>
              <h6 class="font-weight-light">Sign in to continue.</h6>
              <form class="pt-3" @submit.prevent="loginReferral">
                <p style="color: red">{{ error }}</p>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    v-model="login.email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    v-model="login.password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="mt-3">
                  <input
                    style="background: #c8342b; border: none"
                    type="submit"
                    class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    value="LOGIN"
                  />
                </div>
                <div
                  class="my-2 d-flex justify-content-between align-items-center"
                >
                  <a href="#" class="auth-link text-black">Forgot password?</a>
                </div>

                <div class="text-center mt-4 font-weight-light">
                  Don't have an account?
                  <a href="/" class="text-primary">Create</a>
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
      login: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters(["loading", "error"]),
  },
  methods: {
    ...mapActions(["loginAction"]),
    loginReferral() {
      this.loginAction(this.login);
    },
  },
};
</script>

<style lang="scss" scoped></style>
