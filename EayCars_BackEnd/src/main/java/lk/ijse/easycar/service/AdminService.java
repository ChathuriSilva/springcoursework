package lk.ijse.easycar.service;

import lk.ijse.easycar.dto.AdminDTO;

public interface AdminService {
    AdminDTO searchAdminByUsername(String username);
}
