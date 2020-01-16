import {Location} from './location';
import {Skill} from './skill';
import {Company} from './company';

export interface Job {
  jobId: number;
  title: string;
  description: string;
  location: Location;
  jobSkillSet: Skill[];
  postDate: string;
  companiesJob: Company;
}
