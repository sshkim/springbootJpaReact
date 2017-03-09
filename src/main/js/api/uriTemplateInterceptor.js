/**
 * Created by sshkim on 2017. 3. 8..
 */
define(function(require) {
    'use strict';

    var interceptor = require('rest/interceptor');

    return interceptor({
        request: function (request) {
            if (request.path.indexOf('{') === -1) {
                return request;
            } else {
                request.path = request.path.split('{')[0];
                return request;
            }
        }
    });

});