class Animal:
    def __init__(self,name,age,species):
        self.name=name
        self.age=age
        self.species=species

    def move(self):
        return f"{self.name} is moving.."
    
    def get_info(self):
        return f"{self.name} is a {self.age} year-old {self.species}."
    
    def __str__(self):
        return f"Animal Object: {self.name}"
    

class Dog(Animal):
    def __init__(self, name, age,breed):
        super().__init__(name,age,"Dog")
        self.breed=breed

    def move(self):
        return f"Dog {self.name} the {self.breed} is running.."
    
    def speak(self):
        return "Woof,woof"
    

class Cat(Animal):
    def __init__(self, name, age):
        super().__init__(name,age ,"Cat")

    def move(self):
        return f"{self.name} is moving in the house"

    def speak(self):
        return "Meow,Meoow!/!"