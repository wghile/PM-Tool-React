//AJAX Requests Come From Here and are Sent to Back End via Controller
    //responses = axios.put/.post/.get/.delete
    //import request function from services file into components
import axios from 'axios'
const BASE_URL = 'http://localhost:3001/contacts'
// const BASE_URL = 'https://pm-express.onrender.com/contacts'


// Show All Contacts
export function getContactList(){
    return axios.get(BASE_URL)
}

// Find Contact by id
// export async function getContact(id){
//   try{
//     const response = await axios({
//       url: `${BASE_URL}/${id}`,
//       method: 'GET'
//     })
//     return response
//   }catch(error){
//     console.log(error)
//   }
// }

// New Contact
export async function addNewContact(newContact) {
    try{
        await axios({
            url: BASE_URL,
            method: 'POST',
            data: newContact
        })
    }catch(error){
      console.log(error)
    }
}

// Update Property
// export async function updateFunction(id, updates){
//     try{
//         await axios({
//             url: `${BASE_URL}/${id}`,
//             method: 'PUT',
//             data: updates
//         })
//     }catch(error){
//       console.log(error)
//     }
//   }

// Remove a Contact by id
export async function deleteContact(id){
    try{
        await axios({
            url: `${BASE_URL}/${id}`,
            method: 'DELETE'
        })
    }catch(error){
      console.log(error)
    }
}