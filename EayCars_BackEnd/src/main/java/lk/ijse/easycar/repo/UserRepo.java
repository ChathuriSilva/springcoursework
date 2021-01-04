package lk.ijse.easycar.repo;

import lk.ijse.easycar.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,String> {
    User findUserByUsername(String username);
    User findUserByIdAndPassword(String id,String password);
    User findUserById(String id);
    User findUserByLisenceno(String lisenceno);

}
