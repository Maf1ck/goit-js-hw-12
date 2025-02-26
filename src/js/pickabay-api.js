import axios from 'axios';

export const IMAGES_PER_PAGE = 40
export let currentPage = 1;

export function fetchImages(searchText, isNextPage = false) {
  if (isNextPage) {
    ++currentPage;
  } else {
    currentPage = 1;
  }

  const options = {
    params: {
      key: '49073944-bcfdbd092af101cb082d3fdde',
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      iMAGES_per_page: IMAGES_PER_PAGE,
      page: currentPage,
    },
  };
  return axios.get('https://pixabay.com/api/', options);
}