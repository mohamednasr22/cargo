import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss']
})
export class ApproveComponent implements OnInit {

  private sub: any;

  approved = 0;

  submitted = false;

  baseurl:string = environment.assetsPrefix;

  constructor(private router: Router , private route: ActivatedRoute , private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      let codeid = params['id'];
      if(codeid){
        this.approveUser(codeid);
      } else {
        this.router.navigate(["/"]);
      }
    });
  }

  approveUser(_code){
    let formData:FormData = new FormData();

    if(_code){
      formData.append('code',_code);
    }

    this.auth.approveUser(formData).subscribe(data => {
      this.submitted = true;
      if(data){
        if(data.error){
          this.approved = 2;
        } else if(data.success){
          this.approved = 1;
        }
      }
    }, error => {
      this.approved = 2;
      this.submitted = true;

    });
  }

}
