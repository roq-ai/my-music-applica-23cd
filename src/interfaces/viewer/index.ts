import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ViewerInterface {
  id?: string;
  name: string;
  email: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ViewerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  email?: string;
  user_id?: string;
}
