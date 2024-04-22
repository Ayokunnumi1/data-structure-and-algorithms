// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let maxProfit = 0;
    let buy = 0; // Pointer for buying price
    let sell = 1; // Pointer for selling price

    while (sell < prices.length) {
        if (prices[sell] > prices[buy]) {
            // If current selling price is greater than buying price,
            // calculate the profit and update maxProfit if necessary
            let profit = prices[sell] - prices[buy];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        } else {
            // If current selling price is less than or equal to buying price,
            // update the buying price to the current selling price
            buy = sell;
        }
        // Move the selling pointer to the next day
        sell++;
    }

    return maxProfit;
};