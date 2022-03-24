<template>
  <div>
    <nav class="sidebar sidebar-offcanvas" id="sidebar" style="height: 100%">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="index.html">
            <span class="icon-bg"><i class="mdi mdi-cube menu-icon"></i></span>
            <span class="menu-title">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-toggle="collapse"
            href="/withdrawal"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <span class="icon-bg"> </span>
            <span class="menu-title">Withdraw</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/transaction">
            <span class="icon-bg"
              ><i class="mdi mdi-contacts menu-icon"></i
            ></span>
            <span class="menu-title">Transactions</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="referral">
            <span class="icon-bg"
              ><i class="mdi mdi-format-list-bulleted menu-icon"></i
            ></span>
            <span class="menu-title">Referral Logs</span>
          </a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="pages/charts/chartjs.html">
            <span class="icon-bg"
              ><i class="mdi mdi-chart-bar menu-icon"></i
            ></span>
            <span class="menu-title">Update Account</span>
          </a>
        </li> -->
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
