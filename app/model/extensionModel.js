/*
 * File: app/model/extensionModel.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.model.extensionModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'code',
                type: 'string'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'icon',
                type: 'string'
            },
            {
                name: 'description',
                type: 'string'
            }
        ],
        validations: [
            {
                type: 'presence',
                field: 'name'
            },
            {
                type: 'presence',
                field: 'code'
            }
        ]
    }
});