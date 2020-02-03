const
  path              = require('path'),
  manifest          = require('../manifest'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

const titles = {
  'index': 'Global User Dashboard',
  'index-admin': 'Administrator Dashboard',
  '404': '404',
  '500': '500',
  'settings': 'Settings',
  'settings-admin': 'Settings',
  'invite': 'Invite',
  'invite-admin': 'Invite',
  'edit-profile': 'Edit Profile',
  'edit-profile-admin': 'Edit Profile',
  'edit-contact-preferences': 'Edit Contact Preferences',
  'edit-contact-preferences-admin': 'Edit Contact Preferences',
  'add-remove-admin': 'Add/Remove Admin',
  'view-admins': 'View Admins',
  'profile-image-selection': 'Select Profile Image',
  'profile-image-selection-admin': 'Select Profile Image'
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
