app.service('HotelService', ['$http', function($http){
    let sv = this;
    sv.owners = {list: []};
    sv.ownerNames = {list: []};
    sv.pets = {list: []};

    sv.getOwnerNames = function(){
        return $http({
            method: 'GET',
            url: '/owner/names'
        }).then(function(response){
            console.log('response from GET owners:', response.data);
            sv.ownerNames.list = response.data;
        }).catch(function(error){
            console.log('err:', error);
        })
    };
    
    sv.getOwners = function(){
        return $http({
            method: 'GET',
            url: '/owner'
        }).then(function(response){
            console.log('response from GET owners:', response.data);
            sv.owners.list = response.data;
        }).catch(function(error){
            console.log('err:', error);
        })
    };

    sv.addOwner = function(dataToSend){
        return $http({
            method: 'POST',
            url: '/owner',
            data: dataToSend
        }).then(function(response){
            console.log('response from POST owner:', response.data);
            
        }).catch(function(error){
            console.log('err:', error);
        })
    }

    sv.getPets = function(){
        return $http({
            method: 'GET',
            url: '/pet'
        }).then(function(response){
            console.log('response from GET pets:', response.data);
            sv.pets.list = response.data;
        }).catch(function(error){
            console.log('err:', error);
        })
    };

    sv.addPet = function(dataToSend){
        return $http({
            method: 'POST',
            url: '/pet',
            data: dataToSend
        }).then(function(response){
            console.log('back from POST pet:', response.data);
        }).catch(function(error){
            console.log('err:', error);
        })
    };

    sv.deletePet = function(pet){
        return $http({
            method: 'DELETE',
            url: '/pet/' + pet.id
        }).then(function(response){
            console.log('back from DELETE pet:', response.data);
        }).catch(function(error){
            console.log('err:', error);
        })
    }

    sv.deleteOwner = function(owner){
        return $http({
            method: 'DELETE',
            url: '/owner/' + owner.id
        }).then(function(response){
            console.log('back from DELETE pet:', response.data);
        }).catch(function(error){
            console.log('err:', error);
        })
    }
}]);