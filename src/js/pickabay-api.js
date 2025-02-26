import axios from 'axios';

export default function fetchImages(searchText) {
  const options = {
    params: {
      key: '49073944-bcfdbd092af101cb082d3fdde',
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };
  return axios.get('https://pixabay.com/api/', options);
}