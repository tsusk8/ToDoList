new Vue({
    el: "#app",
    data: {
        toDoList: [],
        inputTask: "",
        id: 1,
    },
    methods: {
        createList: function(){
            this.toDoList.push({id: this.id, title: this.inputTask});
            this.inputTask = "";
            this.id++;
        },
        deleteList: function(index){
            this.toDoList.splice(index, 1);
        },
    },
})