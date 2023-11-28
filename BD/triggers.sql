CREATE TRIGGER vendas.Cliente_Insert
ON vendas.Cliente
FOR INSERT
AS
BEGIN
    DECLARE @nomeCliente VARCHAR(50);
    DECLARE @sobrenomeCli VARCHAR(50);

    SELECT @nomeCliente = nomeCliente, @sobrenomeCli = sobrenomeCli
    FROM INSERTED;

    IF (SELECT COUNT(*) FROM vendas.Cliente WHERE nomeCliente = @nomeCliente AND sobrenomeCli = @sobrenomeCli) > 0
        RAISERROR('Já existe um cliente com esse nome e sobrenome.', 16, 1);
END;

CREATE TRIGGER vendas.Produto_Insert
ON vendas.Produto
FOR INSERT
AS
BEGIN
    DECLARE @nomeProduto VARCHAR(50);

    SELECT @nomeProduto = nomeProduto
    FROM INSERTED;

    IF (SELECT COUNT(*) FROM vendas.Produto WHERE nomeProduto = @nomeProduto) > 0
        RAISERROR('Já existe um produto com esse nome.', 16, 1);
END;


CREATE TRIGGER vendas.Compra_Insert
ON vendas.Compra
FOR INSERT
AS
BEGIN
    DECLARE @idCliente INT;

    SELECT @idCliente = idCliente
    FROM INSERTED;

    IF (SELECT COUNT(*) FROM vendas.Cliente WHERE idCliente = @idCliente) = 0
        RAISERROR('O cliente com ID %d não existe.', 16, 1, @idCliente);
END;


CREATE TRIGGER vendas.OrderItem_Insert
ON vendas.OrderItem
FOR INSERT
AS
BEGIN
    DECLARE @idProduto INT;

    SELECT @idProduto = idProduto
    FROM INSERTED;

    IF (SELECT COUNT(*) FROM vendas.Produto WHERE idProduto = @idProduto) = 0
        RAISERROR('O produto com ID %d não existe.', 16, 1, @idProduto);
END;


