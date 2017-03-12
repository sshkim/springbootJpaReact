package com.example.model;

import lombok.Data;

import javax.persistence.*;

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
