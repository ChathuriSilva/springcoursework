package lk.ijse.easycar.service;

import lk.ijse.easycar.dto.UserDTO;

import java.util.List;

public interface UserService {
    void saveUser(UserDTO dto);
    void updateUser(UserDTO dto);
    void deleteUser(String id);
    public List<UserDTO> getAllUsers();
    UserDTO searchUserByUsername(String username);
    UserDTO searchUserByIdAndPass(String id,String password);
    UserDTO searchUserById(String id);
    UserDTO searchUserByLisence(String lisenceno);
}
