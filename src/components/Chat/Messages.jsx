/* Uses methods and/or components from react, prop-types, react-router-dom and socket.io-client */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };

    this.messagesEnd = React.createRef();
  }

  componentDidMount() {
    const { socket, chat } = this.props;
    const { messages } = chat;
    if (messages) {
      this.setState({ messages });
    }

    this.scrollToEnd();

    socket.on('receive_message', (data) => {
      if (chat._id === data.room) {
        this.addMessage(data);
      }
    });
  }

  componentDidUpdate() {
    this.scrollToEnd();
  }

  addMessage(data) {
    this.setState(prevState => ({ messages: [...prevState.messages, data] }));
  }

  scrollToEnd() {
    this.messagesEnd.current.scrollIntoView({ behaviour: 'smooth' });
  }

  render() {
    const { messages } = this.state;
    const { chat, user } = this.props;
    const { job } = chat;
    return (
      <>
        <div className="job-chat-card">
          <h2>{job.title}</h2>
          <Link
            to={{
              pathname: `/jobs/${job._id}`,
              state: job,
            }}
          >
View

          </Link>
        </div>
        <div className="messages">
          {messages.map(message => (
            <div
              key={messages.indexOf(message)}
              className={message.user === user._id ? 'message sent' : 'message received'}
            >
              <p>
                {message.message}
              </p>
            </div>
          ))}
          <div ref={this.messagesEnd} />
        </div>
      </>
    );
  }
}

Messages.propTypes = {
  socket: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({}).isRequired,
  chat: PropTypes.shape({}).isRequired,
};


export default Messages;
