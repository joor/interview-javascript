# Stocks

## Setting the stage

- Suppose yesterday's stock prices were available to us in an array. The following would be true:
  1. Trade time opens at 9:30am. The index of each array item is the time in minutes past trade opening time.
  1. The value is price in USD of the stock at that time.

In essence, if the stock cost $250 at 11:30am, stockPricesYesterday[120] = 250.

## What you need to do

Write an efficient function that takes `stockPrices` and yields the best profit you could have made from 1 purchase and 1 sale of 1 the stock yesterday.

For example:

```js
var stockPrices = [10, 7, 4, 8, 12, 9];

getMaxProfit(stockPrices); // returns 8 (buying for $4 and selling for $12)
```

## Gotchas

- You **must** buy **before** you sell. So in the example above if you are starting with `stockPrices[2]` which has the value of `4`, you cannot compare it to `10` or `7` in the array, as they came before.
- What if there were a negative number? For ex. `stockPrices = [10, -7, -4, 2, 3]`
- Not only should your code work with any data thrown at it, it should have a test to ensure there's code coverage!

## Reminders

- Handle exceptions properly!
- Be sure to write some tests!
- You can find all environment specific information for running and testing your solution in `readme.md`.
