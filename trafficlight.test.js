const app = require("./trafficlight");

describe("test suite traffic light", () => {
  it(`case red light`, () => {
    expect(app.trafficLight("red")).toBe("DON'T WALK!");
  });

  it(`case yellow light`, () => {
    expect(app.trafficLight("orange")).toBe("ATTENTION!");
  });

  it(`case green light`, () => {
    expect(app.trafficLight("green")).toBe("WALK!");
  });
});
