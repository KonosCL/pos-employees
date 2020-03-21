# -*- coding: utf-8 -*-
# This module and its content is copyright of Technaureus Info Solutions Pvt. Ltd.
# - © Technaureus Info Solutions Pvt. Ltd 2019. All rights reserved.
{
    'name': 'POS Cashier and Salesperson',
    'category': 'Point Of Sale',
    'summary': '''
        Show POS Cashier and salesperson separately.
    ''',
    'sequence': 1,
    'author': 'Technaureus Info Solutions Pvt. Ltd.',
    'website': 'http://www.technaureus.com/',
    'version': '13.0.1.1',
    'price': 30,
    'currency': 'EUR',
    'license': 'Other proprietary',
    'depends': ['point_of_sale', 'pos_hr'],
    'data': [
        'views/point_of_sale_view.xml',
        'views/point_of_sale.xml',
    ],
    'qweb': ['static/src/xml/cashier.xml'],
    'images': ['images/pos_screenshot.png'],
    'installable': True,
    'application': True,
    'auto_install': False,
    'live_test_url': 'https://www.youtube.com/watch?v=1PiPIrBKRGQ'
}
