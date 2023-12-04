package pacotelogin; 

import javax.swing.JOptionPane;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public void autenticar() throws SQLException{
    
    String email = sistema.getT1().getText();
    String senha = sistema.getPf1().getText();
    
    Login autenticarEmail = new Login(email, senha);
    
    Connection connection = new Conexao().getConnection();  
    login_dao loginDao = new login_dao(connection);
    
    boolean existe = loginDao.existeNoBanco()(autenticarEmail);
    
    
    if (existe){
    sistema03 sis = new sistema03();
    sis.setVisible(true);
    } else {
    JOptionPane.showMessageDialog(null, "Usuário ou Senha inválidos!");
    }
}
