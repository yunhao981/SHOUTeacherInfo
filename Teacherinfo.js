var searchBox = new Vue({
    el:'#search-box',
    data: {
        message: 'input something here',
    }
})

var searchButton = new Vue({
    el:'#search-button',
    data: {
        department:'Not Found',
        telephone:'Not Found',
        phone:'Not Found',
        email:'Not Found',
        list:[]
    },
    methods: {
        search: function(){
            let vm = this;
            var requestURL = 'http://api.coursego.cn/getTeacherList.php';
            var request = new XMLHttpRequest();
            request.open('GET',requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function(){
                var teacherBase = request.response;
                vm.showTeacher(teacherBase,searchBox.message);
            }
        },
        lucky: function(){
            let vm = this;
            var requestURL = 'http://api.coursego.cn/getTeacherList.php';
            var request = new XMLHttpRequest();
            request.open('GET',requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function(){
                var teacherBase = request.response;
                vm.showLuckyTeacher(teacherBase);
            }
        },
        
        showTeacher(jsonObj,txt){
            for(var i = 0; i<jsonObj.length; i++){
                if(jsonObj[i].name == txt){
                    this.list = jsonObj[i];
                    break;
                }
            }
    
        },

        showLuckyTeacher(jsonObj){
            var i = Math.floor(Math.random() * 1000) % 1600;
            this.list = jsonObj[i];
        }
    }
})