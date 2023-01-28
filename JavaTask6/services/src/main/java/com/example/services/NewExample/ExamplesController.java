package com.example.services.NewExample;

import java.util.List;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/math")
public class ExamplesController {

    @GetMapping("/expamples/{count}")
    public List<String> getExpamples(@PathVariable(value="count") Integer count) {
        return ExamplesCreate.createList(count);
    }



}
