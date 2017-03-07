package com.example.repository;

import com.example.model.Board;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by sshkim on 2017. 3. 7..
 */
public interface BoardRepository extends CrudRepository<Board, Long> {
}
