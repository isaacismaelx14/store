import axios from "axios";


export interface ISellerRequest {
  id: number;
  user_id: number;
  name: string; 
  description: string; 
  direction: string; 
  state?:string;
  admin_message?:string;
  created_date: string; 
}

export default class RequestsServices {
  private path = "http://localhost:3001/requests";
  private setHeader(token: string) {
    return { headers: { Authorization: `Bearer ${token}` } };
  }

  public async setSeller(token: string, seller: ISellerRequest): Promise<any> {
    const response = await axios.post( `${this.path}/seller`, seller, this.setHeader(token));
    return response.data;
  }

  public async getSellers(token:string): Promise<ISellerRequest[]>{
    const response = await axios.get(`${this.path}/seller`, this.setHeader(token))
    return response.data;
  }
  public async getSellerById(token:string, id:number): Promise<ISellerRequest[]>{
    const response = await axios.get(`${this.path}/seller/${id}`, this.setHeader(token))
    return response.data;
  }

  public async setSellerInObservation(token:string, id:number, message:string): Promise<ISellerRequest[]>{
    const response = await axios.patch(`${this.path}/seller/${id}`, {
      state:'Observation',
      admin_message:message
    },this.setHeader(token))
    return response.data;
  }

  public async setSellerInRefuse(token:string, id:number, message:string): Promise<ISellerRequest[]>{
    const response = await axios.patch(`${this.path}/seller/${id}`, {
      state:'Refuse',
      admin_message:message
    },this.setHeader(token))
    return response.data;
  }

  public async acceptSellerReq(token:string, id:number):Promise<any>{
    const response = await axios.post(`${this.path}/seller/accept/${id}`, {}, this.setHeader(token));
    return response.data;
  }
}
