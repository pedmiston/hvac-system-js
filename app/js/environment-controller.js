EnvironmentController = function(HVAC) {
  const states = {
    HEAT: "heat",
    COOL: "cool",
    OFF: "off"
  }
  this.getState = function() {
    if(HVAC._temp < 65) state = states.HEAT
    else if(HVAC._temp > 75) state = states.COOL
    else state = states.OFF
    return state
  }
  this.tick = function() {
    if(HVAC._temp >= 65 && HVAC._temp <= 75) {
      HVAC.setFan(false);
    } else {
      HVAC.setFan(true);
    }
  };
  return this;
};
