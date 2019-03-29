describe("environmentController", function() {

  let hvacDummy = {
    _temp: 0,
    _heatOn: false,
    _coolOn: false,
    _fanOn: false,
    getTemp() { return this._temp; },
    setHeat(on) { this._heatOn = on; },
    setCool(on) { this._coolOn = on; },
    setFan(on) { this._fanOn = on; }
  };

  it ("turns fan on", () => {
    hvacDummy._temp = 0;
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
    hvacDummy._temp = 0;
    controller = new EnvironmentController(hvacDummy);
    expect(controller.getState()).toBe("heat_on");
  });
});
