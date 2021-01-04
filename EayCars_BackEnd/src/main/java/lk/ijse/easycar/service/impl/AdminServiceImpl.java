package lk.ijse.easycar.service.impl;

import lk.ijse.easycar.dto.AdminDTO;
import lk.ijse.easycar.entity.Admin;
import lk.ijse.easycar.repo.AdminRepo;
import lk.ijse.easycar.service.AdminService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    AdminRepo repo;
    @Override
    public AdminDTO searchAdminByUsername(String username) {
        Optional<Admin> admin = Optional.ofNullable(repo.findAdminByUsername(username));
        if (admin.isPresent()) {
            return modelMapper.map(admin.get(), AdminDTO.class);
        } else {
            throw new RuntimeException("No Admin for username: " + username);
        }
    }
}
