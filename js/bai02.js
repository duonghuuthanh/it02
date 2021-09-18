$(document).ready(function() {
    $("div.items > div.item:nth-child(even)").addClass("animate__animated animate__slideInLeft")
    $("div.items > div.item:nth-child(odd)").addClass("animate__animated animate__slideInRight")
    $("#btnAdd").click(function() {
       var content = $("#txtContent").val() 
       var date = $("#txtDate").val()

       $("div.items").prepend(`
       <div class="item active">
           <div class="col5">
               <img src="images/lab02/calendar2.png" alt="calendar" />
           </div>
           <div class="col70">
               ${content}
           </div>
           <div class="col15">
              ${date}
           </div>
           <div class="col10">
               <input type="button" value="Xoa" />
           </div>
       </div>
       `)

       $("#txtContent").val("") 
       $("#txtDate").val("")

       setTimeout(function() {
           $("div.item").removeClass('active')
       }, 2000);
    })

    $("div.items").on("click", "div.item input[type=button]", function() {
        if (confirm("Chac chan xoa khong?") == true)
            $(this).parent().parent().remove()
    })
})