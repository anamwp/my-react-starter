import React from 'react';
import Mailbox from './../components/mailbox';

const myMessages = ['react', 're:react', 're:re:react'];

function UserGreetings(props){
    return(
        <div>
            <h2>Welcome Back</h2>
            <ul>
                {myMessages.map((singleMessage) => <li key={singleMessage}>{singleMessage}</li>)}
            </ul>
        </div>
    )
}
function UserLogin(props){
    return(
        <div>
            <Mailbox unreadMessage={myMessages} />
            <h2>Please Login</h2>
        </div>
    )
}
class Greetings extends React.Component{
    render(props){
        const isLoggedIn = this.props.isLoggedIn;
        if(isLoggedIn){
            return <UserGreetings />;
        }else{
            return <UserLogin />;
        }
    }
}
function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }

  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }
class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn : false
        }
    }
    handleLoginClick(){
        this.setState({ isLoggedIn : true });
    }
    handleLogoutClick(){
        this.setState({ isLoggedIn : false });
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        const button = isLoggedIn ?
            <LogoutButton onClick={this.handleLogoutClick} /> :
            <LoginButton onClick={this.handleLoginClick} /> ;

        return (
            <div>
                <Greetings isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}
export default LoginControl;