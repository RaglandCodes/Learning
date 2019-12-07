package main

import "fmt"

func main() {
	// switch case

	name := "Ragland"
	// no need of break
	switch name {
	case "Ragland":
		fmt.Println("Found")
	case "Raaggllaanndd":
		fmt.Println("No fall through")
	}
}
