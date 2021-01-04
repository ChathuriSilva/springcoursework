//add vehicle
$("#btn-addCar").click(function () {
    let id= $("#vehicleRegNo").val();
    let brand= $("#vehiclebrand").val();
    let type = $("#vehicleType").val();
    let passenger= $("#passengers").val();
    let image = $("#vehicleimg").val();
    let transmission = $("#transmissionType").val();
    let fuel = $("#fuelType").val();
    let milage = $("#milage").val();
    let priceperextrakm = $("#priceperextrakm").val();
    let dailyrate = $("#dailyrate").val();
    let freekmforday = $("#freekmforday").val();
    let monthlyrate = $("#monthlyrate").val();
    let freekmformonth = $("#freekmformonth").val();
    if((id!="")&(brand!="")&(type!="")&(passenger!="")&(image!="")&(transmission!="")&(fuel!="")&(milage!="")&(priceperextrakm!="")&(dailyrate!="")&(freekmforday!="")&(monthlyrate!="")&(freekmformonth!="")){
            $.ajax({
                method: "post",
                url: "http://localhost:8080/EasyCar/Vehicle",
                contentType: "application/json",
                data: JSON.stringify({
                    "id": id,
                    "brand": brand,
                    "type": type,
                    "passenger": parseInt(passenger),
                    "image": image,
                    "transmission":transmission,
                    "fuel":fuel,
                    "milage":parseInt(milage),
                    "priceperextrakm":parseInt(priceperextrakm),
                    "dailyrate":parseInt(dailyrate),
                    "freekmforday":parseInt(freekmforday),
                    "monthlyrate":parseInt(dailyrate),
                    "freekmformonth":parseInt(freekmformonth)
                }),
                success: function (res) {
                    alert(res.message);
                    if (res.message == "Success") {
                        alert("Vehicle Registered");
                        loadAllVehicles();
                        clear();
                    } else {
                        alert("Vehicle Register Failed");
                        clear();
                    }
                }
            });
    }else{
        alert("missing feilds");
    }
});
/// load vehicle table
$('#btn-carmanage').click(function () {
    loadAllVehicles();
});
function loadAllVehicles() {
    $("#tblCars").empty();
    $.ajax({
        url: "http://localhost:8080/EasyCar/Vehicle",
        dataType: 'json',
        success: function (res) {
            let data = res.data;
            for (var i in data) {
                let id = data[i].id;
                let brand = data[i].brand;
                let type =data[i].type;
                let passenger = data[i].passenger;
                let transmission = data[i].transmission;
                let fuel = data[i].fuel;
                let dailyrate = data[i].dailyrate;
                let freekmforday = data[i].freekmforday;
                let monthlyrate = data[i].monthlyrate;
                let freekmformonth = data[i].freekmformonth;
                let priceperextrakm = data[i].priceperextrakm;
                let milage = data[i].milage;

                var row = `<tr><td>${id}</td><td>${brand}</td><td>${type}</td>
                            <td>${passenger}</td><td>${transmission}</td><td>${fuel}</td>
                            <td>${dailyrate}</td><td>${freekmforday}</td><td>${monthlyrate}</td>
                            <td>${freekmformonth}</td><td>${priceperextrakm}</td><td>${milage}</td>
                            </tr>`;
                $("#tblCars").append(row);

            }
        }
    });
}
function clear() {
    $("#vehicleRegNo").val(null);
    $("#vehiclebrand").val(null);
    $("#vehicleType").val(null);
    $("#passengers").val(null);
    $("#vehicleimg").val(null);
    $("#transmissionType").val(null);
    $("#fuelType").val(null);
    $("#milage").val(null);
    $("#priceperextrakm").val(null);
    $("#dailyrate").val(null);
    $("#freekmforday").val(null);
    $("#monthlyrate").val(null);
    $("#freekmformonth").val(null);
}
/// update vehicle
$("#btn-updateCar").click(function () {
    let id= $("#vehicleRegNo").val();
    let brand= $("#vehiclebrand").val();
    let type = $("#vehicleType").val();
    let passenger= $("#passengers").val();
    let image = $("#vehicleimg").val();
    let transmission = $("#transmissionType").val();
    let fuel = $("#fuelType").val();
    let milage = $("#milage").val();
    let priceperextrakm = $("#priceperextrakm").val();
    let dailyrate = $("#dailyrate").val();
    let freekmforday = $("#freekmforday").val();
    let monthlyrate = $("#monthlyrate").val();
    let freekmformonth = $("#freekmformonth").val();

    $.ajax({
        method: "put",
        url: "http://localhost:8080/EasyCar/Vehicle",
        contentType: "application/json",
        data: JSON.stringify({
            "id": id,
            "brand": brand,
            "type": type,
            "passenger": passenger,
            "image": image,
            "transmission":transmission,
            "fuel":fuel,
            "milage":milage,
            "priceperextrakm":priceperextrakm,
            "dailyrate":dailyrate,
            "freekmforday":freekmforday,
            "monthlyrate":monthlyrate,
            "freekmformonth":freekmformonth
        }),
        success: function (res) {
            if (res.message == "Success") {
                alert("Vehicle Updated");
            } else {
                alert("Vehicle Update Failed"+res.data);
            }
            loadAllVehicles();
        }
    });
});
/// delete vehicle
$("#btn-deleteCar").click(function (){
    let id= $("#vehicleRegNo").val();
    $.ajax({
        method:"delete",
        url:"http://localhost:8080/EasyCar/Vehicle?id="+id,
        success:function (res){
            if (res.message == "Success") {
                alert("Vehicle Removed..!");
                loadAllVehicles();
            } else {
                alert(res.data);
            }
            clear();
        }
    });
});
//search Vehicle
$("#vehicleRegNo").on('keypress', function (e) {
    if (e.code == "Enter") {
        let id = $("#vehicleRegNo").val();
        $.ajax({
            url: "http://localhost:8080/EasyCar/Vehicle/" + id,
            success: function (res) {
                console.log(res);
                let vehicle = res.data;
                // set details to input fields
                let id=vehicle.id;
                if(id==undefined){
                    alert("No Such Vehicle");
                }else{
                    $("#vehicleRegNo").val(vehicle.id);
                    $("#vehiclebrand").val(vehicle.brand);
                    $("#vehicleType").val(vehicle.type);
                    $("#passengers").val(vehicle.passenger);
                   // $("#vehicleimg").val(vehicle.image);
                    $("#transmissionType").val(vehicle.transmission);
                    $("#fuelType").val(vehicle.fuel);
                    $("#milage").val(vehicle.milage);
                    $("#priceperextrakm").val(vehicle.priceperextrakm);
                    $("#dailyrate").val(vehicle.dailyrate);
                    $("#freekmforday").val(vehicle.freekmforday);
                    $("#monthlyrate").val(vehicle.monthlyrate);
                    $("#freekmformonth").val(vehicle.freekmformonth);

                    var row = `<tr><td>${vehicle.id}</td><td>${vehicle.brand}</td><td>${vehicle.type}</td><td>${vehicle.passenger}</td>
                            <td>${vehicle.transmission}</td><td>${vehicle.fuel}</td><td>${vehicle.dailyrate}</td>
                            <td>${vehicle.freekmforday}</td><td>${vehicle.monthlyrate}</td><td>${vehicle.freekmformonth}</td>
                            <td>${vehicle.priceperextrakm}</td><td>${vehicle.milage}</td>
                            </tr>`;
                    $("#tblCars").empty();
                    $("#tblCars").append(row);
                }
            }
        });
    }
});