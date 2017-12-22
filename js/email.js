$(document).ready(function() {
    var cleave = new Cleave('#telInput', {
        phone: true,
        phoneRegionCode: 'za',
    });

    //Configure call time dropdown
    var today = new Date();
    var yeaR = today.getFullYear();
    var montH = today.getMonth();
    var daY = today.getDay();
    var houR = today.getHours();
    var minutE = today.getMinutes();

    var StartDate = yeaR + '-' + montH + '-' + daY + ' ' + houR + ':' + minutE;

    $('.form_datetime').datetimepicker({
        //language:  'fr',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1,
        startdate: StartDate,
        pickerPosition: 'top-left',
    });

    /****Tooltips****/
    //First name
    $('[name="nameInput"]').attr('data-toggle', 'tooltip');
    $('[name="nameInput"]').attr('title', 'Enter first-name');
    //Last name
    $('[name="surnameInput"]').attr('data-toggle', 'tooltip');
    $('[name="surnameInput"]').attr('title', 'Enter Last-name');
    //Email
    $('[name="emailInput"]').attr('data-toggle', 'tooltip');
    $('[name="emailInput"]').attr('title', 'Enter the email address where I can reach you.');
    //Email
    $('[name="telInput"]').attr('data-toggle', 'tooltip');
    $('[name="telInput"]').attr('title', 'Remember this is not compulsory');
    //Comment
    $('[name="commentInput"]').attr('data-toggle', 'tooltip');
    $('[name="telIcommentInputnput"]').attr('title', 'Constructive critisism is welcome');

    $('.form-control').tooltip({ delay: { show: 1000, hide: 500 } });
});