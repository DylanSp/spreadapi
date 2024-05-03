const { test, describe, it } = require("node:test");
const assert = require("node:assert");

describe("Characterization tests", () => {
  describe("mapObjectToRow()", () => {
    it("object with one column", () => {
      // doesn't work - mapObjectToRow is not defined
      // unsure how to import it without messing up spread-api.js
      const row = mapObjectToRow({}, []);
    });
  });
});
