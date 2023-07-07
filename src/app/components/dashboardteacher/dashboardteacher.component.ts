import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-dashboardteacher',
  templateUrl: './dashboardteacher.component.html',
  styleUrls: ['./dashboardteacher.component.css']
})
export class DashboardteacherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    $("#btn").click(function(){
      $(".sidebar").toggleClass("open");
      menuBtnChange();
    });
    
    $(".bx-search").click(function(){ 
      $(".sidebar").toggleClass("open");
      menuBtnChange(); 
    });
    
    function menuBtnChange() {
     if($(".sidebar").hasClass("open")){
      $("#btn").removeClass("fa-bars").addClass("fa-ellipsis-v");
     }else {
      $("#btn").removeClass("fa-ellipsis-v").addClass("fa-bars");
     }
    }
  }

}
