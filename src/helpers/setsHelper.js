import moment from "moment";

/**
 * @typedef set
 * @type {object}
 * @property {string} setId - unique set id
 * @property {string} userId - user id
 * @property {string} exerciseId - exercise id
 * @property {number} reps - number of rep
 * @property {number} dayOfYear - day number in year
 * @property {number} weekInYear - week number in year
 * @property {number} monthInYear - month number in year
 * @property {number} year - year
 * @property {string} createdAt - creation date
 */


/**
 * Calculate total of reps from sets array
 *
 * @export
 * @param {set[]} sets
 * @returns {number}
 */
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
