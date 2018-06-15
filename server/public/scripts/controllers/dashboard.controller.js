app.controller('DashboardController', ['HotelService', function(HotelService){
    let self = this;
    
    HotelService.getOwners().then(function(){
        self.owners = HotelService.owners.list;
        console.log(self.owners);
        
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
            color: self.petBreedIn,
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

    self.getPets();
    
}]);