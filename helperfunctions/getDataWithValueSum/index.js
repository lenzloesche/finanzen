export default function getDataWithValueSum(newData, dataPrototype) {
  const arrayofNumbers = Object.entries(dataPrototype).map(([key, value]) => {
    if (newData[key]) {
      return newData[key].value;
    } else {
      return 0;
    }
  });
  newData["total"]["valueSum"] = calculateSum(arrayofNumbers);
  const arrayofNumbersIst = Object.entries(dataPrototype).map(([key, value]) => {
    if (newData[key]) {
      return newData[key].valueIst;
    } else {
      return 0;
    }
  });
  newData["total"]["valueSumIst"] = calculateSum(arrayofNumbersIst);
  newData["total"].difference = newData["total"]["valueSumIst"] - newData["total"]["valueSum"];
  return newData;
}

function calculateSum(arrayOfNumbers) {
  let countSum = 0;
  for (const number of arrayOfNumbers) {
    countSum += number;
  }
  return countSum;
}
