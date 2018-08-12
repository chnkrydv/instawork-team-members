const initState = {
  title: 'Team Members',
  subtitle: 'You have 0 team member',
  currentPage: 'team'
}

const getSubtitleForTeamPage = (membersCount) =>{
  return `You have ${membersCount} team member${membersCount > 1 ? 's' : ''}`;
}

const app = (state = initState, action) => {
  switch (action.type) {
    case 'GOTO_ADD_MEMBER_PAGE':
      return {
        ...state,
        title: 'Add a team member',
        subtitle: 'Set email, location and role',
        currentPage: 'add-member'
      };
    case 'GOTO_EDIT_MEMBER_PAGE':
      return {
        ...state,
        title: 'Edit team member',
        subtitle: 'Edit contact info, location and role',
        currentPage: 'edit-member'
      };
    case 'DISCARD_EDITING_MEMBER':
    case 'UPDATE_MEMBER':
    case 'ADD_MEMBER':
    case 'DELETE_MEMBER':
      return {
        ...state,
        title: 'Team Members',
        subtitle: getSubtitleForTeamPage(action.membersCount),
        currentPage: 'team'
      };
    default:
      return state;
  }
}

export default app;