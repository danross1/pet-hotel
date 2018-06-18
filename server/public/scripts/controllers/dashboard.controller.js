app.controller('DashboardController', ['HotelService', function(HotelService){
    let self = this;
    self.editMode = false;
    self.context = 'cute';
    
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
            owner_id: self.ownerIn,
            image: self.imageIn
        };
        HotelService.addPet(dataToSend).then(function(){
            self.clearInputs();
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

    self.editPet = function(){
        let petID = self.petToEdit;
        let dataToSend = {
            name: self.petNameEdit,
            breed: self.petBreedEdit,
            color: self.petColorEdit,
            owner_id: self.ownerEdit
        }
        console.log('petID:', petID);
        console.log('dataToSend:', dataToSend);
        if(!dataToSend.name && !dataToSend.breed && 
            !dataToSend.color && !dataToSend.owner_id){
            alert('Well you\'ve got to change something!');
            
        } else {
            self.toggleEditMode();
            HotelService.editPet(petID, dataToSend).then(function(){
                self.clearInputs();
                self.getPets();
            })
        }
    };

    self.toggleEditMode = function(){
        self.editMode = !self.editMode;
    }

    self.changeContext = function(){
        if(self.context == 'cute'){
            self.context = 'spoopy';
        } else {
            self.context = 'cute';
        }
        console.log('self.context:', self.context);
        
    }

    self.clearInputs = function(){
        self.petNameIn = '';
        self.petBreedIn = '';
        self.petColorIn = '';
        self.ownerIn = '';
        self.imageIn = '';
        self.petNameEdit = '';
        self.petBreedEdit = '';
        self.petColorEdit = '';
        self.ownerEdit = '';
    }

    self.getPets();
    
}]);