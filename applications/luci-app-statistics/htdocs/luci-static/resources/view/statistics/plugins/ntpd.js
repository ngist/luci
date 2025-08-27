'use strict';
'require baseclass';
'require form';

return baseclass.extend({
	title: _('NTPd Plugin Configuration'),
	description: _('The NTPd plugin collects statistics about the system NTP time.'),

	configSummary: function(section) {
		return _('NTP monitoring enabled');
	}
});
