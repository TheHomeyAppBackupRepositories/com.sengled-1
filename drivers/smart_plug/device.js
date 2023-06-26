"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homey_zigbeedriver_1 = require("homey-zigbeedriver");
const zigbee_clusters_1 = require("zigbee-clusters");
class SengledSmartPlugDevice extends homey_zigbeedriver_1.ZigBeeDevice {
    onNodeInit() {
        this.registerCapability('onoff', zigbee_clusters_1.CLUSTER.ON_OFF);
    }
}
module.exports = SengledSmartPlugDevice;
//# sourceMappingURL=device.js.map