// add user
$("#btn-user-register").click(function () {
    let id= $("#uid").val();
    let idcopy = $("#Uidcopy").val();
    let lisenceno = $("#UlisenceNo").val();
    let lisencecopy= $("#Ulisencecopy").val();
    let name = $("#uname").val();
    let contact = $("#ucontact").val();
    let email = $("#uemail").val();
    let username = $("#uusername").val();
    let password = $("#upassword").val();
    let conpass = $("#uconpassword").val();
    if((id!="")&(idcopy!="")&(name!="")&(lisenceno!="")&(lisencecopy!="")&(contact!="")&(email!="")&(username!="")&(password!="")&(conpass!="")){
        if(conpass==password){
            $.ajax({
                method: "post",
                url: "http://localhost:8080/EasyCar/User",
                contentType: "application/json",
                data: JSON.stringify({
                    "id": id,
                    "idcopy": idcopy,
                    "lisenceno": lisenceno,
                    "lisencecopy": lisencecopy,
                    "name": name,
                    "contact":contact,
                    "email":email,
                    "username":username,
                    "password":password
                }),
                success: function (res) {
                    if (res.message == "Success") {
                        alert("User Registered");
                        clear();
                    } else {
                        alert("User Register Failed");
                        clear();
                    }
                }
            });
        }else{
            alert("passwords dont match");
        }
    }else{
        alert("missing feilds");
    }
});
/// load user table
$('#btn-usermanage').click(function () {
    loadAllCustomer();
})
function loadAllCustomer() {
    $("#tblUser").empty();
    $.ajax({
        url: "http://localhost:8080/EasyCar/User",
        dataType: 'json',
        success: function (res) {
            let data = res.data;
            for (var i in data) {
                let id = data[i].id;
                let lisenceno = data[i].lisenceno;
                let name =data[i].name;
                let contact = data[i].contact;
                let email = data[i].email;
                let username = data[i].username;

                var row = `<tr><td>${id}</td><td>${lisenceno}</td><td>${name}</td>
                            <td>${contact}</td><td>${email}</td><td>${username}</td></tr>`;
                $("#tblUser").append(row);

            }
        }
    });
}
function clear() {
     $("#uid").val(null);
     $("#Uidcopy").val(null);
     $("#UlisenceNo").val(null);
     $("#Ulisencecopy").val(null);
     $("#uname").val(null);
     $("#ucontact").val(null);
     $("#uemail").val(null);
     $("#uusername").val(null);
     $("#upassword").val(null);
     $("#uconpassword").val(null);
}
// update user
$("#btn-user-update").click(function () {
    let id= $("#settingsuid").val();
    let idcopy = $("#settingsidcopy").val();
    let lisenceno = $("#settingslisence").val();
    let lisencecopy= $("#settingslisencecopy").val();
    let name = $("#settingsuname").val();
    let contact = $("#settingsucontact").val();
    let email = $("#settingsuemail").val();
    let username = $("#settingsuusername").val();
    let oldpass = $("#settingsuoldpass").val();
    let newpass = $("#settingsunewpass").val();
    let conpass = $("#settingsuconpass").val();

    if((id!="")&(idcopy!="")&(name!="")&(lisenceno!="")&(lisencecopy!="")&(contact!="")&(email!="")&(username!="")&(oldpass!="")&(newpass!="")&(conpass!="")){
        $.ajax({
            url: "http://localhost:8080/EasyCar/User/?id="+id+"&password="+oldpass,
            success: function (res) {
                let data=res.data;
                if(data.id==undefined){
                    alert("Old Password Or User Id Incorrect");
                }else{
                    if(newpass==conpass){
                        update();
                    }else{
                        alert("passwords dont match");
                    }
                }
            }
        });
    }else{
        alert("Missing Feilds");
    }
function update(){
    $.ajax({
        method: "put",
        url: "http://localhost:8080/EasyCar/User",
        contentType: "application/json",
        data: JSON.stringify({
            "id": id,
            "idcopy": idcopy,
            "lisenceno": lisenceno,
            "lisencecopy": lisencecopy,
            "name": name,
            "contact":contact,
            "email":email,
            "username":username,
            "password":newpass
        }),
        success: function (res) {
            if (res.message == "Success") {
                alert(" Updated");
            } else {
                alert("Update Failed"+res.data);
            }
        }
    });
}
});
$("#btn-user-delete").click(function (){
    let id= $("#settingsuid").val();
    $.ajax({
        method:"delete",
        url:"http://localhost:8080/EasyCar/User?id="+id,
        success:function (res){
            if (res.message == "Success") {
                alert("User Removed..!");
            } else {
                alert(res.data);
            }
            clear();
        }
    });
});
//////////////////////////////////////////////////////////////
//search User by nic no
$("#btn-searchUser").click('keypress', function () {
        let id = $("#userid").val();
    let lisenceno = $("#userlisence").val();
    if(id!=null){
        byid();
    }else{
        if(lisenceno!=null){
            bylisence();
        }else{
            alert("enter lisence no or id no to search")
        }
    }


});
function byid(){
    let id = $("#userid").val();
    $.ajax({
        url: "http://localhost:8080/EasyCar/User/" + id,
        success: function (res) {

            let data=res.data;
            if(data.id==undefined){
                alert("Enter correct id to search");
                loadAllCustomer();
            }else{
                let nic = data.id;
                let lisenceno = data.lisenceno;
                let name = data.name;
                let contact =data.contact;
                let email = data.email;
                let username = data.username;

                var row = `<tr><td>${nic}</td><td>${lisenceno}</td><td>${name}</td><td>${contact}</td>
                            <td>${email}</td><td>${username}</td></tr>`;
                $("#tblUser").empty();
                $("#tblUser").append(row);
            }
        }
    });
}
function bylisence() {
    let lisence = $("#userlisence").val();
    $.ajax({
        url: "http://localhost:8080/EasyCar/User/" + lisence,
        success: function (res) {

            let data=res.data;
            if(data.lisenceno==undefined){
                alert("Enter correct lisence to search");
                loadAllCustomer();
            }else{
                let nic = data.id;
                let lisenceno = data.lisenceno;
                let name = data.name;
                let contact =data.contact;
                let email = data.email;
                let username = data.username;

                var row = `<tr><td>${nic}</td><td>${lisenceno}</td><td>${name}</td><td>${contact}</td>
                            <td>${email}</td><td>${username}</td></tr>`;
                $("#tblUser").empty();
                $("#tblUser").append(row);
            }
        }
    });
}
$('#btn-loadUsers').click(function () {
   loadAllCustomer();
});