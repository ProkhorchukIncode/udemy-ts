import { User } from "./User";
import { Company } from "./Company";


export interface IMappable {
  location: {
    lat: number;
    lng: number;
  }
  color: string;
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mapDivId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(mapDivId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      }
    })
  }

  addMarker(value: IMappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: value.location.lat,
        lng: value.location.lng,
      }
    })
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: value.markerContent()
      })

      infoWindow.open(this.googleMap, marker)
    })
  }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     }
  //   })
  // }
}