// Check off todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
})
// Click X to remove todo
$("ul").on("click" , "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove()
    });
    event.stopPropagation();
})
$("input[type='text'").keypress(function (e) {
    if (e.which === 13) {
        var todoText = $(this).val()
        var todoTextFixed = todoText.replace(/(<([^>]+)>)/ig, "");
        $(this).val(" ");
        $("ul").append("<li><span><i class=`far fa-trash-alt`></i></span> " + todoTextFixed + "</li>")
    }
})
$("h1 .fa-plus").click(function(){
    $("input[type='text"). fadeToggle();
})