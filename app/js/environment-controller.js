EnvironmentController = function(HVAC) {
  this.tick = function() {
    if(HVAC._temp >= 65 && HVAC._temp <= 75) {
      HVAC.setFan(false);
    } else {
      HVAC.setFan(true);
    }
  };
  return this;
};
