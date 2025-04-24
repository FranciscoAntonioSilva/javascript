let amigo = {nome: 'José',
    sexo: 'M', 
    peso: 85.4,
    engordar(p) {
        console.log('Engordou');
        this.peso += p;
    }
}

//this faz alto referência ao objeto
amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`);