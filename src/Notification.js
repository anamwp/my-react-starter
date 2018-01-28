// export default function(message){
//     console.log(message);
// }

export function notify (message){
    console.log(message);
}

export function log(log){
    console.log(log);
}

function author(name){
    console.log(name);
}
function publisher(publisher){
    console.log(publisher);
}
export default{
    author: author,
    publisher: publisher
}