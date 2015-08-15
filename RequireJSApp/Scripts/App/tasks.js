define(["jquery", "taskRenderer", "taskData"], function ($, taskRenderer, taskData) {

    function add() {
        taskRenderer.new();
    }

    function remove(clickEvent) {
        var taskElement = clickEvent.target;
        $(taskElement).closest(".task").remove();
    }

    function clear() {
        taskData.clear();
        render();
    }

    function save() {
        var tasks = [];
        $("#task-list .task").each(function (index, task) {
            var $task = $(task);
            tasks.push({
                complete: $task.find(".complete").prop('checked'),
                description: $task.find(".description").val()
            });
        });

        taskData.save(tasks);
    }

    function cancel() {
        render();
    }

    function render() {
        taskRenderer.render(taskData.load());
    }

    return {
        add: add,
        render: render,
        clear: clear,
        save: save,
        cancel: cancel,
        remove: remove
    };
});
