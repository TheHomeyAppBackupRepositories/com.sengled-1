"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SengledZigBeeMeteringLightDevice = void 0;
const homey_zigbeedriver_1 = require("homey-zigbeedriver");
const ZigbeeMetering_1 = require("./ZigbeeMetering");
class SengledZigBeeMeteringLightDevice extends homey_zigbeedriver_1.ZigBeeLightDevice {
    constructor() {
        super(...arguments);
        this.meteringFactor = 1;
    }
    async onNodeInit(payload) {
        await super.onNodeInit(payload);
        await (0, ZigbeeMetering_1.setupMetering)(this, payload.zclNode);
    }
}
exports.SengledZigBeeMeteringLightDevice = SengledZigBeeMeteringLightDevice;
//# sourceMappingURL=SengledZigBeeMeteringLightDevice.js.map