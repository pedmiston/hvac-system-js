describe("The environment is cold. The HVAC controller", () => {
  var HVAC, controller;

  beforeEach(() => {
    HVAC = {
      _temp: 64,
      _heatOn: false,
      _coolOn: false,
      _fanOn: false,
      getTemp() { return this._temp; },
      setHeat(on) { this._heatOn = on; },
      setCool(on) { this._coolOn = on; },
      setFan(on) { this._fanOn = on; }
    };
    controller = new EnvironmentController(HVAC);
    controller.timers.heatOff = 10;  // the heat has been off for a while
    controller.timers.coolOff = 10;  // the cool has been off for a while
  });

  it("detects that it's cold", () => {
    expect(controller.getState()).toBe("heat")
  });

  it("turns the fan on", () => {
    controller.tick();
    expect(HVAC._fanOn).toBe(true);
  });

  it("doesn't turn both the fan and the heat on", () => {
    controller.tick();
    expect(HVAC._fanOn).toBe(true);
    expect(HVAC._heatOn).toBe(false);
  });

  it("turns the heat on one minute later", () => {
    controller.tick();
    controller.tick();
    expect(HVAC._fanOn).toBe(true);
    expect(HVAC._heatOn).toBe(true);
  });
});

describe("The environment is hot. The HVAC controller", () => {
  var HVAC, controller;

  beforeEach(() => {
    HVAC = {
      _temp: 76,
      _heatOn: false,
      _coolOn: false,
      _fanOn: false,
      getTemp() { return this._temp; },
      setHeat(on) { this._heatOn = on; },
      setCool(on) { this._coolOn = on; },
      setFan(on) { this._fanOn = on; }
    };
    controller = new EnvironmentController(HVAC);
    controller.timers.heatOff = 10;  // the heat has been off for a while
    controller.timers.coolOff = 10;  // the cool has been off for a while
  });

  it("detects that it's hot", () => {
    expect(controller.getState()).toBe("cool");
  });

  it("turns the fan on", () => {
    controller.tick();
    expect(HVAC._fanOn).toBe(true);
  });

  it("doesn't turn both the fan and the cool on", () => {
    controller.tick();
    expect(HVAC._fanOn).toBe(true);
    expect(HVAC._coolOn).toBe(false);
  });

  it("turns the cool on one minute later", () => {
    controller.tick();
    controller.tick();
    expect(HVAC._fanOn).toBe(true);
    expect(HVAC._coolOn).toBe(true);
  })
});

describe("The environment is perfect! The HVAC controller", () => {
  var HVAC, controller;

  beforeEach(() => {
    HVAC = {
      _temp: 70,
      _heatOn: false,
      _coolOn: false,
      _fanOn: false,
      getTemp() { return this._temp; },
      setHeat(on) { this._heatOn = on; },
      setCool(on) { this._coolOn = on; },
      setFan(on) { this._fanOn = on; }
    };
    controller = new EnvironmentController(HVAC);
  });

  it("detects that it's perfect", () => {
    expect(controller.getState()).toBe("off");
  });

  it("turns the fan off", () => {
    controller.tick();
    expect(HVAC._fanOn).toBe(false);
  });

});

describe("The environment is fluctuates. The HVAC controller", () => {
  var HVAC, controller;

  beforeEach(() => {
    HVAC = {
      _temp: 64,
      _heatOn: false,
      _coolOn: false,
      _fanOn: false,
      getTemp() { return this._temp; },
      setHeat(on) { this._heatOn = on; },
      setCool(on) { this._coolOn = on; },
      setFan(on) { this._fanOn = on; }
    };
    controller = new EnvironmentController(HVAC);
  });

  it("keeps track of how long the heat and cool have been turned off", () => {
    controller.tick();
    expect(controller.timers.heatOff).toBe(1);
    expect(controller.timers.coolOff).toBe(1);
  });

  it("waits 5 minutes since the heat turned off to turn the fan on", () => {
    controller.timers.coolOff = 10;  // the cool has been off for a while
    controller.tick();
    expect(HVAC._fanOn).toBe(false);
    controller.tick();
    controller.tick();
    controller.tick();
    controller.tick();
    controller.tick();
    expect(HVAC._fanOn).toBe(true);
  });

  it("waits 3 minutes since the cool turned off to turn the fan on", () => {
    controller.timers.heatOff = 10;  // the heat has been off for a while
    controller.tick();
    expect(HVAC._fanOn).toBe(false);
    controller.tick();
    controller.tick();
    controller.tick();
    expect(HVAC._fanOn).toBe(true);
  });
})