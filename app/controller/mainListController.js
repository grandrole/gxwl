/*
 * File: app/controller/mainListController.js
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

Ext.define('MyApp.controller.mainListController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            loginForm: '#loginFormID',
            executeView: '#executeViewID'
        },

        control: {
            "#MainListList": {
                itemtap: 'onMainListListItemTap'
            }
        }
    },

    onMainListListItemTap: function(dataview, index, target, record, e, eOpts) {

        if (record.data.code == 'scareBuying') {
            //折扣商品
        }

        if (record.data.code == "buyGoods") {
            var detailForm = Ext.create('MyApp.view.productDetailView');
            this.getApplication().getController('productController').productSelected(detailForm);
        }
        if (record.data.code == "shoppingCart") {
            this.getApplication().getController('orderController').displayShoppingCartView();
        }

        if (record.data.code == "dispatching") {
        }

        if (record.data.code == "contact") {
        }

        if (record.data.code == "Setting") {

        }
    }

});