import React from 'react';

class Mailbox extends React.Component{

    render(props){
        const unreadMessage = this.props.unreadMessage;
        return(
            <div>
                <h1>Hello</h1>
                {
                    unreadMessage.length > 0 &&
                    <h2>
                        you have {unreadMessage.length} unread message
                    </h2>
                }
                {console.log(this.props)}
            </div>
        )
    }
}
export default Mailbox;