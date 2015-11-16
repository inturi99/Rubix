'use strict';

import 'preloader';

import routes from 'routes';
import router from 'global/router';

/* Initialize Locales */
l20n.initializeLocales(__APPNAME__, {
  'locales': ['en-US', 'fr', 'it', 'ge', 'ar', 'ch'],
  'default': 'en-US'
});

Pace.once('hide', () => {
  $('#pace-loader').removeClass('pace-big').addClass('pace-small');
});

module.exports = router(routes);
