package lk.ijse.easycar.repo;

import lk.ijse.easycar.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepo  extends JpaRepository<Vehicle, String> {
}
