import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getNewKey, dataTemplate } from '../../utils/';
import { addMember, updateMember, deleteMember, showErrorMessage } from '../../store/actions';

const ActionBar = (props) => {
  const { currentPage, editingMember, members, membersCount, addMember, updateMember, deleteMember, showErrorMessage } = props;
  const { isMemberValidForAdding, isMemberValidForUpdating } = dataTemplate;
  const isAddMemberPage = currentPage === 'add-member';
  const isEditMemberPage = currentPage === 'edit-member';

  const add = (member, members, membersCount) => {
    const validForAdding = isMemberValidForAdding(member, members);
    if(!validForAdding.value) {
      const errMessage = validForAdding.duplicate
        ? 'A member with same email or phone number already exists'
        : 'Some of the fields are empty or invalid'
      showErrorMessage(errMessage);
      return;
    }
    
    member.key = getNewKey();
    addMember(member, members, membersCount + 1)
  }
  const update = (memberKey, member, membersCount) => {
    const validForUpdating = isMemberValidForUpdating(member);
    if(!validForUpdating.value) {
      const errMessage = 'Some of the fields are empty or invalid';
      showErrorMessage(errMessage);
      return;
    }
    
    updateMember(memberKey, member, membersCount);
  }

  const onDelete = () => deleteMember(editingMember.key, membersCount - 1);
  const onSave = () => {
    if(isAddMemberPage) add(editingMember, members, membersCount + 1);      
    if(isEditMemberPage) update(editingMember.key, editingMember, membersCount);
  };


  return (
    <div className="action-bar">
      <div
        className={`button action-bar__delete ${isAddMemberPage ? 'hidden' : ''}`}
        onClick={onDelete}
        children="Delete"
      />
      <div
        className="button action-bar__save"
        onClick={onSave}
        children="Save"
      />
    </div>
  );
}

ActionBar.propTypes = {
  currentPage: PropTypes.string.isRequired,
  editingMember: PropTypes.object.isRequired,
  members: PropTypes.arrayOf(PropTypes.object).isRequired,
  membersCount: PropTypes.number.isRequired,
  addMember: PropTypes.func.isRequired,
  updateMember: PropTypes.func.isRequired, 
  deleteMember: PropTypes.func.isRequired, 
}

const mapStateToProps = state => ({
  currentPage: state.app.currentPage,
  editingMember: state.editingMember,
  members: state.members.list,
  membersCount: state.members.count
})

const mapDispatchToProps = dispatch => ({
  addMember: (member, members, membersCount) => dispatch(addMember(member, members, membersCount)),
  updateMember: (key, member, membersCount) => dispatch(updateMember(key, member, membersCount)),
  deleteMember: (key, membersCount) => dispatch(deleteMember(key, membersCount)),
  showErrorMessage: (message) => dispatch(showErrorMessage(message))
})


export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
