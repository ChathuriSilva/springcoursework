package lk.ijse.easycar.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Driver {
    @Id
    private String id;
    private String name;
    private int contact;
    private String username;
    private String password;

    public Driver() {
    }

    public Driver(String id, String name, int contact, String username, String password) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.username = username;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getContact() {
        return contact;
    }

    public void setContact(int contact) {
        this.contact = contact;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
