export interface NameCard {
  fullName: string;
  designation: string;
  contactDetails: ContactDetails;
}

export interface ContactDetails {
  phoneNumber: string;
  email: string;
  location: string;
  social: Social[];
}

export interface Social {
  socialName: string;
  socialLink: string;
}

export interface Experience {
  companyName: string;
  designation: string;
  period: Period;
  workSummary: WorkSummary[];
}

export interface Period {
  startDate: string;
  endDate: string;
}

export interface WorkSummary {
  projectName: string;
  duties: string[];
}

export interface Education {
  instituteName: string;
  courseName: string;
  duration: string;
  additionalInformation: string[];
}

export interface Resume {
  nameCard?: NameCard;
  profileSummary?: string[];
  experience?: Experience[];
  education?: Education[];
  skills?: string[];
}