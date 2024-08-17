import React, { useEffect, useState } from 'react';
import "../styles/Request.css"

const Requests = ({ question, showSources }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        showSources(data)
    }, [data])

    const askQuestion = async () => {
        try {
            const response = await fetch('http://localhost:8000/ollama', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        if (question) {
            askQuestion();
        }
    }, [question]);

    return (
        <div className="request-body">
            {error ? (
                <div>Error: {error}</div>
            ) : data ? (
                <div>{data}</div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Requests;
