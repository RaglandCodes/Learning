'''

This is done by following these tutorials
https://www.youtube.com/watch?v=wfcWRAxRVBA
https://www.youtube.com/watch?v=WOwi0h_-dfA

'''
class Robot:

    def __init__(self, name, colour, weight):   # Constructor
        self.name = name
        self.colour = colour
        self.weight = weight

    def intoduce_self(self):
        print("My name is " + self.name)

r1 = Robot("Tom", "red", 30)
r2 = Robot("Jerry", "Blue", 44)

class Person:
    def __init__(self, name, person, is_sitting):
        self.name = name 
        self.person = person 
        self.is_sitting = is_sitting

        def sit_down(self):
            self.is_sitting = True
        
        def stand_up(self):
            self.is_sitting = False


p1 = Person("John", "Calm", False)
p2 = Person("Doe", "Focused", True)

p1.robot_owned = r2
p2.robot_owned = r1

p2.robot_owned.intoduce_self()