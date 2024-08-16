import React, { useState } from 'react';
import "../styles/Bar.css";

const Bar = () => {
    const [text, setText] = useState('');

    const searchHandler = () => {
        console.log("bar is filled with text:", text)
    }

    const handleInputChange = (e) => {
        setText(e.target.value);
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <div className="bar-container">
            <textarea 
                className="textarea" 
                placeholder="Ask me anything..."
                value={text}
                onChange={handleInputChange}
                rows={1}
            />
            <div className="flexbox">
                <div className="column"></div>
                <div className="column"></div>
                <div className="column">
                    <p className="column-text" onClick={searchHandler}>Search</p>
                    </div>
            </div>
        </div>
    );
}

export default Bar;
