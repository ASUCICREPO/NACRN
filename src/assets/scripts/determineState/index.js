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
<a class='sidebar-link' href="adminChat.html">
  <span class="icon-holder">
    <i class="c-blue-500 fas fa-comments"></i>
  </span>
  <span class="title">Chat</span>
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
<a class='sidebar-link' href="calendar_admin.html">
  <span class="icon-holder">
    <i class="c-blue-500 fas fa-calendar-check"></i>
  </span>
  <span class="title">Schedule Appointment</span>
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

let admin_settings = `<div class="header-container">
<ul class="nav-left">
  <li>
    <a id='sidebar-toggle' class="sidebar-toggle" href="javascript:void(0);">
      <i class="ti-menu"></i>
    </a>
  </li>
  <li class="search-box">
    <a class="search-toggle no-pdd-right" href="javascript:void(0);">
      <i class="search-icon ti-search pdd-right-10"></i>
      <i class="search-icon-close ti-close pdd-right-10"></i>
    </a>
  </li>
  <li class="search-input">
    <input class="form-control" type="text" placeholder="Search...">
  </li>
</ul>
<ul class="nav-right">
  <li class="notifications dropdown">
    <span class="counter bgc-red">3</span>
    <a href="" class="dropdown-toggle no-after" data-toggle="dropdown">
      <i class="ti-bell"></i>
    </a>

    <ul class="dropdown-menu">
      <li class="pX-20 pY-15 bdB">
        <i class="ti-bell pR-10"></i>
        <span class="fsz-sm fw-600 c-grey-900">Notifications</span>
      </li>
      <li>
        <ul class="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
          <li>
            <a href="" class='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
              <div class="peer mR-15">
                <img class="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/lego/5.jpg" alt="">
              </div>
              <div class="peer peer-greed">
                <span>
                  <span class="fw-500">Reminder</span>
                  <span class="c-grey-600"> You have an approintment coming up <span class="text-dark">in 15 Mins</span>
                  </span>
                </span>
                <p class="m-0">
                  <small class="fsz-xs">5 mins ago</small>
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="" class='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
              <div class="peer mR-15">
                <img class="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/lego/5.jpg" alt="">
              </div>
              <div class="peer peer-greed">
                <span>
                  <span class="fw-500">Reminder</span>
                  <span class="c-grey-600">Check a new Change made on<span class="text-dark"> Homelessness Program .</span>
                  </span>
                </span>
                <p class="m-0">
                  <small class="fsz-xs">7 mins ago</small>
                </p>
              </div>
            </a>
          </li>
          
        </ul>
      </li>
      <li class="pX-20 pY-15 ta-c bdT">
        <span>
          <a href="" class="c-grey-600 cH-blue fsz-sm td-n">View All Notifications <i class="ti-angle-right fsz-xs mL-10"></i></a>
        </span>
      </li>
    </ul>
  </li>
  <li class="notifications dropdown">
    <span class="counter bgc-blue">3</span>
    <a href="" class="dropdown-toggle no-after" data-toggle="dropdown">
      <i class="ti-email"></i>
    </a>

    <ul class="dropdown-menu">
      <li class="pX-20 pY-15 bdB">
        <i class="ti-email pR-10"></i>
        <span class="fsz-sm fw-600 c-grey-900">Messages</span>
      </li>
      <li>
        <ul class="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
          <li>
            <a href="" class='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
              <div class="peer mR-15">
                <img class="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/1.jpg" alt="">
              </div>
              <div class="peer peer-greed">
                <div>
                  <div class="peers jc-sb fxw-nw mB-5">
                    <div class="peer">
                      <p class="fw-500 mB-0">John Doe(Care Co-ordinator)</p>
                    </div>
                    <div class="peer">
                      <small class="fsz-xs">5 mins ago</small>
                    </div>
                  </div>
                  <span class="c-grey-600 fsz-sm">
                    Please look into new change on Homelessness program.
                  </span>
                </div>
              </div>
            </a>
          </li>
         
          <li>
            <a href="adminChat.html" class='peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100'>
              <div class="peer mR-15">
                <img class="w-3r bdrs-50p" src="https://randomuser.me/api/portraits/men/3.jpg" alt="">
              </div>
              <div class="peer peer-greed">
                <div>
                  <div class="peers jc-sb fxw-nw mB-5">
                    <div class="peer">
                      <p class="fw-500 mB-0">Lee Doe(Care Co-ordinator)</p>
                    </div>
                    <div class="peer">
                      <small class="fsz-xs">25 mins ago</small>
                    </div>
                  </div>
                  <span class="c-grey-600 fsz-sm">
                    Please let me know your insights on Food For All programs.
                  </span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </li>
      <li class="pX-20 pY-15 ta-c bdT">
        <span>
          <a href="email.html" class="c-grey-600 cH-blue fsz-sm td-n">View All Messages <i class="fs-xs ti-angle-right mL-10"></i></a>
        </span>
      </li>
    </ul>
  </li>
  <li class="dropdown">
    <a href="" class="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown">
      <div class="peer mR-10">
        <img class="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/10.jpg" alt="">
      </div>
      <div class="peer">
        <span class="fsz-sm c-grey-900">John Doe</span>
      </div>
    </a>
    <ul class="dropdown-menu fsz-sm">
    <li>
        <a href="" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
          <i class="ti-settings mR-10"></i>
          <span>Setting</span>
        </a>
      </li>
      <li>
        <a href="settings-admin.html" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
          <i class="ti-user mR-10"></i>
          <span>Profile</span>
        </a>
      </li>
      <li>
        <a href="adminChat.html" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
          <i class="ti-email mR-10"></i>
          <span>Messages</span>
        </a>
      </li>
      <li role="separator" class="divider"></li>
      <li>
        <a href="signin.html" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
          <i class="ti-power-off mR-10"></i>
          <span>Logout</span>
        </a>
      </li>
      
    </ul>
  </li>
</ul>
</div>`

if (url.includes('admin')) {
  document.querySelector('#sideNavBar').innerHTML = adminBar
  document.querySelector('#topBar').innerHTML = admin_settings
}else {
  document.querySelector('#sideNavBar').innerHTML = endUserBar
}
