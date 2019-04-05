import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import PageHeader from '../PageHeader';

class AddJobDetails extends React.Component {
  constructor(props) {
    super(props);

    this.saveAndContinue = this.saveAndContinue.bind(this);
  }

  saveAndContinue(event) {
    const { nextStep } = this.props;
    event.preventDefault();
    nextStep();
  }

  render() {
    const {
      title, date, address, pay, description, handleChange,
    } = this.props;
    return (
      <React.Fragment>
        <PageHeader title="Add Job Details" />
        <div className="page">
          <form>
            <FormInput type="text" value={title} name="title" title="Title" placeholder="Enter job short descritpion" handleChange={handleChange} />
            <FormInput type="date" value={date || new Date().toISOString().substr(0, 10)} name="date" title="Date" placeholder="Enter job date" handleChange={handleChange} />
            <FormInput type="text" value={address} name="address" title="Address" placeholder="Enter job address" handleChange={handleChange} />
            <FormInput type="number" value={pay} name="pay" title="Payment" placeholder="Enter payment amount" handleChange={handleChange} />
            <FormInput type="textarea" value={description} name="description" title="Description" placeholder="Enter job details" handleChange={handleChange} />
            <div className="form-submit">
              <input type="submit" onClick={this.saveAndContinue} value="Save and Continue" />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

AddJobDetails.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  address: PropTypes.string.isRequired,
  pay: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default AddJobDetails;
