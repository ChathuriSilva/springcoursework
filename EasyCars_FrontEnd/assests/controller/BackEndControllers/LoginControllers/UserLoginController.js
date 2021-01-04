$('#LoginUser').click(function () {
    let username = $('#Username').val();
    let password = $('#Password').val();
    let id;
    // check if user and username exist is database and direct to user page
    $.ajax({
        url: "http://localhost:8080/EasyCar/User/?username=" + username,
        success: function (res) {
            let data=res.data;
            id=data.id;
            let username1=data.username;
            let password1=data.password;
            if(password1==password){
                $('#registeredUserPage').css('display', 'block');
                $('#homePage').css('display', 'none');
                $('#usercarview').css('display','block');
                $('#userSettings').css('display','none');
            }else{
                alert("Wrong Password or username");
            }
        },
        error: function (res) {
            alert(res.message);
        }
    });
});