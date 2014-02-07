
  var top_nav = $("div.zu-top");
  var top_nav_profile = $("div.top-nav-profile");
  var top_nav_userinfo = top_nav_profile.children(0);
  var top_logo = $("#zh-top-link-logo");
  var timeline_border = $("div.feed-item div.feed-item");
  var timeline_card = $("div.feed-item-inner");
  var top_nav_list = $("ul.zu-top-nav-ul")[0];


  var new_userinfo_data = top_nav_userinfo.children(0);
  var new_setting_list = top_nav_userinfo.children(1);

  var new_userinfo = document.createElement("div");
  // var new_setting_list_div = $("<div></div>");

  new_userinfo.setAttribute("class","top-nav-userinfo");
  // new_setting_list_div.attr("class","top-nav-list");

  new_userinfo.id = "ext_top-nav-userinfo";
  // new_setting_list_div.id = "top-nav-list";
  new_userinfo.innerHTML = "<span>" + new_userinfo_data[0].innerHTML + "</span> <img src='"+new_userinfo_data[1].src+"'>";
  // new_setting_list_div.html("<ul id='navlist-ul'></ul>");

  top_nav.removeClass();
  top_nav_profile.removeClass();
  top_logo.removeClass();
  timeline_card.removeClass();
  top_nav_userinfo.remove();


  top_nav.attr("class","zu-top-new");
  top_nav_profile.attr("class","top-nav-profile");
  top_nav_profile.attr("id","ext-top-nav-profile");
  timeline_border.attr("class",".feed-item");
  top_logo.attr("class","top-link-logo");
  timeline_card.attr("class","new-feed-item-inner");


  $(document).on("click", "#ext_top-nav-userinfo" , jumptoself(top_nav_userinfo[0].href));
  top_nav_profile.append(new_userinfo);

  // $( "#ext-top-nav-profile" ).hover(
  //   function() {
  //     $("#ext-exit-btn").css({display: "block"});
  //     // $("#ext-top-nav-profile").css({display: "none"});
  //   }, function() {
  //     // $("#ext-exit-btn").css({display: "none"});
  //     // $("#ext-top-nav-profile").css({display: "block"});
  //   }
  // );


  $(top_nav_list).append($("<li class='zu-top-nav-li'><a class='zu-top-nav-link' href='/inbox'>私信</a></li>"));
  $(top_nav_list).append($("<li class='zu-top-nav-li'><a class='zu-top-nav-link' href='/settings'>设置</a></li>"));
  $(top_nav_list).append($("<li class='zu-top-nav-li'><a class='zu-top-nav-link' href='/logout'>退出</a></li>"));
  // $(top_nav).append($("<div id='ext-exit-btn' class='ext-exit-btn'>退出</div>"));
  // $("#ext-exit-btn").css({width: $(top_nav_profile).width() });


  function jumptoself(href){
    return function(){
      window.location.href = href;
    }
  }


  $(document).bind("scroll" , function(){
    $("div.feed-item-inner").attr("class","new-feed-item-inner");
    $("div.feed-item div.feed-item").attr("class",".feed-item");
  });


  // console.log($("a.toggle-expand"));
  // $(document).on("click", "a.toggle-expand" , rich_text());
  

  // function rich_text(){
  //   return function(){
  //     console.log("123");
  //   }
  // }

