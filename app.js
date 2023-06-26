"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const homey_1 = __importDefault(require("homey"));
const homey_log_1 = require("homey-log");
const source_map_support_1 = __importDefault(require("source-map-support"));
source_map_support_1.default.install();
class SengledApp extends homey_1.default.App {
    onInit() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.homeyLog = new homey_log_1.Log({ homey: this.homey });
        // Register condition handlers
        this.homey.flow
            .getConditionCard('sengled_current_power_usage_greater_than')
            .registerRunListener((args) => args.device.getCapabilityValue('measure_power') > args.usage);
        this.homey.flow
            .getConditionCard('sengled_current_power_usage_less_than')
            .registerRunListener((args) => args.device.getCapabilityValue('measure_power') < args.usage);
        this.log('Sengled has been initialized');
        return Promise.resolve();
    }
}
module.exports = SengledApp;
//# sourceMappingURL=app.js.map