import React from 'react';
import ReactDom from 'react-dom';

function Hello(){
    return(
        <div>
            <Person />
            <h2>This is Santosh</h2>
        </div>
    );
}
const Person = () => <h1>Santosh</h1>;

ReactDom.render(<Hello />, document.getElementById('root'));

export default Hello;