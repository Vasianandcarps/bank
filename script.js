//const code = "3333";
let card1 = {
  number: 55322,
  bank: "My bank",
  name: "Вася",
  surname: "Васин",
  code: 3333,
  account: 2000,
};

let card2 = {
  number: 55323,
  bank: "My bank",
  name: "Петя",
  surname: "Петин",
  code: 2222,
  account: 200,
};

let card3 = {
  number: 55323,
  bank: "My bank",
  name: "Петя",
  surname: "Иванов",
  code: 1111,
  account: 2000,
};

let bank = [card1, card2];

let cashMashine3 = {
  number: 3,
  showBalance: function (card) {
    console.log(card.account);
  },

  getMoney: function (card, sum) {
    if (this.checkAccount() == true) {
      this.showBalance(card);
      console.log(card.account - sum);
    } else {
      alert("error");
    }
  },
  checkAccount: function (card) {
    for (key in card) {
      if ((card[key] = card1[code]) || (card[key] = card2[code])) {
        return true;
      }
    }
  },
};
let sum = prompt("input sum");
cashMashine3.getMoney(card3, sum);
