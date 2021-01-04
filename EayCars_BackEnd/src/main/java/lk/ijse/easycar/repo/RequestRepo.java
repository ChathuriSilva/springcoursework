package lk.ijse.easycar.repo;

import lk.ijse.easycar.entity.Request;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepo extends JpaRepository<Request,String> {
    Request findRequestByRid(int rid);
    void deleteRequestByRid(int rid);
}
