package lk.ijse.easycar.controller;

import lk.ijse.easycar.dto.DriverDTO;
import lk.ijse.easycar.service.DriverService;
import lk.ijse.easycar.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Driver")
@CrossOrigin
public class DriverController {
    @Autowired
    DriverService service;
    @PostMapping
    public ResponseEntity addUser(@RequestBody DriverDTO dto) {
        service.saveDriver(dto);
        StandardResponse response = new StandardResponse(200, "Success", null);
        return new ResponseEntity(response, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity getAllUsers() {
        List<DriverDTO> allDrivers = service.getAllDrivers();
        return new ResponseEntity(new StandardResponse(200, "Success", allDrivers), HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity updateDriver(@RequestBody DriverDTO dto) {
        service.updateDriver(dto);
        return new ResponseEntity(new StandardResponse(200, "Success", null), HttpStatus.OK);
    }
    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteDriver(@RequestParam String id) {
        service.deleteDriver(id);
        return new ResponseEntity(new StandardResponse(200, "Success", null), HttpStatus.CREATED);
    }
    @GetMapping(path = "/{id}")
    public ResponseEntity searchDriverById(@PathVariable String id) {
        DriverDTO driverDTO = service.searchDriverById(id);
        return new ResponseEntity(new StandardResponse(200, "Success", driverDTO), HttpStatus.OK);
    }
    @GetMapping(path = "/getOnLogin/{username}")
    public ResponseEntity searchAdminByUsername(@PathVariable String username) {
        System.out.println(username);
        DriverDTO driverDTO = service.searchDriverByUsername(username);
        return new ResponseEntity(new StandardResponse(200, "Success", driverDTO), HttpStatus.OK);
    }
    @GetMapping(params = {"id","password"})
    public ResponseEntity searchDriverByIdandPass(String id,String password) {
        DriverDTO driverDTO = service.searchDriverByIdAndPass(id, password);
        return new ResponseEntity(new StandardResponse(200, "Success", driverDTO), HttpStatus.OK);
    }
    @PutMapping(params = {"id","username","password"})
    public ResponseEntity updateDriverDetails(String id,String username,String password) {
        DriverDTO driverDTO = service.searchDriverById(id);
        driverDTO.setUsername(username);
        driverDTO.setPassword(password);
        service.saveDriverLoginDetails(driverDTO);
        return new ResponseEntity(new StandardResponse(200, "Success", null), HttpStatus.OK);
    }
}
