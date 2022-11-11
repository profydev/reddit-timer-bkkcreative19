/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const fetchData = async (subReddit) => {
  const response = [];

  for (let i = 0; i < 5; i++) {
    const { data } = await axios.get(
      `https://www.reddit.com/r/${subReddit}/top.json?t=year&limit=100 `,
    );

    response.push(data.data.children);
  }

  return response;
};

// subReddit;
