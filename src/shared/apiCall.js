/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable import/prefer-default-export */

export const fetchData = async (subReddit) => {
  let i = 0;
  let after = '';
  const dataa = [];

  do {
    // console.log(after);
    const res = await fetch(
      `https://www.reddit.com/r/${subReddit}/top.json?t=year&limit=100&after=${after}`,
    );
    const data = await res.json();
    dataa.push(data.data.children);
    after = data.data.after;
    i++;
  } while (i < 5);

  const obj = {
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  };

  const yay = dataa.flat().slice(10);

  yay.forEach((item) => {
    const date = new Date(item.data.created * 1000);

    switch (date.getDay()) {
      case 0:
        obj.Sunday.push(item);
        break;
      case 1:
        obj.Monday.push(item);
        break;
      case 2:
        obj.Tuesday.push(item);
        break;
      case 3:
        obj.Wednesday.push(item);
        break;
      case 4:
        obj.Thursday.push(item);
        break;
      case 5:
        obj.Friday.push(item);
        break;
      case 6:
        obj.Saturday.push(item);
        break;
      default:
    }
  });

  return obj;
};
