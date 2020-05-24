var main = angular.module("main", ['ui.select']);
            
            main.controller("mainController", function($scope) {
            
            
                $scope.topics = 
                    [
                        {id:1, topic_name:'Andhra Pradesh', parent_topic_name:'INDIA'},
                        {id:2, topic_name:'Telangana', parent_topic_name:'INDIA'},
                        {id:3, topic_name:'Karnataka', parent_topic_name:'INDIA'},
                        {id:4, topic_name:'Colorado', parent_topic_name:'AMERICA'},
                        {id:5, topic_name:'Texas', parent_topic_name:'AMERICA'},
                    ];
            
            
            
            });
