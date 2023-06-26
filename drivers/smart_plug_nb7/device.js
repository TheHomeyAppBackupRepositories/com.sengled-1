"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zigbee_clusters_1 = require("zigbee-clusters");
const SengledZigbeeMeteringDevice_1 = require("../../lib/SengledZigbeeMeteringDevice");
const ZigbeeMetering_1 = require("../../lib/ZigbeeMetering");
class SengledSmartPlugNB7Device extends SengledZigbeeMeteringDevice_1.SengledZigbeeMeteringDevice {
    constructor() {
        super(...arguments);
        this.meteringFactor = 1;
    }
    async onNodeInit(payload) {
        await super.onNodeInit(payload);
        this.registerCapability('onoff', zigbee_clusters_1.CLUSTER.ON_OFF);
        await (0, ZigbeeMetering_1.setupMetering)(this, payload.zclNode, true);
    }
}
module.exports = SengledSmartPlugNB7Device;
//# sourceMappingURL=device.js.map