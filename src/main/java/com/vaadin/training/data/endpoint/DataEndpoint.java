package com.vaadin.training.data.endpoint;

import com.vaadin.flow.server.auth.AnonymousAllowed;

import com.vaadin.training.data.service.ValueService;
import dev.hilla.Endpoint;

@Endpoint
@AnonymousAllowed
public class DataEndpoint {

    private final ValueService valueService;

    public DataEndpoint(ValueService valueService) {
        this.valueService = valueService;
    }

    public String getValue() {
        return valueService.getValue();
    }

    public void updateValue(String something) {
        System.out.println(something);
    }

}
