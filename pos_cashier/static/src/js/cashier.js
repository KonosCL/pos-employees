odoo.define('pos_cashier.cashier', function (require) {
"use strict";

var PosBaseWidget = require('point_of_sale.BaseWidget');
var chrome = require('point_of_sale.chrome');
var gui = require('point_of_sale.gui');
var core = require('web.core');
var rpc = require('web.rpc');

var QWeb = core.qweb;
var _t = core._t;

/*---------- SalesPerson Widget-------------- */
var SalesPersonWidget = PosBaseWidget.extend({
    template: 'SalesPersonWidget',
    init: function(parent, options){
        options = options || {};
        this._super(parent,options);
    },
    renderElement: function(){
        var self = this;
        this._super();

        this.$el.click(function(){
            self.click_salesperson();
        });
    },
    click_salesperson: function(){
            if(!this.pos.config.module_pos_hr) { return; }
            var self = this;
            this.gui.select_employee({
                'security':     true,
                'current_employee': this.pos.get_salesperson_id(),
                'title':      _t('Change Salesperson'),
            }).then(function(employee){
                self.pos.set_salesperson_id(employee);
                self.chrome.widget.username.renderElement();
                self.renderElement();
            });
        },

    get_salesperson_name: function(){
        var user = this.pos.get_salesperson_id() || this.pos.user;
        if(user){
           var self=this;
        rpc.query({
                model: 'pos.order',
                method: 'get_salesperson',
                args: [user],
            });
            return user.name;
        }else{
            return "";
        }
    },


});

chrome.Chrome.include({
	build_widgets: function(){
		chrome.Chrome.prototype.widgets.push({
	        'name':   'pos_cashier',
	        'widget': SalesPersonWidget,
	        'replace':  '.placeholder-SalesPersonWidget',
	        'append':  '.pos-branding',
	    	});
        this._super();
    },
});

return {
    SalesPersonWidget: SalesPersonWidget
};
});