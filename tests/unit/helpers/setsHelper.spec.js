import {
  getTotalReps,
  getTotalFromDays
} from "../../../src/helpers/setsHelper";

const sets = require("../mocks/sets.json");

describe("src/helpers/setsHelper", function() {
  describe("getTotalReps", () => {
    it("should calculate total reps from sets array", () => {
      const received = getTotalReps(sets);
      const expected = 100;

      expect(received).toEqual(expected);
    });
  });

  describe("getTotalFromDays", function() {
    const referenceDay = "2019-01-03";
    it("should get total from reference day", () => {
      const received = getTotalFromDays(sets, 0, referenceDay);
      const expected = 10;

      expect(received).toEqual(expected);
    });

    it("should get total from 7 days since reference day", () => {
      const received = getTotalFromDays(sets, 6, referenceDay);
      const expected = 60;

      expect(received).toEqual(expected);
    });

    it("should get total from 10 days since reference day", () => {
      const received = getTotalFromDays(sets, 9, referenceDay);
      const expected = 100;

      expect(received).toEqual(expected);
    });
  });
});
