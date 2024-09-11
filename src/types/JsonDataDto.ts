interface NameCard {
    fullName: string;
    designation: string;
    contactDetails: ContactDetails;
  }
  
  interface ContactDetails {
    phoneNumber: string;
    email: string;
    location: string;
    social: Social[];
  }
  
  interface Social {
    socialName: string;
    socialLink: string;
  }
  
  interface Experience {
    companyName: string;
    designation: string;
    period: Period;
    workSummary: WorkSummary[];
  }
  
  interface Period {
    startDate: string;
    endDate: string;
  }
  
  interface WorkSummary {
    projectName: string;
    duties: string[];
  }
  
  interface Education {
    instituteName: string;
    courseName: string;
    duration: string;
    additionalInformation: string[];
  }
  

export interface JsonDataDto {
    nameCard: NameCard;
    profileSummary: string[];
    experience: Experience[];
    education: Education[];
    skills: string[];
}