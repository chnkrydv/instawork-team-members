const addMember = (member, members, membersCount) => ({
    type: 'ADD_MEMBER',
    member,
    members,
    membersCount
})

const updateMember = (key, member, membersCount) => ({
    type: 'UPDATE_MEMBER',
    key,
    member,
    membersCount
})

const deleteMember = (key, membersCount) => ({
    type: 'DELETE_MEMBER',
    key,
    membersCount
})

const discardEditing = (membersCount) => ({
    type: 'DISCARD_EDITING_MEMBER',
    membersCount
})

const gotoAddMemberPage = () => ({
    type: 'GOTO_ADD_MEMBER_PAGE'
})

const gotoEditMemberPage = (member) => ({
    type: 'GOTO_EDIT_MEMBER_PAGE',
    member
})

const roleChange = (isAdmin) => ({
    type: 'ROLE_CHANGE',
    isAdmin
})

const infoChange = (fieldKey, value) => ({
    type: 'INFO_CHANGE',
    fieldKey,
    value
})

const validateInfo = (fieldKey, value) => ({
    type: 'VALIDATE_INFO',
    fieldKey,
    value
})

const showErrorMessage = (message) => ({
  type: 'SHOW_ERROR_MESSAGE',
  message
})

const hideErrorMessage = () => ({
  type: 'HIDE_ERROR_MESSAGE'
})

export {
  gotoAddMemberPage,
  gotoEditMemberPage,
  addMember,
  updateMember,
  deleteMember,
  discardEditing,
  roleChange,
  infoChange,
  validateInfo,
  showErrorMessage,
  hideErrorMessage
};

