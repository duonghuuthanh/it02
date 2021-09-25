$(document).ready(function() {
    $("div.items > div.item:nth-child(even)").addClass("wow animate__slideInLeft")
    $("div.items > div.item:nth-child(odd)").addClass("wow animate__slideInRight")
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

    

    $("div.images figure").addClass("c4-izmir c4-border-cc-3 c4-image-zoom-out c4-gradient-bottom-rightc4-izmir c4-border-right c4-image-pan-left c4-gradient-top wow animate__flipInY")
    $("div.images figure > figcaption").addClass("c4-layout-top-right")

    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animate__animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
          }
      )
      wow.init();
})