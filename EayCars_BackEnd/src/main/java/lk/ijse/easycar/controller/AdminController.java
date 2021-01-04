package lk.ijse.easycar.controller;

import lk.ijse.easycar.dto.AdminDTO;
import lk.ijse.easycar.service.AdminService;
import lk.ijse.easycar.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Admin")
@CrossOrigin
public class AdminController {
    @Autowired
    AdminService service;
    @GetMapping(params = {"username"})
    public ResponseEntity searchAdminByUsername(String username) {
        System.out.println(username);
        AdminDTO adminDTO = service.searchAdminByUsername(username);
        return new ResponseEntity(new StandardResponse(200, "Success", adminDTO), HttpStatus.OK);
    }
}
