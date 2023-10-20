package main

import (
	"encoding/csv"
	"github.com/gocolly/colly"
	"log"
	"os"
)

const WebSiteUrl string = "https://hypeauditor.com/top-instagram-all-russia/"

func main() {
	csvFileName := "instagram_top_50_russia.csv"
	csvFile, err := os.Create(csvFileName)
	if err != nil {
		log.Fatal(err)
	}
	defer csvFile.Close()

	csvWriter := csv.NewWriter(csvFile)
	defer csvWriter.Flush()

	headers := []string{"Рейтинг", "Имя", "Никнейм", "Категория", "Подписчики", "Страна"}
	csvWriter.Write(headers)

	scrapPage(WebSiteUrl, csvWriter)
}

func scrapPage(url string, csvWriter *csv.Writer) {
	c := colly.NewCollector()

	c.OnHTML("div.row__top", func(e *colly.HTMLElement) {
		rank, contributorName, contributorNameTitle, category, followers, country := extractData(e)

		data := []string{rank, contributorName, contributorNameTitle, category, followers, country}
		csvWriter.Write(data)
	})

	c.Visit(url)
}

func extractData(e *colly.HTMLElement) (string, string, string, string, string, string) {
	rankInnerDiv := e.DOM.Find("div.row-cell.rank span[data-v-2e6a30b8]")
	rank := rankInnerDiv.Text()

	contributorNameInnerDiv := e.DOM.Find("div.contributor__name-content[data-v-c5a99f5a]")
	contributorName := contributorNameInnerDiv.Text()

	contributorNameTitleInnerDiv := e.DOM.Find("div.contributor__title[data-v-c5a99f5a]")
	contributorNameTitle := contributorNameTitleInnerDiv.Text()

	categoryInnerDiv := e.DOM.Find("div.tag__content[data-v-595cc10b]")
	category := categoryInnerDiv.Text()

	followersInnerDiv := e.DOM.Find("div.row-cell.subscribers[data-v-2e6a30b8]")
	followers := followersInnerDiv.Text()

	countryInnerDiv := e.DOM.Find("div.row-cell.audience[data-v-2e6a30b8]")
	country := countryInnerDiv.Text()

	return rank, contributorName, contributorNameTitle, category, followers, country
}
