const
  path              = require('path'),
  manifest          = require('../manifest'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const titles = {
  'index': 'Dashboard',
  'index_admin': 'Dashboard',
  'blank': 'Blank',
  'buttons': 'Buttons',
  'calendar': 'Calendar',
  'charts': 'Charts',
  'chat': 'Chat',
  'compose': 'Compose',
  'datatable': 'Datatable',
  'email': 'Email',
  'forms': 'Forms',
  'google-maps': 'Google Maps',
  'signin': 'Signin',
  'signup': 'Signup',
  'ui': 'UI',
  'vector-maps': 'Vector Maps',
  '404': '404',
  '500': '500',
  'basic-table': 'Basic Table',
  'settings': 'Settings',
  'settings_admin': 'Settings',
  'invite': 'Invite',
  'invite_admin': 'Invite',
  'edit-profile': 'Edit Profile',
  'edit-contact-preferences': 'Edit Contact Preferences',
  'add-remove-admin': 'Add/Remove Admin',
  'view-admins': 'View Admins'
};

module.exports = Object.keys(titles).map(title => {
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
      useShortDoctype: true,
    },
  });
});
