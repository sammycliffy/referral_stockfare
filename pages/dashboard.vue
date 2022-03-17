<template>
  <div class="container-scroller">
    <!-- partial:partials/_navbar.html -->
    <nav
      class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row"
    >
      <div
        class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center"
      >
        <a class="navbar-brand brand-logo" href="index.html"
          ><img src="assets/images/logo.svg" alt="logo"
        /></a>
        <a class="navbar-brand brand-logo-mini" href="index.html"
          ><img src="assets/images/logo-mini.svg" alt="logo"
        /></a>
      </div>
      <div class="navbar-menu-wrapper d-flex align-items-stretch">
        <button
          class="navbar-toggler navbar-toggler align-self-center"
          type="button"
          data-toggle="minimize"
        >
          <span class="mdi mdi-menu"></span>
        </button>
        <div class="search-field d-none d-xl-block">
          <form class="d-flex align-items-center h-100" action="#">
            <div class="input-group">
              <div class="input-group-prepend bg-transparent">
                <i class="input-group-text border-0 mdi mdi-magnify"></i>
              </div>
              <input
                type="text"
                class="form-control bg-transparent border-0"
                placeholder="Search products"
              />
            </div>
          </form>
        </div>
        <ul class="navbar-nav navbar-nav-right">
          <li class="nav-item nav-profile dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="profileDropdown"
              href="#"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="nav-profile-img">
                <img src="assets/images/faces/face28.png" alt="image" />
              </div>
              <div class="nav-profile-text" v-if="data">
                <p class="mb-1 text-black">{{ data.referral_agent_name }}</p>
              </div>
            </a>
            <div
              class="dropdown-menu navbar-dropdown dropdown-menu-right p-0 border-0 font-size-sm"
              aria-labelledby="profileDropdown"
              data-x-placement="bottom-end"
            >
              <div class="p-3 text-center bg-primary">
                <img
                  class="img-avatar img-avatar48 img-avatar-thumb"
                  src="assets/images/faces/face28.png"
                  alt=""
                />
              </div>
              <div class="p-2">
                <h5 class="dropdown-header text-uppercase pl-2 text-dark">
                  User Options
                </h5>
                <a
                  class="dropdown-item py-1 d-flex align-items-center justify-content-between"
                  href="#"
                >
                  <span>Inbox</span>
                  <span class="p-0">
                    <span class="badge badge-primary">3</span>
                    <i class="mdi mdi-email-open-outline ml-1"></i>
                  </span>
                </a>
                <a
                  class="dropdown-item py-1 d-flex align-items-center justify-content-between"
                  href="#"
                >
                  <span>Profile</span>
                  <span class="p-0">
                    <span class="badge badge-success">1</span>
                    <i class="mdi mdi-account-outline ml-1"></i>
                  </span>
                </a>
                <a
                  class="dropdown-item py-1 d-flex align-items-center justify-content-between"
                  href="javascript:void(0)"
                >
                  <span>Settings</span>
                  <i class="mdi mdi-settings"></i>
                </a>
                <div role="separator" class="dropdown-divider"></div>
                <h5 class="dropdown-header text-uppercase pl-2 text-dark mt-2">
                  Actions
                </h5>
                <a
                  class="dropdown-item py-1 d-flex align-items-center justify-content-between"
                  href="#"
                >
                  <span>Lock Account</span>
                  <i class="mdi mdi-lock ml-1"></i>
                </a>
                <a
                  class="dropdown-item py-1 d-flex align-items-center justify-content-between"
                  href="#"
                >
                  <span>Log Out</span>
                  <i class="mdi mdi-logout ml-1"></i>
                </a>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link count-indicator dropdown-toggle"
              id="messageDropdown"
              href="#"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="mdi mdi-email-outline"></i>
              <span class="count-symbol bg-success"></span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="messageDropdown"
            >
              <h6 class="p-3 mb-0 bg-primary text-white py-4">Messages</h6>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <img
                    src="assets/images/faces/face4.jpg"
                    alt="image"
                    class="profile-pic"
                  />
                </div>
                <div
                  class="preview-item-content d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="preview-subject ellipsis mb-1 font-weight-normal">
                    Mark send you a message
                  </h6>
                  <p class="text-gray mb-0">1 Minutes ago</p>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <img
                    src="assets/images/faces/face2.jpg"
                    alt="image"
                    class="profile-pic"
                  />
                </div>
                <div
                  class="preview-item-content d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="preview-subject ellipsis mb-1 font-weight-normal">
                    Cregh send you a message
                  </h6>
                  <p class="text-gray mb-0">15 Minutes ago</p>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <img
                    src="assets/images/faces/face3.jpg"
                    alt="image"
                    class="profile-pic"
                  />
                </div>
                <div
                  class="preview-item-content d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="preview-subject ellipsis mb-1 font-weight-normal">
                    Profile picture updated
                  </h6>
                  <p class="text-gray mb-0">18 Minutes ago</p>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <h6 class="p-3 mb-0 text-center">4 new messages</h6>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link count-indicator dropdown-toggle"
              id="notificationDropdown"
              href="#"
              data-toggle="dropdown"
            >
              <i class="mdi mdi-bell-outline"></i>
              <span class="count-symbol bg-danger"></span>
            </a>
            <div
              class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
              aria-labelledby="notificationDropdown"
            >
              <h6 class="p-3 mb-0 bg-primary text-white py-4">Notifications</h6>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-success">
                    <i class="mdi mdi-calendar"></i>
                  </div>
                </div>
                <div
                  class="preview-item-content d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="preview-subject font-weight-normal mb-1">
                    Event today
                  </h6>
                  <p class="text-gray ellipsis mb-0">
                    Just a reminder that you have an event today
                  </p>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-warning">
                    <i class="mdi mdi-settings"></i>
                  </div>
                </div>
                <div
                  class="preview-item-content d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="preview-subject font-weight-normal mb-1">
                    Settings
                  </h6>
                  <p class="text-gray ellipsis mb-0">Update dashboard</p>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item preview-item">
                <div class="preview-thumbnail">
                  <div class="preview-icon bg-info">
                    <i class="mdi mdi-link-variant"></i>
                  </div>
                </div>
                <div
                  class="preview-item-content d-flex align-items-start flex-column justify-content-center"
                >
                  <h6 class="preview-subject font-weight-normal mb-1">
                    Launch Admin
                  </h6>
                  <p class="text-gray ellipsis mb-0">New admin wow!</p>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <h6 class="p-3 mb-0 text-center">See all notifications</h6>
            </div>
          </li>
        </ul>
        <button
          class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-toggle="offcanvas"
        >
          <span class="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial:partials/_sidebar.html -->
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="index.html">
              <span class="icon-bg"
                ><i class="mdi mdi-cube menu-icon"></i
              ></span>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              data-toggle="collapse"
              href="#ui-basic"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <span class="icon-bg"
                ><i class="mdi mdi-crosshairs-gps menu-icon"></i
              ></span>
              <span class="menu-title">Withdraw</span>
              <i class="menu-arrow"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/icons/mdi.html">
              <span class="icon-bg"
                ><i class="mdi mdi-contacts menu-icon"></i
              ></span>
              <span class="menu-title">Transactions</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/forms/basic_elements.html">
              <span class="icon-bg"
                ><i class="mdi mdi-format-list-bulleted menu-icon"></i
              ></span>
              <span class="menu-title">Referral Logs</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/charts/chartjs.html">
              <span class="icon-bg"
                ><i class="mdi mdi-chart-bar menu-icon"></i
              ></span>
              <span class="menu-title">Update Account</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/tables/basic-table.html">
              <span class="icon-bg"
                ><i class="mdi mdi-table-large menu-icon"></i
              ></span>
              <span class="menu-title">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="d-xl-flex justify-content-between align-items-start">
            <h2 class="text-dark font-weight-bold mb-2">Overview dashboard</h2>
            <div
              class="d-sm-flex justify-content-xl-between align-items-center mb-2"
            >
              <div
                class="btn-group bg-white p-3"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  class="btn btn-link text-light py-0 border-right"
                >
                  7 Days
                </button>
                <button
                  type="button"
                  class="btn btn-link text-dark py-0 border-right"
                >
                  1 Month
                </button>
                <button type="button" class="btn btn-link text-light py-0">
                  3 Month
                </button>
              </div>
              <div class="dropdown ml-0 ml-md-4 mt-2 mt-lg-0">
                <button
                  class="btn bg-white dropdown-toggle p-3 d-flex align-items-center"
                  type="button"
                  id="dropdownMenuButton1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="mdi mdi-calendar mr-1"></i>24 Mar 2019 - 24 Mar 2019
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
                  <div class="row" v-if="data">
                    <div
                      class="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card"
                    >
                      <div class="card">
                        <div class="card-body text-center">
                          <h5 class="mb-2 text-dark font-weight-normal">
                            Total Refferals
                          </h5>
                          <h2 class="mb-4 text-dark font-weight-bold">
                            {{ data.total_refferals }}
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
                            {{ data.paid_referrals }}
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
                            {{ data.wallet_balance }}
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
                            {{ data.total_withdrawal }}
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
                              <h4 class="card-title">Transaction logs</h4>

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
                                  <tr>
                                    <td>1</td>
                                    <td>Herman Beck</td>
                                    <td>
                                      <div class="progress">
                                        <div
                                          class="progress-bar bg-success"
                                          role="progressbar"
                                          style="width: 25%"
                                          aria-valuenow="25"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </td>
                                    <td>$ 77.99</td>
                                    <td>May 15, 2015</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>Messsy Adam</td>
                                    <td>
                                      <div class="progress">
                                        <div
                                          class="progress-bar bg-danger"
                                          role="progressbar"
                                          style="width: 75%"
                                          aria-valuenow="75"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </td>
                                    <td>$245.30</td>
                                    <td>July 1, 2015</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>John Richards</td>
                                    <td>
                                      <div class="progress">
                                        <div
                                          class="progress-bar bg-warning"
                                          role="progressbar"
                                          style="width: 90%"
                                          aria-valuenow="90"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </td>
                                    <td>$138.00</td>
                                    <td>Apr 12, 2015</td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>Peter Meggik</td>
                                    <td>
                                      <div class="progress">
                                        <div
                                          class="progress-bar bg-primary"
                                          role="progressbar"
                                          style="width: 50%"
                                          aria-valuenow="50"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </td>
                                    <td>$ 77.99</td>
                                    <td>May 15, 2015</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>Edward</td>
                                    <td>
                                      <div class="progress">
                                        <div
                                          class="progress-bar bg-danger"
                                          role="progressbar"
                                          style="width: 35%"
                                          aria-valuenow="35"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </td>
                                    <td>$ 160.25</td>
                                    <td>May 03, 2015</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>John Doe</td>
                                    <td>
                                      <div class="progress">
                                        <div
                                          class="progress-bar bg-info"
                                          role="progressbar"
                                          style="width: 65%"
                                          aria-valuenow="65"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </td>
                                    <td>$ 123.21</td>
                                    <td>April 05, 2015</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>Henry Tom</td>
                                    <td>
                                      <div class="progress">
                                        <div
                                          class="progress-bar bg-warning"
                                          role="progressbar"
                                          style="width: 20%"
                                          aria-valuenow="20"
                                          aria-valuemin="0"
                                          aria-valuemax="100"
                                        ></div>
                                      </div>
                                    </td>
                                    <td>$ 150.00</td>
                                    <td>June 16, 2015</td>
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
        <!-- content-wrapper ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
          <div class="footer-inner-wraper">
            <div
              class="d-sm-flex justify-content-center justify-content-sm-between"
            >
              <span
                class="text-muted d-block text-center text-sm-left d-sm-inline-block"
                >Copyright © bootstrapdash.com 2020</span
              >
              <span
                class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"
              >
                Free
                <a href="https://www.bootstrapdash.com/" target="_blank"
                  >Bootstrap dashboard templates</a
                >
                from Bootstrapdash.com</span
              >
            </div>
          </div>
        </footer>
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
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
    ...mapGetters(["data", "transaction"]),
  },
};
</script>

<style lang="scss" scoped></style>
