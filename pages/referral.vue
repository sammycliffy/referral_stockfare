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
                              <h4 class="card-title">Referrals</h4>
                              <p>
                                Contains all persons who have used your code
                              </p>
                              <table class="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Referral Codes</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="item in referral" :key="item.id">
                                    <td>N{{ item.name }}</td>
                                    <td>{{ item.used_code }}</td>
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
    this.referralLogs;
  },
  computed: {
    ...mapActions(["referralLogs"]),
    ...mapGetters(["referral"]),
  },
};
</script>

<style lang="scss" scoped></style>
