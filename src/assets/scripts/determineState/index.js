let url = window.location.href

let adminBar = `<li class="nav-item mT-30 actived">
<a class="sidebar-link" href="index_admin.html">
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
<a class="sidebar-link" href="manage-users-admin.html">
  <span class="icon-holder">
    <i class="c-blue-500 fas fa-plus"></i>
  </span>
  <span class="title">Manage Users</span>
</a>
</li>
<li class="nav-item mT-30 actived">
<a class="sidebar-link" href="manage-groups-admin.html">
  <span class="icon-holder">
    <i class="c-blue-500 fas fa-users"></i>
  </span>
  <span class="title">Manage Organizations</span>
</a>
</li>`

let endUserBar = `<li class="nav-item mT-30 actived">
<a class="sidebar-link" href="endUserprograms.html">
  <span class="icon-holder">
    <i class="c-blue-500 fas fa-search"></i>
  </span>
  <span class="title">Programs</span>
</a>
</li>
<li class="nav-item mT-30 actived">
<a class="sidebar-link" href="edit-profile-endUser.html">
  <span class="icon-holder">
    <i class="c-blue-500 fas fa-user"></i>
  </span>
  <span class="title">User Profile</span>
</a>
</li>

<li class="nav-item mT-30 actived">
<a class='sidebar-link' href="endUserChat.html">
  <span class="icon-holder">
    <i class="c-blue-500 fas fa-comments"></i>
  </span>
  <span class="title">Chat</span>
</a>
</li>
<li class="nav-item mT-30 actived">
<a class='sidebar-link' href="calendarEndUser.html">
  <span class="icon-holder">
    <i class="c-blue-500 fas fa-calendar-check"></i>
  </span>
  <span class="title">Schedule Appointment</span>
</a>
</li>
<li class="nav-item mT-30 actived">
<a class="sidebar-link" href="invite_endUser.html">
  <span class="icon-holder">
    <i class="c-blue-500 fab fa-telegram-plane"></i>
  </span>
  <span class="title">Send an Invite</span>
</a>
</li>`

if (url.includes('admin')) {
  document.querySelector('#sideNavBar').innerHTML = adminBar
}else {
  document.querySelector('#sideNavBar').innerHTML = endUserBar
}
