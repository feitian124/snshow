// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .


//highlight the icon when hovering

$(document).ready(function(){
    $(".sina_g").hover(
        function() {$(this).attr("src","/assets/sina_h.png");},
        function() {$(this).attr("src","/assets/sina_g.png");
    });
});

$(document).ready(function(){
    $(".qq_g").hover(
        function() {$(this).attr("src","/assets/qq_h.png");},
        function() {$(this).attr("src","/assets/qq_g.png");
    });
});

$(document).ready(function(){
    $(".qqc_g").hover(
        function() {$(this).attr("src","/assets/qqc_h.png");},
        function() {$(this).attr("src","/assets/qqc_g.png");
    });
});

$(document).ready(function(){
    $(".sc_g").hover(
        function() {$(this).attr("src","/assets/sc_h.png");},
        function() {$(this).attr("src","/assets/sc_g.png");
    });
});


//Text area placeholder
var  saying= '千万别迷恋网络游戏，有本事就玩好人生这场大游戏。';

