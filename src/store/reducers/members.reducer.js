const initState = {
  list: [],
  count: 0
}

const members = (state = initState, action) => {
  let newMembers;
  switch (action.type) {
    case 'ADD_MEMBER':
      newMembers = [...state.list, action.member];
      return { 
        ...state, 
        list: newMembers,
        count: state.count + 1
      };
    case 'UPDATE_MEMBER':
      newMembers = [...state.list].map(member => member.key === action.key ? action.member : member);

      return { 
        ...state,
        list: newMembers
      };
    case 'DELETE_MEMBER':
      newMembers = [...state.list].filter(member => member.key !== action.key);
      return {
        list: newMembers,
        count: state.count - 1
      };
    default:
      return state;
  }
}

export default members;