// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'overview',
    'getting-started',
    {
      type: 'category',
      label: 'Business templates',
      items: ['business-templates/overview', 'business-templates/service-businesses'],
    },
    {
      type: 'category',
      label: 'Modules',
      items: [
        'modules/overview',
        'modules/point-of-sale',
        'modules/products-and-inventory',
        'modules/customers-and-crm',
        'modules/branches',
        'modules/users-and-roles',
        'modules/finance',
        'modules/reporting',
        'modules/pickup-orders',
        'modules/online-store-and-marketplace',
        'modules/cash-services',
        'modules/cameras',
        'modules/pharmacy',
        'modules/retail-pack',
        'modules/tickets',
        'modules/custom-fields',
        'modules/bill-of-materials',
        'modules/sale-deposits',
        'modules/staff-and-commission',
        'modules/calendar-and-booking',
        'modules/serialized-assets',
        'modules/session-packs',
        'modules/attachments',
      ],
    },
    'billing-and-plans',
    'apps',
    'camera-bridge',
    'faq',
  ],
};

export default sidebars;
