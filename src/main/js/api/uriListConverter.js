/**
 * Created by sshkim on 2017. 3. 8..
 */
define(function() {
    'use strict';

    return {
        read: function(str) {
            return str.split('\n');
        },
        write: function(obj) {
            if (obj instanceof Array) {
                return obj.map(function(resource) {
                    return resource._links.self.href;
                }).join('\n');
            } else {
                return obj._links.self.href;
            }
        }
    };

});
