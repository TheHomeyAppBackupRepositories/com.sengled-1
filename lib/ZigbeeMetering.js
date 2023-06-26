"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupMetering = void 0;
const zigbee_clusters_1 = require("zigbee-clusters");
async function setupMetering(device, zclNode, includeInstantaneousDemand = false) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const clusterEndpoint = device.getClusterEndpoint(zigbee_clusters_1.CLUSTER.METERING);
    const { multiplier, divisor } = await zclNode.endpoints[clusterEndpoint]
        .clusters[zigbee_clusters_1.CLUSTER.METERING.NAME]
        .readAttributes('multiplier', 'divisor');
    device.meteringFactor = multiplier / divisor;
    device.registerCapability('meter_power', zigbee_clusters_1.CLUSTER.METERING, {
        getOpts: {
            getOnStart: true,
            getOnOnline: true,
            pollInterval: 60000, // 60s, should not change that often
        },
    });
    if (includeInstantaneousDemand) {
        device.registerCapability('measure_power', zigbee_clusters_1.CLUSTER.METERING, {
            get: 'instantaneousDemand',
            report: 'instantaneousDemand',
            getOpts: {
                getOnStart: true,
                getOnOnline: true,
                pollInterval: 10000, // 10s, as this value can change often
            },
            reportParser: async (value) => {
                if (value < 0)
                    return null;
                return value * device.meteringFactor * 1000; // kW to W
            },
        });
    }
}
exports.setupMetering = setupMetering;
//# sourceMappingURL=ZigbeeMetering.js.map