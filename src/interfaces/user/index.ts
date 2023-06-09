import { WaiterInterface } from 'interfaces/waiter';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;

  waiter: WaiterInterface[];
}
