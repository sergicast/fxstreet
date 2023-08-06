import React from "react";
import { render, screen } from '@testing-library/react';
import { Publication } from '../';

describe('Publication component', () => {
    const publication = {
        id: "2cb26098-e701-4dd9-bcd2-2c090941aa91",
        title: "Forex Today: Dollar attempts recovery after Fed, data blows, gold clings to $1,900, cryptos climb",
        content: "<p>Hi traders! On Monday we informed our users about a connectivity issue between our servers and those from our automation provider. As a result of that incident, there are <strong>still 5 open trades some of which could see delays in sending out the exit signals</strong>. The trades will be correctly closed at the indicated Stop Loss and Take Profit levels, but some of them require a <strong>manual intervention to send out the signal to the FXS Insights message feed</strong>.&nbsp;</p>",
        imageUrl: "",
        publicationTime: "2021-05-24T11:02:43.511Z",
        isPopular: true,
        feed: "Analysis",
        subFeed: "Reviews & Stats",
        author:
        {
            id: 1,
            name: "FXStreet Team",
            companyName: "FXStreet",
            imageUrl: "https://editorial.fxstreet.com/authors/FXStreet%20Company%20LOGO%2075%20MAY17_XtraSmall.png"
        }
    }

    beforeEach(() => {
        render(<Publication publication={publication} />);
    });

    it('render correct elements', () => {
        const title = screen.getAllByText('Forex Today: Dollar attempts recovery after Fed, data blows, gold clings to $1,900, cryptos climb');
        expect(title).toHaveLength(2);
        const feed = screen.getAllByText('Analysis');
        expect(feed).toHaveLength(2);
        const subFeed = screen.getAllByText('Reviews & Stats');
        expect(subFeed).toHaveLength(2);
    });
});
