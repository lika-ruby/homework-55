// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями
// login і email. В prototype функції - конструктора добав метод getInfo(), який
// виводить в консоль значення полів login і email об'єкта який його викликав.

const Account = function (loginAccount, emailAccount) {
  this.login = loginAccount;
  this.email = emailAccount;
  this.getInfo = function () {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
  };
};

console.log(Account.prototype.getInfo); // function

const mango = new Account("Mangozedog", "mango@dog.woof");
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account("Poly", "poly@mail.com");
poly.getInfo(); // Login: Poly, Email: poly@mail.com
