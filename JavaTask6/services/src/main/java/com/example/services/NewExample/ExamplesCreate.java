package com.example.services.NewExample;

import java.util.ArrayList;
import java.util.List;

public class ExamplesCreate {
    public static List<String> createList(Integer count){
        String[] arr={"*","+","-","/"};
        List<String> arrEnd = new ArrayList<>();
        for(int i = 0; i <count; i++){
            arrEnd.add(String.valueOf((Math.random() * 10)) + arr[(int) (Math.random() * (4-1) + 1)] + String.valueOf((Math.random() * 10)));
        }

        return arrEnd;
    }
}

