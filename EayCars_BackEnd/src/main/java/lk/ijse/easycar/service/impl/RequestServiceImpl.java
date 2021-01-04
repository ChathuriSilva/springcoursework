package lk.ijse.easycar.service.impl;

import lk.ijse.easycar.dto.RequestDTO;
import lk.ijse.easycar.dto.UserDTO;
import lk.ijse.easycar.entity.Request;
import lk.ijse.easycar.entity.User;
import lk.ijse.easycar.repo.RequestRepo;
import lk.ijse.easycar.service.RequestService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class RequestServiceImpl implements RequestService {


    @Autowired
    ModelMapper modelMapper;
    @Autowired
    RequestRepo repo;

    @Override
    public void saveRequest(RequestDTO dto) {
            Request u = modelMapper.map(dto, Request.class);
            repo.save(u);
    }

    @Override
    public void deleteRequest(int rid) {
            repo.deleteRequestByRid(rid);
    }

    @Override
    public List<RequestDTO> getAllRequests() {
        List<Request> all = repo.findAll();
        return modelMapper.map(all, new TypeToken<List<RequestDTO>>() {
        }.getType());
    }

    @Override
    public RequestDTO searchRequestById(int id) {
       Request request = repo.findRequestByRid(id);
        // Optional<User> customer = Optional.ofNullable(repo.findRequestByRid(id));
            return modelMapper.map(request, RequestDTO.class);

    }
}
