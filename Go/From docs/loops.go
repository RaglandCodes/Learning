package main

import "fmt"

func main() {
	sum := 0
	// No () around the 3 components.

	//{} are always required
	for i := 0; i < 10; i++ {
		sum += i
		fmt.Println(sum)
	}

	//while loop

	n := 0
	for n < 10 {
		n++
		fmt.Println(n)
	}

}
