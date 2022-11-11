/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable import/prefer-default-export */

export const fetchData = async (subReddit) => {
  const response = [];

  for (let i = 0; i < 5; i++) {
    const res = await fetch(
      `https://www.reddit.com/r/${subReddit}/top.json?t=year&limit=100&sr_detail=all`,
    );
    const data = await res.json();
    response.push(data.data.children);
  }

  return response;
};

// subReddit;
