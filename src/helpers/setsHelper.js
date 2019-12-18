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

/**
 * Calculate total of reps performed between reference day
 * and reference day - offset days
 *
 * @export
 * @param {set[]} sets
 * @param {number} offset number of days
 * @param {string} [reference=Date.now()] 
 * @returns {number} total reps performed
 */
export function getTotalFromDays(sets, offset, reference = Date.now()) {
  const dayOffset = moment(reference).subtract(offset, "day");
  return sets.reduce((acc, set) => {
    if (moment(set.createdAt).isAfter(dayOffset, "day")) {
      acc += set.reps;
    }
    return acc;
  }, 0);
}

/**
 * Generates array containg last nDays
 *
 * @export
 * @param {number} nDays
 * @param {string} [format="YYYY-MM-DD"]
 * @returns {string[]} array of days
 */
export function getLastNDayInArray(nDays, format = "YYYY-MM-DD") {
  return Array(nDays)
    .fill()
    .map((_, index) => {
      return moment()
        .subtract(index, "day")
        .format(format);
    });
} 

/**
 * Get total reps for each day contained in daysArr
 *
 * @export
 * @param {string[]} daysArr
 * @param {set[]} sets
 * @returns {object}
 */
export function getTotalPerDay(daysArr, sets) {
  return daysArr.map(day => {
    return {
      [day]: sets.reduce((acc, set) => {
        if (moment(day).isSame(set.createdAt, "day")) {
          acc += set.reps;
        }

        return acc;
      }, 0)
    };
  });
}

/**
 * Group total per day array in group of 7 days
 *
 * @export
 * @param {object} totalPerDay
 * @returns {object[][]}
 */
export function groupSetsPerWeek(totalPerDay) {
  return totalPerDay.reduce((acc, day, index) => {
    index % 7 === 0 ? acc.push([day]) : acc[acc.length - 1].push(day);
    return acc;
  }, []);
}

