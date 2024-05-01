class MyClass{
    private field : number|undefined;
    constructor(field : number){
        field = field;
    }

    getFieldValue(): number|undefined{
        return this.field;
    }

    setFieldValue(field: number): void{
        field = field;
    }
    
}

const myClass = new MyClass(55);
myClass.setFieldValue(20);
console.log(myClass.getFieldValue);