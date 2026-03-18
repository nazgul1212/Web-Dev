def double_char(str):
    result = ""
    for char in str:
        result += char * 2
    return result

print(double_char('The'))   
print(double_char('AAbb'))  
print(double_char('Hi-There'))