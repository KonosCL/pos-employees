# -*- coding: utf-8 -*-
# This module and its content is copyright of Technaureus Info Solutions Pvt. Ltd.
# - © Technaureus Info Solutions Pvt. Ltd 2019. All rights reserved.

from odoo import api, fields, models, _


class PosOrder(models.Model):
    _inherit = "pos.order"

    salesperson = fields.Char("Salesperson")

    @api.model
    def get_salesperson(self, salesperson):
        global salesmandetails
        salesmandetails = salesperson

    @api.model
    def _order_fields(self, ui_order):
        order_fields = super(PosOrder, self)._order_fields(ui_order)
        try:
            order_fields['salesperson'] = salesmandetails['name']
        except:
            order_fields['salesperson'] = ui_order['user_id'] or False
        return order_fields
