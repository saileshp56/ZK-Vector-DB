import React from 'react';
import Link from "./Link";
import '../styles/Link.css';

const LinkList = () => {
    const example = "dailymail";
    return (
        <div>
        <h2 className="link-list-header">Sources</h2>

        <div className="link-list-container">
            <Link title={"Wikipedia is a free online encyclopedia, created and edited by volunteers and hosted by the Wikimedia Foundation"} source={"Wikipedia"} url={"https://www.wikipedia.org/"} />
            <Link title={"Llama 3.1 is a new state-of-the-art model from Meta available in 8B, 70B and 405B parameter sizes"} source={"Meta AI"} url={"https://ollama.com/library/llama3.1"} />
            <Link title={"Encyclopædia Britannica, Inc. is the company known for publishing the Encyclopædia Britannica, an old encyclopaedia."} source={"Wikipedia"} url={"https://www.britannica.com/"} />
            <Link title={"Reddit.com one of the first YC companies back in 2005, which maybe was scraped by some FM's"} source={example} url={"https://www.reddit.com/"} />
        </div>
        </div>
    );
};

export default LinkList;
