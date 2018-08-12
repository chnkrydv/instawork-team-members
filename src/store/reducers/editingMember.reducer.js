import { dataTemplate, stringer } from '../../utils/';

const { memberDetails, isTextInputValid } = dataTemplate;
const { phoneFormat } = stringer;
const initState = memberDetails;

const editingMember = (state = initState, action) => {
  switch (action.type) {
    case 'GOTO_EDIT_MEMBER_PAGE':
      return { ...state, ...action.member, isNew: false };
    case 'ADD_MEMBER':
    case 'UPDATE_MEMBER':
    case 'DELETE_MEMBER':
    case 'DISCARD_EDITING_MEMBER':
    case 'GOTO_ADD_MEMBER_PAGE':
      return { ...initState };
    case 'INFO_CHANGE':
      return getNewState(state, action);
    case 'VALIDATE_INFO':
      return getNewState(state, action, true);
    case 'ROLE_CHANGE':
      return { ...state, isAdmin: action.isAdmin };
    default:
      return state;
  }
}

const getNewState = (state, { fieldKey, value }, withValidation) => {
  if (fieldKey === 'phone') value = phoneFormat(value);

  let hasError = withValidation ? !isTextInputValid(fieldKey, value) : false;
  const field = { ...state[fieldKey], value, hasError };
  const newState = { ...state, [fieldKey]: field, };

  return { ...newState };
}

export default editingMember;