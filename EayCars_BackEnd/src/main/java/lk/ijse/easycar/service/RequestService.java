package lk.ijse.easycar.service;

import lk.ijse.easycar.dto.RequestDTO;
import lk.ijse.easycar.entity.Request;

import java.util.List;

public interface RequestService {
    void saveRequest(RequestDTO dto);
    void deleteRequest(int rid);
    public List<RequestDTO> getAllRequests();
    RequestDTO searchRequestById(int id);
}
