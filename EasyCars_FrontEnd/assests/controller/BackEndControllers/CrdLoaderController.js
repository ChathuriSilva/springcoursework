// $('#viewCars').scrollspy({ target: '#list-example' })
$('#btn-guest').click(function () {
    $('#test').empty();
    loadVehicleCards();
});
$('#btn-all').click(function () {
    $('#test').empty();
    loadVehicleCards();
});
$('#btn-sort').click(function () {
    let passengers=$('#passsearch').val();
    let transs=$('#transsearch').val();
    let types=$('#typesearch').val();
    let fuels=$('#fuelsearch').val();
    $('#test').empty();

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

                if ((passengers == passenger) & (transs == transmission) & (types == type) & (fuels == fuel)){

                    var templateString = '<div class="card" style="max-width: 540px;">' +
                        ' <div class="row no-gutters">' + '<div class="col-md-4">' +
                        '<img src= "' + image + '">' + '</div>' +
                        '<div class="col-md-8">' + '<div class="card-body">' +
                        '<h5 class="card-title">' + data[i].brand + '</h5>' +
                        '<p class="card-text">' + brand + "  , Type = " + type + " , No Of Passengers =" + passenger + " , Transmission = " + transmission + " , DailyRate = " + dailyrate + " , Free Km per Day = " + freekmforday + " , Monthly Rate = " + monthlyrate + " , Free KM for Month = " + freekmformonth + " , Price Per Extra KM = " + priceperextrakm +
                        " , fuel type = " + fuel + '</p>' + '</div>' + '</div>' + '</div>' + '</div>';
                $('#test').append(templateString);
            }
            }
        }
    });

});
function loadVehicleCards() {
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

                var templateString = '<div class="card mb-3" style="max-width: 540px;">' +
                    ' <div class="row no-gutters">' +'<div class="col-md-4">'+
                    '<img src= "'+image+'">' +'</div>'+
                    '<div class="col-md-8">'+'<div class="card-body">'+
                    '<h5 class="card-title">'+data[i].brand+'</h5>'+
                    '<p class="card-text">'+brand+"  , Type = "+type+" , No Of Passengers ="+passenger+" , Transmission = "+transmission+" , DailyRate = "+dailyrate+" , Free Km per Day = "+freekmforday+" , Monthly Rate = "+monthlyrate+" , Free KM for Month = "+freekmformonth+" , Price Per Extra KM = "+priceperextrakm+
                    " , fuel type = "+fuel+'</p>'+'</div>'+'</div>'+'</div>'+'</div>';
                $('#test').append(templateString);

            }
        }
    });
}