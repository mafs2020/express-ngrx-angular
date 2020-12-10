class Crud {
    constructor(Modelo) {
        this.Modelo = Modelo;
    }

    async get() {
        try {
            return await this.Modelo.findAll();
        } catch (err) {
            return err;
        }
    }
}

module.exports = Crud;