package lk.ijse.easycar.dto;

public class UserDTO {
    private String id;
    private String idcopy;
    private String lisenceno;
    private String lisencecopy;
    private String name;
    private int contact;
    private String email;
    private String username;
    private String password;

    public UserDTO() {
    }

    public UserDTO(String id, String idcopy, String lisenceno, String lisencecopy, String name, int contact, String email, String username, String password) {
        this.id = id;
        this.idcopy = idcopy;
        this.lisenceno = lisenceno;
        this.lisencecopy = lisencecopy;
        this.name = name;
        this.contact = contact;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIdcopy() {
        return idcopy;
    }

    public void setIdcopy(String idcopy) {
        this.idcopy = idcopy;
    }

    public String getLisenceno() {
        return lisenceno;
    }

    public void setLisenceno(String lisenceno) {
        this.lisenceno = lisenceno;
    }

    public String getLisencecopy() {
        return lisencecopy;
    }

    public void setLisencecopy(String lisencecopy) {
        this.lisencecopy = lisencecopy;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    @Override
    public String toString() {
        return "UserDTO{" +
                "id='" + id + '\'' +
                ", idcopy='" + idcopy + '\'' +
                ", lisenceno='" + lisenceno + '\'' +
                ", lisencecopy='" + lisencecopy + '\'' +
                ", name='" + name + '\'' +
                ", contact=" + contact +
                ", email='" + email + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
