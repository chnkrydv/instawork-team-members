const addMember = (member, members, membersCount) => {
  return {
    type: 'ADD_MEMBER',
    member,
    members,
    membersCount
  }
}

const updateMember = (key, member, membersCount) => {
  return {
    type: 'UPDATE_MEMBER',
    key,
    member,
    membersCount
  }
}

const deleteMember = (key, membersCount) => {
  return {
    type: 'DELETE_MEMBER',
    key,
    membersCount
  }
}

const discardEditing = (membersCount) => {
  return {
    type: 'DISCARD_EDITING_MEMBER',
    membersCount
  };
}

const gotoAddMemberPage = () => {
  return {
    type: 'GOTO_ADD_MEMBER_PAGE'
  }
}

const gotoEditMemberPage = (member) => {
  return {
    type: 'GOTO_EDIT_MEMBER_PAGE',
    member
  }
}

const roleChange = (isAdmin) => {
  return {
    type: 'ROLE_CHANGE',
    isAdmin
  }
}

const infoChange = (fieldKey, value) => {
  return {
    type: 'INFO_CHANGE',
    fieldKey,
    value
  }
}

const validateInfo = (fieldKey, value) => {
  return {
    type: 'VALIDATE_INFO',
    fieldKey,
    value
  }
}

export {
  gotoAddMemberPage,
  gotoEditMemberPage,
  addMember,
  updateMember,
  deleteMember,
  discardEditing,
  roleChange,
  infoChange,
  validateInfo
};

