$(document).ready(function () {
    $("div.dynCreated").click(function (e) {
        //console.log($(event.target).parent());
        var $this = $(event.target).parent(),
            curID = $this.attr('id'),
            cstype = $this.attr('data-cs-type');
        clearPreviousInstance();
        if (cstype === 'div') {
            //Clear any existing toolbox in present layout
            $('div.tool-box').remove();
            //Add outer container with class "tool-box"
            var $tool_box = $('<div/>', {
                class: 'tool-box'
            }).prependTo($this.parent());
            //Add handle icons to "tool-box"
            var $tool_handle = $('<a/>', {
                class: 'icon-move tools handle',
                'data-for': curID
            }).appendTo($tool_box);
            //Add delete icons to "tool-box"
            var $tool_delete = $('<a/>', {
                class: 'icon-trash tools delete',
                'data-remove': curID
            }).appendTo($tool_box);

            //Add Resize handle
            // var $tool_box = $('<div/>', {
            //     class: 'ui-resizable-handle ui-resizable-se icon-resize-full resize-handle'
            // }).appendTo($this.parent());

            $("div.dynCreated").each(function() {
                var curID = $(this).attr('id');
                try{
                    CKEDITOR.inline(curID);
                }
                catch(e){}
            });

            //initiateEvents(e);
            //e.stopPropagation();
        }
    });

    function initiateEvents(e) {
        //console.log($(e.currentTarget));
        var $this = $(event.target).parent(),
            curID = $this.attr('id');
        //console.log(curID);
        //Make element as content editable and give it focus
        $('#' + curID).attr('contenteditable', 'true');
        $('#' + curID).focus();
        //console.log("Current element is =>"+curID)
        //Set draggable event
        $("#" + curID).parent().draggable({
            handle: ".handle"
        });

        //Check and bind ckeditor instance
        // if (CKEDITOR.instances[curID]) {
        //     console.log("Inside adding ckeditor ==> "+curID);
        //     try {
        //         CKEDITOR.destroy(CKEDITOR.instances[curID]);
        //     } catch (e) {}

        // } else {
        //     CKEDITOR.inline(curID);
        // }

        // $("div.dynCreated").each(function() {
        //     try{
        //         CKEDITOR.inline(curID);
        //     }
        //     catch(e){}
        // });
        
        //Resize the current element
        $("#" + curID).parent().resizable({
            handles: {
                'se': '.resize-handle'
            }
        });

        //Set delete event
        $("a.delete").click(function (e) {
            var $deleteClick = $(e.currentTarget),
                curRemoveID = $deleteClick.attr('data-remove');
            alert('We want to remove :' + curRemoveID);
        });        
    }

    function clearPreviousInstance(){
        //  $('.dynCreated').removeAttr('contenteditable');
        //  $('div.tool-box').remove();
         $("div.dynCreated").each(function() {
            //console.log($(this).attr('id'));
            // var curID = $(this).attr('id');
            // try {
            //     CKEDITOR.destroy(CKEDITOR.instances[curID]);
            // } catch (e) {}
            /*
            if (CKEDITOR.instances[curID]) {
                console.log("Inside remove ckeditor ==> " + curID);
                try {
                    CKEDITOR.destroy(CKEDITOR.instances[curID]);
                } catch (e) {}
            }
            */
         });
    }


    //remove elements when clicked outside of the elements
    $("div.dynCreated").blur(function (e) {
        //console.log($(e)[0].currentTarget);
        //var $this = $(e)[0].currentTarget;
        //console.log($this);
        //curID = $this.attr('id');
        //console.log(curID);
        setTimeout(function () {
            // var $this = $(e)[0].currentTarget,
            //     curID = $this.attr('id');
            // console.log(curID);
            // //console.log(curID);
            // $('.dynCreated').removeAttr('contenteditable');
            // $('div.tool-box').remove();
            // if (CKEDITOR.instances[curID]) {
            //     // console.log("Inside remove ckeditor");
            //     try {
            //         CKEDITOR.destroy(CKEDITOR.instances[curID]);
            //     } catch (e) {}
            // }
            // try {
            //     $('#' + curID).parent().resizable("destroy");
            // } catch (err) {}
        }, 100);
        //e.stopPropagation();
    });
}); 