'use strict';

var getShipUpgradeXpCost = function (shipId) {
    if (shipId === 't70xwing') {
        return 10;
    }

    return 5;
};

module.exports.getShipUpgradeXpCost = getShipUpgradeXpCost;
