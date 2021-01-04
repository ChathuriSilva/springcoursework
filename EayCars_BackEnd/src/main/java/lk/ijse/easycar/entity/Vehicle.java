package lk.ijse.easycar.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Vehicle {
    @Id
    private String id;
    private String brand;
    private String type;
    private int passenger;
    private String image;
    private String transmission;
    private String fuel;
    private int milage;
    private int priceperextrakm;
    private int dailyrate;
    private int freekmforday;
    private int monthlyrate;
    private int freekmformonth;

    public Vehicle() {
    }

    public Vehicle(String id, String brand, String type, int passenger, String image, String transmission, String fuel, int milage, int priceperextrakm, int dailyrate, int freekmforday, int monthlyrate, int freekmformonth) {
        this.id = id;
        this.brand = brand;
        this.type = type;
        this.passenger = passenger;
        this.image = image;
        this.transmission = transmission;
        this.fuel = fuel;
        this.milage = milage;
        this.priceperextrakm = priceperextrakm;
        this.dailyrate = dailyrate;
        this.freekmforday = freekmforday;
        this.monthlyrate = monthlyrate;
        this.freekmformonth = freekmformonth;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getPassenger() {
        return passenger;
    }

    public void setPassenger(int passenger) {
        this.passenger = passenger;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public int getMilage() {
        return milage;
    }

    public void setMilage(int milage) {
        this.milage = milage;
    }

    public int getPriceperextrakm() {
        return priceperextrakm;
    }

    public void setPriceperextrakm(int priceperextrakm) {
        this.priceperextrakm = priceperextrakm;
    }

    public int getDailyrate() {
        return dailyrate;
    }

    public void setDailyrate(int dailyrate) {
        this.dailyrate = dailyrate;
    }

    public int getFreekmforday() {
        return freekmforday;
    }

    public void setFreekmforday(int freekmforday) {
        this.freekmforday = freekmforday;
    }

    public int getMonthlyrate() {
        return monthlyrate;
    }

    public void setMonthlyrate(int monthlyrate) {
        this.monthlyrate = monthlyrate;
    }

    public int getFreekmformonth() {
        return freekmformonth;
    }

    public void setFreekmformonth(int freekmformonth) {
        this.freekmformonth = freekmformonth;
    }
}
