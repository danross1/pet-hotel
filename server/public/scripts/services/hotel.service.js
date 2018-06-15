app.service('HotelService', ['$http', function($http){
    let sv = this;
    sv.owners = {list: []};
    sv.pets = {list: []};

    sv.getOwners = function(){
        return $http({
            method: 'GET',
            url: '/owner'
        }).then(function(response){
            console.log('response from GET owners:', response.data);
            sv.owners.list = response.data;
        })
    };

    sv.getPets = function(){
        return $http({
            method: 'GET',
            url: '/pet'
        }).then(function(response){
            console.log('response from GET pets:', response.data);
            sv.pets.list = response.data;
        })
    };

    sv.addPet = function(dataToSend){
        return $http({
            method: 'POST',
            url: '/pet',
            data: dataToSend
        }).then(function(response){
            console.log('back from POST pet:', response.data);
            
        })
    };

    sv.deletePet = function(pet){
        console.log('pet.id:', pet.id);
        
        return $http({
            method: 'DELETE',
            url: '/pet/' + pet.id
        }).then(function(response){
            console.log('back from DELETE pet:', response.data);
        }).catch(function(error){
            console.log('err:', error);
            
        })
    }
}]);