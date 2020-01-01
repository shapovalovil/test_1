'use strict';

let money = 0;
let time = new Date;
money = prompt("Ваш бюджет на месяц?",100000);
console.log(money);
time = prompt("Введите дату в формате YYYY-MM-DD","2020.01.01");
console.log(time);
console.log(typeof(time));

let appData = {
budjet: money,
timeData: time,
expenses: {},
optionalExpense: {},
income: [],
savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

    appData.imeData = time;
    alert(appData.budjet / 30);
    alert(appData.);