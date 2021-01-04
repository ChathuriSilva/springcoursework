$('#LoginAdmin').click(function () {
    let username = $('#AdminUsername').val();
    let password = $('#AdminPassword').val();
    // check if admin and username exist is database and direct to admin page
    $.ajax({
        url: "http://localhost:8080/EasyCar/Admin/?username=" + username,
        success: function (res) {
            let data=res.data;
            let username1=data.username;
            let password1=data.password;
            if(password1==password){
                $('#adminPage').css('display', 'block');
                $('#homePage').css('display', 'none');
                $('#dashboard').css('display','block');
                $('#request-manage').css('display','none');
                $('#car-manage').css('display','none');
                $('#user-manage').css('display','none');
                $('#driver-manage').css('display','none');
                $('#schedule-manage').css('display','none');
                $('#maintainance-manage').css('display','none');
                $('#payment-manage').css('display','none');
                $('#income-manage').css('display','none');
            }else{
                alert("Wrong Password or username");
            }
        },
        error: function (res) {
            alert(res.message);
        }
    });
});