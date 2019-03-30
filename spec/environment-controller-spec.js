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

  it ("turns the fan off", () => {
    controller.tick();
    expect(HVAC._fanOn).toBe(false);
  });

});
