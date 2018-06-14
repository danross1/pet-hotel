app.controller('DashboardController', ['HotelService', function(HotelService){
    let self = this;
    
    HotelService.getOwners().then(function(){
        self.owners = HotelService.owners.list;
        console.log(self.owners);
        
    })
}]);