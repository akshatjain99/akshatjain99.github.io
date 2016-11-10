$(function() {

    //Changing the active item in the main menu and sidebar
    //var rel = $('body[rel]').attr('rel');
    //$('.main.menu a:eq(' + rel + ') , #side a:eq(' + rel + ')').addClass('active');

    //$('.masthead')
    //     .visibility({
    //         once: false,
    //       onBottomPassed: function() {
    //             $('.main.menu').transition('fade in');
    //        },
    //         onBottomPassedReverse: function() {
    //             $('.main.menu').transition('fade out');
    //         }
    //     });

     //create sidebar and attach to menu open
    //$('.ui.sidebar')
    //    .sidebar('attach events', '.sidebar-icon');

    $('#m_btn').on('click',function(){
        $('#side').sidebar('toggle');
    });
});
