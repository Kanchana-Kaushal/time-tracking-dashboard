export let data = [];

export async function loadData() {
  const response = await fetch("../data.json");
  data = await response.json();
}

export function getTimeFrame(catagory, timeframe) {
  let matchingCatagory;
  data.forEach((element) => {
    if (element.title === catagory) {
      matchingCatagory = element;
    }
  });

  return matchingCatagory.timeframes[timeframe];
}
