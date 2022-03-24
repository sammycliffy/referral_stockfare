<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper">
      <SideMenu />
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="d-xl-flex justify-content-between align-items-start">
            <div>
              <h2
                class="text-dark font-weight-bold mb-2"
                style="color: #c8342b"
              >
                Overview dashboard
              </h2>
              <p v-if="dashboard" style="color: black">
                Welcome {{ dashboard.referral_agent_name }}, how are you today?
              </p>
            </div>

            <div
              class="d-sm-flex justify-content-xl-between align-items-center mb-2"
            >
              <div class="dropdown ml-0 ml-md-4 mt-2 mt-lg-0">
                <button
                  class="btn bg-white dropdown-toggle p-3 d-flex align-items-center"
                  type="button"
                  id="dropdownMenuButton1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {{ date }}
                </button>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <h6 class="dropdown-header">Settings</h6>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div
                class="d-sm-flex justify-content-between align-items-center transaparent-tab-border {"
              >
                <div class="d-md-block d-none">
                  <a href="#" class="text-light p-1"
                    ><i class="mdi mdi-view-dashboard"></i
                  ></a>
                  <a href="#" class="text-light p-1"
                    ><i class="mdi mdi-dots-vertical"></i
                  ></a>
                </div>
              </div>
              <div class="tab-content tab-transparent-content">
                <div
                  class="tab-pane fade show active"
                  id="business-1"
                  role="tabpanel"
                  aria-labelledby="business-tab"
                >
                  <div class="row" v-if="dashboard">
                    <div
                      class="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card"
                    >
                      <div class="card">
                        <div class="card-body text-center">
                          <h5 class="mb-2 text-dark font-weight-normal">
                            Total Refferals
                          </h5>
                          <h2 class="mb-4 text-dark font-weight-bold">
                            {{ dashboard.total_refferals }}
                          </h2>

                          <p class="mt-4 mb-0">
                            People who have used your code
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card"
                    >
                      <div class="card">
                        <div class="card-body text-center">
                          <h5 class="mb-2 text-dark font-weight-normal">
                            Paid Referrals
                          </h5>
                          <h2 class="mb-4 text-dark font-weight-bold">
                            {{ dashboard.paid_referrals }}
                          </h2>

                          <p class="mt-4 mb-0">People who we have paid</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card"
                    >
                      <div class="card">
                        <div class="card-body text-center">
                          <h5 class="mb-2 text-dark font-weight-normal">
                            Wallet Balance
                          </h5>
                          <h2 class="mb-4 text-dark font-weight-bold">
                            {{ dashboard.wallet_balance }}
                          </h2>

                          <p class="mt-4 mb-0">Amount in your wallet</p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card"
                    >
                      <div class="card">
                        <div class="card-body text-center">
                          <h5 class="mb-2 text-dark font-weight-normal">
                            Total Amount withdrawn
                          </h5>
                          <h2 class="mb-4 text-dark font-weight-bold">
                            {{ dashboard.total_withdrawal }}
                          </h2>

                          <p class="mt-4 mb-0">Total money collected</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 grid-margin">
                      <div class="card">
                        <div class="col-lg-12 grid-margin stretch-card">
                          <div class="card">
                            <div class="card-body">
                              <h4 class="card-title" style="color: #c8342b">
                                Transaction logs
                              </h4>

                              <table class="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="item in transaction"
                                    :key="item.id"
                                  >
                                    <td>N{{ item.amount }}</td>
                                    <td>{{ item.date }}</td>
                                    <td>{{ item.status }}</td>
                                  </tr>
                                </tbody>
                              </table>
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
  mounted() {
    this.agentDetails;
  },
  computed: {
    ...mapActions(["agentDetails", "agentDashboard"]),
    ...mapGetters(["dashboard", "transaction"]),
    date() {
      let yourDate = new Date();
      return yourDate.toISOString().split("T")[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
