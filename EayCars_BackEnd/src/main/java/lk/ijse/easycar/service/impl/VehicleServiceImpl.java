package lk.ijse.easycar.service.impl;

import lk.ijse.easycar.dto.VehicleDTO;
import lk.ijse.easycar.entity.Vehicle;
import lk.ijse.easycar.repo.VehicleRepo;
import lk.ijse.easycar.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    VehicleRepo repo;
    @Override
    public void saveVehicle(VehicleDTO dto) {
        if (!repo.existsById(dto.getId())) {
            Vehicle u = modelMapper.map(dto, Vehicle.class);
            repo.save(u);
        } else {
            throw new RuntimeException("User already exist..!");
        }
    }

    @Override
    public void updateVehicle(VehicleDTO dto) {
        if (repo.existsById(dto.getId())) {
            Vehicle u = modelMapper.map(dto, Vehicle.class);
            repo.save(u);
        } else {
            throw new RuntimeException("No such Vehicle for update..!");
        }
    }

    @Override
    public void deleteVehicle(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("No vehicle for delete ID: " + id);
        }
    }

    @Override
    public List<VehicleDTO> getAllVehicles() {
        List<Vehicle> all = repo.findAll();
        return modelMapper.map(all, new TypeToken<List<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public VehicleDTO searchVehicle(String id) {
        Optional<Vehicle> vehicle = repo.findById(id);
        if (vehicle.isPresent()) {
            return modelMapper.map(vehicle.get(), VehicleDTO.class);
        } else {
            throw new RuntimeException("No Vehicle for id: " + id);
        }
    }
}
