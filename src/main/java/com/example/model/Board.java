package com.example.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by sshkim on 2017. 3. 7..
 */
@Data
@Entity
public class Board {
    private @Id @GeneratedValue Long id;
    private String title;

    private Board(){}

    public Board(String title){
        this.title = title;
    }
}
