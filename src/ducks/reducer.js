const initalState = {
  username: '',
  id: '',
  profile_pic: ''
}

export default function reducer(state = initalState, action){
  switch (action.type){
    case USER_INFO:
      return Object.assign({}, state, action.payload )
    
    
    default:
      return state
  }
}

const USER_INFO = 'USER_INFO'

export function getUserInfo (id, username,profile_pic){
  return {
  type: USER_INFO,
    payload: {
      id: id,
      username:username,
      profile_pic: profile_pic
    }
  }
} 

