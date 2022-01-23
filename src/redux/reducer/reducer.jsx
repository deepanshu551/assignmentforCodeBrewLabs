
import { DELETE, ADD, EDIT ,ADDFAV} from '../actions/actions'

export default function reducer (state , action) {
    
  switch (action.type) {
    case ADD:
      const newContacts = [...state.contacts, action.payload]
      return { ...state, contacts: newContacts }
      case DELETE:
        console.log(action.payload);
    
        return {
          ...state,
          contacts: state.contacts.filter(f => f.id != action.payload)
        }

    case EDIT:
        console.log('edit',action.payload)
      const d = state.contacts.map(m => {
        if (m.id === action.payload.id) {
          return {
              id:action.payload.id,
            name: action.payload.name,
            contact: action.payload.contact,
            email: action.payload.email
          }
        } else {
          return m
        }
      })
      return { ...state, contacts: d }

      case ADDFAV:
          const mt=state.contacts.find(f=>f.id===action.payload).favI;
          const m=state.contacts.map(f=>{
              if(f.id===action.payload){
                  return {...f,favI:!mt}
              }
              else{
                  return f
              }
          })
          
       
        return { ...state, contacts:m }
      
   

    default:
      return state
  }
}
