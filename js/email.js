$(document).ready(function() {
    var cleave = new Cleave("#telInput", {
        phone: true,
        phoneRegionCode: "za"
    });

    //Configure call time dropdown
    var today = new Date();
    var yeaR = today.getFullYear();
    var montH = today.getMonth();
    var daY = today.getDay();
    var houR = today.getHours();
    var minutE = today.getMinutes();

    var StartDate = yeaR + "-" + montH + "-" + daY + " " + houR + ":" + minutE;

    $(".form_datetime").datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1,
        startdate: StartDate,
        pickerPosition: "top-left"
    });

    /****Tooltips****/
    //First name
    $('[name="nameInput"]').attr("data-toggle", "tooltip");
    $('[name="nameInput"]').attr("title", "Enter first-name");
    //Last name
    $('[name="surnameInput"]').attr("data-toggle", "tooltip");
    $('[name="surnameInput"]').attr("title", "Enter Last-name");
    //Email
    $('[name="emailInput"]').attr("data-toggle", "tooltip");
    $('[name="emailInput"]').attr(
        "title",
        "Enter the email address where I can reach you."
    );
    //Email
    $('[name="telInput"]').attr("data-toggle", "tooltip");
    $('[name="telInput"]').attr("title", "Remember this is not compulsory");
    //Comment
    $('[name="commentInput"]').attr("data-toggle", "tooltip");
    $('[name="telIcommentInputnput"]').attr(
        "title",
        "Constructive critisism is welcome"
    );

    $(".form-control").tooltip({ delay: { show: 1000, hide: 500 } });

    //Gather form data on click
    $("#sendMail").on("click", function(e) {
        console.log(e);

        var fName = $("#fName").val();
        var lName = $("#lName").val();
        var eMail = $("#emailRet").val();
        var telNo = $("#telInput").val();
        var cDate = $("#cDate").val();
        var comm = $("#comentInput").val();

        var msg = {
            fname: fName,
            lname: lName,
            email: eMail,
            telNo: telNo,
            cDate: cDate,
            comm: comm
        };
        //var msgHtml = fName + lName + eMail + telNo + cDate + comm;

        var ip = "172.20.10.3";
        var port = "8005";
        $.ajax({
            method: "POST",
            url: "http://" + ip + ":" + port,
            type: "text",
            //timeout: 5000,
            data: JSON.stringify(msg),
            success: function(data) {
                alert("data posted");
            },
            error: function(jqXHR, textStatus, err) {
                //show error message
                alert("text status " + textStatus + ", err " + err);
            }
        });

        console.log(fName, lName, eMail, telNo, cDate, comm);
    });
});