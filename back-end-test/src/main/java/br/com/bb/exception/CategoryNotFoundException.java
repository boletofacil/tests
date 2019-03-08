package br.com.bb.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class CategoryNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 6804613737818561075L;

	public CategoryNotFoundException(String message) {
		super(message);
	}
	
}
