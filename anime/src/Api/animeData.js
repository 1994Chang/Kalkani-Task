import axios from "axios";

const generateApiUrl = ({ page, limit, query, orderBy, sort }) => {
    return `https://api.jikan.moe/v4/characters?page=${page}&limit=${limit}&q=${query}&order_by=${orderBy}&sort=${sort}`;
  };

export const getInitialData = async () => {
  try {
    const url = generateApiUrl({
      page: 1,
      limit: 15,
      query: '',
      orderBy: 'favorites',
      sort: 'desc',
    });
    const res = await axios(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewData = async (searchTerm, options = {}) => {
    try {
      const { page = 1, limit = 15, orderBy = 'favorites', sort = 'desc' } = options;
      const url = generateApiUrl({
        page,
        limit,
        query: searchTerm,
        orderBy,
        sort,
      });
      const res = await axios(url);
      return res;
    } catch (error) {
      console.log(error);
    }
  };