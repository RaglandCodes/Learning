package main

import (
	"database/sql"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

func dataBaseSQL() {
	db, err := sql.Open("mysql", "ragland:adminadmin@/learn_gorm")
	if err != nil {
		panic(err)
	}
	fmt.Println(db)
}

func dataBaseGORM() {
	fmt.Println("IN daB G")
	type User struct {
		gorm.Model
		Name string
		Age  uint
	}

	db, err := gorm.Open("mysql", "ragland:adminadmin@/learn_gorm?charset=utf8&parseTime=True&loc=Local")
	if err != nil {
		panic(err)
	}
	//db.AutoMigrate(&User{})
	// ^ Create table

	//db.Create(&User{Name: "Ragland", Age: 20})
	// ^ Update users Users

	var selectedUser User
	db.First(&selectedUser, "Name = ?", "Ragland")
	db.Model(&selectedUser).Update("Age", 21)

	defer db.Close()
}

func main() {
	fmt.Println("Hello world")

	router := gin.Default()

	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"ping": "pong",
			"oof":  "bar"})
	})

	router.GET("/hello", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"ping": "pong",
			"00f":  ".🐶."})
	})

	router.GET("/db", func(c *gin.Context) {
		//dataBaseSQL()

		dataBaseGORM()
		c.String(http.StatusOK, "message")
	})

	// Serving static files
	router.StaticFile("/README", "./README.md")
	router.Run(":5656")
	// listen and serve on 8080 when nothing is passed
}
