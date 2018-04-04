import React from 'react';

class SubmitForm extends React.Component {
    render(){
        return (
            <form>
            <label>How many 🥄?
            <input type="number"></input>
            </label>
            <label>
            <textarea name="review" /></label>
            <input type="submit" />
            </form>
        )
    }
}

export default SubmitForm;