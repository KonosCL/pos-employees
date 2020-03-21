odoo.define('pos_cashier.db_employee', function (require) {
"use strict";
    var PosDB = require('point_of_sale.DB');
    PosDB.DB = PosDB.include({
         set_salesperson_id: function(salesperson) {
             // Always update if the user is the same as before
             this.save('salesperson_id', salesperson || null);
         },
         get_salesperson_id: function() {
             return this.load('salesperson_id');
         }
    });
});