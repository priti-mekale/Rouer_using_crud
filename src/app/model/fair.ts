export interface IFair {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  timezone: string;
  type: string;
  status: string;

  location: {
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    zip: string;
  };

  stats: {
    usersRegistered: number;
    schoolsRegistered: number;
    isCandidateRegistered: boolean;
  };

  visibility: {
    showUsersToCandidate: boolean;
    showUsersToSchools: boolean;
    showSchoolsToCandidate: boolean;
    showSchoolsToSchools: boolean;
  };

  bannerUrl: string;

  description: {
    candidate: string;
    school: string;
  };
}
