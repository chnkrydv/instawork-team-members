import stringer from './stringer';

const { aValidName, ofTypeEmail, ofTypePhone, isEmpty } = stringer;

const memberDetails = {
  key: 0,
  isNew: true,
  isAdmin: false,
  firstName: {
    value: '',
    hasError: false,
    placeholder: 'first name'
  },
  lastName: {
    value: '',
    hasError: false,
    placeholder: 'last name'
  },
  email: {
    value: '',
    hasError: false,
    placeholder: 'email'
  },
  phone: {
    value: '',
    hasError: false,
    placeholder: 'phone number'
  },
};

const roles = [
  {
    label: "Regular - Can't delete members",
    name: 'regular',
    isSelected: false
  },
  {
    label: 'Admin - Can delete members',
    name: 'admin',
    isSelected: false
  },
];

const updatedRoles = (selectedRoleName) => roles.map( role => {
  if(!selectedRoleName) return role;

  if(role.name === selectedRoleName) role.isSelected = true;
  else role.isSelected = false;

  return role;
});

const isTextInputValid = (fieldKey, value) => {
  switch (fieldKey) {
    case 'firstName':
    case 'lastName':
      return aValidName(value);
    case 'email':
      return ofTypeEmail(value);
    case 'phone':
      return ofTypePhone(value);
    default:
      return true;
  }
}

const isAnyTextFieldInvalid = (editingMember) => {
  return Object.keys(editingMember).some( key => {
    let value = editingMember[key].value;
    if(key === 'firstName' || key === 'lastName') return !aValidName(value);
    if(key === 'email') {
      return !ofTypeEmail(value);
    }
    if(key === 'phone') return !ofTypePhone(value);
    
    return false;
  });
}

const isDuplicate = (member, members) => {
  return members.some( mem => (
    mem.phone.value === member.phone.value ||
    mem.email.value === member.email.value
  ));
}

const anyFieldEmpty = (member) => {
  return Object.keys(member).some( key => {
    if(
      key === 'firstName' ||
      key === "lastName" ||
      key === 'email' ||
      key === 'phone'
    )
      return isEmpty(member[key].value);

    return false;
  });
}

const isMemberValidForAdding = (member, members) => {
  if(
    anyFieldEmpty(member) ||
    isDuplicate(member, members) ||
    isAnyTextFieldInvalid(member)
  ) return false;

  return true;
}

const isMemberValidForUpdating = (member) => {
  if(
    anyFieldEmpty(member) ||
    isAnyTextFieldInvalid(member)
  ) return false;

  return true;
}


export default { 
  memberDetails,
  updatedRoles,
  isTextInputValid,
  isMemberValidForAdding,
  isMemberValidForUpdating
};