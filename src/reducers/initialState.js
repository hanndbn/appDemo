export default {
  products: {
    topProducts: [],
    data: [],
    numberPage: 1,
    currentPage: 1,
  },
  productDetail: {},
  news: {
   topNews: [],
   data:[],
   numberPage: 1,
  },
  newsDetail: {},
  categories: [],
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  }
};
