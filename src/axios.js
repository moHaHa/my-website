import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://hbo30edthree-001-site1.dtempurl.com/api',
  headers:{
    'Access-Control-Allow-Origin': '*'
  },  
  
  validateStatus: () => true
})

instance.interceptors.response.use(
  (res) => {
    console.log(res);
    return res
  },
  (err) => {
    console.error(err)
  }
)
export default instance
