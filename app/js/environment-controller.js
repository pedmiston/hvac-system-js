EnvironmentController = function(HVAC) {
  const states = {
    HEAT_ON: "heat_on",
    COOL_ON: "cool_on",
    HVAC_OFF: "hvac_off"
  }
  this.getState = function() {
    if(HVAC._temp < 65) state = states.HEAT_ON
    else if(HVAC._temp > 75) state = states.COOL_ON
    else state = states.HVAC_OFF
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
