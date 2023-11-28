CREATE PROCEDURE vendas.InserirCliente
    @NomeCliente VARCHAR(50),
    @SobrenomeCli VARCHAR(50),
    @Telefone VARCHAR(20),
    @Nascimento DATE
AS
BEGIN
    INSERT INTO vendas.Cliente (nomeCliente, sobrenomeCli, telefone, nascimento)
    VALUES (@NomeCliente, @SobrenomeCli, @Telefone, @Nascimento);
END;


EXEC vendas.InserirCliente 'Nome', 'Sobrenome', '123456789', '2000-01-01';

----------------------------------------------------------------------------------
CREATE PROCEDURE vendas.InserirProduto
    @NomeProduto VARCHAR(50),
    @ValorPro MONEY
AS
BEGIN
    INSERT INTO vendas.Produto (nomeProduto, valorPro)
    VALUES (@NomeProduto, @ValorPro);
END;

EXEC vendas.InserirProduto 'Produto1', 19.99;


----------------------------------------------------------------------------------



