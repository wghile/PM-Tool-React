//AJAX Requests Come From Here and are Sent to Back End via Controller
    //responses = axios.put/.post/.get/.delete
    //import request function from services file into components
import axios from 'axios'
const BASE_URL = 'http://localhost:3001'

export function getPropertyList(){
    return axios.get(BASE_URL)
}

export async function removeProperty(id) {
    try{
      await axios({
        url: `${BASE_URL}/${id}`,
        method: 'DELETE'
      })
    }catch(error){
      console.error(error)
    }
  }