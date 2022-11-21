import React from 'react'

// Get By Distraction The Item Form The Props.
// Creat The Page HTML By JSX.
// Changes The Item To Number, And Shows The Number With Max Two Numbers After The Period.

function Coins({ item }) {
    return (

        <div className='row col-12 col-md-6 col-lg-5 shadow border border-1 p-3 m-4'>
            <h2 className='text-center display-4 my-4'>{item.name}</h2>
            <div className='col-12 col-lg-6'>

                <p>symbol: {item.symbol}</p>
                <p>price usd: {Number(item.price_usd).toFixed(2)}</p>

                <p>price btc:{Number(item.price_btc).toFixed(2)}</p>
                <p>market cap_usd:{Number(item.market_cap_usd).toFixed(2)}</p>

            </div>
            <div className='col-12 col-lg-6'>
                <p>available supply:{Number(item.available_supply).toFixed(2)}</p>
                <p>max supply:{Number(item.max_supply).toFixed(2)}</p>
                <p>percent change_1h:{Number(item.percent_change_1h).toFixed(2)}</p>
                <p>percent change_7d:{Number(item.percent_change_7d).toFixed(2)}</p>
                <p>last updated:{Number(item.last_updated).toFixed(2)}</p>

            </div>
        </div>
    )
}

export default Coins