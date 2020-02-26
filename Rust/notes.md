
# Commands

``` 
rustup --version
rustup update
```


Build for production `cargo build --relase`

Tpes must be explicitly defined for const.

[Brad Traversy tutorial](https://github.com/bradtraversy/rust_sandbox)


## [Book notes](https://doc.rust-lang.org/book/ch01-03-hello-cargo.html)


### Chapter 1

People using Rust are called Rustaceans.

### Chapter 2

A crate is a collection of Rust code source files.

### Chapter 3

Constants can't be computed at run time.

Shadowing can be used to change the type of the value. 

Every element in an array must have the same type. Elements in a tuple can have varying types.

```
  let x: (i32, f64, u8) = (500, 6.4, 1); // tuple
  let a: [i32; 5] = [1, 2, 3, 4, 5];
  let a = [3; 5]; //[3, 3, 3, 3, 3]
```


Statements don't return a value while expressions do. Expressions don't include ending `;`s. Blocks of code evaluate to an expression. 

### Chapter 4

If we have an immutable reference to something, we cannot also take a mutable reference. 

String literals are slices.