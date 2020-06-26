//select all li inside the ul
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
//select all span inside the ul
$("ul").on("click","span" , function(event){
    $(this).parent().fadeOut("4000",function(){
        $(this).remove()
    });
});
//ent er new input
$("input[type='text']").keypress(function(event){
    //check for enter key
    if(event.which === 13){
        //greb the values
       var textInput = $(this).val();
       $(this).val("");
        //add values in to-do
       $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + textInput + "</li>");
    }
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})