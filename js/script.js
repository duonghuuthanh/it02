function search() {
    var kw = document.getElementById("txtSearch")
    if (kw != null) {
        if (kw.value === "") {
            kw.style.border = "5px solid green"

            setTimeout(function() {
                kw.style.border = "none"
            }, 1000)
        } else {
            var items = document.querySelectorAll("div.item")
            for (var i = 0; i < items.length; i++) {
                if (items[i].getElementsByTagName("h1")[0].innerText.indexOf(kw.value) >= 0)
                    items[i].style.border = "2px dashed red"
            }

            setTimeout(function() {
                for (var i = 0; i < items.length; i++) {
                    items[i].style.border = "none"
                }
            }, 2000)
        }  
    }
}

$(document).ready(function() {
    $("#btnSearch").click(function() {
        var kw = $("#txtSearch").val()
        $(`div.item h1:contains(${kw})`).parent().parent().css("border", "2px dashed red")

        setTimeout(function() {
            $("div.item").css("border", "none")
        }, 2000);
    })

    $("ul.menu a").click(function() {
        var h = $(this).attr('href')
        var t = $(h).prop("offsetTop")

        $("html, body").animate({
            scrollTop: t
        }, 2000)
    })

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 92) {
            $("nav").css({
                "position": "fixed",
                "left": 0,
                "right": 0,
                "top": 0,
                "z-index": 999,
                "opacity": 0.6
            })
        } else {
            $("nav").css({
                "position": "relative",
                "opacity": 1
            })
        }
    })
})