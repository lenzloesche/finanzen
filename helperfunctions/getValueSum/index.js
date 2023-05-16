export function getValueSum(data) {
  const valuesInArray = Object.entries(data).map(([eachName, eachData]) => {
    return eachData.value;
  });
  return valuesInArray.reduce((accumulator, eachData) => {
    return (accumulator += eachData);
  }, 0);
}

export function getValueSumIst(data) {
  const valuesInArray = Object.entries(data).map(([eachName, eachData]) => {
    return eachData.valueIst;
  });
  return valuesInArray.reduce((accumulator, eachData) => accumulator + eachData, 0);
}
