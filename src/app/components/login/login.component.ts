import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".admin-login-form").hide();
    $(".professor-login-form").hide();
    $("#userbtn").css("border", "0");
    $("#professorbtn").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("border-left", "1.5px solid rgb(6, 50, 53)").css("opacity", "0.3");;
    $("#adminbtn").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("opacity", "0.3");

    $(".userlogin").click(function(){
      $(".user-login-form").hide();
      $(".admin-login-form").show();
    });

    $("#userbtn").click(function(){
      $(".user-login-form").show();
      $(".admin-login-form").hide();
      $(".professor-login-form").hide();
      $("#userbtn").css("border", "0").css("opacity", "1");
      $("#adminbtn").css("border", "0").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("opacity", "1").css("opacity", "0.3");
      $("#professorbtn").css("border", "0").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("border-left", "1.5px solid rgb(6, 50, 53)").css("opacity", "1").css("opacity", "0.3");
    });

    $("#professorbtn").click(function(){
      $(".user-login-form").hide();
      $(".admin-login-form").hide();
      $(".professor-login-form").show();
      $("#userbtn").css("border", "0").css("border-right", "1.5px solid rgb(6, 50, 53)").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("opacity", "0.3");
      $("#adminbtn").css("border", "0").css("border-left", "1.5px solid rgb(6, 50, 53)").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("opacity", "0.3");
      $("#professorbtn").css("border", "0").css("opacity", "1");
    });

    $("#adminbtn").click(function(){
      $(".user-login-form").hide();
      $(".admin-login-form").show();
      $(".professor-login-form").hide();
      $("#userbtn").css("border", "0").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("opacity", "0.3");
      $("#adminbtn").css("border", "0").css("opacity", "1");
      $("#professorbtn").css("border", "0").css("border-right", "1.5px solid rgb(6, 50, 53)").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("opacity", "0.3");;
    });
    
    $(".adminlogin").click(function(){
      $(".user-login-form").show();
      $(".admin-login-form").hide();
    });

  }

}
