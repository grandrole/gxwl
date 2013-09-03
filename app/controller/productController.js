/*
 * File: app/controller/productController.js
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

Ext.define('MyApp.controller.productController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            productListList: '#productListListID',
            executeView: '#executeViewID',
            productDetailView: '#productDetailViewID'
        },

        control: {
            "#productListListID": {
                activate: 'onProductListListIDActivate'
            },
            "#mybutton8": {
                tap: 'onMybutton8Tap'
            },
            "nestedlist#productList": {
                leafitemtap: 'onProductListLeafItemTap'
            },
            "button[itemId=selectProductCancelBtn]": {
                tap: 'onSelectProductCancelBtnTap'
            },
            "button[itemId=btnBuyID]": {
                tap: 'onBtnBuyIDTap'
            }
        }
    },

    onProductListListIDActivate: function(container, newActiveItem, oldActiveItem, eOpts) {
        var store = Ext.data.StoreManager.lookup('goodsStoreID');

        store.setProxy({
            url:   systemConfig.System_ProxyRootURL,
            extraParams: {
                InterfaceName:    'GoodsDataUpdate',
                SN:               '0000000002',
                USER_ID:          loginAccount.USER_ID
            },
            callbackKey:          'callback',

            callback: function(records, operation, success) {
                console.log(records, success, operation);
            }
        });

        console.log(store);

        store.load();
    },

    onMybutton8Tap: function(button, e, eOpts) {
        alert("Product Button");
    },

    onProductListLeafItemTap: function(nestedlist, list, index, target, record, e, eOpts) {

        console.log(record.data);
        var unitPrice = record.data.product_price + "元";
        nestedlist.getDetailCard().setValues({
            'productName': record.data.product_name,
            'productSKU': record.data.product_sku,
            'productSalePrice': unitPrice
        });

        /// Ext.getCmp('btnBuyID').hidden();
    },

    onSelectProductCancelBtnTap: function(button, e, eOpts) {
        this.getExecuteView().pop();
    },

    onBtnBuyIDTap: function(button, e, eOpts) {
        var store =  Ext.getStore('orderDetailStoreID');
        console.log("buyIDTap", store);

        var values = this.getProductDetailView().getValues();
        console.log("values:", values);

        var rec = {
            'goodsID': values.productSKU,
            'buyCount': values.fsBuyCount,
            'unitPrice': values.productSalePrice,
            'goodsName': values.productName
        };

        console.log("rec", rec);

        store.add(rec);
        var orderItem = store.getAt(0);
        if (!orderItem) {
            store.sync();
        }

        this.getExecuteView().pop();
    },

    productSelected: function(frm) {
        //设置DetailCard

        var proListFrm = Ext.create('MyApp.view.productView');
        //var detailList = proListFrm.getComponent('productList');

        //detailList.setDetailCard(frm);
        //this.getExecuteView().getNavigationBar().hide();
        this.getExecuteView().push(proListFrm);
    },

    displayProduct: function() {
        var dispProductFrm = Ext.create('MyApp.view.productDetailView');
        this.getExecuteView().push(dispProductFrm);
    }

});