$( document ).ready(function() {

    var session = 25;
    var brk = 5;
    var sesTime = session;
    var breakTime = brk;
    var secunde = 0;
    $("#session").text(session);
    $("#break").text(brk);

    $("#ses-minus").click(function () {
        var attr = $("#ses-minus").attr('disabled')
        console.log(attr);
        if (session>1){
          session --;
          $("#session").text(session);
        }
    });
    $("#ses-plus").click(function () {

        if (session<120){
          session ++;
          $("#session").text(session);
        }
    });
    $("#break-plus").click(function () {

        if (brk<120){
          brk ++;
          $("#break").text(brk);
        }
    });
    $("#break-minus").click(function () {

        if (brk>1){
          brk --;
          $("#break").text(brk);
        }
    });
    var saMearga = false;
    $("#start").click(function () {
       sesTime = session;
       breakTime = brk;
        var textInside = $("#start").text();
        if(textInside =="START"){
          $("#start").html("<h2><b>STOP</b></h2>");
            interval =  window.setInterval(function(){
                if (sesTime >0){
                  sesTimer();
                }else {
                  //func de break;
                }

            }, 1000);
        }else{
          $("#start").html("<h2><b>START</b></h2>");
          clearInterval(interval);
          secunde = 0;
        }
    });




    function sesTimer() {
        $("#text-incurajare").html("<b>WORK!</b>");
        showTime(sesTime);
        if(secunde!=0){
          secunde--;
        }else{
          secunde = 60;
          sesTime--;
        }
    }
    function showTime(time) {
      $("#time").html("<b>"+time+":"+secunde+"</b>")
    }
});
