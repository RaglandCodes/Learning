CREATE TABLE posts
(
    post VARCHAR(225),
    postID int,
    userID int,
    PRIMARY KEY (postID),
    FOREIGN KEY (userID) REFERENCES users(ID)
);