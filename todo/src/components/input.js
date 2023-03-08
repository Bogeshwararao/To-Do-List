import React from 'react';
class input extends React.Component{
    render(){
        return(
            <>
            <form>
                <input type='text' name='todo' placeholder='Enter you are todo...'/>
            </form>
            </>
        )
    }
}
export default input;