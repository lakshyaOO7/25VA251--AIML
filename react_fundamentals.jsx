import React from 'react';
function WelcomeMessage() {
    const userName = "John";
        return ( <h1>Hello, {userName}! Welcome to React.</h1> ); } 
export default WelcomeMessage;
import React from 'react';
import ChildComponent from './ChildComponent';
   function ParentComponent() {
       const greeting = "Hello from Parent!";
        return (
            <div>
                <ChildComponent message={greeting}/>
            </div>
        );
    }
export default ParentComponent;
import React from 'react';
function ChildComponent(props) {
    return (<p>{props.message}</p>);
}
export default ChildComponent;