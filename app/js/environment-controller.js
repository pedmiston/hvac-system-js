/*jshint esversion: 6 */

EnvironmentController = function(HVAC) {
  // Possible states of the environment
  const states = {
    HEAT: "heat",
    COOL: "cool",
    OFF: "off"
  };

  // Determine the state of the environment
  this.getState = function() {
    if(HVAC._temp < 65) { state = states.HEAT; }
    else if(HVAC._temp > 75) { state = states.COOL; }
    else { state = states.OFF; }
    return state;
  };

  this.tick = function() {
    switch (this.getState()) {
      case states.HEAT:
        HVAC.setFan(true);
        break;
      case states.COOL:
        HVAC.setFan(true);
        break;
      case states.OFF:
        HVAC.setFan(false);
        break;
    }
  };
  return this;
};
