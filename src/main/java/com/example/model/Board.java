package com.example.model;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by sshkim on 2017. 3. 7..
 */
@Data
@Entity
public class Board {
    private @Id @GeneratedValue Long id;
    private String title;

    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "boardDetail_id")
    private BoardDetail boardDetail;

    private Board() {
    }

    public Board(String title) {
        this.title = title;
    }
}
