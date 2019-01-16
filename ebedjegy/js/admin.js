var g_offset = 0;
var g_dayNum = 0;
var g_actCode = "00000000";
var g_currYear = "";
var g_currMonth ="";

$(document).ready( function() {
    let today=new Date();
    g_currYear=today.getFullYear();
    g_currMonth=today.getMonth();
    $("#ev").prop("value",g_currYear);        
    $("#honap").prop("value",g_currMonth+1);    
    renderMonth();
    $("#ev").change(dateChanged);
    $("#honap").change(dateChanged);
    $("[id^=day]").click(dateClick);   
    $('#codeform').submit(codeChange);
    $('#defload').click(defLoad);

});

function initMonth() {
    $("[id^=day]").each(function () {
        this.innerHTML="";
        if ($(this).hasClass("dayset")) {
            $(this).removeClass("dayset");
        }
        if ($(this).hasClass("daydef")) {
            $(this).removeClass("daydef");
        }

    });
} 

function renderMonth() {
    initMonth();
    let fd = new Date(g_currYear,g_currMonth,1);
    let g_dayNum = (new Date(g_currYear,g_currMonth+1,0)).getDate();
    g_offset = (fd.getDay()+6)%7;
    for (i=1;i<=g_dayNum;i++) {
        $('#day'+(i+g_offset)).text(i);
        if (checkDate(i)) {
            $('#day'+(i+g_offset)).addClass('dayset');
        }
        if (checkDate(i,'00000000')) {
            $('#day'+(i+g_offset)).addClass('daydef');
        }

    }
}

function dateChanged() {
    g_currYear = $("#ev").prop("value");
    g_currMonth = $("#honap").prop("value")-1;
    renderMonth();
}

function codeChange(e) {
    g_actCode = $('#usercode').val();
    $('#actcode').text(g_actCode);
    if (g_actCode=="00000000") {
        $("#defload").prop('disabled',true);
    } else {
        $("#defload").prop('disabled',false);
    }
    renderMonth();
    e.preventDefault();
}    

function dateClick() {
    if ($(this).hasClass("dayset")) {
        $(this).removeClass("dayset");
        deleteDate($(this).text());
    } else {
        $(this).addClass("dayset");   
        storeDate($(this).text());
    };
    renderMonth();
}

function storeDate(day) {
    let key=g_actCode+"_"+g_currYear+n2s(g_currMonth+1)+n2s(day);
    localStorage.setItem(key,"N/A")
}

function deleteDate(day) {
    let key=g_actCode+"_"+g_currYear+n2s(g_currMonth+1)+n2s(day);
    localStorage.removeItem(key);
}

function checkDate(day, code = g_actCode) {
    let key=code+"_"+g_currYear+n2s(g_currMonth+1)+n2s(day);
    if (localStorage.getItem(key)!=null) {
        return true;
    } else {
        return false;
    }
}

function n2s (m) { //Month or day to fixed 2 char string 
    let mt=m.toString();
    let ms=mt.padStart(2,'0');
    return ms;
}

function defLoad() {
    for (i=0;i<32;i++) {
        if (checkDate(i,'00000000')) {
            storeDate(i);
        };
   }
   renderMonth();
}