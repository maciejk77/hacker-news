import { useState, useEffect } from 'react';
import { debounce } from '../utils';

const MAX_STORIES = 500;
const INCREMENTS = 25;

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(INCREMENTS);

  const handleScroll = debounce(() => {
    window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight || loading
      ? false
      : setLoading(true);
  }, 500);

  useEffect(() => {
    if (!loading) return;

    count + INCREMENTS >= MAX_STORIES
      ? setCount(MAX_STORIES)
      : setCount(count + INCREMENTS);

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { count };
};
