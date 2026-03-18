from models import Animal,Dog,Cat


def main():

    animal = Animal("Kesha",2,"Bird")
    myDog = Dog("Layka",4,"Golden Retriever")
    my_cat = Cat("Markiza",3)

    my_animals = [animal,my_cat,myDog]

    for i in my_animals:
        print(i)
        print(i.get_info())
        print(i.move())
        if isinstance(i, Dog):
            print(f"Sound: {i.make_sound()}")
        elif isinstance(i, Cat):
            print(f"Sound: {i.speak()}")


if __name__ == "__main__":
    main()
