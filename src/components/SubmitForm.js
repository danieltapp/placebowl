import React from 'react';

class SubmitForm extends React.Component {
    render(){
        return (
           <div className="container">
                <form>
                    <label>How many 🥄? 
                     <input type="number" min="0" max="5"></input>
                    </label>
                    <label><textarea name="review" /></label>
                    <input className="button" type="submit" />
                </form>
           </div>
        )
    }
}

export default SubmitForm;