export const ADD='Add';
export const DELETE='Delete';
export const EDIT='Edit';
export const ADDFAV='AddFav'

export const addContact=(data)=>{
    return {type:ADD,payload:data}
}


export const deleteContact=(id)=>{
   console.log(id)
   return {type:DELETE,payload:id}
}

export const editContact=(data)=>{
    return {type:EDIT,payload:data}
}

export const addFavourite=(id)=>{
    console.log("add afv",id);
    return {type:ADDFAV,payload:id}
}