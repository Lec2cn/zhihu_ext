  // -----------------------------------------------
  // 知乎界面改造计划 - By Leckie.
  // 遵循GPL开源协议
  // 欢迎大家积极贡献项目
  // 项目地址: https://github.com/Lec2cn/zhihu_ext
  // SF博客地址: http://blog.segmentfault.com/leckie
  // -----------------------------------------------

  // -----------------------------------------------
  // 更新日志
  // 2014-03-16 增加[隐藏已赞答案]功能
  // -----------------------------------------------


  // Main
  var top_nav = $("div.zu-top");
  var top_nav_profile = $("div.top-nav-profile");
  var top_nav_userinfo = top_nav_profile.children(0);
  var top_logo = $("#zh-top-link-logo");
  var timeline_border = $("div.feed-item div.feed-item");
  var timeline_card = $("div.feed-item-inner");
  var top_nav_list = $("ul.zu-top-nav-ul")[0];

  // Question Page
  var question_ans_title = $("div.zh-answers-title").children(0);
  var sort_by_nolike = document.createElement("div");
  sort_by_nolike.setAttribute("class","answers-sorter-new");
  sort_by_nolike.id = "ext_sort_nolike";
  sort_by_nolike.innerHTML = '隐藏已赞同答案 <i class="zg-icon zg-icon-sidenav-publicedit"></i>';
  $(question_ans_title).append(sort_by_nolike);
  $(document).on("click", "#ext_sort_nolike" , hide_like_answer());

  function hide_like_answer(){
    return function(){
      $(this).attr("style","background-color: #086ed5;color: #fff;");
      $("div.zm-item-answer").each(function(){
        // console.log($(this).find(".pressed"));
        if($(this).find(".pressed").length == 1){
            $(this).remove();
        }
      });
    }
  }


  var new_userinfo_data = top_nav_userinfo.children(0);
  var new_userinfo = document.createElement("div");
  new_userinfo.setAttribute("class","top-nav-userinfo");
  new_userinfo.id = "ext_top-nav-userinfo";
  new_userinfo.innerHTML = "<span>" + new_userinfo_data[0].innerHTML + "</span> <img src='"+new_userinfo_data[1].src+"'>";


  top_nav.removeClass();
  top_nav_profile.removeClass();
  top_logo.removeClass();
  timeline_card.removeClass();
  top_nav_userinfo.remove();


  top_nav.attr("class","zu-top-new");
  top_nav_profile.attr("class","top-nav-profile");
  timeline_border.attr("class",".feed-item");
  top_logo.attr("class","top-link-logo");
  timeline_card.attr("class","new-feed-item-inner");

   $(top_nav_list).append($("<li class='zu-top-nav-li'><a class='zu-top-nav-link' href='/inbox'>私信</a></li>"));
   $(top_nav_list).append($("<li class='zu-top-nav-li'><a class='zu-top-nav-link' href='/settings'>设置</a></li>"));
   $(top_nav_list).append($("<li class='zu-top-nav-li'><a class='zu-top-nav-link' href='/logout'>退出</a></li>"));


  $(document).on("click", "#ext_top-nav-userinfo" , jumptoself(top_nav_userinfo[0].href));
  
  top_nav_profile.append(new_userinfo);


  function jumptoself(href){
    return function(){
      window.location.href = href;
    }
  }


  $(document).bind("scroll" , function(){
    $("div.feed-item-inner").attr("class","new-feed-item-inner");
    $("div.feed-item div.feed-item").attr("class",".feed-item");
  });


