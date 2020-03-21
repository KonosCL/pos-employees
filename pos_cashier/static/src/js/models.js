odoo.define('pos_cashier.employees', function (require) {
    "use strict";

var models = require('point_of_sale.models');
var rpc = require('web.rpc');
var posmodel_super = models.PosModel.prototype;
models.PosModel = models.PosModel.extend({
    get_salesperson_id: function(){
        // reset the cashier to the current user if session is new
        if (this.db.load('pos_session_id') !== this.pos_session.id) {
            this.set_salesperson_id(this.employee);
        }
        return this.db.get_salesperson_id() || this.get('salesperson_id') || this.employee;
    },
    // changes the current cashier
    set_salesperson_id: function(employee){
        this.set('salesperson_id', employee);
        this.db.set_salesperson_id(this.get('salesperson_id'));
    },
});

});
