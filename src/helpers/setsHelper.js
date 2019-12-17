import moment from "moment";
export function getTotalReps(sets) {
  return sets.reduce((acc, curr) => (acc += curr.reps), 0);
}

export function getTotalFromDays(sets, daysOffset) {
  return sets.reduce((acc, set) => {
    if (set.dayOfYear >= moment().dayOfYear() - daysOffset) {
      acc += set.reps;
    }
    return acc;
  }, 0);
}
