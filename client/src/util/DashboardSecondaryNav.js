/*
    required format for secondary nav links:
    Array of objects that include properties: 
        href (string)
        text (string)
        color (string)
*/

export default [
    { href: '/dashboard/messages/list', text: 'Message List', color: 'white' },
    { href: '/api/v1/messages/all', text: 'Refresh', color: 'white', api: true },
];