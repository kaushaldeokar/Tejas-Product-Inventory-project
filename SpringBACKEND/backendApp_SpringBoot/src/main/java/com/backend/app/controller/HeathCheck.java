package com.backend.app.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HeathCheck {

    @GetMapping("/heath_check")
    public String health_check(){
        return "OK";
    }



}
