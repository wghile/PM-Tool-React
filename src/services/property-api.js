//AJAX Requests Come From Here and are Sent to Back End via Controller
    //responses = axios.put/.post/.get/.delete
    //import request function from services file into components
import axios from 'axios'
const BASE_URL = 'https://pm-express.onrender.com/'

// Show All Properties
export function getPropertyList(){
    return axios.get(BASE_URL)
}

// Find Property by id
export async function getProperty(id){
  try{
    const response = await axios({
      url: `${BASE_URL}/${id}`,
      method: 'GET'
    })
    return response
  }catch(error){
    console.log(error)
  }
}

// New Property
export async function addNewProperty(newProperty) {
    try{
      await axios({
          url: BASE_URL,
          method: 'POST',
          data: newProperty
      })
    }catch(error){
      console.log(error)
    }
  }

// Update Property
export async function updateFunction(id, updates){
    try{
        await axios({
            url: `${BASE_URL}/${id}`,
            method: 'PUT',
            data: updates
        })
    }catch(error){
      console.log(error)
    }
  }

// Remove a Property by id
export async function removeProperty(id) {
    try{
      await axios({
        url: `${BASE_URL}/${id}`,
        method: 'DELETE'
      })
    }catch(error){
      console.log(error)
    }
  }