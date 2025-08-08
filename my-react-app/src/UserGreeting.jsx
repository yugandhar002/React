
import PropTypes from 'prop-types';

function UserGreeting(props){
    const welcomeMessage = <div className="welcome-message">
                                <h2>Welcome {props.userName}!</h2>
                           </div>;

    const loginPrompt = <div className="login-prompt">
                            <h2>You need to login in order to continue</h2>
                        </div>;

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    userName: "Guest",
}

export default UserGreeting;
