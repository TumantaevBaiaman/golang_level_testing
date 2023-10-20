package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

const apiURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1"

type CoinData struct {
	ID           string  `json:"id"`
	Symbol       string  `json:"symbol"`
	Name         string  `json:"name"`
	CurrentPrice float64 `json:"current_price"`
}

func getCoinData(coinID string) (CoinData, error) {
	resp, err := http.Get(apiURL)
	if err != nil {
		return CoinData{}, err
	}
	defer resp.Body.Close()

	var coinData []CoinData
	err = json.NewDecoder(resp.Body).Decode(&coinData)
	if err != nil {
		return CoinData{}, err
	}

	for _, coin := range coinData {
		if coin.ID == coinID {
			return coin, nil
		}
	}

	return CoinData{}, fmt.Errorf("Криптовалюта с ID %s не найдена", coinID)
}

func updateCoinPricePeriodically(coinID string) {
	for {
		coin, err := getCoinData(coinID)
		if err != nil {
			fmt.Printf("Ошибка при получении курса: %v\n", err)
		} else {
			fmt.Printf("%s (Symbol: %s) - Текущая цена: $%.2f USD\n", coin.Name, coin.Symbol, coin.CurrentPrice)
		}

		time.Sleep(10 * time.Minute)
	}
}

func main() {
	fmt.Print("Введите ID криптовалюты, например (bitcoin): ")
	var coinID string
	fmt.Scanln(&coinID)

	go updateCoinPricePeriodically(coinID)

	select {}
}
