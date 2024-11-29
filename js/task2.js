// Напиши клас User для створення користувача з наступними властивостями:
// name — рядок
// age — число
// followers — число
// Добав метод getInfo(), який, виводить рядок:
// User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers

const User = function (nameUser, ageUser, followersUser) {
  this.name = nameUser;
  this.age = ageUser;
  this.followers = followersUser;
  this.getInfo = function () {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  };
};

const mango = new User("Mango", 2, 20);

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User("Poly", 3, 17);

poly.getInfo(); // User Poly is 3 years old and has 17 followers
