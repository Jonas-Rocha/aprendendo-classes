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

// Nesta aula, vamos aprender como adicionar métodos em classes em JavaScript. Veremos que não é necessário usar a palavra-chave function ao definir um método dentro de uma classe.

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sendEmail() {
    console.log(
      `Email enviado para ${this.name} no endereço eletrônico, ${this.email}`
    );
  }
}

const user = new User("Jonas", "jonasrpnstudy@gmail.com");
user.sendEmail();

/*
Nesta aula, vamos aprender o conceito de método estático em programação. Vamos ver como criar e utilizar um método estático em uma classe, destacando a diferença de acesso entre métodos estáticos e não estáticos. Demonstraremos que métodos estáticos podem ser acessados sem a necessidade de instanciar a classe, enquanto métodos não estáticos requerem a instanciação da classe.
*/

class Usuario {
  // O "static" serve para acessarmos a classe diretamente pelo "Usuario", sem precisar instanciar numa nova const.
  static showMessage() {
    console.log("Essa é uma mensagem");
  }
}

//const usuario = new Usuario();
//usuario.showMessage();

// Tentando acessar o metodo "showMessage" direto, sem precisar instanciar uma classe com o "new"
Usuario.showMessage(); // Assim da erro e não funciona, pois a classe nem foi instanciada. porém se a classe tiver um metodo "static" funciona.

/*
Nesta aula, vamos aprender como aplicar herança com classes em programação. A herança permite reutilizar propriedades e métodos de classes superiores.
*/

// Como aplicar herança com classes?

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeNoise() {
    console.log("Algum som genérico do animal");
  }
}

class Dog extends Animal {
  //Sobrescrevendo métodos
  makeNoise() {
    console.log("Au au!");
  }
}

class Cat extends Animal {
  //Sobrescrevendo métodos
  makeNoise() {
    console.log("miau... miau...");
  }
}

const cat = new Cat("Link");
console.log(cat.name);
cat.makeNoise();
const dog = new Dog("Yugi");
console.log(dog.name);
dog.makeNoise();

/**
 * Classes x Prototype
 * JavaScript é dinâmico e não dispõe de uma implementação de uma class
 * (a palavra-chave class foi introduzida no ES2015, mas é syntax sugar).
 * O JavaScript permanece baseado em prototype.
 */

/**
 * Prototype
 * Quando se trata de herança, o JavaScript tem somente um construtor: objetos.
 * Cada objeto tem um link interno para um outro objeto chamado prototype.
 *
 * O objeto prototype também tem um atributo prototype, e assim por diante,
 * até o que o valor null seja encontrado como sendo o seu prototype.
 *
 * O null que, por definição, não tem prototype, age como um link final
 * nesta cadeia de protótipos (prototype chain).
 */

/**
 * Resumo
 *
 * - Quando um objeto é criado ele possui automaticamente uma propriedade
 *   que referencia outro objeto e esse objeto é chamado de Prototype.
 *
 * - O objeto prototype herda propriedades e métodos do seu protótipo ascendente.
 *   Essas propriedades não pertencem ao objeto em si, mas sim ao prototype do objeto.
 *
 * - O Prototype é o mecanismo pelo qual os objetos JavaScript herdam recursos uns dos outros.
 *
 * - A cadeia termina quando chegamos a um protótipo que tem null por protótipo.
 *
 * - Um objeto pode utilizar qualquer propriedade ou método que existir nesse encadeamento de Protótipos.
 */

/*
Nesta aula, vamos aprender o conceito de prototype chain no JavaScript, que se baseia em herança e cadeia de protótipos. Vamos entender como objetos herdam propriedades e métodos de seus protótipos ascendentes, até chegar a um protótipo com valor nulo, finalizando a cadeia.
*/

// Aprendendo sobre herança e cadeia de protótipos.

/*
Nesta aula, exploraremos a herança de objetos em JavaScript, demonstrando na prática o uso do prototype. Vamos aprender como objetos como endereço e arrays possuem protótipos que podem ser explorados para entender a cadeia de herança. Compreender essa estrutura de herança em

*/

const address = {
  city: "São Paulo",
  country: "Brazil",
};

console.log(address);

const users = ["Jonas", "Andressa", "Ana"];
console.log(users);

const userName = "Jonas Rocha";
console.log(userName.__proto__);

//Como utilizar classes pra lidar com exceções.

/*
Nesta aula, aprenderemos a utilizar classes para lidar com exceções específicas em JavaScript. Vamos ver como identificar e tratar diferentes tipos de erros, como TypeError e RangeError. Também foi abordado o uso do método throwNew para gerar exceções personalizadas. Vamos mostrar a importância de tratar exceções de forma específica e amigável para o usuário, assim como a possibilidade de encadear diferentes tipos de exceções.
*/

let obj = [];
let index = 300;

try {
  //obj.execute();
  if (!obj.includes(17)) {
    throw new Error("O número 17 não está disponível.");
    // Estamos passando para o CONSTRUTOR da CLASSE "Error" a mensagem a ser passada.
    /* Por isso é bom aprender a usar o método construtor e a criar classes para entender como usar neste exemplo de tratamento de erros.*/
  }
  if (index > 99) {
    // o "throw" tem um comportamento muito parecido com o "return", assim que ele é validado ele para a execução e pula direto para o bloco de "catch" para lidar com a excessão, por isso não mostrou o outro
    throw new RangeError(
      "Número está fora do intervalo. escolha um número de 0 a 99"
    );
  }
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Método insdisponível.");
  } else if (error instanceof RangeError) {
    //neste if eu estou verificando se o meu "error" é uma instancia do tipo "RangeError".
    console.log(error.message);
    //aqui eu estou pegando o bloco de erro retornado e pedindo para mostrar apenas a mensagem(ou string).
  } else {
    console.log("Não foi possivel realizar a ação.");
  }

  console.log(error);
}

// Como utilizar classes para criar erros customizados.

/*
  Nesta aula, aprenderemos a criar erros personalizados usando classes em JavaScript. A personalização de erros oferece flexibilidade na aplicação.
*/

class MyCustomError {
  constructor(message) {
    this.message = "CLASSE DE ERRO CUSTOMIZADA: " + message;
  }
}

try {
  //throw new Error("Erro genérico");
  //A linha do nosso erro customizado ja fica apagada pois o "throw" ja retorna um erro primário e nem lê o segundo erro.
  throw new MyCustomError("Erro personalizado lançado!");
} catch (error) {
  if (error instanceof MyCustomError) {
    console.log(error.message);
  } else {
    console.log("Não foi possivel executar");
  }
}
