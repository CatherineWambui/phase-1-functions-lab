// Code your solution in this file!
let hq = 42;
function distanceFromHqInBlocks(location,){
    if(hq>location){
        return hq-location
    }else if(hq<location){
        return location-hq
    }
    
}
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) *264;
 
 }
 
 console.log(distanceFromHqInFeet());
 
 
 function distanceTravelledInFeet(start, destination) {
     //returns the number of feet traveled
     if (start<destination) {
         return (destination-start) * 264;
     }else if (start>destination) {
         return (start-destination) * 264;
     }
   }
 
   console.log(distanceTravelledInFeet(43,48))
 
   //calculatesFarePrice
 
   function calculatesFarePrice(start,destination) {
     let distance = distanceTravelledInFeet(start, destination);
     if (distance<= 400) {
         return 0;
     }else if (distance > 400 && distance < 2000) {
         return 2.56;
     }else if (distance > 2000 && distance <= 2500) {
         return 25
     }else if (distance > 2500) {
         return "cannot travel that far"
     }
 }
 


