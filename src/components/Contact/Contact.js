import React from 'react';

const Contact = () => {

    return (
        <div>
            <h1>Contact Me</h1>
            <div>
                <form>
                    <label>Name:
                        <input type="text" name="name" />
                    </label>
                    <label>Email Address:
                        <input type="email" name="email" />
                    </label>
                    <label>Message:
                        <textarea rows={4} name="message" />
                    </label>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )

}

export default Contact;