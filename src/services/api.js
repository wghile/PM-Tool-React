//AJAX Requests Come From Here and are Sent to Back End via Controller
    //responses = axios.put/.post/.get/.delete
    //import request function from services file into components

// import axios from 'axios'
// const BASE_URL = 'http://localhost:3001'

//Show all properties
// export async function getProperties() {
//     try{
//         const res = await axios({
//             url: BASE_URL,
//             method: 'GET',
//         })
//         if(res.status === 200){
//             console.log(res)
//             return res.data
//         }
//     }catch(error){
//         console.log(error)
//     }
// }


 //Axios Format instead of fetch
  //import axios from 'axios'
  // export async function login(credentials){
  //   try{
  //     const res = await axios({
  //       url: "/api/users/login",
  //       method: "POST",
  //       data: userData,
  //     })
  //     if(res.status === 200){
  //       console.log(res)
  //       return res.data
  //     }
  //   }catch(error){
  //     console.log(error)
  //   }
  // }