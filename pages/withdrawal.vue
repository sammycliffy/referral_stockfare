<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper">
      <SideMenu />
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-md-12">
              <div class="tab-content tab-transparent-content">
                <div
                  class="tab-pane fade show active"
                  id="business-1"
                  role="tabpanel"
                  aria-labelledby="business-tab"
                >
                  <div class="row">
                    <div class="col-12 grid-margin">
                      <div class="card">
                        <div class="col-lg-12 grid-margin stretch-card">
                          <div class="card">
                            <div class="card-body">
                              <h4 class="card-title">Withdrawal</h4>
                              <p>Enter the amount you want to withdraw</p>

                              <div class="row">
                                <div class="col-lg-3"></div>
                                <div class="col-lg-6">
                                  <form @submit.prevent="withdrawfunds">
                                    <input
                                      type="text"
                                      class="form-control"
                                      v-model="data.amount"
                                      required
                                      placeholder="100000"
                                    />
                                    <br />
                                    <center>
                                      <input
                                        type="submit"
                                        class="btn btn-success"
                                        value="Withdraw"
                                      />
                                    </center>
                                  </form>
                                </div>
                                <div class="col-lg-3"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      data: {
        amount: "",
      },
    };
  },
  computed: {
    ...mapGetters(["withdrawerror"]),
    date() {
      let yourDate = new Date();
      return yourDate.toISOString().split("T")[0];
    },
  },

  methods: {
    ...mapActions(["withdrawFunds"]),
    withdrawfunds() {
      this.withdrawFunds(this.data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
