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
        this.HVAC.setFan(true);
        this.HVAC.setHeat(true);
        break;
      case states.COOL:
        this.HVAC.setFan(true);
        break;
      case states.OFF:
        this.HVAC.setFan(false);
        break;
    }
  }
}
