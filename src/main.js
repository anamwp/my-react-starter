// import notify from './Notification';
import {notify} from './Notification';
import {log} from './Notification';

import book from './Notification';

notify('Hello another notify');
log('I am log message');

book.author('Rework - martin');
book.publisher('Jason fried');
class Form{
    constructor(){
        alert('I am a constructor');
    }

}
new Form();