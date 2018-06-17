app.controller('OwnerController', ['HotelService', function(HotelService){
    let self = this;

    self.getOwners = function(){
        HotelService.getOwners()
            .then(function(){
                self.owners = HotelService.owners.list;
            })
    }

    self.addOwner = function(){
        let dataToSend = {
            name: self.ownerName
        };
        HotelService.addOwner(dataToSend)
            .then(function(){
                self.clearInputs();
                HotelService.getOwners().then(function(){
                    self.owners = HotelService.owners.list;
                    console.log('OWNER CONTROLLER owners:', self.owners);
                    
                })
            })
    };

    self.deleteOwner = function(owner){
        HotelService.deleteOwner(owner).then(function(){
            self.getOwners();
        })
    }

    self.clearInputs = function(){
        self.ownerName = '';
    }

    self.getOwners();
}]);