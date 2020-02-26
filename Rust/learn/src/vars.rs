pub fn run(){
    let name="Ragland";

    let mut age = 37;
    // ^ mutable; Variables are immutable by dafult
    // Must say type in const

    let (my_name, my_age) = ("Ragland", 20);

    println!("age: {}", my_age)
    println!("name: {}", my_name)
}