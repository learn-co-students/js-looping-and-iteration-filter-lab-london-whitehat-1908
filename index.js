// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  let regexp = RegExp(`^${string.toLowerCase()}`);
  return drivers.filter(driver => regexp.test(driver.toLowerCase()));
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string);
}