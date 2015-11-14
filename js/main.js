/**
 * Main module
 */
require(
    ['factory/init', 'pubsub/init'],
    function (factory, pubsub) {
        'use strict';

        var examplesList = {
            factory: factory,
            pubsub: pubsub
        };

        window.runExample = function (name) {
            if(!name){
                console.group();
                console.warn('you should provide a pattern name');
                console.info('available pattern samples: ', ['factory', 'iterator', 'pubsub', 'facade', 'strategy', 'decorator', 'observer', 'adapter', 'cor', 'composite', 'mediator', 'proxy'])
                console.groupEnd();
                return;
            }
            examplesList[name].init();
        };
    }
);