package lk.ijse.easycar.repo;

import lk.ijse.easycar.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo  extends JpaRepository<Admin, String> {
    Admin findAdminByUsername(String username);
}
