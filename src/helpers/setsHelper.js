import moment from "moment";

export function getTotalReps(sets) {
  return sets.reduce((acc, curr) => (acc += curr.reps), 0);
}

export function getTotalFromDays(sets, offset, reference = Date.now()) {
  const dayOffset = moment(reference).subtract(offset, "day");
  return sets.reduce((acc, set) => {
    if (moment(set.createdAt).isAfter(dayOffset, "day")) {
      acc += set.reps;
    }
    return acc;
  }, 0);
}
