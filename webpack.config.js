const path = require('path');

module.exports = {
    //...
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'src/images/'),
            Templates: path.resolve(__dirname, 'src/templates/'),
        },
    },
};