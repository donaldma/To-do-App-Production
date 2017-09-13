import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset, Field, reduxForm } from 'redux-form';
import * as actions from '../actions';

class EditUserModal extends Component {
  render() {
    return (
      <div className="modal fade" id="edit-users-modal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit User</h4>
            </div>
            <div className="modal-body">
              <form className="form-inline" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                <Field
                  label="Enter a name:"
                  name="edit"
                  component={this.props.renderField}
                />
                <button type="submit" className="modal-submit">Submit</button>                    
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.edit) {
    errors.edit = "Enter a Name!";
  }

  return errors;
}

const afterSubmit = (result, dispatch) => {
  dispatch(reset('UsersEditForm'));
}

export default reduxForm({
  validate,
  form: 'UsersEditForm',
  onSubmitSuccess: afterSubmit,
})(
  connect(null, actions)(EditUserModal)
);