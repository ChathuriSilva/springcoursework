package lk.ijse.easycar.controller;

import lk.ijse.easycar.dto.RequestDTO;
import lk.ijse.easycar.service.RequestService;
import lk.ijse.easycar.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Request")
@CrossOrigin
public class RequestController {
    @Autowired
    RequestService service;
    @PostMapping
    public ResponseEntity addUser(@RequestBody RequestDTO dto) {
        service.saveRequest(dto);
        StandardResponse response = new StandardResponse(200, "Success", null);
        return new ResponseEntity(response, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity getAllRequests() {
        List<RequestDTO> allRequests = service.getAllRequests();
        return new ResponseEntity(new StandardResponse(200, "Success", allRequests), HttpStatus.OK);
    }
    @DeleteMapping(params = {"rid"})
    public ResponseEntity deleteUser(@RequestParam int rid) {
        service.deleteRequest(rid);
        return new ResponseEntity(new StandardResponse(200, "Success", null), HttpStatus.CREATED);
    }
    @GetMapping(path = "/{rid}")
    public ResponseEntity searchVehicle(@PathVariable int rid) {
        RequestDTO requestDTO = service.searchRequestById(rid);
        return new ResponseEntity(new StandardResponse(200, "Success", requestDTO), HttpStatus.OK);
    }
}
