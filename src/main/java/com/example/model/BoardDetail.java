package com.example.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class BoardDetail {
    private @Id @GeneratedValue Long id;
    private String memo;
    private String writer;

    @OneToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "board_id")
    private Board board;

    private BoardDetail() {
    }

    public BoardDetail(String memo, String writer) {
        this.memo = memo;
        this.writer = writer;
    }

}
