import { v4 as uuidv4 } from 'uuid';

import {
    Modal
} from 'bootstrap'

export function UseDiceRollerService () {

    var uuid = uuidv4(),
        modalId = uuidv4()
    
    
    var canvas = $('#canvas')

    canvas.append(`
    <div id="${modalId}" class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div id="${uuid}">
                    </div>
                </div>
            </div>
        </div>
    </div>
    `)
    
    canvas = $(`#${uuid}`)[0]

    var modal = new Modal( $(`#${modalId}`)[0] )
    modal.show()
    $(`#${modalId}`).draggable({
        handle: ".modal-body"
    }); 
 
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    $t.dice.use_true_random = false;

    var box = new $t.dice.dice_box(canvas, { w: 500, h: 300 });
    box.animate_selector = false;

    $t.bind(window, 'resize', function() {
        // canvas.style.width = window.innerWidth - 1 + 'px';
        // canvas.style.height = window.innerHeight - 1 + 'px';
        // box.reinit(canvas, { w: 500, h: 300 });
    });
    
    function start_throw(diceSet, retorno){
        box.start_throw(diceSet, before_roll, retorno)

        setTimeout(() => {
          modal.hide()
          $(`#${modalId}`).remove()
        }, 20000)
    }


    function before_roll(vectors, notation, callback) {
        // info_div.style.display = 'none';
        // selector_div.style.display = 'none';
        callback();
    }

    function after_roll(notation, result) {
        // if (params.chromakey || params.noresult) return;
        var res = result.join(' ');
        if (notation.constant) {
            if (notation.constant > 0) res += ' +' + notation.constant;
            else res += ' -' + Math.abs(notation.constant);
        }
        if (result.length >= 1) res += ' = ' + 
                (result.reduce(function(s, a) { return s + a; }) + notation.constant);
        return res;
        // info_div.style.display = 'inline-block';
    }

    // box.bind_throw('5d6', before_roll, after_roll);

    // if (params.notation) {
    //     set.value = params.notation;
    // }
    // if (params.roll) {
    //     $t.raise_event($t.id('throw'), 'mouseup');
    // }
    // else {
    //     show_selector();
    // }

    return{
        box,
        before_roll,
        after_roll,
        canvas,
        start_throw
    }
    
}
