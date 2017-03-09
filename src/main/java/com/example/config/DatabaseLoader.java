package com.example.config;

import com.example.model.Board;
import com.example.model.BoardDetail;
import com.example.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

/**
 * Created by sshkim on 2017. 3. 7..
 */
@Component
public class DatabaseLoader implements CommandLineRunner {

    private final BoardRepository repository;

    @Autowired
    public DatabaseLoader(BoardRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        Board[] boards = new Board[10];
        Stream.iterate(1, n -> n + 1).limit(10).forEach(n -> {
                    Board tmp = new Board("Test_" + n);
                    BoardDetail boardDetail = new BoardDetail("Memo_" + n, "Tester");
                    tmp.setBoardDetail(boardDetail);
                    boards[n - 1] = this.repository.save(tmp);
                }
        );

    }
}
