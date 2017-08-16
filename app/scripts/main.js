'use strict';

$(document).ready(function() {
    $.datepicker.regional.ru = {
        closeText: "Закрыть",
        prevText: "&#x3C;Пред",
        nextText: "След&#x3E;",
        currentText: "Сегодня",
        monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
            "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
        monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
            "Июл","Авг","Сен","Окт","Ноя","Дек" ],
        dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
        dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
        dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
        weekHeader: "Нед",
        dateFormat: "dd.mm.yy",
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: "" };
    $.datepicker.setDefaults( $.datepicker.regional.ru );

    $( "#header_entry_date_picker" ).datepicker({
        beforeShow: function(input, inst) {
            $('#header_entry_date_picker').removeClass(function() {
                return $('input').get(0).id;
            });
            $('#ui-datepicker-div').addClass(this.id);
            $('#ui-datepicker-div').addClass('header_entry_date_picker');
        },
        onClose: function() {
            $('#ui-datepicker-div').removeClass('header_entry_date_picker');
        }
    });

    $( "#header_out_date_picker" ).datepicker({
        beforeShow: function(input, inst) {
            $('#header_out_date_picker').removeClass(function() {
                return $('input').get(0).id;
            });
            $('#ui-datepicker-div').addClass(this.id);
            $('#ui-datepicker-div').addClass('header_out_date_picker');
        },
        onClose: function() {
            $('#ui-datepicker-div').removeClass('header_out_date_picker');
        }
    });

    window.inputNumber = function(el, type) {

        let min = el.attr('min') || false;
        let max = el.attr('max') || false;

        let els = {};

        els.dec = el.prev();
        els.inc = el.next().next();

        el.each(function() {
            init($(this));
        });

        function init(el) {

            els.dec.on('click', decrement);
            els.inc.on('click', increment);

            function decrement($event) {
                $event.stopPropagation();
                let value = el[0].value;
                value--;
                if (type === 'adult') {
                    $('#number_count_input_preview_adult').text(value);
                }
                if (type === 'child') {
                    $('#number_count_input_preview_child').text(value);
                }
                if(!min || value >= min) {
                    el[0].value = value;
                }
            }

            function increment($event) {
                $event.stopPropagation();
                let value = el[0].value;
                value++;
                if (type === 'adult') {
                    $('#number_count_input_preview_adult').text(value);
                }
                if (type === 'child') {
                    $('#number_count_input_preview_child').text(value);
                }
                if(!max || value <= max) {
                    el[0].value = value++;
                }
            }
        }
    };
    inputNumber($('#input_number_adult'), 'adult');
    inputNumber($('#input_number_child'), 'child');

    $('#number_count_input_wrapper').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('#number_count_input_drop_down').toggleClass('opened');
    });
    $('#number_count_input_drop_down').on('click', function(e){
        e.stopPropagation();
    })
    $(window).on('click', function(e) {
        $('#number_count_input_drop_down').removeClass('opened');
    })

    let $html = $('html');
    $html.on('click.ui.dropdown', '.js-dropdown', function(e) {
        e.preventDefault();
        $(this).toggleClass('is-open');
    });
    $html.on('click.ui.dropdown', '.js-dropdown [data-dropdown-value]', function(e) {
        e.preventDefault();
        let $item = $(this);
        let $dropdown = $item.parents('.js-dropdown');
        $dropdown.find('.js-dropdown__input').val($item.data('dropdown-value'));
        $dropdown.find('.js-dropdown__current').text($item.text());
    });
    $html.on('click.ui.dropdown', function(e) {
        let $target = $(e.target);
        if (!$target.parents().hasClass('js-dropdown')) {
            $('.js-dropdown').removeClass('is-open');
        }
    });


    var html5Slider = document.getElementById('html5slider');
    noUiSlider.create(html5Slider, {
        start: [ 10000, 50000 ],
        connect: true,
        range: {
            'min': 0,
            'max': 100000
        }
    });
    var rangeNumberTo = document.getElementById('range_number_to');
    var rangeNumberFrom = document.getElementById('range_number_from');

    html5Slider.noUiSlider.on('update', function( values, handle ) {

        var value = values[handle];

        if ( handle ) {
            rangeNumberTo.value = value;
        } else {
            rangeNumberFrom.value = Math.round(value);
        }
    });

    rangeNumberFrom.addEventListener('change', function(){
        html5Slider.noUiSlider.set([this.value, null]);
    });

    rangeNumberTo.addEventListener('change', function(){
        html5Slider.noUiSlider.set([null, this.value]);
    });

});
