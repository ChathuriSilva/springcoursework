$('#btn-requestmanage').click(function () {
   loadAllRequests();
});
function loadAllRequests() {
    $("#tblRequest").empty();
    $.ajax({
        url: "http://localhost:8080/EasyCar/Request",
        dataType: 'json',
        success: function (res) {
            let data = res.data;
            for (var i in data) {
                let rid=data[i].rid;
                let userid = data[i].userid;
                let carid = data[i].carid;
                let waiverslip =data[i].waiverslip;
                let pickdate = data[i].pickdate;
                let returndate = data[i].returndate;
                let driver = data[i].driver;

                var row = `<tr><td>${rid}</td><td>${userid}</td><td>${carid}</td><td>${waiverslip}</td>
                            <td>${pickdate}</td><td>${returndate}</td><td>${driver}</td>
                            </tr>`;
                $("#tblRequest").append(row);

            }
        }
    });
}
$('#btn-acceptRequest').click(function () {
   let rid=$("#did").val();
   alert(rid);
    $.ajax({
        url: "http://localhost:8080/EasyCar/Request/" +rid,
        success: function (res) {
            console.log(res);
            let request = res.data;
            // get details of the request
            let id=request.rid;
            let datentime=request.datentime;
            let userid=request.userid;
            let carid=request.carid;
            let pickdate=request.pickdate;
            let returndate=request.returndate;
            let waiverslip=request.waiverslip;
            let driver=request.driver;

            console.log(id+datentime+userid+carid+pickdate+returndate+waiverslip+driver);

        }
    });
});


