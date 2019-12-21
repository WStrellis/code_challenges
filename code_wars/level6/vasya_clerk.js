/*
https://www.codewars.com/kata/vasya-clerk/train/javascript 
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
 */

function tickets(people) {
  let canSell = 'YES';

  let bank = {
    qrtr: 0,
    fifty: 0
  };

  sellTickets: for (let i = 0; i < people.length; i++) {
    switch (people[i]) {
      // if person is 50 check if there are any qrtrs
      case 50:
        if (bank.qrtr > 0) {
          // if there are subtract 1 from qrtrs and add 1 to fifty
          bank = { qrtr: (bank.qrtr -= 1), fifty: (bank.fifty += 1) };
          // if not, return no
        } else {
          canSell = 'NO';
          break sellTickets;
        }
        break;

      case 100:
        // if person is 100 check if 1 fify and 1 qrtr, or 3 qrtrs.
        if (bank.qrtr > 0 && bank.fifty > 0) {
          bank = { qrtr: (bank.qrtr -= 1), fifty: (bank.fifty -= 1) };
        } else if (bank.qrtr > 2) {
          bank = { ...bank, qrtr: (bank.qrtr -= 3) };
          // if not ,return no
        } else {
          canSell = 'NO';
          break sellTickets;
        }
        break;

      // if person is 25 increment qrtr
      default:
        bank = { ...bank, qrtr: (bank.qrtr += 1) };
    }
  }

  return canSell;
}

module.exports = tickets;
