package com.jacobborden;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HealthCheckController {

    @RequestMapping("healthcheck")
    public String healthCheck(){
        return "All good!";
    }
}
