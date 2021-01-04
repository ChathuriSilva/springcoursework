package lk.ijse.easycar.dto;

public class RequestDTO {
    private int rid;
    private String datentime;
    private String userid;
    private String carid;
    private String pickdate;
    private String returndate;
    private String waiverslip;
    private boolean driver;

    public RequestDTO() {
    }

    public RequestDTO(int rid, String datentime, String userid, String carid, String pickdate, String returndate, String waiverslip, boolean driver) {
        this.rid = rid;
        this.datentime = datentime;
        this.userid = userid;
        this.carid = carid;
        this.pickdate = pickdate;
        this.returndate = returndate;
        this.waiverslip = waiverslip;
        this.driver = driver;
    }

    public int getRid() {
        return rid;
    }

    public void setRid(int rid) {
        this.rid = rid;
    }

    public String getDatentime() {
        return datentime;
    }

    public void setDatentime(String datentime) {
        this.datentime = datentime;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getCarid() {
        return carid;
    }

    public void setCarid(String carid) {
        this.carid = carid;
    }

    public String getPickdate() {
        return pickdate;
    }

    public void setPickdate(String pickdate) {
        this.pickdate = pickdate;
    }

    public String getReturndate() {
        return returndate;
    }

    public void setReturndate(String returndate) {
        this.returndate = returndate;
    }

    public String getWaiverslip() {
        return waiverslip;
    }

    public void setWaiverslip(String waiverslip) {
        this.waiverslip = waiverslip;
    }

    public boolean isDriver() {
        return driver;
    }

    public void setDriver(boolean driver) {
        this.driver = driver;
    }
}
