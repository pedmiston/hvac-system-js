describe("The environment is cold. HVAC", () => {
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

  it("detects that it's cold", () => {
    expect(controller.getState()).toBe("heat")
  });

  it ("turns the fan on", () => {
    controller.tick();
    expect(HVAC._fanOn).toBe(true);
  });
});

describe("The environment is hot. HVAC", () => {
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
  });

  it("detects that it's hot", () => {
    expect(controller.getState()).toBe("cool");
  });

  it("turns the fan on", () => {
    controller.tick();
    expect(HVAC._fanOn).toBe(true);
  });
});

describe("The environment is perfect! HVAC", () => {
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

  it ("turns the fan off", () => {
    controller.tick();
    expect(HVAC._fanOn).toBe(false);
  });

});
