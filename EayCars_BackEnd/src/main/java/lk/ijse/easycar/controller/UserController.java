package lk.ijse.easycar.controller;

import lk.ijse.easycar.dto.UserDTO;
import lk.ijse.easycar.service.UserService;
import lk.ijse.easycar.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/User")
@CrossOrigin
public class UserController {
    @Autowired
    UserService service;
    @PostMapping
    public ResponseEntity addUser(@RequestBody UserDTO dto) {
        service.saveUser(dto);
        StandardResponse response = new StandardResponse(200, "Success", null);
        return new ResponseEntity(response, HttpStatus.CREATED);
    }
    @GetMapping(params = {"username"})
    public ResponseEntity searchUserByUsername(String username) {
        System.out.println(username);
        UserDTO userDTO = service.searchUserByUsername(username);
        return new ResponseEntity(new StandardResponse(200, "Success", userDTO), HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity getAllUsers() {
        List<UserDTO> allUsers = service.getAllUsers();
        return new ResponseEntity(new StandardResponse(200, "Success", allUsers), HttpStatus.OK);
    }
    @GetMapping(params = {"id","password"})
    public ResponseEntity searchUserByIdandPass(String id,String password) {
        UserDTO userDTO = service.searchUserByIdAndPass(id,password);
        return new ResponseEntity(new StandardResponse(200, "Success", userDTO), HttpStatus.OK);
    }
    @PutMapping
    public ResponseEntity updateUser(@RequestBody UserDTO dto) {
        service.updateUser(dto);
        return new ResponseEntity(new StandardResponse(200, "Success", null), HttpStatus.OK);
    }
    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteUser(@RequestParam String id) {
        service.deleteUser(id);
        return new ResponseEntity(new StandardResponse(200, "Success", null), HttpStatus.CREATED);
    }
    @GetMapping(path = "/{id}")
    public ResponseEntity searchUserById(@PathVariable String id) {
        UserDTO userDTO = service.searchUserById(id);
        return new ResponseEntity(new StandardResponse(200, "Success", userDTO), HttpStatus.OK);
    }
//    @GetMapping(params = {"lisence"})
//    public ResponseEntity searchCustomerByLisence(String lisence) {
//        CustomerDTO customerDTO = service.searchCustomerByLisence(lisence);
//        return new ResponseEntity(new StandardResponse(200, "Success", customerDTO), HttpStatus.OK);
//    }
}
