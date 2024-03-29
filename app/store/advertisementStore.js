/*
 * File: app/store/advertisementStore.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.advertisementStore', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.advertisementModel'
    ],

    config: {
        autoLoad: true,
        model: 'MyApp.model.advertisementModel',
        storeId: 'advertisementStoreID',
        proxy: {
            type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.acme.com/jef/apod/rss.xml&num=20',
            autoAppendParams: false,
            reader: {
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
    }
});