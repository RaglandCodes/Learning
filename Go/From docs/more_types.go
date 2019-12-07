//https://tour.golang.org/moretypes/6

package main

import "fmt"

type Vertex struct {
	X, Y int
}

/* Or
type Vertex struct {
	X int
	Y int
}
*/

func main() {

	v := Vertex{1, 2}
	fmt.Println(v)

	//Struct fields are accessued using dot
	fmt.Println(v.X)

	/*

		Array has fixed size. Slices are dynamically sized.

		Slices don't store data. Changing slice elements change the underlinh array
		and other slices depending on that array

		Dynamically-sized array are made by making  a slice using the make function

	*/
	primes := [6]int{2, 3, 5, 7, 11, 13}

	var s []int = primes[1:4] //[3 5 7]
	fmt.Println("s=", s)
	dynSizeArray := make([]int, 0, 5) // len=0, cap=5
	dynSizeArray = append(dynSizeArray, 2, 22, 222, 33)

	for i, v := range dynSizeArray {

		/*
			for i, _ := range dynSizeArray	<== Skip value
			for _, value := range dynSizeArray
			for i := range dynSizeArray  <== Skip value

		*/
		fmt.Println("i = ", i, "; v = ", v)
		/*
			i =  0 ; v =  2
			i =  1 ; v =  22
			i =  2 ; v =  222
			i =  3 ; v =  33

		*/
	}

}
