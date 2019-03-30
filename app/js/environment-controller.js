/*jshint esversion: 6 */


// Possible states of the HVAC controller
const states = {
  HEAT: "heat",
  COOL: "cool",
  OFF: "off"
};


class EnvironmentController {

  constructor(HVAC) {
    this.HVAC = HVAC;
    this.timers = {
      fanOn: 0,
      headOn: 0,
      coolOn: 0
    };
  }

  // Determine the state of the environment
  getState() {
    if(this.HVAC._temp < 65) {
      return states.HEAT;
    } else if(this.HVAC._temp > 75) {
      return states.COOL;
    } else {
      return states.OFF;
    }
  }

  tick() {
    if(this.HVAC._fanOn) { this.timers.fanOn += 1; }

    switch (this.getState()) {
      case states.HEAT:
        this.heat();
        break;
      case states.COOL:
        this.cool();
        break;
      case states.OFF:
        this.off();
        break;
    }
  }

  heat() {
    this.HVAC.setFan(true);
    if(this.timers.fanOn >= 1) {
      this.HVAC.setHeat(true);
    }
  }

  cool() {
    this.HVAC.setFan(true);
    if(this.timers.fanOn >= 1) {
      this.HVAC.setCool(true);
    }
  }

  off() {
    this.HVAC.setFan(false);
    this.HVAC.setHeat(false);
    this.HVAC.setCool(false);
  }
}
