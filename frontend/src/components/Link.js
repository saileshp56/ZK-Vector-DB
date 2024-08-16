import React from 'react';
import '../styles/Link.css';

const Link = ({url, title, source}) => {
    return (
        <a href={url} target="_blank">

        <div className="link-container">
            <div className="link-icon-container">
                {/* <div className="link-icon">
                    <div className="relative overflow-hidden rounded-full">
                        <div className="absolute inset-px rounded-full bg-white"></div>
                        <img
                            className="relative block"
                            src="https://www.google.com/s2/favicons?sz=128&domain=fcc.gov"
                            alt="fcc.gov favicon"
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0 rounded-full border border-[black]/10 dark:border-transparent"></div>
                    </div> 
                </div>*/}
                <div className="link-info">
                    <div className="link-title-container">
                        <div className="link-title">{title}</div>
                        {/* <div className="link-title">{title}</div> */}

                    </div>
                    <div className="link-description">
                        {source}
                    </div>
                </div>
            </div>
        </div>
        </a>

    );
};

export default Link;
