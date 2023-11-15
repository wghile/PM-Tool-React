//AJAX Requests Come From Here and are Sent to Back End via Controller
    //responses = axios.put/.post/.get/.delete
    //import request function from services file into components
import axios from 'axios'
const BASE_URL = 'http://localhost:3001/documents'

// Show All Documents
export function getDocuments(){
    return axios.get(BASE_URL)
}

// New Document
// export async function addNewProperty(newProperty) {
//     try{
//       await axios({
//           url: BASE_URL,
//           method: 'POST',
//           data: newProperty
//       })
//     }catch(error){
//       console.log(error)
//     }
//   }

// Edit Property
// export async function updateFunction(updates, id){
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

// Remove a Property by id
// export async function removeProperty(id) {
//     try{
//       await axios({
//         url: `${BASE_URL}/${id}`,
//         method: 'DELETE'
//       })
//     }catch(error){
//       console.error(error)
//     }
//   }