import { User } from "./User";
import { Company } from "./Company";

const user = new User();
console.log(user.location);

const company = new Company();
console.log(company);

new google.maps.Map(document.getElementById("map"), {
  zoom: 1,
  center: {
    lat: user.location.lat,
    lng: user.location.lng
  },
  backgroundColor: "#000"
});
