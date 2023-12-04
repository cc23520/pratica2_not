public boolean existeNoBanco(Login login) throws SQLException {

        String sql = "select * from login where email = '" + login.getEmail() + "' and senha = '" + login.getSenha() + "';";
        PreparedStatement pstm = connection.prepareStatement(sql);
        pstm.execute();

        ResultSet resultSet = pstm.getResultSet();
        return resultSet.next();

    }
