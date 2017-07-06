export default {
  products: {
    data: [],
    numberPage: 1,
  },
  productDetail: {},
  news: {
   topNews: [],
   data:[],
   numberPage: 1,
  },
  newsDetail: {},
  numberPageProducts: 1,
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
