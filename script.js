/**
 * Classes
 *
 * No JavaScript, as classes são uma forma de criar objetos
 * e definir seu comportamento por meio de construtores e métodos.
 *
 * Elas foram introduzidas no ECMAScript 2015 (também conhecido como ES6)
 * para fornecer uma sintaxe mais amigável para a criação de objetos
 * e herança de protótipos (syntax sugar).
 */

/*
Nesta aula, vamos aprender o conceito de classes em JavaScript, introduzido no ECMAScript 2015. Classes são uma forma de criar objetos e definir comportamentos usando construtores e métodos. Elas oferecem uma sintaxe mais amigável para criar objetos e herdar protótipos, conhecida como "syntax sugar". 
As classes têm construtores e métodos, permitindo a criação de modelos para objetos. Além disso, as classes possibilitam a herança de propriedades e métodos de outras classes, promovendo a reutilização de código.
*/

/*
Nesta aula, aprenderemos a criar uma classe em JavaScript, utilizando a palavra reservada class seguida do nome da classe no padrão Paschal Case. Vamos entender um pouco a diferença entre Camel Case, Snake Case e Paschal Case. Iremos definir o corpo da classe e criar um construtor, que é uma função especial executada automaticamente ao instanciar a classe.
*/

// Criando uma classe com um método construtor
class Person {
  constructor(name) {
    console.log("Olá", name);
  }
}

const person = new Person("Jonas");

//Nesta aula, vamos aprender um pouco mais sobre o uso do this em classes em JavaScript, mostrando como criar propriedades e acessá-las.

class Product {
  constructor(name) {
    this.name = name;
  }
}

const product1 = new Product("Teclado");
console.log(product1);

const product2 = new Product("Mouse");
console.log(product2);
