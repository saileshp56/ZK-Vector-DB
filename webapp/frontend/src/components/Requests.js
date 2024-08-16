import React, { useEffect, useState } from 'react';

const Requests = ({ question }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

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
        <div>
            <h1>Requests</h1>
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
