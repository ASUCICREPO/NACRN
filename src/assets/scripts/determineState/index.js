let url = window.location.href;

let adminBar = `<li class="nav-item mT-30 actived">
<a class="sidebar-link" href="index-admin.html">
  <span class="icon-holder">
    <i class="c-blue-500 fas fa-search"></i>
  </span>
  <span class="title">All Programs</span>
</a>
</li>
<li class="nav-item mT-30 actived">
<a class="sidebar-link" href="settings-admin.html">
  <span class="icon-holder">
    <i class="c-blue-500 fas fa-user"></i>  
  </span>
  <span class="title">User Profile</span>
</a>
</li>
<li class="nav-item mT-30 actived">
<a class="sidebar-link" href="invite-admin.html">
  <span class="icon-holder">
    <i class="c-blue-500 fab fa-telegram-plane"></i>
  </span>
  <span class="title">Send an Invite</span>
</a>
</li>
<li class="nav-item mT-30 actived">
<a class="sidebar-link" href="add-remove-admin.html">
  <span class="icon-holder">
    <i class="c-blue-500 fas fa-plus"></i>
  </span>
  <span class="title">Manage Administrators</span>
</a>
</li>`;

let endUserBar = `<li class="nav-item mT-30 actived">
<a class="sidebar-link" href="index.html">
  <span class="icon-holder">
    <i class="c-blue-500 fas fa-search"></i>
  </span>
  <span class="title">All Programs</span>
</a>
</li>
<li class="nav-item mT-30 actived">
<a class="sidebar-link" href="settings.html">
  <span class="icon-holder">
    <i class="c-blue-500 fas fa-user"></i>  
  </span>
  <span class="title">User Profile</span>
</a>
</li>
<li class="nav-item mT-30 actived">
<a class="sidebar-link" href="invite.html">
  <span class="icon-holder">
    <i class="c-blue-500 fab fa-telegram-plane"></i>
  </span>
  <span class="title">Send an Invite</span>
</a>
</li>`

if(url.includes("admin")) {
    document.querySelector("#sideNavBar").innerHTML = adminBar;
}
else {
    document.querySelector("#sideNavBar").innerHTML = endUserBar;
}