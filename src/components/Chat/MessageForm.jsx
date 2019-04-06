/* Uses methods and/or components from react,prop-types and socket.io-client */
import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SendIcon } from '../../assets/icons/arrow-circle-right.svg';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };

    this.sendMessage = this.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  sendMessage(event) {
    const { socket, user, chat } = this.props;
    const { message } = this.state;
    event.preventDefault();
    if (!message) return;
    socket.emit('send_message', {
      room: chat._id,
      user: user._id,
      message,
    });

    this.setState({ message: '' });
  }

  render() {
    const { message } = this.state;
    return (
      <div className="message-form">
        <input value={message} onChange={this.handleChange} />
        <button type="submit" onClick={this.sendMessage}><SendIcon /></button>
      </div>
    );
  }
}

MessageForm.propTypes = {
  user: PropTypes.shape({}).isRequired,
  socket: PropTypes.shape({}).isRequired,
  chat: PropTypes.shape({}).isRequired,
};

export default MessageForm;
