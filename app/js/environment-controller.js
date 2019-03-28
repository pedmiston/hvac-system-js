EnvironmentController = function(HVAC) {
  this.tick = function() {
    HVAC.setFan(true);
  };
  return this;
};
