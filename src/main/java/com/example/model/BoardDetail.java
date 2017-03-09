package com.example.model;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by sshkim on 2017. 3. 7..
 */
@Data
@Entity
public class BoardDetail {
    private @Id @GeneratedValue Long id;
    private String memo;
    private String writer;

    private BoardDetail() {
    }

    public BoardDetail(String memo, String writer) {
        this.memo = memo;
        this.writer = writer;
    }

}
