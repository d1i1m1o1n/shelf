$(document).ready(function() {
    $('.catalog a').on({
        click : function(e) {
            e.preventDefault();
            var $ul = $(this).closest('li').find('ul').html();
            //Если нет вложенного списка, то перегодим по ссылке, иначе раскрываем вложенный список
            if ($ul == null) {
                //console.log('переход в '+$(this).attr('href'));
            } else {
                var $li = $(this).closest('li');
                //если не является активным
                if (!$($li).hasClass('active')) {
                    //
                    if (!$($li).parents('li').hasClass('active')) {
                        $('.catalog li').removeClass('active').find('ul').slideUp();
                    }
                    $($li).addClass('active').find('ul:eq(0)').slideDown();
                }
            }
        }
    });
});