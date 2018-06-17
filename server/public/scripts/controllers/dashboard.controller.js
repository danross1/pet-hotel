app.controller('DashboardController', ['HotelService', '$mdBottomSheet', '$mdDialog',
               function(HotelService, $mdBottomSheet, $mdDialog){
    let self = this;
    self.editMode = false;
    
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

    // self.openBottomSheet = function(pet){
    //     $mdBottomSheet.show({
    //         templateUrl: '/views/edit.html',
    //         controller: 'DashboardController as vm'
    //     }).then(function(){
    //         console.log('clicked out of bottom sheet');
            
    //     }).catch(function(){
    //         console.log('hit the escape');
            
    //     })
    // }

    // self.closeBottomSheet = function(){
    //     $mdBottomSheet.hide();
    // }

    // self.showEditDialog = function(pet){
    //     console.log('pet:', pet);
    //     $mdDialog.show({
    //         templateUrl: '/views/edit.html',
    //         controller: 'DashboardController as vm',
    //         locals: {petToEdit : pet},
    //         clickOutsideToClose: true
    //     })
    // }

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
            HotelService.editPet(petID, dataToSend).then(function(){
            self.getPets();
            })
        }
    };

    self.toggleEditMode = function(){
        self.editMode = !self.editMode;
    }

    self.getPets();
    
}]);