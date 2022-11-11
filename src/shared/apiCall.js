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

  // const res = await fetch(
  //   `https://www.reddit.com/r/${subReddit}/top.json?t=year&limit=100`,
  // );
  // const data = await res.json();

  return dataa;
};

// subReddit;
