const pool = require("../../config/database");

class CartDAO {
    constructor() {
        this.pool = pool;
    }

    async adicionarItem(item) {
        console.log('Recebendo solicitação para adicionar item:', item);

        try {
            await this.pool.query('INSERT INTO vendas.Carrinho (nome, preco, quantidade) VALUES (?, ?, ?)', [item.nome, item.preco, item.quantidade]);

            return { success: true, message: 'Item adicionado ao carrinho com sucesso!' };
        } catch (error) {
            console.error(error);
            throw { success: false, error: 'Erro ao adicionar item ao carrinho.' };
        }
    }
}

module.exports = CartDAO;
