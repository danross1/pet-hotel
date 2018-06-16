app.controller('DashboardController', ['HotelService', function(HotelService){
    let self = this;
    
    HotelService.getOwnerNames().then(function(){
        self.ownerNames = HotelService.ownerNames.list;
        console.log(self.ownerNames);
        
    });

    self.getPets = function(){
        HotelService.getPets()
            .then(function(){
                self.pets = HotelService.pets.list;
            })
    }

    self.addPet = function(){
        let dataToSend = {
            name: self.petNameIn,
            breed: self.petBreedIn,
            color: self.petColorIn,
            owner_id: self.ownerIn
        };
        HotelService.addPet(dataToSend).then(function(){
            self.getPets();
        })
    }

    self.deletePet = function(pet){
        HotelService.deletePet(pet).then(function(){
            self.getPets();
        })
    }

    self.changeStatus = function(pet){
        console.log('pet:', pet);
        
        HotelService.changeStatus(pet).then(function(){
            self.getPets();
        })
    }

    // self.editPet = function(pet){
    //    HotelService.editPet(pet)
        
    // }

    self.getPets();
    
}]);