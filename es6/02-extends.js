class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  get() {
    return this.x + ' - ' + this.y;
  }
}

class ColorPoint extends Point {
  // 继承Point类的所有属性和方法
  constructor(x, y, color) {
    // super() 父类的构造函数，用来新建父类的this对象
    // 子类实例的构建，基于父类实例，只有super方法才能调用父类实例
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }
  get() {
    return this.color + ' * ' + super.get();// 调用父类的print()
  }
  print() {
    console.log(this.color + ' * ' + super.get());// 调用父类的print()
  }
}

let cp = new ColorPoint(25, 8, 'green');// 初始化构造函数
cp.get();
cp.print();

// ======
class Person {
  constructor() {
    this.x = 3;
  }
  father() {
    console.log('father');
  }
}

class Student extends Person {
  constructor() {
    super();
  }
  print() {
    console.log(this.x); //调用父类属性
  }
}

let s = new Student();
s.print();
s.father();//调用父类方法