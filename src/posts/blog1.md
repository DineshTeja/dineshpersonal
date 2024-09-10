---
{
"title": "Competitiveness of Presidential Elections (Blog #1)",
"date": "2024-09-09",
"description": "A look at the competitiveness of presidential election and predicting 2024's election outcome.",
"tags": ["elections", "1347"]
}
---

A look at the competitiveness of presidential election and predicting 2024's election outcome.

## Introduction

Let's think about a few questions to start off: 
1. How has the competitiveness of presidential races changed over the years?
2. Which states are reliable red or blue strongholds, and which ones keep us guessing?
3. Can we use past election data to get a sneak peek at what might unfold in the 2024 Presidential Election?

It's crucial that we look at and interpret historical data to better understand the landscape of the ramping up presidential election between Kamala Harris and Donald Trump. 

## Changes in Competitiveness

We begin by examining the two-party presidential popular vote from 1948 to 2020. The line plot below depicts fluctuations in each political party’s presidential popular vote over the decades.

![Two Party Vote Share](/images/PV_national_historical.png "Two Party Vote Share")

The two-party vote share metric focuses on the percentage of votes received by the Democratic and Republican candidates, excluding third-party contributions. An analysis of the graph reveals a trend of narrowing margins of victory since the 1990s. 

What could this mean? That change seemingly indicates a rise in the competitiveness (and potential unpredictability) of presidential elections in recent years. 

We can see this if we look more deeply at presidential vote share by state in each election from the 1980s to the most recent election in 2020.

![Two Party Vote Share](/images/PV_states_historical.png "Two Party Vote Share")

Since 1992, there has been a significant shift in the distribution of presidential vote share across states. Though certain states have remained reliably Democratic or Republican, there was a notable variance in the behavior of traditionally non-swing states between 1992 and 2008, like Colorado, New Mexico, and even Arkansas (my state). 

However, since 2008, the maps look almost identical, with only slight shifts in the behavior of swing states like Pennsylvania, Michigan, and Wisconsin, which seem to be key factors in determining the outcome of the election. 

## Win Margins in Swing States: An Interesting Phenomenon

In order to understand the win margins in swing states, we can look at the win margins in various swing states from 1992 to 2020, which I've plotted below. 

Additionally, the win margins in swing states like Pennsylvania, Michigan, and Wisconsin have been steadily approaching 0 since 1992, regardless of which party a particular state goes for. This could further indicate that the key swing states in U.S. presidential elections are becoming hyper-competitive as margins of victory are very narrow. 

![Win Margins in Swing States](/images/swing_states_margins_1992_2020.png "Win Margins in Swing States")

We can also see this trend in the most recent win margins by state for the 2020 election. 

![Win Margins Recent](/images/win_margins_most_recent.png "Win Margins in 2020")

 It's worth noting that most states are neither solidly Republican nor Democratic, but fall somewhere in between. The 2020 election exemplified this, with super thin margins in several swing states leading to recounts and legal disputes, emphasizing these states' crucial role in determining the overall result. 

## 2024 Prediction

We can use the following model to make a simpler prediction for the 2024 election. 

$$(Y_{2024_i} = 0.75 \times Y_{2020\text{_voteshare}_i} + 0.25 \times Y_{2016\text{_voteshare}_i})$$

![Presidential Vote Share 2024 Forecast](/images/PV2024_simple_forecast_states.png "Presidential Vote Share 2024 Forecast")

The simplified forecasting model for the 2024 presidential election highlights several key trends:

Swing States: The nearly white states on the map indicate swing states with minimal win margins. These states remain highly competitive and crucial for determining the election outcome.

Consistently Red and Blue States: The map shows familiar patterns, with deep red and blue states maintaining their traditional political leanings. These states are less likely to shift allegiance.

The model suggests a win for the Democratic candidate in the electoral college. However, the margins in many states are close, indicating potential volatility.

Overall, the competitive nature of the election is underscored by demographic changes and evolving political landscapes, making predictions challenging yet intriguing.

## Extensions: 
- Visualization Customizations: 
  - Win margins by swing states over time plot
  - State names on win margin map

## Sources
All data used for this blog post is from course materials for Harvard's GOV 1347.