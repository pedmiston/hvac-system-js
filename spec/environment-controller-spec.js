describe("environmentController", function() {

  let hvacDummy = {
    _temp: 64,
    _heatOn: false,
    _coolOn: false,
    _fanOn: false,
    getTemp() { return this._temp; },
    setHeat(on) { this._heatOn = on; },
    setCool(on) { this._coolOn = on; },
    setFan(on) { this._fanOn = on; }
  };

  it ("turns fan on", () => {
    hvacDummy._temp = 64;
    controller = new EnvironmentController(hvacDummy);

    controller.tick();

    expect(hvacDummy._fanOn).toBe(true);
  });

  it ("turns fan off", () => {
    hvacDummy._temp = 70;
    controller = new EnvironmentController(hvacDummy);

    controller.tick();

    expect(hvacDummy._fanOn).toBe(false);
  });

  it ("determines heat_on state", () => {
    hvacDummy._temp = 64;
    controller = new EnvironmentController(hvacDummy);
    expect(controller.getState()).toBe("heat_on");
  });

  it ("determines cool_on state", () => {
    hvacDummy._temp = 76;
    controller = new EnvironmentController(hvacDummy);
    expect(controller.getState()).toBe("cool_on");
  });

  it ("determines off state", () => {
    hvacDummy._temp = 70;
    controller = new EnvironmentController(hvacDummy);
    expect(controller.getState()).toBe("hvac_off");
  });
});
