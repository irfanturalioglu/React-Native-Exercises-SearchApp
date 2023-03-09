import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'bearer nzILyY8KBMSgc6p1VPVq0OVu8s0kuoq344cwEbtQ3HNUFlSLKZbl9yIgFwhDInl1c_aRj37ECs6FYksDrXHWAHFC1kgOGtZwfEQ8v2YWmX-6yEnQDdxasgqBQ1QHZHYx',
  },
});
