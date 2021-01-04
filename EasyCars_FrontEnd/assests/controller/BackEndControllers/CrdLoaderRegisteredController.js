// send request
    function myfunction(id){
        let vehiid=$(id).attr('id');


        var f=' <div class="modal fade" id="RequestModal" tabindex="-1" aria-labelledby="requestModalLabel" aria-hidden="true">'+
            '<div class="modal-dialog">'+
            '<div class="modal-content">'+
            '<div class="modal-header">'+
            '<h5 class="modal-title" id="requestModalLabel" style="font-family: \'Open Sans Condensed\', sans-serif;">'+
            '<b>'+
            "Make A Request"+
            '</b>'+
            '</h5>'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
            '<span aria-hidden="true">'+
            "x"+
            '</span>'+
            '</button>'+
            '</div>'+
            '<div class="modal-body">'+
            '<form id="requestForm">'+
            '<label style="font-family: \'Open Sans Condensed\', sans-serif;">'+
            "Enter Your ID"+
            '</label>'+
            '<input type="text" class="form-control" placeholder="" id="userID">'+
            '<label style="font-family: \'Open Sans Condensed\', sans-serif;">'+
            "Pick Up Date"+
            '</label>'+
            '<input type="text" class="form-control" placeholder="" id="pickupdate">'+
            '<label style="font-family: \'Open Sans Condensed\', sans-serif; margin-top: 5px;">'+
            "Return Date"+
            '</label>'+
            '<input type="text" class="form-control" placeholder="" id="returndate" >'+
            '<div class="custom-file" style="margin-top: 30px;">'+
            '<input type="file" class="custom-file-input" id="WaiverSlip">'+
            '<label class="custom-file-label" for="WaiverSlip">'+
            "Attach Waiver Slip"+
            '</label>'+
            '</div>'+
            '<label style="font-family: \'Open Sans Condensed\', sans-serif; margin-top: 20px; margin-left: 5px;margin-right: 5px;">'+
            "Driver Required"+
            '</label>'+
            '<div class="form-check form-check-inline">'+
            '<input class="form-check-input" type="radio" name="inlineRadioOption1" id="yesRadio1">'+
            '<label class="form-check-label" for="yesRadio1">'+
            "yes"+
            '</label>'+
            '</div>'+
            ' <div class="form-check form-check-inline row">'+
            '<input class="form-check-input" type="radio" name="inlineRadioOption2" id="noRadio2" >'+
            '<label class="form-check-label" for="noRadio2">'+
            "No"+
            '</label>'+
            '</div>'+
            '</form>'+
            '</div>'+
            '<div class="modal-footer">'+
            '<button type="button" class="btn btn-dark" id="Btn-Request" style="font-family: \'Open Sans Condensed\', sans-serif;">'+
            "Request"+
            '</button>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>';
        $('#requestModel').append(f);

        $.ajax({
            url: "http://localhost:8080/EasyCar/Vehicle",
            dataType: 'json',
            success: function (res) {
                let data = res.data;
                for (var i in data) {
                    let id = data[i].id;
                    let type =data[i].type;
                    if(id==vehiid){
                        addRequest();
                    }
                }
            }
        });

        function addRequest() {
            $("#Btn-Request").click(function () {
                let carid=vehiid;
                let userid= $("#userID").val();
                let pickdate= $("#pickupdate").val();
                let returndate = $("#returndate").val();
                let waiverslip= $("#WaiverSlip").val();
                let yesradio = $('input[name="inlineRadioOption1"]:checked').val();
                let noradio = $('input[name="inlineRadioOption2"]:checked').val();

                let countu=1;
                let countv=1;

                    $.ajax({
                        url: "http://localhost:8080/EasyCar/Request",
                        dataType: 'json',
                        success: function (res) {
                            let data = res.data;

                            for (var i in data) {
                                let userid2 = data[i].userid;
                                let carid2 = data[i].carid;

                                if(userid==userid2){
                                    countu++;
                                }
                                if((carid==carid2)&(userid2==userid)){
                                    countv++;
                                    alert(countv);
                                }
                            }

                            if((userid!="")&(pickdate!="")&(returndate!="")&(waiverslip!="")&(carid!="")){
                                if(countu>3){
                                    alert("you have already made 3 requests");
                                }else
                                if(countv>1){
                                    alert("you have alredy requested for this vehicle");
                                }
                                else{
                                    if(yesradio!=undefined){
                                        $.ajax({
                                            method: "post",
                                            url: "http://localhost:8080/EasyCar/Request",
                                            contentType: "application/json",
                                            data: JSON.stringify({
                                                "datentime":$.now(),
                                                "userid": userid,
                                                "carid": carid,
                                                "pickdate": pickdate,
                                                "returndate": returndate,
                                                "waiverslip": waiverslip,
                                                "driver":true
                                            }),
                                            success: function (res) {
                                                alert(res.message);
                                                if (res.message == "Success") {
                                                    alert("Request Sent");
                                                } else {
                                                    alert("Request Sending Failed");
                                                }
                                            }
                                        });
                                    }
                                    if (noradio!=undefined){
                                        $.ajax({
                                            method: "post",
                                            url: "http://localhost:8080/EasyCar/Request",
                                            contentType: "application/json",
                                            data: JSON.stringify({
                                                "datentime":$.now(),
                                                "userid": userid,
                                                "carid": carid,
                                                "pickdate": pickdate,
                                                "returndate": returndate,
                                                "waiverslip": waiverslip,
                                                "driver":false
                                            }),
                                            success: function (res) {
                                                alert(res.message);
                                                if (res.message == "Success") {
                                                    alert("Request Sent");
                                                } else {
                                                    alert("Request Sending Failed");
                                                }
                                            }
                                        });
                                    }
                                }
                            }else{
                                alert("missing feilds");
                            }
                        }
                    });


            });


        }


    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////

/// delete request
function mydeletefunction(id){
    let vehid=$(id).attr('id');
    alert(vehid);

    var f=' <div class="modal fade" id="RequestdeleteModal" tabindex="-1" aria-labelledby="requestModalLabel" aria-hidden="true">'+
        '<div class="modal-dialog">'+
        '<div class="modal-content">'+
        '<div class="modal-header">'+
        '<h5 class="modal-title" id="requestModalLabel" style="font-family: \'Open Sans Condensed\', sans-serif;">'+
        '<b>'+
        "Delete A Request"+
        '</b>'+
        '</h5>'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
        '<span aria-hidden="true">'+
        "x"+
        '</span>'+
        '</button>'+
        '</div>'+
        '<div class="modal-body">'+
        '<form id="requestForm">'+
        '<label style="font-family: \'Open Sans Condensed\', sans-serif;">'+
        "Enter Your ID"+
        '</label>'+
        '<input type="text" class="form-control" placeholder="" id="userDID" >'+
        '</form>'+
        '</div>'+
        '<div class="modal-footer">'+
        '<button type="button" class="btn btn-danger" id="Btn-DRequest" style="font-family: \'Open Sans Condensed\', sans-serif;">'+
        " Delete Request"+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>';
    $('#requestDModel').append(f);



    $('#Btn-DRequest').click(function () {
        let did=$('#userDID').val();
        let carid;
        let userid;
        let p;
        $.ajax({
            url: "http://localhost:8080/EasyCar/Request",
            dataType: 'json',
            success: function (res) {
                let data = res.data;
                for (var i in data) {
                    carid = data[i].carid;
                    userid =data[i].userid;
                    p=data[i].rid;
                }
                if((carid==vehid)&(userid==did)){
                    $.ajax({
                        method:"delete",
                        url:"http://localhost:8080/EasyCar/Request?rid="+p,
                        success:function (res){
                            if (res.message == "Success") {
                                alert("Request Removed..!");
                            } else {
                                alert(res.data);
                            }
                        }
                    });
                    alert("exists");
                }else{
                    alert("no request made to delete");
                }

            }
        });
    });

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function loadVehicles() {
        $.ajax({
            url: "http://localhost:8080/EasyCar/Vehicle",
            dataType: 'json',
            success: function (res) {
                let data = res.data;
                for (var i in data) {
                    let id = data[i].id;
                    let brand = data[i].brand;
                    let type =data[i].type;
                    let image=data[i].image;
                    let passenger = data[i].passenger;
                    let transmission = data[i].transmission;
                    let fuel = data[i].fuel;
                    let dailyrate = data[i].dailyrate;
                    let freekmforday = data[i].freekmforday;
                    let monthlyrate = data[i].monthlyrate;
                    let freekmformonth = data[i].freekmformonth;
                    let priceperextrakm = data[i].priceperextrakm;
                    let milage = data[i].milage;

                    let status="accepted";


                var a= '<div class="card mb-3" style="width:90%;" id="'+id+'">'+
                    ' <div class="row no-gutters">' +'<div class="col-md-4">'+
                    '<img src= "'+image+'">' +'</div>'+
                    '<div class="col-md-8">'+'<div class="card-body">'+
                    '<h5 class="card-title">'+data[i].brand+'</h5>'+
                    '<p class="card-text">'+brand+"  , Type = "+type+" , No Of Passengers ="+passenger+" , Transmission = "+transmission+" , DailyRate = "+dailyrate+" , Free Km per Day = "+freekmforday+" , Monthly Rate = "+monthlyrate+" , Free KM for Month = "+freekmformonth+" , Price Per Extra KM = "+priceperextrakm+ " , fuel type = "+fuel+'</p>'+
                    '<p class="card-text">'+
                    '<small class="text-muted">'+"Last updated 3 mins ago"+'</small>'+
                    '</p>'+
                    '</div>'+
                    '<div class="card-footer">'+
                    '<p class="card-text">'+
                    '<small class="text-muted">'+"Status :"+status+'</small>'+
                    '</p>'+
                    '<button class="btn btn-outline-danger btn-delete-request" type="button" onclick="mydeletefunction(this)" data-toggle="modal" data-target="#RequestdeleteModal" id="'+id+'">'+"Delete Request"+ '</button>'+
                    '<button class="btn btn-outline-dark btn-make-request" type="button" onclick="myfunction(this)" data-toggle="modal" data-target="#RequestModal" id="'+id+'">'+"Make Request"+ '</button>'+
                    '<button class="btn btn-outline-success btn-checkAvailable"  type="button" id="'+id+'">'+"Check Availability"+ '</button>'+
                    '<button class="btn btn-outline-secondary"  type="button" class="btn-waiver" onclick="myWaiverfunction(this)" data-toggle="modal" data-target="#waiverModal" id="'+id+'" >'+"Waiver"+'</button>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>';
                $('#test2').append(a);
            }
        }
    });
}

$('#btn-allc').click(function () {
    $('#test2').empty();
    loadVehicles();
});
$('#btn-cars').click(function () {
    $('#test2').empty();
    loadVehicles();
});
$('#LoginUser').click(function () {
    $('#test2').empty();
    loadVehicles();
});

$('#btn-sortc').click(function () {
    let scpass=$('#scpass').val();
    let sctrans=$('#sctrans').val();
    let sctype=$('#sctype').val();
    let scfuel=$('#scfuel').val();
    $('#test2').empty();

    $.ajax({
        url: "http://localhost:8080/EasyCar/Vehicle",
        dataType: 'json',
        success: function (res) {
            let data = res.data;
            for (var i in data) {
                let id = data[i].id;
                let brand = data[i].brand;
                let type = data[i].type;
                let image = data[i].image;
                let passenger = data[i].passenger;
                let transmission = data[i].transmission;
                let fuel = data[i].fuel;
                let dailyrate = data[i].dailyrate;
                let freekmforday = data[i].freekmforday;
                let monthlyrate = data[i].monthlyrate;
                let freekmformonth = data[i].freekmformonth;
                let priceperextrakm = data[i].priceperextrakm;
                let milage = data[i].milage;

                if ((scpass == passenger) & (sctrans == transmission) & (sctype == type) & (scfuel == fuel)){

                    let status="accepted";

                    var a= '<div class="card mb-3" style="width:90%;">'+
                        ' <div class="row no-gutters">' +'<div class="col-md-4">'+
                        '<img src= "'+image+'">' +'</div>'+
                        '<div class="col-md-8">'+'<div class="card-body">'+
                        '<h5 class="card-title">'+data[i].brand+'</h5>'+
                        '<p class="card-text">'+brand+"  , Type = "+type+" , No Of Passengers ="+passenger+" , Transmission = "+transmission+" , DailyRate = "+dailyrate+" , Free Km per Day = "+freekmforday+" , Monthly Rate = "+monthlyrate+" , Free KM for Month = "+freekmformonth+" , Price Per Extra KM = "+priceperextrakm+ " , fuel type = "+fuel+'</p>'+
                        '<p class="card-text">'+
                        '<small class="text-muted">'+"Last updated 3 mins ago"+'</small>'+
                        '</p>'+
                        '</div>'+
                        '<div class="card-footer">'+
                        '<p class="card-text">'+
                        '<small class="text-muted">'+"Status :"+status+'</small>'+
                        '</p>'+
                        '<button class="btn btn-outline-danger" type="button" class="btn-delete-request">'+"Delete Request"+ '</button>'+
                        '<button class="btn btn-outline-dark" type="button" class="btn-make-request" data-toggle="modal" data-target="#RequestModal">'+"Make Request"+ '</button>'+
                        '<button class="btn btn-outline-success" type="button" class="btn-checkAvailable">'+"Check Availability"+ '</button>'+
                        '<button class="btn btn-outline-secondary" type="button" class="btn-waiver" data-toggle="modal" data-target="#waiverModel">'+"Waiver"+ '</button>'+
                        '</div>'+
                        '</div>'+
                        '</div>'+
                        '</div>';

                    $('#test2').append(a);
                }
            }
        }
    });

});