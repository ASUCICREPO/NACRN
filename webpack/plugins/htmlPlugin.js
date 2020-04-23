const path = require('path'),
  manifest = require('../manifest'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

const titles = {
  index: 'Dashboard',
  blank: 'Blank',
  buttons: 'Buttons',
  calendar: 'Calendar',
  charts: 'Charts',
  chat: 'Chat',
  compose: 'Compose',
  datatable: 'Datatable',
  email: 'Email',
  forms: 'Forms',
  'google-maps': 'Google Maps',
  signin: 'Signin',
  signup: 'Signup',
  ui: 'UI',
  'vector-maps': 'Vector Maps',
  '404': '404',
  '500': '500',
  'basic-table': 'Basic Table',
  settings: 'Settings',

  'edit-contact-preferences': 'Edit Contact Preferences',
  powerUser: 'powerUser',

  homelessMoms: 'homelessMoms',
  powerUserInvite: 'powerUserInvite',
  powerUserSettings: 'powerUserSettings',

  index_admin: 'index_admin',
  invite_admin: 'invite_admin',
  settings_admin: 'settings_admin',

  questionnaire: 'questionnaire',
  questionnaire1: 'questionnaire1',
  questionnaire2: 'questionnaire2',
  questionnaire3: 'questionnaire3',
  questionnaire4: 'questionnaire4',
  signupRedirect: 'signupRedirect',
  sampleIndex: 'sampleIndex',
  calendarEndUser: 'calendarEndUser',
  endUserChat: 'endUserChat',
  endUserprograms: 'endUserprograms',

  'questionnaire copy': 'questionnaire copy',

  settings: 'Settings',
  'settings-admin': 'Settings',
  invite_endUser: 'invite_endUser',
  'invite-admin': 'Invite',
  'edit-profile-endUser': 'edit-profile-endUser',
  'edit-profile-admin': 'Edit Profile',
  'edit-contact-preferences': 'Edit Contact Preferences',
  'edit-contact-preferences-admin': 'Edit Contact Preferences',
  'manage-users-admin': 'Manage Users',
  'profile-image-selection': 'Select Profile Image',
  'profile-image-selection-admin': 'Select Profile Image',
  'add-user-admin': 'Add a User',
  'manage-groups-admin': 'Manage Groups',
  'add-group-admin': 'Add a Group',
  adminChat: 'adminChat',
  calendar_admin: 'calendar_admin',
  'add-remove-admin': 'add-remove-admin',
  caretaker: 'caretaker',
  admin_home: 'admin_home',
  'calendarEndUser2': 'calendarEndUser2',
  'calendarEndUser3': 'calendarEndUser3',
  'calendar_admin_add_availability': 'calendar_admin_add_availability',
  'logs-admin': 'logs-admin',
  'calendar_careCoordinator_add_availability': 'calendar_careCoordinator_add_availability',
  'calendar_careCoordinator': 'calendar_careCoordinator'

}

module.exports = Object.keys(titles).map((title) => {
  return new HtmlWebpackPlugin({
    template: path.join(manifest.paths.src, `${title}.html`),
    path: manifest.paths.build,
    filename: `${title}.html`,
    inject: true,
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true
    }
  })
})
