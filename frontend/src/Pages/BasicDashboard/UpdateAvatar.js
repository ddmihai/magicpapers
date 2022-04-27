import axios from "axios";

const updateAvatar = async ( user, image) => {
    const fd = new FormData();
    fd.append('image', image, image.name);
    fd.append('userID', user.userID);
    const URL = 'http://localhost:3000/api/edit-avatar';
    
    try 
    {
        const status = await axios.put(URL, fd,
        {
            headers: { Authorization: `Bearer ${user.token}` }
        })

        console.log(status);
    } 
    catch (error) {
        console.log(error);
    }
}

export default updateAvatar;


// const fd = new FormData();
//     fd.append('image', image, image.name);

//     axios.put(
//         'http://localhost:3000/api/edit-avatar', 
//         {
//             userID: user.userID,
//             fd  
//         },
//         {
//             headers: { Authorization: `Bearer ${user.token}`}
//         }
//     ).then(data=>{
//         console.log(data);
//     }).catch(error =>console.log(error))
