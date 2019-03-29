/*jshint esversion: 6 */


// Possible states of the environment
const states = {
  HEAT: "heat",
  COOL: "cool",
  OFF: "off"
};


class EnvironmentController {

  constructor(HVAC) {
    this.HVAC = HVAC;
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
    this.HVAC.setHeat(true);
  }

  cool() {
    this.HVAC.setFan(true);
    this.HVAC.setCool(true);
  }

  off() {
    this.HVAC.setFan(false);
    this.HVAC.setHeat(false);
    this.HVAC.setCool(false);
  }
}
