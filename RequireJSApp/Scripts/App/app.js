define(["jquery", "tasks"], function ($, tasks) {

    function _addTask() {
        tasks.add();
    }
    function _clearTasks() {
        tasks.clear();
    }
    function _saveTask() {
        tasks.save();
    }
    function _cancelTask() {
        tasks.cancel();
    }
    function _removeTask(clickEvent) {
        tasks.remove(clickEvent);
    }
    function _registerEventHandlers() {
        $("#new-task-button").on("click", _addTask);
        $("#delete-all-button").on("click", _clearTasks);
        $("#save-button").on("click", _saveTask);
        $("#cancel-button").on("click", _cancelTask);
        $("#task-list").on("click", ".delete-button", _removeTask);
    }

    function init() {
        _registerEventHandlers();
        tasks.render();
    }

    return {
        init: init
    };
});