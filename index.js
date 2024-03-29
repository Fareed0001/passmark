// CAROUSEL START 
(function (e) {
    e.fn.circle = function (t) {
        var n = e.extend({
            speed: "5000"
        }, t);
        return this.each(function () {
            function t() {
                var e = i.find("li.block.active").index();
                c.removeClass("active"), c.eq(e).addClass("active")
            }

            function o() {
                var n;
                i.addClass("disable-hover"), i.stop(!0, !0).animate({
                    rotatedeg: p.deg += p.step
                }, {
                    duration: 400,
                    step: function (t) {
                        t >= 360 ? t -= 360 : t <= -360 && (t += 360), e(this).css("transform", "rotate(" + t + "deg)"), e(this).css("-webkit-transform", "rotate(" + t + "deg)")
                    },
                    complete: function () {
                        p.active = i.find("li.active").removeClass("active"), "right" == p.direction && p.step == d && (p.active.prev() && p.active.prev().length ? (n = p.active.prev().index(), p.active.prev().addClass("active")) : (p.active.siblings(":last-child").addClass("active"), n = 9)), "left" == p.direction && p.step == u && (p.active.next() && p.active.next().length ? (n = p.active.next().index(), p.active.next().addClass("active")) : (p.active.siblings(":first-child").addClass("active"), n = 0)), i.is(":animated"), i.removeClass("disable-hover"), t()
                    }
                }, "ease")
            }

            function r() {
                i.addClass("disable-hover"),
                    i.stop(!0, !0).animate(
                        {
                            rotatedeg: p.deg += p.step
                        },
                        {
                            duration: 400,
                            step: function (t) {
                                t >= 360 ? t -= 360 : t <= -360 && (t += 360),
                                    e(this).css("transform", "rotate(" + t + "deg)"),
                                    e(this).css("-webkit-transform", "rotate(" + t + "deg)")
                            },
                            complete: function () {
                                p.active = i.find("li.active"),
                                    i.is(":animated"),
                                    i.removeClass("disable-hover")
                            }
                        }, "ease")
            }
            var i = e(this),
                s = i.find("li").length,
                a = i.find(" > li .sixth-div-img-div"),
                l = "count" + s,
                u = 0,
                c = i.next().find(".animate"),
                p = {
                    duration: n.speed,
                    deg: 0,
                    step: u,
                    active: i.find("li.active"),
                    direction: "left"
                };
            switch (s) {
                case 10:
                    u = -36;
                    break;
                case 9:
                    u = -40;
                    break;
                case 8:
                    u = -45;
                    break;
                case 7:
                    u = -51.5;
                    break;
                case 6:
                    u = -60;
                    break;
                case 5:
                    u = -72;
                    break;
                case 4:
                    u = -90;
                    break;
                case 3:
                    u = -120;
                    break;
                case 2:
                    u = -180;
                    break;
                case 1:
                    u = -360
            }
            i.addClass(l);
            var d = u - 2 * u;
            i.find("> li").first().addClass("active"),
                i.find("> li").first().find("a").attr("href"),
                c.eq(0).addClass("active"),
                e(a).on("click", function () {
                    var n = e(this).parent().index() - i.find("li.active").index();
                    i.children("li").removeClass("active"),
                        e(this).parent().addClass("active"),
                        p.step = -n * d, n * d >= 288 && (p.step = -n * d + 360),
                        n * d <= -288 && (p.step = -n * d - 360),
                        r(), p.step = u, p.direction = "left", t()
                });
            var f = i.parent().find("div.next"),
                h = i.parent().find("div.prev");
            f.on("click", function () {
                i.is(":animated") || (p.direction = "left", p.step = u, o())
            }), h.on("click", function () {
                i.is(":animated") || (p.direction = "right", p.step = d, o())
            })
        })
    }
}(jQuery));
$(function () {
    //Background image
    $('div').each(function () {
        var url = $(this).attr('data-image');
        if (url) {
            $(this).css('background-image', 'url(' + url + ')');
        }
    });
    $('section').each(function () {
        var url = $(this).attr('data-image');
        if (url) {
            $(this).css('background-image', 'url(' + url + ')');
        }
    });
    function autoHeightCircle() {
        var circle = $('.circle--rotate'),
            circleInner = $('.animate-wrapper'),
            circleH = circle.width(),
            circleInnerH = circleInner.width();
        circle.height(circleH);
        circleInner.height(circleInnerH);
    }
    $("#circle--rotate").circle();
    autoHeightCircle();
    $(window).resize(function () {
        autoHeightCircle();
    });
});
// CAROUSEL END 

// DASHBOARD START 
// PHONE SIDE BAR START
$(".open-sidebar").on("click", function () {
    if ($(".open-sidebar").hasClass("fa-bars") == true) {
        $(".sidebar-components").css({ "width": "45%", "padding": "2% 6%" });
        $(".open-sidebar").removeClass("fa-bars").addClass("fa-xmark");
        $(".container-fluid.body-content").addClass("deemed-brightness");
    }
    else {
        $(".sidebar-components").css({ "width": "0", "padding": "0" });
        $(".open-sidebar").removeClass("fa-xmark").addClass("fa-bars");
    }
});

$(".container-fluid.body-content").click(function () {
    $(".sidebar-components").css({ "width": "0", "padding": "0" });
    $(".open-sidebar").removeClass("fa-xmark").addClass("fa-bars");
});
// PHONE SIDE BAR END
// DASHBOARD END 

// CLASS START 
$(".class-video-list-div").slideUp();
$(".class-next-video").on("click", function () {
    let classNextId = $(this).attr("id").slice(-1);
    let classNextList = "#classList" + classNextId;
    $(classNextList).slideToggle();
});

$(".class-video-list-text").each(function () {
    if ($(this).text().length > 25) {
        $(this).text($(this).text().substr(0, 25) + "...");
    }
});

// CLASS END 


// COURSES START
$(".courses-card-text").slideUp();
$(".courses-details-text").on("click", function () {
    $(this).closest(".courses-card").find(".courses-card-text").slideToggle();
});
//COURSES END 



//SETTINGS START

$(".settings-delete-button").on("click", function () {
    confirm("Are you sure you want to permanently delete your account?");
});

//SETTINGS END


//INSTRUCTOR START 
$(".instructor-video-list-div").slideUp();
$(".instructor-view-classes").on("click", function () {
    $(this).closest(".instructor-card").find(".instructor-video-list-div").slideToggle();
});

$(".instructor-video-list").each(function () {
    if ($(this).text().length > 30) {
        $(this).text($(this).text().substr(0, 30) + "...");
    }
});
//INSTRUCTOR END 














// MEDIA QUERY START
if (window.matchMedia('(max-width: 600px)').matches) {
    $(".first-div-col0, .seventh-div-col0").addClass("order-2");




//INSTRUCTOR START 
// $(".instructor-video-list").each(function () {
//     if ($(this).text().length > 0) {
//         $(this).text($(this).text().substr(0, 50) + "...");
//     }
// });

//INSTRUCTOR END 
}
//MEDIA QUERY END 
