// function findMatching(source, sought) {
//     return source.filter(
//       (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
//     );
//   };

//   function fuzzyMatch(source, testString) {
//     return source.filter(
//         (possibleMatch) => possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//     );
//   }

//   function matchName(source, soughtName) {
//     return source.filter((record) => record.name === soughtName);
//   }
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// const drivers = [
//   {
//     name: 'Bobby',
//     hometown: 'Pittsburgh' },
//   {
//     name: 'Sammy',
//     hometown: 'New York' } ,
//   {
//     name: 'Sally',
//     hometown: 'Cleveland' },
//   {
//     name: 'Annette',
//     hometown: 'Los Angeles' },
//   {
//     name: 'Bobby',
//     hometown: 'Tampa Bay' }
// ];

function findMatching(driversList, stringMatch) {
  return driversList.filter(
    (matchingName) => matchingName.toLowerCase() === stringMatch.toLowerCase()
  );
  debugger;
};
findMatching(drivers, 'Bobby');

function fuzzyMatch(driversList, stringMatch) {
  return driversList.filter(
    (matchingName) => matchingName.toLowerCase().indexOf(stringMatch.toLowerCase()) === 0
    );
}
fuzzyMatch(drivers, 'S');

function matchName(driversList, stringMatch) {
  return driversList.filter((nameString) => nameString.name === stringMatch);
}
debugger;
matchName(drivers, 'Bobby');