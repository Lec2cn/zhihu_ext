
  var top_nav = $("div.zu-top");
  var top_nav_profile = $("div.top-nav-profile");
  var top_nav_userinfo = top_nav_profile.children(0);
  var top_logo = $("#zh-top-link-logo");
  var timeline_border = $("div.feed-item div.feed-item");
  var timeline_card = $("div.feed-item-inner");

  var new_userinfo_data = top_nav_userinfo.children(0);
  // var user_avatar = $("div.zm-profile-header-avatar-container self").children();
  var new_userinfo = document.createElement("div");
  new_userinfo.setAttribute("class","top-nav-userinfo");
  new_userinfo.id = "ext_top-nav-userinfo";
  new_userinfo.innerHTML = "<span>" + new_userinfo_data[0].innerHTML + "</span> <img src='"+new_userinfo_data[1].src+"'>";

  top_nav.removeClass();
  top_nav_profile.removeClass();
  top_logo.removeClass();
  // timeline_border.removeClass();
  timeline_card.removeClass();
  top_nav_userinfo.remove();

  top_nav.attr("class","zu-top-new");
  top_nav_profile.attr("class","top-nav-profile");
  timeline_border.attr("class",".feed-item");
  top_logo.attr("class","top-link-logo");
  timeline_card.attr("class","new-feed-item-inner");

  $(document).on("click", "#ext_top-nav-userinfo" , jumptoself(top_nav_userinfo[0].href));
  top_nav_profile.append(new_userinfo);

  // console.log();

  function jumptoself(href){
    return function(){
      window.location.href = href;
    }
  }

  $(document).bind("scroll" , function(){
    $("div.feed-item-inner").attr("class","new-feed-item-inner");
    $("div.feed-item div.feed-item").attr("class",".feed-item");
  });