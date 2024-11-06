class client{
    static #idClient;
    constructor(name,email,phone){
    this.idClient = client.#idClient++;
    this.name = name;
    this.email = email;
    this.phone = phone;    
    }
    show_info(){
        return `${this.name}, ${this.email}, ${this.phone}`;
    }    
}

class factura{
    constructor(amount,status){
        this.amount = amount;
        this.amount = status;
    }
    show_info(){
        return ``;
    }
}