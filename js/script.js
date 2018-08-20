$(document).ready(function(){
  $("form#options").submit(function(event){

    var question1= $("input:radio[name=question1]:checked").val();
    var question2= $("input:radio[name=question2]:checked").val();
    var question3= $("input:radio[name=question3]:checked").val();
    var question4= $("input:radio[name=question4]:checked").val();
    var question5= $("input:radio[name=question5]:checked").val();
    var result= parseInt(question1)+parseInt(question2)+parseInt(question3)+parseInt(question4)+parseInt(question5);


      if(isNaN(result)=== true){
        $("#result").text("Ensure there are no blank fields!");
        $(".quiz").hide();
        $(".answer").show();
      }else{

        $("#result").text("Your score is "+result+"/50");
        $(".quiz").hide();
        $(".answer").show();
      }
  event.preventDefault();
  });
});
