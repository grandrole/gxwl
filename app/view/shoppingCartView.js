/*
 * File: app/view/shoppingCartView.js
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

Ext.define('MyApp.view.shoppingCartView', {
    extend: 'Ext.Panel',

    config: {
        ui: '',
        layout: {
            type: 'vbox'
        },
        scrollable: 'vertical',
        items: [
            {
                xtype: 'dataview',
                flex: 1,
                ui: '',
                itemTpl: [
                    '<div>{goodsName}    {unitPrice}    {buyCount}</div>'
                ],
                store: 'orderDetailStoreID'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        id: 'btnSubmitOrder',
                        text: '提交订单'
                    },
                    {
                        xtype: 'button',
                        id: 'btnBuyGoods',
                        text: '购买商品'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        id: 'btnCancel',
                        text: '取消'
                    }
                ]
            }
        ]
    }

});