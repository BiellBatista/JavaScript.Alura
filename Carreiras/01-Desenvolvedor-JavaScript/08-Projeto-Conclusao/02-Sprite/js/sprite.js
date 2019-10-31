function createSprite(selector) {
    // toda variável que amarzena um objeto do jQuery, devo iniciar com um $
    let $el = $(selector);
    let frames = [
        'frame1',
        'frame2',
        'frame3',
        'frame4',
        'frame5',
        'frame6',
        'frame7',
        'frame8',
        'frame9'
    ];
    let current = 0;
    let last = frames.length - 1;

    $el.addClass(frames[current]);

    function moveFrame(from, to) {
        $el.removeClass(from)
        .addClass(to);
    }

    function hasNext() {
        return current + 1 <= last;
    }

    function nextFrame() {
        if(hasNext()) {
            moveFrame(frames[current], frames[++current]);
        }
    }

    return {
        nextFrame: nextFrame
    }
}

/**
 * Closure: é a capacidade de uma função saber suas propriedades, mesmo após a destruição da função pai
 * Encapsulamento de informações, função chamando função
 * 
 * Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
 */
