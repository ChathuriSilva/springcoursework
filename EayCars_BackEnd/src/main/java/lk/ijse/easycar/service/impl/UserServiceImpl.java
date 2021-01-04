package lk.ijse.easycar.service.impl;

import lk.ijse.easycar.dto.UserDTO;
import lk.ijse.easycar.entity.User;
import lk.ijse.easycar.repo.UserRepo;
import lk.ijse.easycar.service.UserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    ModelMapper modelMapper;
    @Autowired
    UserRepo repo;
    @Override
    public void saveUser(UserDTO dto) {
        if (!repo.existsById(dto.getId())) {
            User u = modelMapper.map(dto, User.class);
            repo.save(u);
        } else {
            throw new RuntimeException("User already exist..!");
        }
    }

    @Override
    public void updateUser(UserDTO dto) {
        if (repo.existsById(dto.getId())) {
            User u = modelMapper.map(dto, User.class);
            repo.save(u);
        } else {
            throw new RuntimeException("No such User for update..!");
        }
    }

    @Override
    public void deleteUser(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("No user for delete ID: " + id);
        }

    }

    @Override
    public List<UserDTO> getAllUsers() {
        List<User> all = repo.findAll();
        return modelMapper.map(all, new TypeToken<List<UserDTO>>() {
        }.getType());
    }

    @Override
    public UserDTO searchUserByUsername(String username) {
        Optional<User> user = Optional.ofNullable(repo.findUserByUsername(username));
        if (user.isPresent()) {
            return modelMapper.map(user.get(), UserDTO.class);
        } else {
            throw new RuntimeException("No User for username: " + username);
        }
    }

    @Override
    public UserDTO searchUserByIdAndPass(String id, String password) {
        Optional<User> user = Optional.ofNullable(repo.findUserByIdAndPassword(id,password));
        if (user.isPresent()) {
            return modelMapper.map(user.get(), UserDTO.class);
        } else {
            throw new RuntimeException("No User for password given ");
        }
    }

    @Override
    public UserDTO searchUserById(String id) {
        Optional<User> customer = Optional.ofNullable(repo.findUserById(id));
        if (customer.isPresent()) {
            return modelMapper.map(customer.get(), UserDTO.class);
        } else {
            throw new RuntimeException("No user for id: " + id);
        }
    }

    @Override
    public UserDTO searchUserByLisence(String lisenceno) {
        Optional<User> customer = Optional.ofNullable(repo.findUserByLisenceno(lisenceno));
        if (customer.isPresent()) {
            return modelMapper.map(customer.get(), UserDTO.class);
        } else {
            throw new RuntimeException("No customer for lisence no: " + lisenceno);
        }
    }
}
