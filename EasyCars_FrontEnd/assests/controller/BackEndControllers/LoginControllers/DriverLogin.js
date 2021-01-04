$('#LoginDriver').click(function () {
    let username = $('#DriverUsername').val();
    let password = $('#DriverPassword').val();
    alert(username);
    // check if user and username exist is database and direct to user page
    $.ajax({
        url: "http://localhost:8080/EasyCar/Driver/getOnLogin/" +username,

        success: function (res) {
            let data=res.data;
            let username1=data.username;
            let password1=data.password;
            alert(username1+" "+password1);
            if(password1==password){
                $('#driverPage').css('display', 'block');
                $('#homePage').css('display', 'none');

                $('#driverSchedule').css('display','block');
                $('#drivereditdetails').css('display','none');

            }else{
                alert("Wrong Password or username");
            }
        },
        error: function (res) {
            alert(res.message);
        }
    });
});