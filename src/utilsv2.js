const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

/**
 * Converts atoms to DCR
 *
 * @param {number} atoms - amount in atoms
 * @return {number} dcr - amount in dcr
 */
export const convertAtomsToDcr = (atoms) => atoms / 100000000;

/**
 * Formats unix timestamp to a UTC string date
 *
 * @param {number} unixtimestamp - unix timestamp
 * @return {string} date - date formated in UTC String
 */
export const formatUnixTimestamp = (unixtimestamp) =>
  new Date(unixtimestamp * 1000).toUTCString();

/**
 * Formats unix timestamp to a short UTC string date
 *
 * @param {number} unixtimestamp - unix timestamp
 * @return {string} date - date formated in dd mmm yyyy
 */

export const formatShortUnixTimestamp = (unixtimestamp) => {
  const currentdate = new Date(unixtimestamp * 1000);
  return `${currentdate.getUTCDate()} ${
    months[currentdate.getUTCMonth()]
  } ${currentdate.getUTCFullYear()}`;
};
