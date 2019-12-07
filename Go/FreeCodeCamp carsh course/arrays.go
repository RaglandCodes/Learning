package main

import (
	"fmt"
)

func main() {
	/*
	   Array can only store 1 type of data
	   When arrays are compied, values are copied and not just the reference
	*/

	grades := [3]int{98, 76, 54}

	anotherArrayInitialisation := [...]int{1, 2, 3, 4, 5, 6, 7, 8, 99}

	// [...] tells Go to make array as big as needed

	var names [3]string

	fmt.Printf("Grades : %v\n\n", grades)                                         ///Grades : [98 76 54]
	fmt.Printf("anotherArrayInitialisation : %v\n\n", anotherArrayInitialisation) // anotherArrayInitialisation : [1 2 3 4 5 6 7 8 99]
	fmt.Printf("names : %v\n\n", names)                                           //names : [  ]

	names[0] = "Ragland"
	names[2] = "Ragland"

	fmt.Printf("names : %v\n\n", names)           // names : [Ragland  Ragland]
	fmt.Printf("len(names) : %v\n\n", len(names)) // len(names) : 3

	a := [...]int{1, 2, 3, 4, 5, 6, 7}
	b := &a //Pointers; b is poiting to a

	b[1] = 77

	fmt.Printf("a =  %v\n\n", a) //a =  [1 77 3 4 5 6 7]
	fmt.Printf("b =  %v\n\n", b) // b =  &[1 77 3 4 5 6 7]

	/*
	   Slice.

	   Slices are naturally reference types
	   First number is inclusive, second is exclusive
	   Slicing ops can work on arrays and slice
	   You put ... dots after the slice for spreading

	*/

	s := []int{3, 44, 555}

	fmt.Printf("s =  %v\n\n", s)           // s =  [3 44 555]
	fmt.Printf("len(s) =  %v\n\n", len(s)) // len(s) =  3
	fmt.Printf("cap(s) =  %v\n\n", cap(s)) // cap(s) =  3

	m := make([]int, 3)       //[0 0 0]; len = cap = 3
	mh := make([]int, 3, 100) //[0 0 0];len = 3; cap = 100

	fmt.Printf("m =  %v\n\n", m)
	fmt.Printf("mh =  %v\n\n", mh)

}
