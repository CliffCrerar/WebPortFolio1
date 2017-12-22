$(document).ready(function() {
    var cleave = new Cleave('#telInput', {
        phone: true,
        phoneRegionCode: 'za',
    });

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
});