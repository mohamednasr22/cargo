export class Shipment {
  shipment_id: number;
  user_id:number;
  shipper_id: number;
  receiver_id: number;
  shipper_name?: string;
  receiver_name?: string;
  destination_name?: string;
  title: number;
  akey: number;
  date: string;
  warehouse_id?: number;
  packages?:any;
  container_type_id: number;
  destination_id: number;
  shipment_status_id: number;
}
