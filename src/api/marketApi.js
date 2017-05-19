import axios from 'axios'

class MarketApi {
  static getAllMarkets() {
    return new Promise((resolve, reject) => {
      axios.get('http://dev.getmigo.com/api/markets')
         .then(res => {
        resolve(Object.assign([], res.data))
      })
    })
  }
}

export default MarketApi
