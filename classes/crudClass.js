class Crud {
    constructor(Modelo) {
        this.Modelo = Modelo;
    }

    async get() {
        try {
            return await this.Modelo.findAll();
        } catch (err) {
            throw "Error2";
            // throw new Error('¡Ups!');
            // return err;
        }
    }

    async agregar(objeto) {
        console.log('llego');
        // throw new Error("Too big");
            this.Modelo.create(objeto).then((result) => {
                return result;
            }).catch((err) => {
                return err;
            });
        
    }
}

module.exports = Crud;