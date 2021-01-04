package lk.ijse.easycar.repo;

import lk.ijse.easycar.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DriverRepo  extends JpaRepository<Driver, String> {
    Driver findDriverById(String id);
    Driver findDriverByUsername(String username);
    Driver findDriverByIdAndPassword(String id,String password);

}
