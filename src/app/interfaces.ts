import { ModuleWithProviders } from "@angular/core";

export interface Tickets{
    id:number;
    ticket_type:string; 
    ticket_issue_date:string;
    ticket_resolution_proposed_date:string;
    ticket_resolved_date:string;
    ticket_resolution_response:string;
    ticket_re_action_reason:string;
    ticket_status:string;
    chat:string;
}

export interface Problems{
     id:number;
     problems:string;
     solutions:string;
     type:string;
}