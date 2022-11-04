import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userid:number;
  user:User= new User();
 

  constructor(private userService: UserService, 
    private route:ActivatedRoute,
    private router:Router ) { }

  ngOnInit(): void {
    this.userid=this.route.snapshot.params['userid'];
    this.userService.getUserById(this.userid).subscribe( data => {
    this.user=data;
    },error => console.log(error))
    };
  onSubmit(){      
    //connecting the angular with the add user 
    this.userService.updateUser(this.userid,this.user).subscribe(data =>{
      this.gotoUserList();
      },error => console.log(error));
      }
  gotoUserList(){
    this.router.navigate(['/user'])
      }
     
  }
  
 