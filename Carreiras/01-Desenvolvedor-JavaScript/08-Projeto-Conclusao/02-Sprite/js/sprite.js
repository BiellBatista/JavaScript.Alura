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

    function nextFrame() {
        moveFrame(frames[current], frames[++current]);
    }

    return {
        nextFrame: nextFrame
    }
}
