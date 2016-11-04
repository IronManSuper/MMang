/**
 * Created by Administrator on 2016/10/24.
 */
$(function(){
    'use strict';
    $('#toggele-btn').on('click',function(){
        var navList=$('#nav-toggle');
        var closeBtn;
        var closeId=navList.children().filter('#close-nav').attr('id');
        if(closeId==undefined){
            closeBtn=$('<div id="close-nav" class="close-btn"><i class="icon-close-btn"></i></div>').on('click',function(){
                $('#nav-toggle').slideToggle('slow');
            });
            navList.prepend(closeBtn);
        }
        $('#nav-toggle').addClass('nav-show-hide').slideToggle('slow');
    });
});