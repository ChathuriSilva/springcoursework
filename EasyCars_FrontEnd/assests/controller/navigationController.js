$('#btn-guest').click(function () {
    $('#guestUserPage').css('display','block');
    $('#homePage').css('display','none');
    $('#registeredUserPage').css('display','none');
    $('#driverPage').css('display','none');
    $('#adminPage').css('display','none');

    $('#carview').css('display','block');
    $('#register').css('display','none');
});
$('#btn-driverLogin').click(function () {
    $('#guestUserPage').css('display','none');
    $('#homePage').css('display','block');
    $('#registeredUserPage').css('display','none');
    $('#driverPage').css('display','none');
    $('#adminPage').css('display','none');

});

$('#btn-adminLogin').click(function () {
    $('#guestUserPage').css('display','none');
    $('#registeredUserPage').css('display','none');
    $('#homePage').css('display','block');
    $('#driverPage').css('display','none');
    $('#adminPage').css('display','none');

});

$('#btn-userLogin').click(function () {
    $('#guestUserPage').css('display','none');
    $('#homePage').css('display','block');
    $('#driverPage').css('display','none');
    $('#adminPage').css('display','none');
    $('#registeredUserPage').css('display','none');

});
///////// admin nav start /////////////////////////////////////
$('#btn-dashboard').click(function () {
    $('#dashboard').css('display','block');
    $('#request-manage').css('display','none');
    $('#car-manage').css('display','none');
    $('#user-manage').css('display','none');
    $('#driver-manage').css('display','none');
    $('#schedule-manage').css('display','none');
    $('#maintainance-manage').css('display','none');
    $('#payment-manage').css('display','none');
    $('#income-manage').css('display','none');
});
$('#btn-carmanage').click(function () {
    $('#car-manage').css('display','block');
    $('#schedule-manage').css('display','none');
    $('#request-manage').css('display','none');
    $('#user-manage').css('display','none');
    $('#dashboard').css('display','none');
    $('#driver-manage').css('display','none');
    $('#maintainance-manage').css('display','none');
    $('#payment-manage').css('display','none');
    $('#income-manage').css('display','none');
});
$('#btn-usermanage').click(function () {
    $('#user-manage').css('display','block');
    $('#car-manage').css('display','none');
    $('#maintainance-manage').css('display','none');
    $('#payment-manage').css('display','none');
    $('#income-manage').css('display','none');
    $('#request-manage').css('display','none');
    $('#schedule-manage').css('display','none');
    $('#driver-manage').css('display','none');
    $('#dashboard').css('display','none');
});
$('#btn-drivermanage').click(function () {
    $('#driver-manage').css('display','block');
    $('#user-manage').css('display','none');
    $('#schedule-manage').css('display','none');
    $('#car-manage').css('display','none');
    $('#maintainance-manage').css('display','none');
    $('#payment-manage').css('display','none');
    $('#income-manage').css('display','none');
    $('#request-manage').css('display','none');
    $('#dashboard').css('display','none');
});
$('#btn-requestmanage').click(function () {
    $('#driver-manage').css('display','none');
    $('#user-manage').css('display','none');
    $('#schedule-manage').css('display','none');
    $('#car-manage').css('display','none');
    $('#request-manage').css('display','block');
    $('#dashboard').css('display','none');
    $('#maintainance-manage').css('display','none');
    $('#payment-manage').css('display','none');
    $('#income-manage').css('display','none');
});
$('#btn-schedulemanage').click(function () {
    $('#driver-manage').css('display','none');
    $('#user-manage').css('display','none');
    $('#schedule-manage').css('display','block');
    $('#car-manage').css('display','none');
    $('#maintainance-manage').css('display','none');
    $('#payment-manage').css('display','none');
    $('#income-manage').css('display','none');
    $('#request-manage').css('display','none');
    $('#dashboard').css('display','none');
});
$('#btn-maintanence-manage').click(function () {
    $('#driver-manage').css('display','none');
    $('#user-manage').css('display','none');
    $('#schedule-manage').css('display','none');
    $('#car-manage').css('display','none');
    $('#maintainance-manage').css('display','block');
    $('#payment-manage').css('display','none');
    $('#income-manage').css('display','none');
    $('#request-manage').css('display','none');
    $('#dashboard').css('display','none');
});
$('#btn-paymentmanage').click(function () {
    $('#driver-manage').css('display','none');
    $('#user-manage').css('display','none');
    $('#schedule-manage').css('display','none');
    $('#car-manage').css('display','none');
    $('#maintainance-manage').css('display','none');
    $('#payment-manage').css('display','block');
    $('#income-manage').css('display','none');
    $('#request-manage').css('display','none');
    $('#dashboard').css('display','none');
});
$('#btn-incomemanage').click(function () {
    $('#driver-manage').css('display','none');
    $('#user-manage').css('display','none');
    $('#schedule-manage').css('display','none');
    $('#car-manage').css('display','none');
    $('#maintainance-manage').css('display','none');
    $('#payment-manage').css('display','none');
    $('#income-manage').css('display','block');
    $('#request-manage').css('display','none');
    $('#dashboard').css('display','none');
});
$('#btn-returnback').click(function () {
    $('#guestUserPage').css('display','none');
    $('#homePage').css('display','block');
    $('#registeredUserPage').css('display','none');
    $('#driverPage').css('display','none');
    $('#adminPage').css('display','none');
});


///////// admin nav ends  /////////////////////////////////////
///////// guest nav start /////////////////////////////////////
$('#btn-viewcars').click(function () {
    $('#carview').css('display','block');
    $('#register').css('display','none');
});
$('#btn-register').click(function () {
    $('#carview').css('display','none');
    $('#register').css('display','block');
});
$('#btn-return').click(function () {
    $('#guestUserPage').css('display','none');
    $('#homePage').css('display','block');
});

//////// guest nav ends ////////////////////////////////////////
//////// registered user nav start  ////////////////////////////
$('#btn-cars').click(function () {
    $('#usercarview').css('display','block');
    $('#userSettings').css('display','none');
});
$('#btn-returnh').click(function () {
    $('#registeredUserPage').css('display','none');
    $('#homePage').css('display','block');
});
$('#btn-edit-userdatails').click(function () {
    $('#usercarview').css('display','none');
    $('#userSettings').css('display','block');
});


//////// registered user nav ends //////////////////////////////
//////// driver nav start ///////////////////////////////////////
$('#btn-returnhome').click(function () {
    $('#guestUserPage').css('display','none');
    $('#homePage').css('display','block');
    $('#driverPage').css('display','none');
});
$('#btn-driverschedule').click(function () {
    $('#driverSchedule').css('display','block');
    $('#drivereditdetails').css('display','none');
});
$('#btn-editDriverLoginDetails').click(function () {
    $('#drivereditdetails').css('display','block');
    $('#driverSchedule').css('display','none');
});
//////// driver nav ends ////////////////////////////////////////


//dan check kkaranna balanna not working sir
