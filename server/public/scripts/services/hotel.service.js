app.service('HotelService', ['$http', function($http){
    let sv = this;
    sv.owners = {list: [] }

    sv.getOwners = function(){
        return $http({
            method: 'GET',
            url: '/owner'
        }).then(function(response){
            console.log('response from GET owners:', response.data);
            sv.owners.list = response.data;
        })
    }

    sv.getOwners();
}]);