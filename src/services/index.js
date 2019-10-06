import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const storyIdsUrl = `${baseUrl}/topstories.json`;
export const storyUrl = `${baseUrl}/item`;

export const fetchStory = async id => {
  const story = await axios
    .get(`${storyUrl}/${id}.json`)
    .then(({ data }) => data);

  return story;
};

export const fetchStoryIds = async () => {
  const ids = await axios.get(storyIdsUrl).then(({ data }) => data);

  return ids;
};
