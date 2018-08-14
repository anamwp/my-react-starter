import React from 'react';

function FormateDate(date){
    return date.toLocaleDateString();
}

function Avatar(props){
    return(
        <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
    );
}

function UserInfo(props){
    return(
        <div className="userInfo">
            <Avatar user={props.user} />
            <div className="userInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

function Comment(props){
    return(
        <div className="Comment">
            <UserInfo user={props.author} />
            <h2>{props.text}</h2>
            <p>{FormateDate(props.date)}</p>
        </div>

    )
}

const comment = {
    date: new Date(),
    text:
      'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl:
        'http://placekitten.com/g/64/64',
    },
};

class ShowComment extends React.Component{
    render(){
        return (
            <Comment
                author ={comment.author}
                text ={comment.text}
                date ={comment.date}
            />
        );
    }
}



export default ShowComment;