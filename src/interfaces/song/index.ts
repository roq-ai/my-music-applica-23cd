import { ProviderInterface } from 'interfaces/provider';
import { GetQueryInterface } from 'interfaces';

export interface SongInterface {
  id?: string;
  title: string;
  artist: string;
  release_date: any;
  link: string;
  provider_id?: string;
  created_at?: any;
  updated_at?: any;

  provider?: ProviderInterface;
  _count?: {};
}

export interface SongGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  artist?: string;
  link?: string;
  provider_id?: string;
}
