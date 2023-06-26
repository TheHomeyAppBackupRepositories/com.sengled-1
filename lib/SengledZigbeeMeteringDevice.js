"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SengledZigbeeMeteringDevice = void 0;
const homey_zigbeedriver_1 = require("homey-zigbeedriver");
const ZigbeeMetering_1 = require("./ZigbeeMetering");
class SengledZigbeeMeteringDevice extends homey_zigbeedriver_1.ZigBeeDevice {
    constructor() {
        super(...arguments);
        this.meteringFactor = 1;
    }
    async onNodeInit(payload) {
        await super.onNodeInit(payload);
        await (0, ZigbeeMetering_1.setupMetering)(this, payload.zclNode);
    }
}
exports.SengledZigbeeMeteringDevice = SengledZigbeeMeteringDevice;
//# sourceMappingURL=SengledZigbeeMeteringDevice.js.map