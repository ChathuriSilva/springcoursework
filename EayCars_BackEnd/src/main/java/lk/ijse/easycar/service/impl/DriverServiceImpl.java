package lk.ijse.easycar.service.impl;

import lk.ijse.easycar.dto.DriverDTO;
import lk.ijse.easycar.entity.Driver;
import lk.ijse.easycar.repo.DriverRepo;
import lk.ijse.easycar.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    DriverRepo repo;
    @Override
    public void saveDriver(DriverDTO dto) {
        if (!repo.existsById(dto.getId())) {
            Driver u = modelMapper.map(dto, Driver.class);
            repo.save(u);
        } else {
            throw new RuntimeException("Driver already exist..!");
        }
    }

    @Override
    public void saveDriverLoginDetails(DriverDTO dto) {
        if (repo.existsById(dto.getId())) {
            Driver u = modelMapper.map(dto, Driver.class);
            repo.save(u);
        } else {
            throw new RuntimeException("Driver doesnt exist..!");
        }
    }

    @Override
    public void updateDriver(DriverDTO dto) {
        if (repo.existsById(dto.getId())) {
            Driver u = modelMapper.map(dto, Driver.class);
            repo.save(u);
        } else {
            throw new RuntimeException("No such Driver for update..!");
        }
    }

    @Override
    public void deleteDriver(String id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        } else {
            throw new RuntimeException("No driver for delete ID: " + id);
        }
    }

    @Override
    public List<DriverDTO> getAllDrivers() {
        List<Driver> all = repo.findAll();
        return modelMapper.map(all, new TypeToken<List<DriverDTO>>() {
        }.getType());

    }

    @Override
    public DriverDTO searchDriverById(String id) {
        Optional<Driver> driver = Optional.ofNullable(repo.findDriverById(id));
        if (driver.isPresent()) {
            return modelMapper.map(driver.get(), DriverDTO.class);
        } else {
            throw new RuntimeException("No driver for id: " + id);
        }
    }

    @Override
    public DriverDTO searchDriverByUsername(String username) {
        Optional<Driver> driver = Optional.ofNullable(repo.findDriverByUsername(username));
        if (driver.isPresent()) {
            return modelMapper.map(driver.get(), DriverDTO.class);
        } else {
            throw new RuntimeException("No Driver for username: " + username);
        }
    }

    @Override
    public DriverDTO searchDriverByIdAndPass(String id, String password) {
        Optional<Driver> driver = Optional.ofNullable(repo.findDriverByIdAndPassword(id,password));
        if (driver.isPresent()) {
            return modelMapper.map(driver.get(), DriverDTO.class);
        } else {
            throw new RuntimeException("No Driver for password given ");
        }
    }

}
