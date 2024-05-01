class MyClass {
    constructor(field) {
        field = field;
    }
    getFieldValue() {
        return this.field;
    }
    setFieldValue(field) {
        field = field;
    }
}
const myClass = new MyClass(55);
myClass.setFieldValue(20);
console.log(myClass.getFieldValue);
