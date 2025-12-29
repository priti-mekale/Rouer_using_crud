import { Injectable } from '@angular/core';
import { IFair } from '../model/fair';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FairsService {
fairsArray: IFair[] = [
  {
    id: "1",
    name: "ISS Washington DC Fair",
    startDate: new Date(1675922400 * 1000),
    endDate: new Date(1676181600 * 1000),
    startTime: "8:00 AM",
    endTime: "12:00 PM",
    timezone: "Eastern Standard Time",
    type: "InPerson",
    status: "published",

    location: {
      address1: "Grand Hyatt Washington",
      address2: "1000 H Street NW",
      city: "Washington D.C.",
      state: "Washington D.C.",
      country: "United States",
      zip: "20001"
    },

    stats: {
      usersRegistered: 0,
      schoolsRegistered: 50,
      isCandidateRegistered: false
    },

    visibility: {
      showUsersToCandidate: false,
      showUsersToSchools: false,
      showSchoolsToCandidate: true,
      showSchoolsToSchools: false
    },

    bannerUrl: "https://plus.unsplash.com/premium_photo-1680836316227-ef17dbbcfb27",

    description: {
      candidate: "We are excited to welcome you to Washington DC...",
      school: "We are excited to welcome you to Washington DC..."
    }
  },

  {
    id: "2",
    name: "ISS Atlanta Fair",
    startDate: new Date(1670652000 * 1000),
    endDate: new Date(1670738400 * 1000),
    startTime: "4:00 PM",
    endTime: "6:00 PM",
    timezone: "Eastern Standard Time",
    type: "InPerson",
    status: "published",

    location: {
      address1: "Atlanta International School",
      address2: "2890 North Fulton Drive",
      city: "Atlanta",
      state: "Georgia",
      country: "United States",
      zip: "30305"
    },

    stats: {
      usersRegistered: 0,
      schoolsRegistered: 32,
      isCandidateRegistered: false
    },

    visibility: {
      showUsersToCandidate: false,
      showUsersToSchools: false,
      showSchoolsToCandidate: true,
      showSchoolsToSchools: false
    },

    bannerUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",

    description: {
      candidate: "Join us in charming Atlanta...",
      school: "Join us in charming Atlanta..."
    }
  },

  {
    id: "3",
    name: "ISS New York Fair",
    startDate: new Date(),
    endDate: new Date(),
    startTime: "9:00 AM",
    endTime: "1:00 PM",
    timezone: "Eastern Standard Time",
    type: "InPerson",
    status: "published",

    location: {
      address1: "NYC Convention Center",
      address2: "123 Manhattan Ave",
      city: "New York",
      state: "New York",
      country: "United States",
      zip: "10001"
    },

    stats: {
      usersRegistered: 10,
      schoolsRegistered: 40,
      isCandidateRegistered: false
    },

    visibility: {
      showUsersToCandidate: true,
      showUsersToSchools: false,
      showSchoolsToCandidate: true,
      showSchoolsToSchools: false
    },

    bannerUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",

    description: {
      candidate: "Meet top schools in NYC.",
      school: "Meet students in NYC."
    }
  },

  {
    id: "4",
    name: "ISS Chicago Fair",
    startDate: new Date(),
    endDate: new Date(),
    startTime: "10:00 AM",
    endTime: "2:00 PM",
    timezone: "Central Time",
    type: "InPerson",
    status: "published",

    location: {
      address1: "Chicago Center",
      address2: "200 Lake Shore Dr",
      city: "Chicago",
      state: "Illinois",
      country: "United States",
      zip: "60601"
    },

    stats: {
      usersRegistered: 15,
      schoolsRegistered: 28,
      isCandidateRegistered: false
    },

    visibility: {
      showUsersToCandidate: true,
      showUsersToSchools: false,
      showSchoolsToCandidate: true,
      showSchoolsToSchools: false
    },

    bannerUrl: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",

    description: {
      candidate: "Explore opportunities in Chicago.",
      school: "Connect with candidates in Chicago."
    }
  },

]



  constructor() { 


  }

  fetchFairs():Observable<IFair[]>{
  return of(this.fairsArray)
}

getFair(id:string):Observable<IFair>{
  return of(this.fairsArray.find(f=>f.id===id) as IFair)
}
}
