export const useGraphicalDataModifier = () => {
  return function (data, one, two) {
    if (!data) return;

    let keysArr = Object.keys(data);
    let finalArr = [];

    keysArr.forEach((key) => {
      finalArr.push({
        name: key,
        [one]: data[key][0],
        [two]: data[key][1],
      });
    });
    return finalArr || [];
  };
};
