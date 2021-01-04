package lk.ijse.easycar.service;

import lk.ijse.easycar.dto.DriverDTO;

import java.util.List;

public interface DriverService {
    void saveDriver(DriverDTO dto);
    void updateDriver(DriverDTO dto);
    void deleteDriver(String id);
    public List<DriverDTO> getAllDrivers();
    DriverDTO searchDriverById(String id);
    DriverDTO searchDriverByUsername(String username);
    DriverDTO searchDriverByIdAndPass(String id,String password);
    public void saveDriverLoginDetails(DriverDTO dto);
}
