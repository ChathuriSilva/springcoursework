package lk.ijse.easycar.service;

import lk.ijse.easycar.dto.VehicleDTO;
import lk.ijse.easycar.entity.Vehicle;

import java.util.List;

public interface VehicleService {
    void saveVehicle(VehicleDTO dto);
    void updateVehicle(VehicleDTO dto);
    void deleteVehicle(String id);
    public List<VehicleDTO> getAllVehicles();
    VehicleDTO searchVehicle(String id);
}
