CREATE VIEW vendas.ViewClientes
AS
SELECT idCliente, nomeCliente, sobrenomeCli, telefone, nascimento
FROM vendas.Cliente;

SELECT * FROM vendas.ViewClientes;
------------------------------------------------------------
 CREATE VIEW vendas.ViewProdutos
AS
SELECT idProduto, nomeProduto, valorPro
FROM vendas.Produto;

SELECT * FROM vendas.ViewProdutos;

------------------------------------------------------------
CREATE VIEW vendas.ViewCompras
AS
SELECT
    C.idCompra,
    C.idCliente,
    CL.nomeCliente,
    C.dataCompra,
    C.observacoes,
    C.TotalAmount
FROM vendas.Compra C
JOIN vendas.Cliente CL ON C.idCliente = CL.idCliente;

SELECT * FROM vendas.ViewCompras;

------------------------------------------------------------