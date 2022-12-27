import axios from 'axios';

const BASEURL = 'https://pixabay.com/api/';
const APIKEY = '31318369-963f8a8f711e2021b1f211060';

export async function fetchData(requestedValue, currentPage) {
  const config = {
    params: {
      key: APIKEY,
      q: requestedValue,
      page: currentPage,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  };
  try {
    const fetchData = await axios.get(BASEURL, config);
    return fetchData.data;
  } catch (error) {
    return error;
  }
}
