var _ = require('lodash');

function listFindAndRemove(list, value, delimiter) {
	delimiter = (typeof delimiter === 'undefined') ? "," : delimiter;
	var arr = list.split(delimiter);

	return _.without(arr, String(value)).join(delimiter);
}

_.mixin({'listFindAndRemove': listFindAndRemove})
