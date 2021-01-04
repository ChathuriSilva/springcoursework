package lk.ijse.easycar.controller;

import lk.ijse.easycar.dto.VehicleDTO;
import lk.ijse.easycar.service.VehicleService;
import lk.ijse.easycar.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Vehicle")
@CrossOrigin
public class VehicleController {
    @Autowired
    VehicleService service;
    @PostMapping
    public ResponseEntity addVehicle(@RequestBody VehicleDTO dto) {
        service.saveVehicle(dto);
        StandardResponse response = new StandardResponse(200, "Success", null);
        return new ResponseEntity(response, HttpStatus.CREATED);
    }
    @PutMapping
    public ResponseEntity updateVehicle(@RequestBody VehicleDTO dto) {
        service.updateVehicle(dto);
        return new ResponseEntity(new StandardResponse(200, "Success", null), HttpStatus.OK);
    }
    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteVehicle(@RequestParam String id) {
        service.deleteVehicle(id);
        return new ResponseEntity(new StandardResponse(200, "Success", null), HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity getAllVehicles() {
        List<VehicleDTO> allVehicles = service.getAllVehicles();
        return new ResponseEntity(new StandardResponse(200, "Success", allVehicles), HttpStatus.OK);
    }
    @GetMapping(path = "/{id}")
    public ResponseEntity searchVehicle(@PathVariable String id) {
        VehicleDTO vehicleDTO = service.searchVehicle(id);
        return new ResponseEntity(new StandardResponse(200, "Success", vehicleDTO), HttpStatus.OK);
    }
}
