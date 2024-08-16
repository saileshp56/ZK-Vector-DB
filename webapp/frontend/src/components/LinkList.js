import React from 'react';
import Link from "./Link";
import '../styles/Link.css';

const LinkList = () => {
    const example = "dailymail";
    return (
        <div className="link-list-container">
            <Link title={"Anduril Stock $27.51 | How to Buy, Valuation, Stock Price, IPO"} source={example} url={"www.google.com"} />
            <Link title={"Anduril Stock $27.51 | How to Buy, Valuation, Stock Price, IPO"} source={example} url={"www.google.com"} />
            <Link title={"Anduril Stock $27.51 | How to Buy, Valuation, Stock Price, IPO"} source={example} url={"www.google.com"} />
            <Link title={"Anduril Stock $27.51 | How to Buy, Valuation, Stock Price, IPO"} source={example} url={"www.google.com"} />
        </div>
    );
};

export default LinkList;
