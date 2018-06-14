import React from 'react';

class SubmitForm extends React.Component {
    render(){
        return (
            <form>
            <label>How many 🥄?
            <input type="number" min="0" max="5"></input>
            </label>
            <label>
            <textarea name="review" /></label>
            <input type="submit" />
            </form>
        )
    }
}

export default SubmitForm;