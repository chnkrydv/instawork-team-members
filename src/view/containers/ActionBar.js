import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getNewKey, dataTemplate } from '../../utils/';
import { addMember, updateMember, deleteMember,} from '../../store/actions';

const ActionBar = (props) => {
  const { currentPage, editingMember, members, membersCount, addMember, updateMember, deleteMember } = props;
  const isAddMemberPage = currentPage === 'add-member';
  const isEditMemberPage = currentPage === 'edit-member';

  const onDelete = () => deleteMember(editingMember.key, membersCount - 1);
  const onSave = () => {    
    if(isAddMemberPage) {
      if(!dataTemplate.didPassSanityCheck(editingMember, members)) return;
      
      editingMember.key = getNewKey();
      addMember(editingMember, members, membersCount + 1)
    };
    if(isEditMemberPage) updateMember(editingMember.key, editingMember, membersCount);
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
})


export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);
