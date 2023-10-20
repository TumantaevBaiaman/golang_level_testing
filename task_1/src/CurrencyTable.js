import React, { useState, useEffect } from 'react';

function CurrencyTable() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const apiUrl =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const topFiveCurrencies = currencies.slice(0, 5);

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            ID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Symbol
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
        </tr>
      </thead>
      <tbody>
      {topFiveCurrencies.map((currency) => (
          <tr
            key={currency.id}
            className={`${
              currency.symbol === 'usdt' ? 'bg-green-300' : 'bg-blue-200'
            }`}
          >
            <td className="px-6 py-4 whitespace-nowrap">{currency.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{currency.symbol}</td>
            <td className="px-6 py-4 whitespace-nowrap">{currency.name}</td>
          </tr>
        ))}
        {currencies.slice(5).map((currency) => (
          <tr
            key={currency.id}
            className={`${
              currency.symbol === 'usdt' ? 'bg-green-300' : 'bg-white'
            }`}
          >
            <td className="px-6 py-4 whitespace-nowrap">{currency.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{currency.symbol}</td>
            <td className="px-6 py-4 whitespace-nowrap">{currency.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CurrencyTable;

